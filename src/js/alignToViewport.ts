export const ATTR__TARGET = `data-align-viewport`;

export function alignToViewportSetup() {
	const $targets = Array.from(document.querySelectorAll(`[${ATTR__TARGET}]`));

	const observer = new IntersectionObserver((entries) => {
		for (const entry of entries) {
			const $target = entry.target as HTMLElement;
			const targetRect = entry.boundingClientRect;
			const rootRect = entry.rootBounds;

			if (targetRect.left < rootRect.left) {
				$target.style.setProperty(`right`, null);
				$target.style.setProperty(`left`, `0`);
			}
			if (targetRect.right > rootRect.right) {
				$target.style.setProperty(`right`, `0`);
				$target.style.setProperty(`left`, null);
			}
		}
	}, {
		root: document.documentElement,
	});

	for (const $target of $targets) {
		observer.observe($target);
	}
}
