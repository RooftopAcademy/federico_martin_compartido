import Store from "../src/Store";
import homePage from "../src/components/homePage";
import shopPage from "../src/components/shopPage";
import detailsPage from "../src/components/detailsPage";
import errorPage from "../src/components/errorPage";
import homeLogic from "./homeLogic";
import shopLogic from "./shopLogic";
import detailsLogic from "./detailsLogic";
import fetchProducts from "../src/fetchProducts";

const container: HTMLElement | null = document.getElementById("content");

function App(container: HTMLElement | null): {
	render: (route: string) => void;
	initialPage: (window: Window) => void;
} {
	const routes: any = {
		"#/": homePage,
		"#/shop": shopPage,
		"#/details": detailsPage,
		"/404": errorPage,
	};

	const logic: any = {
		"#/": homeLogic,
		"#/shop": shopLogic,
		"#/details": detailsLogic,
		//	"/404": errorPageLogic,
	};

	function render(route: string) {
		const splited = route.split("/");
		const productID = splited[2];
		const section = splited.slice(0, 2).join("/");

		if (container) {
			if (routes[section]) {
				container.innerHTML = routes[section](productID, store);
				logic[section]();
			} else {
				container.innerHTML = routes["/404"]();
			}
		}
	}

	function initialPage(window: Window) {
		window.onload = function () {
			window.location.hash = "#/";
		};
		if (container) {
			container.innerHTML = routes["#/"]();
		}
		homeLogic();
	}

	return { render, initialPage };
}

const app = App(container);

app.initialPage(window);

window.addEventListener("hashchange", () => {
	const route = window.location.hash;

	app.render(route);
});

const store = new Store();

(async (): Promise<void> => {
	await store.setCatalog(fetchProducts);
})();

export { store, app };

//linea 38, esta ok pasar mas argumentos de los pedidos por dos de los casos? ts no muestra error
