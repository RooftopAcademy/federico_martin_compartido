class Catalog {
	constructor() {
		this._products = [];
	}
	get products() {
		return this._products;
	}
	set products(product) {
		this._products.push(product);
	}
}
