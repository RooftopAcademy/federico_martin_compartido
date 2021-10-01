import Store from "./entities/Store";
import fetchProducts from "./fetchProducts";
import getPage from "./logic/routesCall";
import PageInterface from "./interfaces/PageInterface";

const container = document.getElementById("content") as HTMLElement;

function App(container: HTMLElement): {
	render: (route: string) => void;
	store: Store;
} {
	const store = new Store();

	store.setCatalog(fetchProducts);

	function render(route: string) {
		let page: PageInterface = new (getPage(route) as any)();

		page.render(container);
		page.registerEvents(document);
	}

	return { render, store };
}

const app = App(container);
const store = app.store;
app.render("#/");

window.onload = () => (window.location.hash = "#/");

window.addEventListener("hashchange", () => {
	const route = window.location.hash;

	app.render(route);
});

export { store };
