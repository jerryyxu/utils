const assert = require('assert');
const pickProps = require('../src/pickProps');

describe('pickProps', () => {
	const props = {
		a: 0,
		b: 'b',
		c: true,
		d: {},
	};

	it('default to pick nothing', () => {
		assert.deepEqual(pickProps(props), {});
	});

	it('should return new object', () => {
		assert.deepEqual(
			pickProps(props, () => true),
			props
		);
		assert.equal(pickProps(props, () => true) === props, false);
	});

	it('to be Array', () => {
		assert.deepEqual(pickProps(props, ['a', 'b']), { a: 0, b: 'b' });
	});

	it('excludeKeysOrFn has a higher priority than includeKeysOrFn', () => {
		assert.deepEqual(pickProps(props, ['a', 'b'], ['b']), { a: 0 });
	});

	it('to be Function', () => {
		assert.deepEqual(
			pickProps(
				props,
				k => ['a', 'b'].includes(k),
				k => ['b', 'c'].includes(k)
			),
			{ a: 0 }
		);
	});
});
