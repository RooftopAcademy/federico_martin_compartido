import headerComponent from "./headerComponent";
import footerComponent from "./footerComponent";

export default function cartComponent(): string {
	return `
			${headerComponent()}
			<article class="cart-container">
				<div id="products-container">
					<!-- JS -->
				</div>
				<button>Checkout</button>
			</article>

			${footerComponent()}
        `;
}
