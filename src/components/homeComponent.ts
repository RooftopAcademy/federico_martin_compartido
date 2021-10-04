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
					<a href="#/shop" id="ver-productos" class="fade hidden ver-productos router"
						>Ver Listado de Productos</a
					>
				</div>
			</article>

			${footerComponent()}
        `;
}
