import { throttle } from 'src/js/timer';

export class IsInViewport {
	static defaultOptions = {
		callback: null as (options: {
			$element: Element;
			isInViewport: boolean;
		}) => void,
		eventNames: [`load`, `orientationChange`, `resize`, `scroll`] as const,
		getElements: null as () => Array<Element>,
		throttleMs: 200 as number,
	} as const;

	/**
	 * Note: Only tests vertically, not horizontally.
	 */
	// TODO3: Use IntersectionObserver
	static test($element: Element) {
		const boundaries = $element.getBoundingClientRect();
		const maxHeight = window.innerHeight;
		return (
			(boundaries.top >= 0 && boundaries.top < maxHeight) ||
			(boundaries.bottom >= 0 && boundaries.bottom < maxHeight) ||
			(maxHeight > boundaries.top && maxHeight < boundaries.bottom)
		);
	}

	test: (...args: Array<unknown>) => unknown;

	constructor(options: Partial<typeof IsInViewport[`defaultOptions`]> = {}) {
		const eventNames = options.eventNames ?? IsInViewport.defaultOptions.eventNames;
		const throttleMs = options.throttleMs ?? IsInViewport.defaultOptions.throttleMs;

		this.test = () => {
			const $elements = Array.from(options.getElements());
			for (const $element of $elements) {
				options.callback({
					$element,
					isInViewport: IsInViewport.test($element),
				});
			}
		};

		const testThrottled = throttle({ callback: this.test, interval: throttleMs });
		eventNames.forEach((eventName) => {
			window.addEventListener(eventName, testThrottled);
		});
	}
}

export function isInViewportSetup() {
	const ATTR__VIEWPORT_VISIBLE = `data-viewport-visible`;
	const $targets = Array.from(document.querySelectorAll(`[${ATTR__VIEWPORT_VISIBLE}]`));

	const viewportListener = new IsInViewport({
		callback: (({ $element, isInViewport }) => {
			if (isInViewport) {
				$element.setAttribute(ATTR__VIEWPORT_VISIBLE, `true`);
			} else if ($element.hasAttribute(ATTR__VIEWPORT_VISIBLE)) {
				$element.setAttribute(ATTR__VIEWPORT_VISIBLE, `false`);
			}
		}),
		getElements: () => $targets,
	});
	viewportListener.test();
}
