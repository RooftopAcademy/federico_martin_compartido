export default function headerComponent() {
	return `
        <header>
            <div class="logo-name">
                <i class="fas fa-tshirt"></i>
                <a href="#/" class="title">MiTienda</a>
            </div>
            <div class="cart">
                <a href="#/cart"><span class="material-icons-outlined icono-cart"
                    >shopping_cart</span
                ></a>
                <span id="counter"></span>
            </div>
            <label id="hamburger" class="hamburger" for="checkmenu"
                ><i class="fas fa-bars"></i
            ></label>
            <input type="checkbox" class="checkmenu" id="checkmenu" />
            <navbar class="menu">
                <ul>
                    <li>
                        <a class="router" href="#/">Inicio</a>
                    </li>
                    <li>
                        <a class="router" href="#/shop">Productos</a>
                    </li>
                </ul>
            </navbar>
        </header>
    `;
}
