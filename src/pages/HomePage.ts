import PageInterface from "../interfaces/PageInterface";
import homeComponent from "../components/homeComponent";

export default class HomePage implements PageInterface {
	render(c: HTMLElement): void {
		c.innerHTML = homeComponent();
	}

	registerEvents(d: Document): void {
		const verProductos = d.getElementById("ver-productos") as HTMLElement;
		const hoverItems = d.getElementById("to-hover") as HTMLElement;

		hoverItems.addEventListener("mouseenter", () => {
			verProductos.classList.add("visible");
		});

		hoverItems.addEventListener("mouseleave", () => {
			verProductos.classList.remove("visible");
		});
	}
}
