import Product from "./Product";
import Catalog from "./Catalog";
import Cart from "./Cart";
import ProductInt from "./interfaces/ProductInt";

export default class Store {
	_cart: Cart;
	_catalog: Catalog;

	constructor() {
		this._cart = new Cart();
		this._catalog = new Catalog();
	}

	get cart() {
		return this._cart;
	}

	get catalog() {
		return this._catalog;
	}

	async setCatalog(fetchFunction: () => Promise<[]>) {
		const data = await fetchFunction();

		data.forEach((item: ProductInt) => {
			const product: ProductInt = new Product();
			product.title = item.title;
			product.id = item.id;
			product.price = item.price;
			product.description = item.description;
			product.image = item.image;

			this._catalog.addProducts(product);
		});
	}
}
