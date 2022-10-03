export const KONAMI__EVENT = `konami`;

export const KonamiEvent = new Event(KONAMI__EVENT);

const sequence = [
	`ArrowUp`,
	`ArrowUp`,
	`ArrowDown`,
	`ArrowDown`,
	`ArrowLeft`,
	`ArrowRight`,
	`ArrowLeft`,
	`ArrowRight`,
	`b`,
	`a`,
];

export const state = {
	input: [],
};


function konamiListener(event: KeyboardEvent) {
	state.input.push(event.key);

	const inputString = state.input.join(`.`);
	const sequenceString = sequence.join(`.`);

	if (!sequenceString.startsWith(inputString)) {
		state.input = [];
		return;
	}

	if (sequenceString === inputString) {
		state.input = [];
		window.dispatchEvent(KonamiEvent);
	}
}

export function konamiSetup() {
	window.addEventListener(`keyup`, konamiListener);
}
