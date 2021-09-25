import ProductInt from "./interfaces/ProductInt";

export default class Catalog {
	_products: ProductInt[];
	constructor() {
		this._products = [];
	}

	get products() {
		return this._products;
	}

	addProducts(product: ProductInt) {
		this._products.push(product);
	}
}

//tipar e inicializar en la misma linea
