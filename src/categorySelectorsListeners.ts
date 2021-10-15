import ActiveCategories from "./entities/ActiveCategories";

export default function categorySelectorsListeners(
	doc: Document,
	activeCategories: ActiveCategories
) {
	const categorySelectors = Array.from(
		doc.getElementsByClassName("category-selector")
	) as HTMLInputElement[];

	categorySelectors.forEach((selector) =>
		selector.addEventListener("change", (e) => {
			const checkbox = e.target as HTMLInputElement;

			activeCategories.setCategories(checkbox.value);

			window.dispatchEvent(new HashChangeEvent("hashchange"));
		})
	);
}
