import Store from "./Store";
import fetchProducts from "./fetchProducts";
import routesCall from "./routesCall";
import logicCall from "./logicCall";

const container = document.getElementById("content") as HTMLElement;

function App(container: HTMLElement): {
	render: (route: string) => void;
} {
	const store = new Store();

	store.setCatalog(fetchProducts);

	function render(route: string) {
		const splited = route.split("/");
		const productID = splited[2];
		const section = splited.slice(0, 2).join("/");

		container.innerHTML = routesCall(
			section,
			productID,
			store.catalog.products
		);

		logicCall(section, store, document);
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
