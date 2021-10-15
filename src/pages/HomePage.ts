import PageInterface from "../interfaces/PageInterface";
import homeComponent from "../components/homeComponent";
import updateCartCounter from "../dom/updateCartCounter";
import { store } from "../app";
import initialCategoryListeners from "../listeners/initialCategoryListeners";

export default class HomePage implements PageInterface {
	render(c: HTMLElement): void {
		c.innerHTML = homeComponent();
	}

	pageScript(d: Document): void {
		const verProductos = Array.from(
			d.getElementsByClassName("ver-productos")
		) as HTMLElement[];

		const hoverItems = d.getElementById("to-hover") as HTMLElement;

		hoverItems.addEventListener("mouseenter", () => {
			verProductos.forEach((button) => button.classList.add("visible"));
		});

		hoverItems.addEventListener("mouseleave", () => {
			verProductos.forEach((button) =>
				button.classList.remove("visible")
			);
		});

		initialCategoryListeners(document, store.catalog.activeCategories);

		updateCartCounter(document, store);
	}
}
