import headerComponent from "./headerComponent";
import footerComponent from "./footerComponent";

export default function homeComponent(): string {
	return `
			${headerComponent()}

			<article class="content">
				<div id="to-hover" class="to-hover">
					<span class="material-icons-outlined icono-central" id="icon">
						checkroom
					</span></br>
					
					<button value="electronics" class="category-selector">
						<a href="#/shop" id="ver-productos" class="fade hidden ver-productos router">Electrónica</a>
					</button>

					<button value="jewelery" class="category-selector">
						<a href="#/shop" id="ver-productos" class="fade hidden ver-productos router">Joyería</a>
					</button>

					<button value="men's clothing" class="category-selector">
						<a href="#/shop" id="ver-productos" class="fade hidden ver-productos router">Ropa masculina</a>
					</button>

					<button value="women's clothing" class="category-selector">
						<a href="#/shop" id="ver-productos" class="fade hidden ver-productos router">Ropa femenina</a>
					</button>
				</div>
			</article>

			${footerComponent()}
        `;
}
