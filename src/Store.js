class Store {
	constructor() {
		this._cart = new Cart();
		this._catalog = new Catalog();
	}
	get catalog() {
		return this._catalog;
	}
	fetchProducts() {}
}
