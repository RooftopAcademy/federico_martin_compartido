import Cart from "./entities/Cart";

export default function deleteBtnListeners(doc: Document, cart: Cart) {
	const buttons = doc.getElementsByClassName("cart-remove");
	Array.from(buttons).forEach((button) => {
		button.addEventListener("click", (e: Event) => {
			const target = e.target as any;

			const counter = doc.getElementById("counter") as HTMLElement;

			//como hago para evitar Property 'data' does not exist on type 'HTMLButtonElement'. si no pongo any?
			cart.removeProduct(target.dataset.id);
			counter.innerHTML = String(cart.counter);
		});
	});
}
