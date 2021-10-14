import { store } from "./app";
import appendProduct from "./appendProduct";
import productView from "./components/productView";
import ProductInterface from "./interfaces/ProductInterface";

export default function renderList() {
	let sortedItems;

	sortedItems = store.catalog.getSortedItems() as ProductInterface[];

	if (!sortedItems) sortedItems = store.catalog.products;

	sortedItems.forEach((product: ProductInterface) => {
		appendProduct(document, product, productView);
	});
}
