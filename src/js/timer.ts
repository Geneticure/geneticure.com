type Callback =  (...args: Array<unknown>) => unknown;
type Timer = number;

export const debounceOptions = {
	callback: null as Callback,
	interval: 10 as number,
};
export function debounce(options: Partial<typeof debounceOptions> = debounceOptions): Callback {
	const interval = options.interval ?? debounceOptions.interval;

	let timer: Timer = null;
	return function() {
		clearTimeout(timer);
		timer = setTimeout(() => {
			options.callback();
			timer = null;
		}, interval);
	};
}

export const throttleOptions = {
	callback: null as Callback,
	interval: 10 as number,
};
export function throttle(options: Partial<typeof throttleOptions> = throttleOptions): Callback {
	const interval = options.interval ?? throttleOptions.interval;

	let timer: Timer = null;
	return function() {
		if (timer) {
			return;
		}

		timer = setTimeout(() => {
			options.callback();
			timer = null;
		}, interval);
	};
}

export function sleep(time: number) {
	return new Promise((resolve) => setTimeout(resolve, time));
}
