import ProductInterface from "../interfaces/ProductInterface";

export default class Catalog {
	_products: ProductInterface[] = [];

	get products() {
		return this._products;
	}

	getProduct(id: number) {
		return this.products.find((prod) => prod.id == id);
	}

	addProducts(product: ProductInterface) {
		this._products.push(product);
	}
}

//linea 4, es lo mismo que inicializar en el constructor?
