import appendProduct from "./appendProduct";
import productView from "./components/productView";
import CatalogList from "./entities/Catalog";
import ProductInterface from "./interfaces/ProductInterface";

export default function renderList(catalog: CatalogList) {
	let sortedItems;

	sortedItems = catalog.getSortedItems() as ProductInterface[];

	if (!sortedItems) sortedItems = catalog.products;

	sortedItems.forEach((product: ProductInterface) => {
		if (catalog.activeCategories.state[product.category]) {
			appendProduct(document, product, productView);
		}
	});
}
