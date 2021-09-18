class Store {
	constructor() {
		this.cart = new Cart();
		this._products = [];
	}
	get products() {
		return this._products;
	}
}

class Cart {
	constructor() {
		this.counter = 0;
	}
	set addProduct(cantidad) {
		this.counter += Number(cantidad);
	}
}

class Product {
	constructor(name, price, imgURL, details) {
		this._name = name;
		this._price = price;
		this._imgURL = imgURL;
		this._details = details;
	}
	get price() {
		return this.price;
	}
}

const store = new Store();
