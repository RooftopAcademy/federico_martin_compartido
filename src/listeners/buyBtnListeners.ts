import Store from "../entities/Store";
import ProductInterface from "../interfaces/ProductInterface";

export default function buyBtnListeners(doc: Document, store: Store) {
	const buyBtn: Element[] = Array.from(
		document.getElementsByClassName("comprar")
	);

	const counter = doc.getElementById("counter") as HTMLElement;

	buyBtn.forEach((button: Element) => {
		button.addEventListener("click", (e: Event) => {
			const target = e.target as HTMLElement;
			const quantityInput =
				target.previousElementSibling as HTMLInputElement;

			if (!quantityInput.value) {
				alert("Elige cuántas prendas quieres comprar"); //cambiar por estilo error
				return;
			}

			const productID = Number(target.dataset.index);

			const product = store.catalog.getProduct(
				productID
			) as ProductInterface;

			store.cart.addProduct(product, Number(quantityInput.value));

			store.cart.setCounter();

			window.dispatchEvent(new HashChangeEvent("hashchange"));
		});
	});
}
