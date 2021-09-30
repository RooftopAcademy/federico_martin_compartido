import shopPage from "../components/shopPage";
import detailsPage from "../components/detailsComponent";
import errorPage from "../components/errorPage";
import ProductInterface from "../interfaces/ProductInterface";
import HomePage from "../pages/HomePage";
import PageInterface from "../pages/PageInterface";
import useParams from "../useParams";
import DetailsPage from "../pages/DetailsPage";

export default function routesCall(url : string) : HomePage {
	const path = useParams()

	console.log('PATH', path)

	const routes: any = {
		"": HomePage,
		"#/": HomePage,
		// "#/shop": shopPage,
		"#/details": DetailsPage,
		// "/404": () => errorPage(),
	};

	// if (!routes[path]) {
	// 	return routes["/404"];
	// }

	return routes[path];
}
