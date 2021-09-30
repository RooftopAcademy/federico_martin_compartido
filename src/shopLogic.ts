import ProductInt from "./interfaces/ProductInt";
import appendProduct from "./appendProduct";
import buyBtnListeners from "./buyBtnListeners";
import Store from "./Store";

export default function shopLogic(store: Store): void {
	store.catalog.products.forEach((product: ProductInt) => {
		appendProduct(document, product);
	});

	buyBtnListeners(store);
}
