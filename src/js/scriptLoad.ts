export function scriptLoad(src: string) {
	return new Promise((resolve) => {
		const $script = document.createElement(`SCRIPT`);
		$script.onload = resolve;
		document.head.appendChild($script);
		$script.setAttribute(`src`, src);
	});
}
