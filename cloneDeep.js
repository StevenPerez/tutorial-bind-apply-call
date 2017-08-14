module.exports = function cloneDeep(obj) {
	let clone, key, value;
	clone = Array.isArray(obj) ? [] : {};
	for (key in obj) {
		value = obj[key];
		clone[key] = (typeof value === "object") ? cloneDeep(value) : value;
	}
	return clone;
}

// Source: https://stackoverflow.com/a/34624648/6922052
