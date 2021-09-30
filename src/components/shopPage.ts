import footerComponent from "./footerComponent";
import headerComponent from "./headerComponent";

export default function shopPage(): string {
	return `
            ${headerComponent()}

                <article id="products-container">
                    <!-- JS -->
                </article>
            
            ${footerComponent()}
           `;
}
