import Cart from "./entities/Cart";

export default function deleteBtnListeners(doc: Document, cart: Cart) {
	const buttons = doc.getElementsByClassName("cart-remove");
	Array.from(buttons).forEach((button) => {
		button.addEventListener("click", (e: Event) => {
			const counter = doc.getElementById("counter") as HTMLElement;

			const target = e.target as any;

			//como hago para evitar Property 'data' does not exist on type 'HTMLButtonElement'. si no pongo any en target?
			cart.removeProduct(target.dataset.id);

			cart.setCounter();

			window.dispatchEvent(new HashChangeEvent("hashchange"));
		});
	});
}
