import { store } from "./app";

export default async function fetchProducts(): Promise<[]> {
	const data: [] = await fetch("https://fakestoreapi.com/products").then(
		(res) => res.json()
	);
	console.log("fetched");
	//PRUEBA
	/*	let sort = {
		id: 1,
		title: 1,
		price: 1,
		category: 1,
	};
	setTimeout(() => {
		store.catalog.setSorting(sort);
	}, 5000);
	setTimeout(() => {
		console.log(store.catalog.getSortedItems());
	}, 5000);*/

	//
	return data;
}
