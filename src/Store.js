class Store {
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
		data.forEach((item) => {
			const product = new Product();
			product.name = item.title;
			product.id = item.id;
			product.price = item.price;
			product.details = item.description;
			this.catalog.products = product;
		});
		console.log(this.catalog.products);
	}
}

//DENTRO DE LA CLASE USAR EL GETTER O _catalog? linea 14
