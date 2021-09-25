import ProductInt from "./interfaces/ProductInt";

export default class Product implements ProductInt {
	title!: string;
	id!: number;
	price!: number;
	description!: string;

	geTTitle() {
		return this.title;
	}

	getPrice() {
		return this.price;
	}

	getID() {
		return this.id;
	}

	getDescription() {
		return this.description;
	}
}

//AL USAR LA INTERFACE BORRE LOS _ Y REFORMULE GETTERS, ESTA OK?
//BORRE SETTERS EN BASE A Note that a field-backed get/set pair with no extra logic
//is very rarely useful in JavaScript. It’s fine to expose public fields if
//you don’t need to add additional logic during the get/set operations.
