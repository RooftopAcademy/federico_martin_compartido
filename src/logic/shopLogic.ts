import ProductInt from "../interfaces/ProductInterface";
import appendProduct from "../appendProduct";
import buyBtnListeners from "../buyBtnListeners";
import Store from "../entities/Store";

export default function shopLogic(store: Store): void {
	store.catalog.products.forEach((product: ProductInt) => {
		appendProduct(document, product);
	});

	buyBtnListeners(store);
}
