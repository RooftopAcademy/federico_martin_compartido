import Store from "../src/Store";
import homePage from "../src/components/homePage";
import shopPage from "../src/components/shopPage";
import detailsPage from "../src/components/detailsPage";
import errorPage from "../src/components/errorPage";
import homeLogic from "./homeLogic";
import shopLogic from "./shopLogic";
import detailsLogic from "./detailsLogic";
import eventListeners from "../src/EventListeners";

const container: HTMLElement | null = document.getElementById("content");

function App(container: HTMLElement | null): {
	render: (route: string, e: Event) => void;
} {
	const routes: any = {
		"http://127.0.0.1:5500/": homePage,
		"http://127.0.0.1:5500/shop": shopPage,
		"http://127.0.0.1:5500/details": detailsPage,
		"/404": errorPage,
	};

	const logic: any = {
		"http://127.0.0.1:5500/": homeLogic,
		"http://127.0.0.1:5500/shop": shopLogic,
		"http://127.0.0.1:5500/details": detailsLogic,
		//	"/404": errorPageLogic,
	};

	function render(route: string, e: Event) {
		if (container) {
			if (routes[route]) {
				container.innerHTML = routes[route](e);
				logic[route]();
			} else {
				container.innerHTML = routes["/404"]();
			}
		}
	}

	return { render };
}

const app = App(container);

const store = new Store();

(async (): Promise<void> => {
	await store.setCatalog();
})();

eventListeners();

export { store, app };
