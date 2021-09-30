import ProductInt from "../src/interfaces/ProductInt";
import appendProduct from "../src/appendProduct";
import buyBtnListeners from "../src/buyBtnListeners";
import Store from "../src/Store";

export default function shopLogic(store: Store): void {
	store.catalog.products.forEach((product: ProductInt) => {
		appendProduct(document, product);
	});

	buyBtnListeners(store);
}
