import Store from "../entities/Store";

export default function updateCartCounter(doc: Document, store: Store) {
	const counter = doc.getElementById("counter") as HTMLElement;

	counter.innerHTML = String(store.cart.counter);
}
