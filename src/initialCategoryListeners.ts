import ActiveCategories from "./entities/ActiveCategories";

export default function initialCategoryListeners(
	doc: Document,
	activeCategories: ActiveCategories
) {
	const categorySelectors = Array.from(
		doc.getElementsByClassName("category-selector")
	) as HTMLButtonElement[];

	categorySelectors.forEach((button) =>
		button.addEventListener("click", () => {
			activeCategories.setCategories(button.value);

			window.dispatchEvent(new HashChangeEvent("hashchange"));
		})
	);
}
