import Store from "./entities/Store";

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

			store.cart.addProduct(Number(quantityInput.value));

			counter.innerHTML = String(store.cart.counter);
		});
	});
}
