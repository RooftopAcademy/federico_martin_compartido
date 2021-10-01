import PageInterface from "../interfaces/PageInterface";
import ProductInterface from "../interfaces/ProductInterface";
import shopComponent from "../components/shopComponent";
import appendProduct from "../appendProduct";
import buyBtnListeners from "../buyBtnListeners";
import { store } from "../app";

export default class ShopPage implements PageInterface {
	render(c: HTMLElement): void {
		c.innerHTML = shopComponent();
	}

	registerEvents() {
		store.catalog.products.forEach((product: ProductInterface) => {
			appendProduct(document, product);
		});

		buyBtnListeners(document, store);
	}
}
