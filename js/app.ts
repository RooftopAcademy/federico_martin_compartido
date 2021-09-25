import Store from "../src/Store";
import appendProduct from "../src/appendProduct";
import ProductInt from "../src/interfaces/ProductInt";

const store = new Store();
const productsContainer: HTMLElement | null =
	document.getElementById("products-container");

(async (): Promise<void> => {
	await store.setCatalog();

	store.catalog.products.forEach(async (product: ProductInt) => {
		appendProduct(productsContainer, product);
	});

	const comprarBtn: Element[] = Array.from(
		document.getElementsByClassName("comprar")
	);

	comprarBtn.forEach((button: Element) => {
		button.addEventListener("click", (e: Event) => {
			if (e) {
				const target = e.target as HTMLElement;
				const preTarget =
					target.previousElementSibling as HTMLInputElement;
				if (preTarget.value == "0") {
					alert("Elige cuántas prendas quieres comprar");
				} else {
					store.cart.addProduct = Number(preTarget.value);
					if (counter) {
						counter.innerHTML = String(store.cart.counter);
					}
				}
			}
		});
	});
})();

const counter: HTMLElement | null = document.getElementById("counter");
