import * as Template from './templates';

export enum ActiveIdEvents {
	focus = `active-id-focus`,
}

export function activeIdSetup() {
	window.addEventListener(`hashchange`, () => {
		const hash = window.location.hash;
		jumpTo(hash);
	});

	jumpTo(window.location.hash);
}


function jumpTo(id: string) {
	const targetId = (id.startsWith(`#`) ? id.substring(1) : id).trim();

	let $target = document.getElementById(targetId);

	const $templates = Array.from(document.querySelectorAll(`template`));
	for (const $template of $templates) {
		const $templateTarget = $template.content.getElementById(targetId);
		if (!$templateTarget) {
			continue;
		}

		$target = $templateTarget;

		Template.render($template);
	}

	if (!$target) {
		return;
	}

	const $detailses = Array.from(document.querySelectorAll(`details`));
	for (const $details of $detailses) {
		if ($details.contains($target)) {
			$details.open = true;
		}
	}


	setTimeout(() => {
		$target.scrollIntoView({ behavior: `smooth` });
		$target.dispatchEvent(new CustomEvent(ActiveIdEvents.focus));
	}, 10); // Not sure why necessary
}
