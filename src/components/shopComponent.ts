import footerComponent from "./footerComponent";
import headerComponent from "./headerComponent";

export default function shopComponent(): string {
	return `
            ${headerComponent()}

                <article id="products-container" class="products-container">
                    <navbar>
                        <label><input type="checkbox" class="sort-check" value="title">Title</label>
                        <label><input type="checkbox" class="sort-check" value="price">Price</label>
                        <label><input type="checkbox" class="sort-check" value="category">Category</label>
                        <button id="sort">Ordenar</button>
                    </navbar>
                    <!-- JS -->
                </article>
            
            ${footerComponent()}
           `;
}

//en linea 9 crear checkboxes/botones para los distintos criterios
