const counter = document.getElementById("counter");
const comprarBtn = document.getElementsByName("comprar");

const store = new Store();

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
