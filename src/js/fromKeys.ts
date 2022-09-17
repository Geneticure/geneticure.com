const fromKeysOptions = {
	assertAll: true as boolean,
} as const;

export function fromKeys<T>(
	keys: Array<string>,
	input: Record<string, T>,
	_options: typeof fromKeysOptions = fromKeysOptions,
) {
	const options = { ...fromKeysOptions, ..._options };

	if (options.assertAll) {
		const delimeter = `;`;
		const inputKeys = Object.keys(input).sort().join(delimeter);
		const outputKeys = keys.sort().join(delimeter);
		if (inputKeys !== outputKeys) {
			throw new Error(`Not all keys are used:\nInput keys: ${inputKeys}\nOutput keys: ${outputKeys}`);
		}
	}

	return keys.map((key) => {
		if (!input[key]) {
			throw new Error(`'${key}' is not a valid key.`);
		} else {
			return input[key];
		}
	});
}
