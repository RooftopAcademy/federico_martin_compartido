import ProductInt from "../interfaces/ProductInt";

export default function productView(product: ProductInt): string {
	return `
    <div class="product" data-index=${product.id}>
    <img src="${product.image}" class="blue-shirt" />
    <div class="product-info">
        <h2>${product.title}</h2>
        <span>$${product.price.toFixed(
			2
		)}</span><a href="/details" class="router">Detalles</a>
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
