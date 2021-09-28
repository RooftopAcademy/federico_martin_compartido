export default function homePage(): string {
	return `
			<article>
				<div id="to-hover" class="to-hover">
					<span class="material-icons-outlined icono-central" id="icon">
						checkroom
					</span></br>
					<a href="#/shop" id="ver-productos" class="fade hidden ver-productos router"
						>Ver Listado de Productos</a
					>
				</div>
			</article>
            `;
}
