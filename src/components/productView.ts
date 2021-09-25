export default function produdctView(product: {
	id: number;
	title: string;
	price: number;
}): string {
	return `
    <div class="product">
    <img src="./images/${product.id}.jpg" class="blue-shirt" />
    <div class="product-info">
        <h2>${product.title}</h2>
        <span>$${product.price.toFixed(
			2
		)}</span><a href="details.html">Detalles</a>
        <div>
            <input
                type="number"
                class="cantidad"
                name="cantidad"
                min="0"
                placeholder="0"
            /><button class="comprar">Comprar</button>
        </div>
    </div>
</div>
`;
}
