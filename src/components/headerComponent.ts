export default function headerComponent() {
    return `
        <header>
            <div class="logo-name">
                <i class="fas fa-tshirt"></i>
                <h1>MiTienda</h1>
            </div>
            <div class="cart">
                <span class="material-icons-outlined icono-cart"
                    >shopping_cart</span
                >
                <span id="counter"> 0</span>
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
    `
}