async function fetchProducts() {
	const data = await fetch("https://fakestoreapi.com/products?limit=3").then(
		(res) => res.json()
	);
	console.log(data);
	return data;
}
