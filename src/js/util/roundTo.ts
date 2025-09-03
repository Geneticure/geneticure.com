export function roundTo(input: number, places = 2) {
	const factor = Math.pow(10, places);
	return Math.round(input * factor) / factor;
}
