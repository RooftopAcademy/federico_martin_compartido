import ProductInterface from "../interfaces/ProductInterface";

export default function appendProduct(
	doc: Document,
	product: ProductInterface | { product: ProductInterface; quantity: number },
	view: any
): void {
	const productsContainer = doc.getElementById(
		"products-container"
	) as HTMLElement;

	productsContainer.innerHTML += view(product);
}
