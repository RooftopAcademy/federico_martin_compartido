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
		if (this.products.some((prod) => prod.product?.id == product?.id)) {
			const index = this.products.findIndex(
				(prod) => prod.product == product
			);
			this.products[index].quantity += quantity;
			return;
		}

		this.products.push({ product: product, quantity: quantity });
	}

	removeProduct(id: number) {
		const index = this.products.findIndex((item) => item.product.id == id);

		if (this.products[index]?.quantity == 1) {
			this.products.splice(index, 1);
			return;
		}

		this.products[index].quantity -= 1;
	}
}

//cuando el boton desaparezca del dom, no va a existir este problema, pero en este contexto si. Deberia estar la funcion remove
//cubierta ante la situacion de que !this.products[index]? leia 35
