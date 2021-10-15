import PageInterface from "../interfaces/PageInterface";
import cartComponent from "../components/cartComponent";
import { store } from "../app";

import appendProduct from "../dom/appendProduct";
import ProductInterface from "../interfaces/ProductInterface";
import cartItemView from "../components/cartItemView";
import updateCartCounter from "../dom/updateCartCounter";
import deleteBtnListeners from "../listeners/deleteBtnListers";

export default class CartPage implements PageInterface {
	render(c: HTMLElement) {
		c.innerHTML = cartComponent();
	}

	pageScript() {
		store.cart.products.forEach(
			(product: { product: ProductInterface; quantity: number }) => {
				appendProduct(document, product, cartItemView);
			}
		);
		deleteBtnListeners(document, store.cart);

		updateCartCounter(document, store);
	}
}
