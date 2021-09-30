import productView from "./components/productView";
import ProductInt from "./interfaces/ProductInt";

export default function appendProduct(
	doc: Document,
	product: ProductInt
): void {
	const productsContainer = doc.getElementById(
		"products-container"
	) as HTMLElement;

	productsContainer.innerHTML += productView(product);
}
