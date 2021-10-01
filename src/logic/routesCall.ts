import errorPage from "../components/errorPage";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import PageInterface from "../interfaces/PageInterface";
import useParams from "../useParams";
import DetailsPage from "../pages/DetailsPage";
import CartPage from "../pages/CartPage";

export default function routesCall(url: string): HomePage {
	const path = useParams().path;

	const routes: any = {
		"": HomePage,
		"#/": HomePage,
		"#/shop": ShopPage,
		"#/details": DetailsPage,
		"#/cart": CartPage,
		// "/404": () => errorPage(),
	};

	// if (!routes[path]) {
	// 	return routes["/404"];
	// }

	return routes[path];
}
