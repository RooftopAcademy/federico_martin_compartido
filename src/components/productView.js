function productView(product) {
	return `
        <div class="product">
        <img src="./images/${product.id}.jpg" class="blue-shirt" />
        <div class="product-info">
            <h2>${product.name}</h2>
            <span>$${product.price.toFixed(
				2
			)}</span><a href="details.html">Detalles</a>
            <div>
                <input
                    type="number"
                    class="cantidad"
                    name="cantidad"
                    min="0"
                    placeholder="0"
                /><button name="comprar">Comprar</button>
            </div>
        </div>
    </div>
    `;
}

//rellenar info accediendo product.
