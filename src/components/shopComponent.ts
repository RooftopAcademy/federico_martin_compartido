import footerComponent from "./footerComponent";
import headerComponent from "./headerComponent";

export default function shopComponent(): string {
	return `
            ${headerComponent()}
                <div class="list-container">
                    <navbar class="categories-nav">
                      <label><input type="checkbox" value="electronics">Electronica</label>
                      <label><input type="checkbox" value="jewelery">Joyería</label>
                      <label><input type="checkbox" value="men's clothing">Ropa masculina</label>
                      <label><input type="checkbox" value="women's clothing">Ropa femenina</label>
                    </navbar>
                    <article id="products-container" class="products-container">
                        <navbar>
                            <label><input type="checkbox" class="sort-check" value="title">Title</label>
                            <label><input type="checkbox" class="sort-check" value="price">Price</label>
                            <label><input type="checkbox" class="sort-check" value="category">Category</label>
                            <button id="sort">Ordenar</button>
                        </navbar>
                        <!-- JS -->
                    </article>
                </div>
            ${footerComponent()}
           `;
}

//checkboxes deberían estar generados dinamicamente en base a propiedades de productInterfase
