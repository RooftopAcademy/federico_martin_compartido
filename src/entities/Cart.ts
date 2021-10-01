import ProductInterface from "../interfaces/ProductInterface";

export default class Cart {
	counter: number = 0;
	products: { product: ProductInterface; quantity: number }[] = [];

	addProduct(cantidad: number) {
		this.counter += Number(cantidad);
	}
}

//calcular counter en base a products, que se actualice el contador cuando se agrega/quita producto
