import ProductInterface from "../interfaces/ProductInterface";
import ActiveCategories from "./ActiveCategories";
import List from "./List";

export default class CatalogList extends List {
	_activeCategories: ActiveCategories;

	constructor() {
		super();
		this._products = [] as ProductInterface[];
		this._activeCategories = new ActiveCategories();
	}

	get products() {
		return this._products;
	}

	get activeCategories() {
		return this._activeCategories;
	}

	getProduct(id: number) {
		return this.products.find((prod) => prod.id == id);
	}

	addProducts(product: ProductInterface) {
		this.products.push(product);
	}
}
