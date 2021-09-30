import homePage from "../components/homePage";
import shopPage from "../components/shopPage";
import detailsPage from "../components/detailsPage";
import errorPage from "../components/errorPage";
import ProductInt from "../interfaces/ProductInterface";

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
