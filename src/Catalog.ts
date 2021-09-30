import ProductInt from "./interfaces/ProductInterface";

export default class Catalog {
	_products: ProductInt[] = [];

	get products() {
		return this._products;
	}

	addProducts(product: ProductInt) {
		this._products.push(product);
	}
}

//linea 4, es lo mismo que inicializar en el constructor?
