export default function homeLogic(doc: Document): void {
	const verProductos = doc.getElementById("ver-productos") as HTMLElement;

	const hoverItems = doc.getElementById("to-hover") as HTMLElement;

	hoverItems.addEventListener("mouseenter", () => {
		verProductos.classList.add("visible");
	});

	hoverItems.addEventListener("mouseleave", () => {
		verProductos.classList.remove("visible");
	});
}
