import Product from "./Product";
import Catalog from "./Catalog";
import Cart from "./Cart";
import fetchProducts from "./fetchProducts";

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
	async setCatalog() {
		const data = await fetchProducts();
		data.forEach(
			(item: {
				title: string;
				id: number;
				price: number;
				description: string;
			}) => {
				const product: Product = new Product();
				product.title = item.title;
				product.id = item.id;
				product.price = item.price;
				product.description = item.description;
				this.catalog.addProducts(product);
			}
		);
	}
}

//DENTRO DE LA CLASE USAR EL GETTER O _catalog? linea 32
