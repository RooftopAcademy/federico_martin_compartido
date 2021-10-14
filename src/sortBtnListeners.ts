import CatalogList from "./entities/Catalog";
import SortObject from "./entities/SortObject";

export default function sortBtnListeners(doc: Document, catalog: CatalogList) {
	const sortCheck = Array.from(
		document.getElementsByClassName("sort-check")
	) as HTMLInputElement[];

	const sortBtn = document.getElementById("sort") as HTMLButtonElement;

	sortBtn.addEventListener("click", () => {
		const sortObject = new SortObject();

		sortCheck.forEach((box) => {
			const key = box.value;
			if (box.checked) sortObject[key] = 1;
		});

		catalog.setSorting(sortObject);

		window.dispatchEvent(new HashChangeEvent("hashchange"));
	});
}
//despues debera window.dispatchEvent(new HashChangeEvent("hashchange")); o importar metodo render?

//clase sortObject en base a product? o interfaz? o type?
