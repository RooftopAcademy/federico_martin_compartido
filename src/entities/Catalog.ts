import ProductInterface from "../interfaces/ProductInterface";
import List from "./List";

export default class CatalogList extends List {
	constructor() {
		super();
		this._products = [] as ProductInterface[];
	}

	get products() {
		return this._products;
	}

	getProduct(id: number) {
		return this.products.find((prod) => prod.id == id);
	}

	addProducts(product: ProductInterface) {
		this.products.push(product);
	}
}
