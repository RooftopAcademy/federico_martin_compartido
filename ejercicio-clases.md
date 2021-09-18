#Ejercicio clase 15/09

###Producto

class Producto {
    constructor(nombre, precio, detalles, imgURL, clases, stockInicial) {
        this.nombre = nombre; `string`
        this.precio = precio; `number`
        this.detalles = detalles; `string`
        this.imgURL = imgURL; `string`
        this.stockInicial = stockInicial; `number`
        this.clases = clases; `array`
    }
    getData(property) {
        return this[property]
    }
}

###Header

class Header {
    constructor(clasesIcono, titulo, anchors) {
        this.clasesIcono = clasesIcono; `array`
        this.titulo = titulo; `string`
        this.anchors = anchors; `object {text: , href: }`
    }
    getAnchor() {
        return this[property]
    }
}

###Footer

class Footer {
    constructor(texto, href) {

} 
}
