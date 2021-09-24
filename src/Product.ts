export default class Product {
	_title!: string;
	_id!: number;
	_price!: number;
	_description!: string;

	get title() {
		return this._title;
	}
	set title(name) {
		this._title = name;
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
	get description() {
		return this._description;
	}
	set description(details) {
		this._description = details;
	}
}
