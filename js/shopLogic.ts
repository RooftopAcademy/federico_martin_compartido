import ProductInt from "../src/interfaces/ProductInt";
import appendProduct from "../src/appendProduct";
import { store } from "./app";
import eventListeners from "../src/EventListeners";

export default function shopLogic(): void {
	const productsContainer: HTMLElement | null =
		document.getElementById("products-container");

	store.catalog.products.forEach((product: ProductInt) => {
		appendProduct(productsContainer, product);
		eventListeners();
	});
}
