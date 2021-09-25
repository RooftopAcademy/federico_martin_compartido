const verProductos: HTMLElement | null =
	document.getElementById("ver-productos");
const hoverItems: HTMLElement | null = document.getElementById("to-hover");

if (verProductos && hoverItems) {
	hoverItems.addEventListener("mouseenter", () => {
		verProductos.classList.add("visible");
	});
	hoverItems.addEventListener("mouseleave", () => {
		verProductos.classList.remove("visible");
	});
}
