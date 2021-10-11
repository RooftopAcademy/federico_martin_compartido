import ProductInterface from "../interfaces/ProductInterface";

export default function (item: {
	product: ProductInterface;
	quantity: number;
}): string {
	return `<div class="cart-item">
				<div>
					<img src="${item.product.image}"/>
					${item.product.title}
				</div>
				<div>
					${item.product.price}
					X ${item.quantity}
				</div>
				<button data-id="${item.product.id}" class="cart-remove">X</button>
			</div>`;
}
