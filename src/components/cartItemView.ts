import ProductInterface from "../interfaces/ProductInterface";

export default function (item: {
	product: ProductInterface;
	quantity: number;
}): string {
	return `<div>${item.product.title}${item.quantity}</div>`;
}
