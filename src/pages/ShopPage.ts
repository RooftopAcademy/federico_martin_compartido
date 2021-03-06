import PageInterface from "../interfaces/PageInterface";
import shopComponent from "../components/shopComponent";
import buyBtnListeners from "../buyBtnListeners";
import { store } from "../app";
import updateCartCounter from "../updateCartCounter";
import renderList from "../renderList";
import sortBtnListeners from "../sortBtnListeners";
import updateCategoriesNav from "../updateCategoriesNav";
import categorySelectorsListeners from "../categorySelectorsListeners";

export default class ShopPage implements PageInterface {
	render(c: HTMLElement): void {
		c.innerHTML = shopComponent();
	}

	pageScript() {
		renderList(store.catalog);

		buyBtnListeners(document, store);

		sortBtnListeners(document, store.catalog);

		categorySelectorsListeners(document, store.catalog.activeCategories);

		updateCategoriesNav(document, store.catalog.activeCategories);

		updateCartCounter(document, store);
	}
}
