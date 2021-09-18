const verProductos = document.getElementById("ver-productos");
const hoverItems = document.getElementById("to-hover");

hoverItems.addEventListener("mouseenter", () => {
	verProductos.classList.add("visible");
});
hoverItems.addEventListener("mouseleave", () => {
	verProductos.classList.remove("visible");
});