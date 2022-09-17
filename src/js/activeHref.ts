export const ATTR__ACTIVE_HREF = `data-active-href`;
export const CLASS__ACTIVE_HREF = `active-href`;

export function activeHrefSetup() {
	const pageHref = window.location.pathname.replace(/\/$/, ``);
	const $targets = Array.from(document.querySelectorAll(`[${ATTR__ACTIVE_HREF}]`));
	for (const $target of $targets) {
		const targetHref = $target.getAttribute(`href`)?.replace(/\/$/, ``);
		if (targetHref === pageHref) {
			$target.classList.add(CLASS__ACTIVE_HREF);
		} else {
			$target.classList.remove(CLASS__ACTIVE_HREF);
		}
	}
}
