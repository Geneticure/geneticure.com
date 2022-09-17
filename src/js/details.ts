import * as Template from './templates';

export function detailsSetup() {
	const $detailses = Array.from(document.querySelectorAll(`details`));
	for (const $details of $detailses) {
		$details.addEventListener(`toggle`, () => {
			const $templates = Array.from($details.querySelectorAll(`template`));
			if ($templates.length === 0) {
				return;
			}

			for (const $template of $templates) {
				Template.render($template);
			}
		});
	}
}
