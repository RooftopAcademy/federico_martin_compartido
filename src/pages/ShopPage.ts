import PageInterface from "../interfaces/PageInterface";
import ProductInterface from "../interfaces/ProductInterface";
import shopComponent from "../components/shopComponent";
import appendProduct from "../appendProduct";
import buyBtnListeners from "../buyBtnListeners";
import { store } from "../app";
import productView from "../components/productView";
import updateCartCounter from "../updateCartCounter";

export default class ShopPage implements PageInterface {
	render(c: HTMLElement): void {
		c.innerHTML = shopComponent();
	}

	pageScript() {
		store.catalog.products.forEach((product: ProductInterface) => {
			appendProduct(document, product, productView);
		});

		buyBtnListeners(document, store);

		updateCartCounter(document, store);
	}
}
