export const ATTR__INDEX = `data-toggle-index`;
export const ATTR__TARGET = `data-toggle-target`;
export const ATTR__TARGET__ISDEFAULT = `data-toggle-target-isdefault`;
export const ATTR__TRIGGER = `data-toggle-trigger`;
export const CLASS__ON = `toggle--on`;

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

export function toggleSetup($root: Element) {
	const $targets = [
		...($root.hasAttribute(ATTR__TARGET) ? [$root] : []),
		...Array.from($root.querySelectorAll(`[${ATTR__TARGET}]`)),
	] as Array<HTMLElement>;
	const $triggers = [
		...($root.hasAttribute(ATTR__TRIGGER) ? [$root] : []),
		...Array.from($root.querySelectorAll(`[${ATTR__TRIGGER}]`)),
	] as Array<HTMLElement>;

	for (const $target of $targets) {
		const toggleId = $target.getAttribute(ATTR__TARGET);
		if (!toggleId) {
			continue;
		}

		if (toggleId in state) {
			state[toggleId].indexMax += 1;
		} else {
			state[toggleId] = {
				index: 0,
				indexMax: 0,
			};
		}

		const targetIsDefault = $target.hasAttribute(ATTR__TARGET__ISDEFAULT);
		if (targetIsDefault) {
			const targetIndex = parseInt($target.getAttribute(ATTR__INDEX) ?? `0`);
			state[toggleId].index = targetIndex;
		}
	}

	for (const $trigger of $triggers) {
		$trigger.onclick = handleTrigger;
	}

	for (const toggleId in state) {
		const toggleState = state[toggleId];
		if (typeof toggleState.index !== `undefined`) {
			setActiveTarget(toggleId, `${toggleState.index}`);
		}
	}

	function handleTrigger(event: Event) {
		const $trigger = event.currentTarget as HTMLElement;
		const toggleId = $trigger.getAttribute(ATTR__TRIGGER);
		const targetIndex = $trigger.getAttribute(ATTR__INDEX);
		if (!toggleId || !targetIndex) {
			return;
		}
		setActiveTarget(toggleId, targetIndex);
	}

	function setActiveTarget(toggleId: string, input: string) {
		const currentIndex = state[toggleId].index;
		if (typeof currentIndex !== `number`) {
			return;
		}

		const indexIncrement = (input.match(/^(\+|-)/) || [])[1];
		let newIndex = parseInt(input);
		switch (indexIncrement) {
			case `+`:
			case `-`:
				newIndex = currentIndex + newIndex;
		}

		if (newIndex > state[toggleId].indexMax) {
			newIndex = 0;
		}

		if (newIndex < 0) {
			newIndex = state[toggleId].indexMax;
		}

		state[toggleId].index = newIndex;

		for (const $trigger of $triggers) {
			const triggerId = $trigger.getAttribute(ATTR__TRIGGER);
			const triggerIndex = $trigger.getAttribute(ATTR__INDEX);

			if (triggerId !== toggleId) {
				continue;
			}

			if (triggerIndex !== `${newIndex}`) {
				turnOff($trigger);
				continue;
			}

			turnOn($trigger);
		}

		for (const $target of $targets) {
			const targetToggleId = $target.getAttribute(ATTR__TARGET);
			const targetIndex = $target.getAttribute(ATTR__INDEX);

			if (targetToggleId !== toggleId) {
				continue;
			}

			if (targetIndex !== `${newIndex}`) {
				turnOff($target);
				continue;
			}

			turnOn($target);
		}

		// TODO3: Cache events to replay them on subscribe? Rxjs? :-(
		document.dispatchEvent(
			new CustomEvent(ToggleEvents.end, {
				detail: {
					id: toggleId,
					state: state[toggleId],
				},
			})
		);
	}
}

function turnOff($target: HTMLElement) {
	$target.classList.remove(CLASS__ON);
}

function turnOn($target: HTMLElement) {
	$target.classList.add(CLASS__ON);
}
