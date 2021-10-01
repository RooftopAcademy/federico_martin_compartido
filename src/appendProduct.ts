import productView from "./components/productView";
import ProductInterface from "./interfaces/ProductInterface";

export default function appendProduct(
	doc: Document,
	product: ProductInterface
): void {
	const productsContainer = doc.getElementById(
		"products-container"
	) as HTMLElement;

	productsContainer.innerHTML += productView(product);
}

//unir a shop component
