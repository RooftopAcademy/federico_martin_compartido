import { app } from "../js/app";
import { store } from "../js/app";

const counter: HTMLElement | null = document.getElementById("counter");

export default function eventListeners() {
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

	Array.from(document.getElementsByClassName("router")).forEach((el) => {
		el.addEventListener("click", function (e: Event) {
			e.preventDefault();

			const target: HTMLAnchorElement = e.target as HTMLAnchorElement;
			const route: string = target.href;

			app.render(route, e);
		});
	});
}
