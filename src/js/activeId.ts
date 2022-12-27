import * as Template from './templates';

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

		Template.render($template);
		$target = document.getElementById(targetId);
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
		const top = $target.getBoundingClientRect().top + window.scrollY - 100;
		window.scrollTo({ top });
	}, 10); // Not sure why time is necessary
}
