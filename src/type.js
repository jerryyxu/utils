function type(v) {
	return Object.prototype.toString.call(v).slice(8, -1);
}

// quick mode
// isNumber
// isDate
[
	'Number',
	'BigInt',
	'String',
	'Boolean',
	'Symbol',
	'Undefined',
	'Object',
	'Null',
	'Date',
	'RegExp',
	'Array',
	'Function',
].forEach(t => (type[`is${t}`] = v => type(v) === t));

module.exports = type;
