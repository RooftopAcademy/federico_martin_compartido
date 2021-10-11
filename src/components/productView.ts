import ProductInterface from "../interfaces/ProductInterface";

export default function productView(product: ProductInterface): string {
	return `
        <div class="product">
            <img src="${product.image}" class="img-shop" />
            <div class="product-info">
                <h2>${product.title}</h2>
                <span>$${product.price.toFixed(2)}</span><a href="#/details/${
		product.id
	}" class="router">Detalles</a>
            <div>
            <input
                type="number"
                class="cantidad"
                name="cantidad"
                min="0"
                placeholder="0"
            /><button class="comprar" data-index=${product.id}>Comprar</button>
            </div>
            </div>
        </div>
`;
}
