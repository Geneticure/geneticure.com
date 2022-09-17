export function getProps<
	Defaults extends Record<string | number, unknown>,
	Rest extends Record<string | number, unknown>,
>(
	all: Rest,
	defaults: Defaults = {} as Defaults,
): {
	props: Defaults & {class: string},
	rest: Rest,
} {
	const props = {
		...defaults,
		...all,
		class: [defaults.class, all.class].filter(Boolean).join(` `),
	};
	const rest = { ...all };
	delete rest.class;
	for (const property in defaults) {
		delete rest[property];
	}
	return {
		props,
		rest,
	};
}
