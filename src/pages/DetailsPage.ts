import detailsComponent from "../components/detailsComponent";
import useParams from "../useParams";
import PageInterface from "../interfaces/PageInterface";
import buyBtnListeners from "../buyBtnListeners";
import { store } from "../app";
import updateCartCounter from "../updateCartCounter";

export default class DetailsPage implements PageInterface {
	render(c: HTMLElement): void {
		const productID = useParams().productID;

		c.innerHTML = detailsComponent(productID, store.catalog.products);
	}

	pageScript(d: Document): void {
		buyBtnListeners(document, store);

		updateCartCounter(document, store);
	}
}
