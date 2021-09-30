import homePage from "../src/components/homePage";
import shopPage from "../src/components/shopPage";
import detailsPage from "../src/components/detailsPage";
import errorPage from "../src/components/errorPage";
import ProductInt from "../src/interfaces/ProductInt";

export default function routesCall(
	section: string,
	productID: string,
	products: ProductInt[]
) {
	const routes: any = {
		"#/": homePage,
		"#/shop": shopPage,
		"#/details": () => detailsPage(productID, products),
		"/404": () => errorPage(),
	};

	if (!routes[section]) {
		return routes["/404"]();
	}

	return routes[section]();
}
