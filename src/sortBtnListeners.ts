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

		console.log(sortObject);

		catalog.setSorting(sortObject);

		window.dispatchEvent(new HashChangeEvent("hashchange"));
	});
}

//crear checkboxes que definan forma de objeto sort
//crear boton ordenar para llamar setsorting aplicando el ojeto creado en base a disposicion de checkboxes

//despues debera window.dispatchEvent(new HashChangeEvent("hashchange")); o importar metodo render?

//interfaz sortObject en base a product? o interfaz? o type?
