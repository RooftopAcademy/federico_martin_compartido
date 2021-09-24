export default async function fetchProducts(): Promise<[]> {
	const data: [] = await fetch(
		"https://fakestoreapi.com/products?limit=3"
	).then((res) => res.json());
	return data;
}
