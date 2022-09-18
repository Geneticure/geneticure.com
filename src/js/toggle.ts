const ATTR__INDEX = `data-toggle-index`;
const ATTR__TARGET = `data-toggle-target`;
const ATTR__TARGET__ISDEFAULT = `data-toggle-target-isdefault`;
const ATTR__TRIGGER = `data-toggle-trigger`;
const CLASS__ON = `toggle--on`;

export interface ToggleState {
	index: number;
	indexMax: number;
}

export type ToggleId = string;

/**
 * A map of toggle-set IDs to that set's current state.
 * Toggle-set: A set of elements that can be toggled.
 * Trigger: Causes a toggle-set to be toggled.
 * Target: One item within the toggle-set.
 */
const state: Record<ToggleId, ToggleState> = {};

export enum ToggleEvents {
	end = `toggle-end`,
}

export interface ToggleEndEvent {
	id: ToggleId;
	state: ToggleState;
}

export function toggleSetup() {
	const $targets = Array.from(document.querySelectorAll(`[${ATTR__TARGET}]`)) as Array<HTMLElement>;
	const $triggers = Array.from(document.querySelectorAll(`[${ATTR__TRIGGER}]`)) as Array<HTMLElement>;

	for (const $target of $targets) {
		const targetId = $target.getAttribute(ATTR__TARGET);
		const targetIsDefault = $target.hasAttribute(ATTR__TARGET__ISDEFAULT);
		if (targetId in state) {
			state[targetId].indexMax += 1;
		} else {
			state[targetId] = {
				index: undefined,
				indexMax: 0,
			};
		}

		if (targetIsDefault) {
			const toggleIndex = parseInt($target.getAttribute(ATTR__INDEX));
			state[targetId].index = toggleIndex;
		}
	}

	for (const $trigger of $triggers) {
		$trigger.onclick = handleTrigger;
	}

	for (const id in state) {
		if (typeof state[id].index !== `undefined`) {
			setActiveTarget(id, `${state[id].index}`);
		}
	}

	function handleTrigger(event: Event) {
		const $trigger = event.currentTarget as HTMLElement;
		const targetId = $trigger.getAttribute(ATTR__TRIGGER);
		const targetIndex = $trigger.getAttribute(ATTR__INDEX);
		setActiveTarget(targetId, targetIndex);
	}

	function setActiveTarget(id: string, input: string) {
		const currentIndex = state[id].index;

		const indexIncrement = (input.match(/^(\+|-)/) || [])[1];
		let newIndex = parseInt(input);
		switch (indexIncrement) {
			case `+`:
			case `-`:
				newIndex = currentIndex + newIndex;
		}

		if (newIndex > state[id].indexMax) {
			newIndex = 0;
		}

		if (newIndex < 0) {
			newIndex = state[id].indexMax;
		}

		state[id].index = newIndex;

		for (const $trigger of $triggers) {
			const triggerId = $trigger.getAttribute(ATTR__TRIGGER);
			const triggerIndex = $trigger.getAttribute(ATTR__INDEX);

			if (triggerId !== id) {
				continue;
			}

			if (triggerIndex !== `${newIndex}`) {
				turnOff($trigger);
				continue;
			}

			turnOn($trigger);
		}

		for (const $target of $targets) {
			const targetId = $target.getAttribute(ATTR__TARGET);
			const targetIndex = $target.getAttribute(ATTR__INDEX);

			if (targetId !== id) {
				continue;
			}

			if (targetIndex !== `${newIndex}`) {
				turnOff($target);
				continue;
			}

			turnOn($target);
		}

		// TODO3: Cache events to replay them on subscribe? Rxjs? :-(
		document.dispatchEvent(new CustomEvent(ToggleEvents.end, { detail: { id, state: state[id] } }));
	}

	function turnOff($target: HTMLElement) {
		$target.classList.remove(CLASS__ON);
	}

	function turnOn($target: HTMLElement) {
		$target.classList.add(CLASS__ON);
	}
}
