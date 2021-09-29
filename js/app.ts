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
	render: (route: string) => void;
	initialPage: () => void;
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
		const id = splited[2];
		const section = splited.slice(0, 2).join("/");

		if (container) {
			if (routes[section]) {
				container.innerHTML = routes[section](id);
				logic[section]();
			} else {
				container.innerHTML = routes["/404"]();
			}
		}
	}

	function initialPage() {
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

const store = new Store();

(async (): Promise<void> => {
	await store.setCatalog();
})();

app.initialPage();

window.addEventListener("hashchange", () => {
	const route = window.location.hash;

	app.render(route);
});

export { store, app };
