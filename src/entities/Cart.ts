export default class Cart {
	counter: number;
	constructor() {
		this.counter = 0;
	}
	set addProduct(cantidad: number) {
		this.counter += Number(cantidad);
	}
}
