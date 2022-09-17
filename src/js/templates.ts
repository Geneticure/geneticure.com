export function render($template: HTMLTemplateElement) {
	const $templateRendered = $template.content.cloneNode(true);
	$template.replaceWith($templateRendered);
	return $template;
}
