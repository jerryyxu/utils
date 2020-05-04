const { isFunction } = require('./type');

module.exports = function pickProps(props, includeKeysOrFn, excludeKeysOrFn) {
	const [includes, excludes] = [includeKeysOrFn, excludeKeysOrFn].map(
		keysOrFn => key => {
			return isFunction(keysOrFn)
				? keysOrFn(key)
				: Array.isArray(keysOrFn)
				? keysOrFn.includes(key)
				: false;
		}
	);
	const result = {};

	for (let key in props) {
		if (includes(key) && !excludes(key)) {
			result[key] = props[key];
		}
	}

	return result;
};
