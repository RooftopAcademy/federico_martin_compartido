import PageInterface from "../interfaces/PageInterface";
import shopComponent from "../components/shopComponent";
import buyBtnListeners from "../listeners/buyBtnListeners";
import { store } from "../app";
import updateCartCounter from "../dom/updateCartCounter";
import renderList from "../dom/renderList";
import sortBtnListeners from "../listeners/sortBtnListeners";
import updateCategoriesNav from "../dom/updateCategoriesNav";
import categorySelectorsListeners from "../listeners/categorySelectorsListeners";

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
