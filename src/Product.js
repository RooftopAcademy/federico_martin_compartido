class Product {
	constructor() {
		this._name = String;
		this._price = Number;
		this._id = Number;
		this._details = String;
	}
	get name() {
		return this._name;
	}
	set name(name) {
		this._name = name;
	}
	get price() {
		return this._price;
	}
	set price(price) {
		this._price = price;
	}
	get id() {
		return this._id;
	}
	set id(id) {
		this._id = id;
	}
	get details() {
		return this._details;
	}
	set details(details) {
		this._details = details;
	}
}
