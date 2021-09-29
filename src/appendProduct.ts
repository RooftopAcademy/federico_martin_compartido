import productView from "./components/productView";
import ProductInt from "./interfaces/ProductInt";

export default function appendProduct(
	document: Document,
	product: ProductInt
): void {
	const productsContainer: HTMLElement | null =
		document.getElementById("products-container");

	if (productsContainer) {
		productsContainer.innerHTML += productView(product);
	}
}
