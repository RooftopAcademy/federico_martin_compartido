import { store } from "../../js/app";

export default function details(e: Event): string {
	const target = e.target as HTMLElement;
	const productIndex = target.parentElement?.parentElement?.dataset.index;
	const product = store.catalog.products.filter((prod) => {
		return prod.id == Number(productIndex);
	})[0];

	//buscar en catalogo por ID
	return `<article>
    <img src="${product.image}"/>
    <div class="info-shop">
        <div class="name-price">
            <h2 id="product-name">${product.title}</h2>
            <span>${product.price}</span>
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
