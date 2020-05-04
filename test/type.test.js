const type = require('../src/type');
const assert = require('assert');

describe('type', () => {
	const testCases = {
		Number: [
			37,
			3.14,
			Math.LN2,
			Infinity,
			NaN,
			Number('1'),
			Number('shoe'),
			new Number(1),
		],
		BigInt: [42n],
		String: [
			'',
			'bla',
			`template literal`,
			'1',
			String(1),
			new String('abc'),
		],
		Boolean: [true, false, Boolean(1), !!1, new Boolean(true)],
		Symbol: [Symbol(), Symbol('foo'), Symbol.iterator],
		Undefined: [undefined],
		Object: [{ a: 1 }],
		Null: [null],
		Date: [new Date()],
		RegExp: [/regex/, new RegExp('regex')],
		Array: [[1, 2, 4]],
		Function: [
			function () {},
			class C {},
			Math.sin,
			Object,
			Number,
			String,
			Boolean,
			Date,
		],
	};

	Object.keys(testCases).forEach(t => {
		it(t, () => {
			testCases[t].forEach(n => {
				assert.equal(type(n), t);
				assert.equal(type[`is${t}`](n), true);
			});
		});
	});
});
