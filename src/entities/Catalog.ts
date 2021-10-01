import ProductInterface from "../interfaces/ProductInterface";

export default class Catalog {
	_products: ProductInterface[] = [];

	get products() {
		return this._products;
	}

	addProducts(product: ProductInterface) {
		this._products.push(product);
	}
}

//linea 4, es lo mismo que inicializar en el constructor?
