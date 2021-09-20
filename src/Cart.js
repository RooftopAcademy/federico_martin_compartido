class Cart {
	constructor() {
		this.counter = 0;
	}
	set addProduct(cantidad) {
		this.counter += Number(cantidad);
	}
}
