import ProductInterface from "../interfaces/ProductInterface";
import List from "./List";

export default class CatalogList extends List {
	_products: ProductInterface[] = [];
	results: ProductInterface[] = [...this._products];

	constructor() {
		super();
	}

	get products() {
		return this._products;
	}

	getProduct(id: number) {
		return this.products.find((prod) => prod.id == id);
	}

	addProducts(product: ProductInterface) {
		this._products.push(product);
	}
}
