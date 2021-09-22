const counter = document.getElementById("counter");
const comprarBtn = document.getElementsByName("comprar");

comprarBtn.forEach((button) =>
	button.addEventListener("click", (e) => {
		if (e.target.previousElementSibling.value == 0) {
			alert("Elige cuántas prendas quieres comprar");
		} else {
			store.cart.addProduct = e.target.previousElementSibling.value;
			counter.innerHTML = store.cart.counter;
		}
	})
);

const store = new Store();
const productsContainer = document.getElementById("products-container");

(async () => {
	await store.setCatalog();
	store.catalog.products.forEach((product) => {
		console.log(productsContainer);
		appendProduct(productsContainer, product);
	});
})();
