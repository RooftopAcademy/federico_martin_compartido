import productView from "./components/productView";
import ProductInt from "./interfaces/ProductInt";

export default function appendProduct(
	container: HTMLElement | null,
	product: ProductInt
): void {
	if (container) {
		container.innerHTML += productView(product);
	}
}
