export class IsInViewport {
	static defaultOptions = {
		callback: null as (options: {
			$element: Element;
			isInViewport: boolean;
		}) => void,
		getElements: null as () => Array<Element>,
	} as const;

	observer: IntersectionObserver;

	constructor(options: Partial<typeof IsInViewport[`defaultOptions`]> = {}) {
		this.observer = new IntersectionObserver((entries) => {
			for (const entry of entries) {
				const $element = entry.target as HTMLElement;
				options.callback({
					$element,
					isInViewport: entry.isIntersecting,
				});
			}
		});

		const $elements = options.getElements();
		for (const $element of $elements) {
			this.observer.observe($element);
		}
	}
}

export function isInViewportSetup() {
	const ATTR__VIEWPORT_VISIBLE = `data-viewport-visible`;
	const $targets = Array.from(document.querySelectorAll(`[${ATTR__VIEWPORT_VISIBLE}]`));

	new IsInViewport({
		callback: (({ $element, isInViewport }) => {
			if (isInViewport) {
				$element.setAttribute(ATTR__VIEWPORT_VISIBLE, `true`);
			} else if ($element.hasAttribute(ATTR__VIEWPORT_VISIBLE)) {
				$element.setAttribute(ATTR__VIEWPORT_VISIBLE, `false`);
			}
		}),
		getElements: () => $targets,
	});
}
