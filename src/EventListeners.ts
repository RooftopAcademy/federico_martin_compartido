import Store from "./Store";

const counter: HTMLElement | null = document.getElementById("counter");

export default function eventListeners(store: Store) {
	const comprarBtn: Element[] = Array.from(
		document.getElementsByClassName("comprar")
	);

	comprarBtn.forEach((button: Element) => {
		button.addEventListener("click", (e: Event) => {
			if (e) {
				const target = e.target as HTMLElement;
				const preTarget =
					target.previousElementSibling as HTMLInputElement;
				console.log(preTarget.value);
				if (!preTarget.value) {
					alert("Elige cuántas prendas quieres comprar"); //cambiar por estilo error
				} else {
					store.cart.addProduct = Number(preTarget.value);
					if (counter) {
						counter.innerHTML = String(store.cart.counter);
					}
				}
			}
		});
	});
}
