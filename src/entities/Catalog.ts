import ProductInterface from "../interfaces/ProductInterface";
import List from "./List";

export default class CatalogList extends List {
	constructor() {
		super();
		this._products = [] as ProductInterface[];
		this._activeCategories = {
			electronics: false,
			jewelery: false,
			"men's clothing": false,
			"women's clothing": false,
		};
	}

	get products() {
		return this._products;
	}

	get activeCategories() {
		return this._activeCategories;
	}

	setCategories(category: string) {
		this.activeCategories[category]
			? (this.activeCategories[category] = false)
			: (this.activeCategories[category] = true);
		console.log(this.activeCategories);
	}

	getProduct(id: number) {
		return this.products.find((prod) => prod.id == id);
	}

	addProducts(product: ProductInterface) {
		this.products.push(product);
	}
}
