import ProductInt from "../src/interfaces/ProductInt";
import appendProduct from "../src/appendProduct";
import { store } from "./app";
import buyBtnListeners from "../src/buyBtnListeners";

export default function shopLogic(): void {
	store.catalog.products.forEach((product: ProductInt) => {
		appendProduct(document, product);
	});

	buyBtnListeners(store);
}
