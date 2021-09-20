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
