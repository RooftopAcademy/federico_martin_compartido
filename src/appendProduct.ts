import productView from "./components/productView";
import ProductInt from "./interfaces/ProductInt";

export default function appendProduct(
	doc: Document,
	product: ProductInt
): void {
	const productsContainer: HTMLElement | null =
		doc.getElementById("products-container");

	if (productsContainer) {
		productsContainer.innerHTML += productView(product);
	}
}
