import footerComponent from "./footerComponent";
import headerComponent from "./headerComponent";

export default function shopComponent(): string {
	return `
            ${headerComponent()}

                <article id="products-container" class="products-container">
                    <!-- JS -->
                </article>
            
            ${footerComponent()}
           `;
}
