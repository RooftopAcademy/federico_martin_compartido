import ProductInt from "../interfaces/ProductInterface";

export default function detailsPage(
	hash: string,
	products: ProductInt[]
): string {
	const product = products.filter((prod) => {
		return prod.id == Number(hash);
	})[0];

	return `<article>
    <img src="${product.image}"/>
    <div class="info-shop">
        <div class="name-price">
            <h2 id="product-name">${product.title}</h2>
            <span>$${product.price.toFixed(2)}</span>
        </div>
        <div>
            <input
                type="number"
                class="cantidad"
                name="cantidad"
                min="0"
                placeholder="0"
            /><button class="comprar">Comprar</button>
        </div>
        <hr class="h-line" />
    </div>
    <p class="detalles" id="details">
    ${product.description}
    </p>
</article>`;
}
