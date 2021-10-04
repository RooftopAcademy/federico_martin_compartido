import headerComponent from "./headerComponent";
import footerComponent from "./footerComponent";

export default function cartComponent(): string {
	return `
			${headerComponent()}

			<article id="products-container">
			<!-- JS -->
			</article>

			${footerComponent()}
        `;
}
