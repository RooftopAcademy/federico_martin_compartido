import PageInterface from "../interfaces/PageInterface";
import cartComponent from "../components/cartComponent";
import { store } from "../app";

export default class CartPage implements PageInterface {
	render(c: HTMLElement) {
		c.innerHTML = cartComponent(store.cart.products);
	}

	registerEvents() {}
}
