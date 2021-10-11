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
		if (this.products.some((prod) => prod.product.id == product.id)) {
			const index = this.products.findIndex(
				(prod) => prod.product == product
			);
			this.products[index].quantity += quantity;
			return;
		}

		this.products.push({ product: product, quantity: quantity });
		//esto aca o en donde es llamado addProdudct, el listener?
		this.setCounter();
	}

	removeProduct(id: number) {
		const index = this.products.findIndex((item) => item.product.id == id);

		if (this.products[index]?.quantity == 1) {
			this.products.splice(index, 1);
			return;
		}

		this.products[index].quantity -= 1;

		this.setCounter();
	}
}

//es coding smell llamar a un metodo desde otro?
//que va dentro de los if en remove y add? deberian ser mas "simetricos"? cual es la excepcion para quedar con mas espaciado?
//cuando el boton desaparezca del dom, no va a existir este problema, pero en este contexto si. Deberia estar la funcion remove
//cubierta ante la situacion de que !this.products[index]? leia 35
