import headerComponent from "./headerComponent";
import footerComponent from "./footerComponent";

export default function cartComponent(): string {
	return `
			${headerComponent()}
			<article>
				<div id="products-container">
					<!-- JS -->
				</div>
				<button>Comprar</button>
			</article>

			${footerComponent()}
        `;
}
