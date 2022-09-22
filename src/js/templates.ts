// TODO2: Instead of templates, load from remote endpoints

export function render($template: HTMLTemplateElement) {
	if (!$template) {
		return;
	}

	const $templateRendered = $template.content.cloneNode(true);
	$template.replaceWith($templateRendered);
	return $template;
}
