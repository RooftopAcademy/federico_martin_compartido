import Store from "./entities/Store";
import fetchProducts from "./fetchProducts";
import getPage from "./logic/routesCall";
import logicCall from "./logic/logicCall";
import PageInterface from "./pages/PageInterface";

const container = document.getElementById("content") as HTMLElement;

function App(container: HTMLElement): {
	render: (route: string) => void;
} {
	const store = new Store();

	store.setCatalog(fetchProducts);

	function render(route: string) {
		let page : PageInterface = new (getPage(route) as any)

		page.render(container)
		page.registerEvents(document)

		// llama al router para que devuelva el componente que debe ser renderizado
		// container.innerHTML = routesCall(
		// 	section,
		// 	productID,
		// 	store.catalog.products
		// );

		// asignan eventos en la pagina
		// logicCall(section, store, document);
	}

	return { render };
}

const app = App(container);
app.render("#/");

window.addEventListener("hashchange", () => {
	const route = window.location.hash;

	app.render(route);
});

//pasar el documento como argumento o el elemento en específico?
