import productView from "./components/productView";

export default function appendProduct(
	container: HTMLElement | null,
	product: { id: number; title: string; price: number }
): void {
	if (container) {
		container.innerHTML += productView(product);
	}
}
