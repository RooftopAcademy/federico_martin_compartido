import ProductInterface from "../interfaces/ProductInterface";
import footerComponent from "./footerComponent";
import headerComponent from "./headerComponent";

export default function detailsPage(
	id: string,
	products: ProductInterface[]
): string {
	const product = products.find((prod) => prod.id == Number(id));

	return `
    ${headerComponent()}

        <article class="details-container">
            <img src="${product?.image}" class="img-details"/>
            <div class="info-shop">
                <div class="name-price">
                    <h2 id="product-name">${product?.title}</h2>
                    <span>$${product?.price.toFixed(2)}</span>
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
            ${product?.description}
            </p>
        </article>

    ${footerComponent()}
`;
}
