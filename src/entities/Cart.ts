import ProductInterface from "../interfaces/ProductInterface";

export default class Cart {
	counter: number = 0;
	products: { product: ProductInterface; quantity: number }[] = [];

	setCounter(): void {
		this.counter = this.products.reduce(function (a, b) {
			return a + b.quantity;
		}, 0) as number;
	}

	addProduct(product: ProductInterface, quantity: number) {
		this.products.push({ product: product, quantity: quantity });
		this.setCounter();
	}
}
