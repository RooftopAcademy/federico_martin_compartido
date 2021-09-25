import ProductInt from "../interfaces/ProductInt";

export default function productView(product: ProductInt): string {
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
