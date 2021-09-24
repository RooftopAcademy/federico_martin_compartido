import Product from "./Product";

export default class Catalog {
	_products: Product[];
	constructor() {
		this._products = [];
	}
	get products() {
		return this._products;
	}
	addProducts(product: Product) {
		this._products.push(product);
	}
}
