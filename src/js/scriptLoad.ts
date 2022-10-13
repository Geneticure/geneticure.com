export function scriptLoad(src: string) {
	const $script = document.createElement(`SCRIPT`);
	$script.setAttribute(`src`, src);
	$script.setAttribute(`module`, `true`);
	document.head.appendChild($script);

	return new Promise((resolve) => {
		$script.onload = resolve;
	});
}
