import ActiveCategories from "./entities/ActiveCategories";

export default function updateCategoriesNav(
	doc: Document,
	activeCategories: ActiveCategories
) {
	const selectors = Array.from(
		doc.getElementsByClassName("category-selector")
	) as HTMLInputElement[];

	selectors.forEach((selector) => {
		activeCategories.state[selector.value]
			? (selector.checked = true)
			: (selector.checked = false);
	});
}
