export default async function fetchProducts(): Promise<[]> {
	const data: [] = await fetch("https://fakestoreapi.com/products").then(
		(res) => res.json()
	);
	console.log("feth");
	return data;
}
