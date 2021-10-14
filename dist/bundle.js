/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _entities_Store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entities/Store */ "./src/entities/Store.ts");
/* harmony import */ var _fetchProducts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchProducts */ "./src/fetchProducts.ts");
/* harmony import */ var _logic_routesCall__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic/routesCall */ "./src/logic/routesCall.ts");



var container = document.getElementById("container");
function App(container) {
    var store = new _entities_Store__WEBPACK_IMPORTED_MODULE_0__["default"]();
    store.setCatalog(_fetchProducts__WEBPACK_IMPORTED_MODULE_1__["default"]);
    function render(route) {
        var page = new ((0,_logic_routesCall__WEBPACK_IMPORTED_MODULE_2__["default"])(route))();
        page.render(container);
        page.pageScript(document);
    }
    return { render: render, store: store };
}
var app = App(container);
var store = app.store;
app.render("#/");
window.onload = function () { return (window.location.hash = "#/"); };
window.addEventListener("hashchange", function () {
    var route = window.location.hash;
    app.render(route);
});



/***/ }),

/***/ "./src/appendProduct.ts":
/*!******************************!*\
  !*** ./src/appendProduct.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ appendProduct)
/* harmony export */ });
function appendProduct(doc, product, view) {
    var productsContainer = doc.getElementById("products-container");
    productsContainer.innerHTML += view(product);
}


/***/ }),

/***/ "./src/buyBtnListeners.ts":
/*!********************************!*\
  !*** ./src/buyBtnListeners.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buyBtnListeners)
/* harmony export */ });
function buyBtnListeners(doc, store) {
    var buyBtn = Array.from(document.getElementsByClassName("comprar"));
    var counter = doc.getElementById("counter");
    buyBtn.forEach(function (button) {
        button.addEventListener("click", function (e) {
            var target = e.target;
            var quantityInput = target.previousElementSibling;
            if (!quantityInput.value) {
                alert("Elige cuántas prendas quieres comprar"); //cambiar por estilo error
                return;
            }
            var productID = Number(target.dataset.index);
            var product = store.catalog.getProduct(productID);
            store.cart.addProduct(product, Number(quantityInput.value));
            store.cart.setCounter();
            //	counter.innerHTML = String(store.cart.counter); //donde ubicar este manejo del DOM? usar el hashchange?
            window.dispatchEvent(new HashChangeEvent("hashchange"));
        });
    });
}


/***/ }),

/***/ "./src/components/cartComponent.ts":
/*!*****************************************!*\
  !*** ./src/components/cartComponent.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cartComponent)
/* harmony export */ });
/* harmony import */ var _headerComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./headerComponent */ "./src/components/headerComponent.ts");
/* harmony import */ var _footerComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footerComponent */ "./src/components/footerComponent.ts");


function cartComponent() {
    return "\n\t\t\t" + (0,_headerComponent__WEBPACK_IMPORTED_MODULE_0__["default"])() + "\n\t\t\t<article class=\"cart-container\">\n\t\t\t\t<div id=\"products-container\">\n\t\t\t\t\t<!-- JS -->\n\t\t\t\t</div>\n\t\t\t\t<button>Checkout</button>\n\t\t\t</article>\n\n\t\t\t" + (0,_footerComponent__WEBPACK_IMPORTED_MODULE_1__["default"])() + "\n        ";
}


/***/ }),

/***/ "./src/components/cartItemView.ts":
/*!****************************************!*\
  !*** ./src/components/cartItemView.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(item) {
    return "<div class=\"cart-item\">\n\t\t\t\t<div>\n\t\t\t\t\t<img src=\"" + item.product.image + "\"/>\n\t\t\t\t\t" + item.product.title + "\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t" + item.product.price + "\n\t\t\t\t\tX " + item.quantity + "\n\t\t\t\t</div>\n\t\t\t\t<button data-id=\"" + item.product.id + "\" class=\"cart-remove\">X</button>\n\t\t\t</div>";
}


/***/ }),

/***/ "./src/components/detailsComponent.ts":
/*!********************************************!*\
  !*** ./src/components/detailsComponent.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ detailsPage)
/* harmony export */ });
/* harmony import */ var _footerComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footerComponent */ "./src/components/footerComponent.ts");
/* harmony import */ var _headerComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./headerComponent */ "./src/components/headerComponent.ts");


function detailsPage(id, products) {
    var product = products.find(function (prod) { return prod.id == Number(id); });
    return "\n    " + (0,_headerComponent__WEBPACK_IMPORTED_MODULE_1__["default"])() + "\n\n        <article class=\"details-container\">\n            <img src=\"" + (product === null || product === void 0 ? void 0 : product.image) + "\" class=\"img-details\"/>\n            <div class=\"info-shop\">\n                <div class=\"name-price\">\n                    <h2 id=\"product-name\">" + (product === null || product === void 0 ? void 0 : product.title) + "</h2>\n                    <span>$" + (product === null || product === void 0 ? void 0 : product.price.toFixed(2)) + "</span>\n                </div>\n                <div>\n                    <input\n                        type=\"number\"\n                        class=\"cantidad\"\n                        name=\"cantidad\"\n                        min=\"0\"\n                        placeholder=\"0\"\n                    /><button class=\"comprar\">Comprar</button>\n                </div>\n                <hr class=\"h-line\" />\n            </div>\n            <p class=\"detalles\" id=\"details\">\n            " + (product === null || product === void 0 ? void 0 : product.description) + "\n            </p>\n        </article>\n\n    " + (0,_footerComponent__WEBPACK_IMPORTED_MODULE_0__["default"])() + "\n";
}


/***/ }),

/***/ "./src/components/footerComponent.ts":
/*!*******************************************!*\
  !*** ./src/components/footerComponent.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ footerComponent)
/* harmony export */ });
function footerComponent() {
    return "\n        <footer>\n            <a href=\"https://github.com/fl-martin\">fl-martin</a>\n        </footer>\n    ";
}


/***/ }),

/***/ "./src/components/headerComponent.ts":
/*!*******************************************!*\
  !*** ./src/components/headerComponent.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ headerComponent)
/* harmony export */ });
function headerComponent() {
    return "\n        <header>\n            <div class=\"logo-name\">\n                <i class=\"fas fa-tshirt\"></i>\n                <a href=\"#/\" class=\"title\">MiTienda</a>\n            </div>\n            <div class=\"cart\">\n                <a href=\"#/cart\"><span class=\"material-icons-outlined icono-cart\"\n                    >shopping_cart</span\n                ></a>\n                <span id=\"counter\"></span>\n            </div>\n            <label id=\"hamburger\" class=\"hamburger\" for=\"checkmenu\"\n                ><i class=\"fas fa-bars\"></i\n            ></label>\n            <input type=\"checkbox\" class=\"checkmenu\" id=\"checkmenu\" />\n            <navbar class=\"menu\">\n                <ul>\n                    <li>\n                        <a class=\"router\" href=\"#/\">Inicio</a>\n                    </li>\n                    <li>\n                        <a class=\"router\" href=\"#/shop\">Productos</a>\n                    </li>\n                </ul>\n            </navbar>\n        </header>\n    ";
}


/***/ }),

/***/ "./src/components/homeComponent.ts":
/*!*****************************************!*\
  !*** ./src/components/homeComponent.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homeComponent)
/* harmony export */ });
/* harmony import */ var _headerComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./headerComponent */ "./src/components/headerComponent.ts");
/* harmony import */ var _footerComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footerComponent */ "./src/components/footerComponent.ts");


function homeComponent() {
    return "\n\t\t\t" + (0,_headerComponent__WEBPACK_IMPORTED_MODULE_0__["default"])() + "\n\n\t\t\t<article class=\"content\">\n\t\t\t\t<div id=\"to-hover\" class=\"to-hover\">\n\t\t\t\t\t<span class=\"material-icons-outlined icono-central\" id=\"icon\">\n\t\t\t\t\t\tcheckroom\n\t\t\t\t\t</span></br>\n\t\t\t\t\t<a href=\"#/shop\" id=\"ver-productos\" class=\"fade hidden ver-productos router\"\n\t\t\t\t\t\t>Ver Listado de Productos</a\n\t\t\t\t\t>\n\t\t\t\t</div>\n\t\t\t</article>\n\n\t\t\t" + (0,_footerComponent__WEBPACK_IMPORTED_MODULE_1__["default"])() + "\n        ";
}


/***/ }),

/***/ "./src/components/productView.ts":
/*!***************************************!*\
  !*** ./src/components/productView.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ productView)
/* harmony export */ });
function productView(product) {
    return "\n        <div class=\"product\">\n            <img src=\"" + product.image + "\" class=\"img-shop\" />\n            <div class=\"product-info\">\n                <h2>" + product.title + "</h2>\n                <span>$" + product.price.toFixed(2) + "</span><a href=\"#/details/" + product.id + "\" class=\"router\">Detalles</a>\n            <div>\n            <input\n                type=\"number\"\n                class=\"cantidad\"\n                name=\"cantidad\"\n                min=\"0\"\n                placeholder=\"0\"\n            /><button class=\"comprar\" data-index=" + product.id + ">Comprar</button>\n            </div>\n            </div>\n        </div>\n";
}


/***/ }),

/***/ "./src/components/shopComponent.ts":
/*!*****************************************!*\
  !*** ./src/components/shopComponent.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ shopComponent)
/* harmony export */ });
/* harmony import */ var _footerComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footerComponent */ "./src/components/footerComponent.ts");
/* harmony import */ var _headerComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./headerComponent */ "./src/components/headerComponent.ts");


function shopComponent() {
    return "\n            " + (0,_headerComponent__WEBPACK_IMPORTED_MODULE_1__["default"])() + "\n                <div class=\"list-container\">\n                    <navbar class=\"categories-nav\">\n                      <label><input type=\"checkbox\" value=\"electronics\">Electronica</label>\n                      <label><input type=\"checkbox\" value=\"jewelery\">Joyer\u00EDa</label>\n                      <label><input type=\"checkbox\" value=\"men's clothing\">Ropa masculina</label>\n                      <label><input type=\"checkbox\" value=\"women's clothing\">Ropa femenina</label>\n                    </navbar>\n                    <article id=\"products-container\" class=\"products-container\">\n                        <navbar>\n                            <label><input type=\"checkbox\" class=\"sort-check\" value=\"title\">Title</label>\n                            <label><input type=\"checkbox\" class=\"sort-check\" value=\"price\">Price</label>\n                            <label><input type=\"checkbox\" class=\"sort-check\" value=\"category\">Category</label>\n                            <button id=\"sort\">Ordenar</button>\n                        </navbar>\n                        <!-- JS -->\n                    </article>\n                </div>\n            " + (0,_footerComponent__WEBPACK_IMPORTED_MODULE_0__["default"])() + "\n           ";
}
//checkboxes deberían estar generados dinamicamente en base a propiedades de productInterfase


/***/ }),

/***/ "./src/deleteBtnListers.ts":
/*!*********************************!*\
  !*** ./src/deleteBtnListers.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ deleteBtnListeners)
/* harmony export */ });
function deleteBtnListeners(doc, cart) {
    var buttons = doc.getElementsByClassName("cart-remove");
    Array.from(buttons).forEach(function (button) {
        button.addEventListener("click", function (e) {
            var counter = doc.getElementById("counter");
            var target = e.target;
            //como hago para evitar Property 'data' does not exist on type 'HTMLButtonElement'. si no pongo any en target?
            cart.removeProduct(target.dataset.id);
            cart.setCounter();
            window.dispatchEvent(new HashChangeEvent("hashchange"));
        });
    });
}


/***/ }),

/***/ "./src/entities/Cart.ts":
/*!******************************!*\
  !*** ./src/entities/Cart.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Cart = /** @class */ (function () {
    function Cart() {
        this.counter = 0;
        this.products = [];
    }
    Cart.prototype.setCounter = function () {
        this.counter = this.products.reduce(function (a, b) {
            return a + b.quantity;
        }, 0);
    };
    Cart.prototype.addProduct = function (product, quantity) {
        if (this.products.some(function (prod) { return prod.product.id == product.id; })) {
            var index = this.products.findIndex(function (prod) { return prod.product == product; });
            this.products[index].quantity += quantity;
            return;
        }
        this.products.push({ product: product, quantity: quantity });
    };
    Cart.prototype.removeProduct = function (id) {
        var _a;
        var index = this.products.findIndex(function (item) { return item.product.id == id; });
        if (((_a = this.products[index]) === null || _a === void 0 ? void 0 : _a.quantity) == 1) {
            this.products.splice(index, 1);
            return;
        }
        this.products[index].quantity -= 1;
    };
    return Cart;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);
//cuando el boton desaparezca del dom, no va a existir este problema, pero en este contexto si. Deberia estar la funcion remove
//cubierta ante la situacion de que !this.products[index]? leia 35


/***/ }),

/***/ "./src/entities/Catalog.ts":
/*!*********************************!*\
  !*** ./src/entities/Catalog.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List */ "./src/entities/List.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CatalogList = /** @class */ (function (_super) {
    __extends(CatalogList, _super);
    function CatalogList() {
        var _this = _super.call(this) || this;
        _this._products = [];
        _this._activeCategories = {
            electronics: false,
            jewelery: false,
            "men's clothing": false,
            "women's clothing": false,
        };
        return _this;
    }
    Object.defineProperty(CatalogList.prototype, "products", {
        get: function () {
            return this._products;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CatalogList.prototype, "activeCategories", {
        get: function () {
            return this._activeCategories;
        },
        enumerable: false,
        configurable: true
    });
    CatalogList.prototype.setCategories = function (category) {
        this.activeCategories[category]
            ? (this.activeCategories[category] = false)
            : (this.activeCategories[category] = true);
        console.log(this.activeCategories);
    };
    CatalogList.prototype.getProduct = function (id) {
        return this.products.find(function (prod) { return prod.id == id; });
    };
    CatalogList.prototype.addProducts = function (product) {
        this.products.push(product);
    };
    return CatalogList;
}(_List__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CatalogList);


/***/ }),

/***/ "./src/entities/List.ts":
/*!******************************!*\
  !*** ./src/entities/List.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var List = /** @class */ (function () {
    function List() {
        this.obj = {};
        this.cache = new Map();
    }
    List.prototype.setSorting = function (obj) {
        var _this = this;
        if (obj === void 0) { obj = {}; }
        this.obj = obj;
        if (this.cache.has(obj))
            return;
        var temp = __spreadArray([], this._products, true);
        var keys = Object.keys(obj);
        keys.forEach(function (key) {
            _this.sortByKey(temp, key);
        });
        this.cache.set(obj, temp);
    };
    List.prototype.sortBy = function (a, b, key) {
        if (a[key] > b[key]) {
            return 1;
        }
        if (a[key] < b[key]) {
            return -1;
        }
        return 0;
    };
    List.prototype.sortByKey = function (temp, key) {
        var _this = this;
        temp.sort(function (a, b) {
            return _this.sortBy(a, b, key);
        });
    };
    List.prototype.getSortedItems = function () {
        return this.cache.get(this.obj);
    };
    return List;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (List);
//temp como argumento, mutando mediante sort
//linea 28, tipado de argumentos a y b?
//tipado, deberia ser agnostico respecto al tipo de objeto (prductInterfase)?


/***/ }),

/***/ "./src/entities/Product.ts":
/*!*********************************!*\
  !*** ./src/entities/Product.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Product = /** @class */ (function () {
    function Product() {
    }
    Product.prototype.getTitle = function () {
        return this.title;
    };
    Product.prototype.getCategory = function () {
        return this.category;
    };
    Product.prototype.getPrice = function () {
        return this.price;
    };
    Product.prototype.getID = function () {
        return this.id;
    };
    Product.prototype.getDescription = function () {
        return this.description;
    };
    Product.prototype.getImage = function () {
        return this.image;
    };
    return Product;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);
//AL USAR LA INTERFACE BORRE LOS _ Y REFORMULE GETTERS, ESTA OK?
//BORRE SETTERS EN BASE A Note that a field-backed get/set pair with no extra logic
//is very rarely useful in JavaScript. It’s fine to expose public fields if
//you don’t need to add additional logic during the get/set operations.


/***/ }),

/***/ "./src/entities/SortObject.ts":
/*!************************************!*\
  !*** ./src/entities/SortObject.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var SortObject = /** @class */ (function () {
    function SortObject() {
    }
    return SortObject;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SortObject);


/***/ }),

/***/ "./src/entities/Store.ts":
/*!*******************************!*\
  !*** ./src/entities/Store.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product */ "./src/entities/Product.ts");
/* harmony import */ var _Catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Catalog */ "./src/entities/Catalog.ts");
/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cart */ "./src/entities/Cart.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var Store = /** @class */ (function () {
    function Store() {
        this._cart = new _Cart__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this._catalog = new _Catalog__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
    Object.defineProperty(Store.prototype, "cart", {
        get: function () {
            return this._cart;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "catalog", {
        get: function () {
            return this._catalog;
        },
        enumerable: false,
        configurable: true
    });
    Store.prototype.setCatalog = function (fetchFunction) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetchFunction()];
                    case 1:
                        data = _a.sent();
                        data.forEach(function (item) {
                            var product = new _Product__WEBPACK_IMPORTED_MODULE_0__["default"]();
                            product.title = item.title;
                            product.category = item.category;
                            product.id = item.id;
                            product.price = item.price;
                            product.description = item.description;
                            product.image = item.image;
                            _this._catalog.addProducts(product);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    return Store;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Store);
// de que modo vincular el catalogo a la carta? como arguemento de sus metodos o de su constructor?


/***/ }),

/***/ "./src/fetchProducts.ts":
/*!******************************!*\
  !*** ./src/fetchProducts.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ fetchProducts)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function fetchProducts() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://fakestoreapi.com/products").then(function (res) { return res.json(); })];
                case 1:
                    data = _a.sent();
                    console.log("fetched");
                    //PRUEBA
                    /*	let sort = {
                        id: 1,
                        title: 1,
                        price: 1,
                        category: 1,
                    };
                    setTimeout(() => {
                        store.catalog.setSorting(sort);
                    }, 5000);
                    setTimeout(() => {
                        console.log(store.catalog.getSortedItems());
                    }, 5000);*/
                    //
                    return [2 /*return*/, data];
            }
        });
    });
}


/***/ }),

/***/ "./src/logic/routesCall.ts":
/*!*********************************!*\
  !*** ./src/logic/routesCall.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ routesCall)
/* harmony export */ });
/* harmony import */ var _pages_HomePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/HomePage */ "./src/pages/HomePage.ts");
/* harmony import */ var _pages_ShopPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/ShopPage */ "./src/pages/ShopPage.ts");
/* harmony import */ var _useParams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../useParams */ "./src/useParams.ts");
/* harmony import */ var _pages_DetailsPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/DetailsPage */ "./src/pages/DetailsPage.ts");
/* harmony import */ var _pages_CartPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/CartPage */ "./src/pages/CartPage.ts");





function routesCall(url) {
    var path = (0,_useParams__WEBPACK_IMPORTED_MODULE_2__["default"])().path;
    var routes = {
        "": _pages_HomePage__WEBPACK_IMPORTED_MODULE_0__["default"],
        "#/": _pages_HomePage__WEBPACK_IMPORTED_MODULE_0__["default"],
        "#/shop": _pages_ShopPage__WEBPACK_IMPORTED_MODULE_1__["default"],
        "#/details": _pages_DetailsPage__WEBPACK_IMPORTED_MODULE_3__["default"],
        "#/cart": _pages_CartPage__WEBPACK_IMPORTED_MODULE_4__["default"],
        // "/404": () => errorPage(),
    };
    // if (!routes[path]) {
    // 	return routes["/404"];
    // }
    return routes[path];
}


/***/ }),

/***/ "./src/pages/CartPage.ts":
/*!*******************************!*\
  !*** ./src/pages/CartPage.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_cartComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/cartComponent */ "./src/components/cartComponent.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app */ "./src/app.ts");
/* harmony import */ var _appendProduct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../appendProduct */ "./src/appendProduct.ts");
/* harmony import */ var _components_cartItemView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/cartItemView */ "./src/components/cartItemView.ts");
/* harmony import */ var _updateCartCounter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../updateCartCounter */ "./src/updateCartCounter.ts");
/* harmony import */ var _deleteBtnListers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../deleteBtnListers */ "./src/deleteBtnListers.ts");






var CartPage = /** @class */ (function () {
    function CartPage() {
    }
    CartPage.prototype.render = function (c) {
        c.innerHTML = (0,_components_cartComponent__WEBPACK_IMPORTED_MODULE_0__["default"])();
    };
    CartPage.prototype.pageScript = function () {
        //extraer junto a ShopPage
        _app__WEBPACK_IMPORTED_MODULE_1__.store.cart.products.forEach(function (product) {
            (0,_appendProduct__WEBPACK_IMPORTED_MODULE_2__["default"])(document, product, _components_cartItemView__WEBPACK_IMPORTED_MODULE_3__["default"]);
        });
        (0,_deleteBtnListers__WEBPACK_IMPORTED_MODULE_5__["default"])(document, _app__WEBPACK_IMPORTED_MODULE_1__.store.cart);
        (0,_updateCartCounter__WEBPACK_IMPORTED_MODULE_4__["default"])(document, _app__WEBPACK_IMPORTED_MODULE_1__.store);
        //update lista de productos DOM
    };
    return CartPage;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartPage);


/***/ }),

/***/ "./src/pages/DetailsPage.ts":
/*!**********************************!*\
  !*** ./src/pages/DetailsPage.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_detailsComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/detailsComponent */ "./src/components/detailsComponent.ts");
/* harmony import */ var _useParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../useParams */ "./src/useParams.ts");
/* harmony import */ var _buyBtnListeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buyBtnListeners */ "./src/buyBtnListeners.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app */ "./src/app.ts");
/* harmony import */ var _updateCartCounter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../updateCartCounter */ "./src/updateCartCounter.ts");





var DetailsPage = /** @class */ (function () {
    function DetailsPage() {
    }
    DetailsPage.prototype.render = function (c) {
        var productID = (0,_useParams__WEBPACK_IMPORTED_MODULE_1__["default"])().productID;
        c.innerHTML = (0,_components_detailsComponent__WEBPACK_IMPORTED_MODULE_0__["default"])(productID, _app__WEBPACK_IMPORTED_MODULE_3__.store.catalog.products);
    };
    DetailsPage.prototype.pageScript = function (d) {
        (0,_buyBtnListeners__WEBPACK_IMPORTED_MODULE_2__["default"])(document, _app__WEBPACK_IMPORTED_MODULE_3__.store);
        (0,_updateCartCounter__WEBPACK_IMPORTED_MODULE_4__["default"])(document, _app__WEBPACK_IMPORTED_MODULE_3__.store);
    };
    return DetailsPage;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DetailsPage);


/***/ }),

/***/ "./src/pages/HomePage.ts":
/*!*******************************!*\
  !*** ./src/pages/HomePage.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_homeComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/homeComponent */ "./src/components/homeComponent.ts");
/* harmony import */ var _updateCartCounter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../updateCartCounter */ "./src/updateCartCounter.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app */ "./src/app.ts");



var HomePage = /** @class */ (function () {
    function HomePage() {
    }
    HomePage.prototype.render = function (c) {
        c.innerHTML = (0,_components_homeComponent__WEBPACK_IMPORTED_MODULE_0__["default"])();
    };
    HomePage.prototype.pageScript = function (d) {
        var verProductos = d.getElementById("ver-productos");
        var hoverItems = d.getElementById("to-hover");
        hoverItems.addEventListener("mouseenter", function () {
            verProductos.classList.add("visible");
        });
        hoverItems.addEventListener("mouseleave", function () {
            verProductos.classList.remove("visible");
        });
        (0,_updateCartCounter__WEBPACK_IMPORTED_MODULE_1__["default"])(document, _app__WEBPACK_IMPORTED_MODULE_2__.store);
    };
    return HomePage;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);


/***/ }),

/***/ "./src/pages/ShopPage.ts":
/*!*******************************!*\
  !*** ./src/pages/ShopPage.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_shopComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/shopComponent */ "./src/components/shopComponent.ts");
/* harmony import */ var _buyBtnListeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../buyBtnListeners */ "./src/buyBtnListeners.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app */ "./src/app.ts");
/* harmony import */ var _updateCartCounter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../updateCartCounter */ "./src/updateCartCounter.ts");
/* harmony import */ var _renderList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../renderList */ "./src/renderList.ts");
/* harmony import */ var _sortBtnListeners__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sortBtnListeners */ "./src/sortBtnListeners.ts");






var ShopPage = /** @class */ (function () {
    function ShopPage() {
    }
    ShopPage.prototype.render = function (c) {
        c.innerHTML = (0,_components_shopComponent__WEBPACK_IMPORTED_MODULE_0__["default"])();
    };
    ShopPage.prototype.pageScript = function () {
        (0,_renderList__WEBPACK_IMPORTED_MODULE_4__["default"])(_app__WEBPACK_IMPORTED_MODULE_2__.store.catalog);
        (0,_buyBtnListeners__WEBPACK_IMPORTED_MODULE_1__["default"])(document, _app__WEBPACK_IMPORTED_MODULE_2__.store);
        (0,_sortBtnListeners__WEBPACK_IMPORTED_MODULE_5__["default"])(document, _app__WEBPACK_IMPORTED_MODULE_2__.store.catalog);
        (0,_updateCartCounter__WEBPACK_IMPORTED_MODULE_3__["default"])(document, _app__WEBPACK_IMPORTED_MODULE_2__.store);
    };
    return ShopPage;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShopPage);


/***/ }),

/***/ "./src/renderList.ts":
/*!***************************!*\
  !*** ./src/renderList.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderList)
/* harmony export */ });
/* harmony import */ var _appendProduct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appendProduct */ "./src/appendProduct.ts");
/* harmony import */ var _components_productView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/productView */ "./src/components/productView.ts");


function renderList(catalog) {
    var sortedItems;
    sortedItems = catalog.getSortedItems();
    if (!sortedItems)
        sortedItems = catalog.products;
    sortedItems.forEach(function (product) {
        //		if (catalog.activeCategories[product.category]) {
        (0,_appendProduct__WEBPACK_IMPORTED_MODULE_0__["default"])(document, product, _components_productView__WEBPACK_IMPORTED_MODULE_1__["default"]);
        //		}
    });
}


/***/ }),

/***/ "./src/sortBtnListeners.ts":
/*!*********************************!*\
  !*** ./src/sortBtnListeners.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sortBtnListeners)
/* harmony export */ });
/* harmony import */ var _entities_SortObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entities/SortObject */ "./src/entities/SortObject.ts");

function sortBtnListeners(doc, catalog) {
    var sortCheck = Array.from(document.getElementsByClassName("sort-check"));
    var sortBtn = document.getElementById("sort");
    sortBtn.addEventListener("click", function () {
        var sortObject = new _entities_SortObject__WEBPACK_IMPORTED_MODULE_0__["default"]();
        sortCheck.forEach(function (box) {
            var key = box.value;
            if (box.checked)
                sortObject[key] = 1;
        });
        catalog.setSorting(sortObject);
        window.dispatchEvent(new HashChangeEvent("hashchange"));
    });
}
//despues debera window.dispatchEvent(new HashChangeEvent("hashchange")); o importar metodo render?
//clase sortObject en base a product? o interfaz? o type?


/***/ }),

/***/ "./src/updateCartCounter.ts":
/*!**********************************!*\
  !*** ./src/updateCartCounter.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateCartCounter)
/* harmony export */ });
function updateCartCounter(doc, store) {
    var counter = doc.getElementById("counter");
    counter.innerHTML = String(store.cart.counter);
}


/***/ }),

/***/ "./src/useParams.ts":
/*!**************************!*\
  !*** ./src/useParams.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useParams)
/* harmony export */ });
function useParams() {
    var url = window.location.hash;
    var splited = url.split("/");
    var productID = splited[2];
    var path = splited.slice(0, 2).join("/");
    return { path: path, productID: productID };
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0EsYUFBYTtBQUNiOzs7Ozs7O1VDTkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby8uL3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vLi9zcmMvYXBwZW5kUHJvZHVjdC50cyIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby8uL3NyYy9idXlCdG5MaXN0ZW5lcnMudHMiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vLi9zcmMvY29tcG9uZW50cy9jYXJ0Q29tcG9uZW50LnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL2NvbXBvbmVudHMvY2FydEl0ZW1WaWV3LnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL2NvbXBvbmVudHMvZGV0YWlsc0NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby8uL3NyYy9jb21wb25lbnRzL2Zvb3RlckNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby8uL3NyYy9jb21wb25lbnRzL2hlYWRlckNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby8uL3NyYy9jb21wb25lbnRzL2hvbWVDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vLi9zcmMvY29tcG9uZW50cy9wcm9kdWN0Vmlldy50cyIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby8uL3NyYy9jb21wb25lbnRzL3Nob3BDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vLi9zcmMvZGVsZXRlQnRuTGlzdGVycy50cyIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby8uL3NyYy9lbnRpdGllcy9DYXJ0LnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL2VudGl0aWVzL0NhdGFsb2cudHMiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vLi9zcmMvZW50aXRpZXMvTGlzdC50cyIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby8uL3NyYy9lbnRpdGllcy9Qcm9kdWN0LnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL2VudGl0aWVzL1NvcnRPYmplY3QudHMiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vLi9zcmMvZW50aXRpZXMvU3RvcmUudHMiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vLi9zcmMvZmV0Y2hQcm9kdWN0cy50cyIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby8uL3NyYy9sb2dpYy9yb3V0ZXNDYWxsLnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL3BhZ2VzL0NhcnRQYWdlLnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL3BhZ2VzL0RldGFpbHNQYWdlLnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL3BhZ2VzL0hvbWVQYWdlLnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL3BhZ2VzL1Nob3BQYWdlLnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL3JlbmRlckxpc3QudHMiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vLi9zcmMvc29ydEJ0bkxpc3RlbmVycy50cyIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby8uL3NyYy91cGRhdGVDYXJ0Q291bnRlci50cyIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby8uL3NyYy91c2VQYXJhbXMudHMiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0b3JlIGZyb20gXCIuL2VudGl0aWVzL1N0b3JlXCI7XG5pbXBvcnQgZmV0Y2hQcm9kdWN0cyBmcm9tIFwiLi9mZXRjaFByb2R1Y3RzXCI7XG5pbXBvcnQgZ2V0UGFnZSBmcm9tIFwiLi9sb2dpYy9yb3V0ZXNDYWxsXCI7XG52YXIgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWluZXJcIik7XG5mdW5jdGlvbiBBcHAoY29udGFpbmVyKSB7XG4gICAgdmFyIHN0b3JlID0gbmV3IFN0b3JlKCk7XG4gICAgc3RvcmUuc2V0Q2F0YWxvZyhmZXRjaFByb2R1Y3RzKTtcbiAgICBmdW5jdGlvbiByZW5kZXIocm91dGUpIHtcbiAgICAgICAgdmFyIHBhZ2UgPSBuZXcgKGdldFBhZ2Uocm91dGUpKSgpO1xuICAgICAgICBwYWdlLnJlbmRlcihjb250YWluZXIpO1xuICAgICAgICBwYWdlLnBhZ2VTY3JpcHQoZG9jdW1lbnQpO1xuICAgIH1cbiAgICByZXR1cm4geyByZW5kZXI6IHJlbmRlciwgc3RvcmU6IHN0b3JlIH07XG59XG52YXIgYXBwID0gQXBwKGNvbnRhaW5lcik7XG52YXIgc3RvcmUgPSBhcHAuc3RvcmU7XG5hcHAucmVuZGVyKFwiIy9cIik7XG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gKHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gXCIjL1wiKTsgfTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJvdXRlID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XG4gICAgYXBwLnJlbmRlcihyb3V0ZSk7XG59KTtcbmV4cG9ydCB7IHN0b3JlIH07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcHBlbmRQcm9kdWN0KGRvYywgcHJvZHVjdCwgdmlldykge1xuICAgIHZhciBwcm9kdWN0c0NvbnRhaW5lciA9IGRvYy5nZXRFbGVtZW50QnlJZChcInByb2R1Y3RzLWNvbnRhaW5lclwiKTtcbiAgICBwcm9kdWN0c0NvbnRhaW5lci5pbm5lckhUTUwgKz0gdmlldyhwcm9kdWN0KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1eUJ0bkxpc3RlbmVycyhkb2MsIHN0b3JlKSB7XG4gICAgdmFyIGJ1eUJ0biA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNvbXByYXJcIikpO1xuICAgIHZhciBjb3VudGVyID0gZG9jLmdldEVsZW1lbnRCeUlkKFwiY291bnRlclwiKTtcbiAgICBidXlCdG4uZm9yRWFjaChmdW5jdGlvbiAoYnV0dG9uKSB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgICAgIHZhciBxdWFudGl0eUlucHV0ID0gdGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgICBpZiAoIXF1YW50aXR5SW5wdXQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICBhbGVydChcIkVsaWdlIGN1w6FudGFzIHByZW5kYXMgcXVpZXJlcyBjb21wcmFyXCIpOyAvL2NhbWJpYXIgcG9yIGVzdGlsbyBlcnJvclxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBwcm9kdWN0SUQgPSBOdW1iZXIodGFyZ2V0LmRhdGFzZXQuaW5kZXgpO1xuICAgICAgICAgICAgdmFyIHByb2R1Y3QgPSBzdG9yZS5jYXRhbG9nLmdldFByb2R1Y3QocHJvZHVjdElEKTtcbiAgICAgICAgICAgIHN0b3JlLmNhcnQuYWRkUHJvZHVjdChwcm9kdWN0LCBOdW1iZXIocXVhbnRpdHlJbnB1dC52YWx1ZSkpO1xuICAgICAgICAgICAgc3RvcmUuY2FydC5zZXRDb3VudGVyKCk7XG4gICAgICAgICAgICAvL1x0Y291bnRlci5pbm5lckhUTUwgPSBTdHJpbmcoc3RvcmUuY2FydC5jb3VudGVyKTsgLy9kb25kZSB1YmljYXIgZXN0ZSBtYW5lam8gZGVsIERPTT8gdXNhciBlbCBoYXNoY2hhbmdlP1xuICAgICAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEhhc2hDaGFuZ2VFdmVudChcImhhc2hjaGFuZ2VcIikpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCBoZWFkZXJDb21wb25lbnQgZnJvbSBcIi4vaGVhZGVyQ29tcG9uZW50XCI7XG5pbXBvcnQgZm9vdGVyQ29tcG9uZW50IGZyb20gXCIuL2Zvb3RlckNvbXBvbmVudFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FydENvbXBvbmVudCgpIHtcbiAgICByZXR1cm4gXCJcXG5cXHRcXHRcXHRcIiArIGhlYWRlckNvbXBvbmVudCgpICsgXCJcXG5cXHRcXHRcXHQ8YXJ0aWNsZSBjbGFzcz1cXFwiY2FydC1jb250YWluZXJcXFwiPlxcblxcdFxcdFxcdFxcdDxkaXYgaWQ9XFxcInByb2R1Y3RzLWNvbnRhaW5lclxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0PCEtLSBKUyAtLT5cXG5cXHRcXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHRcXHQ8YnV0dG9uPkNoZWNrb3V0PC9idXR0b24+XFxuXFx0XFx0XFx0PC9hcnRpY2xlPlxcblxcblxcdFxcdFxcdFwiICsgZm9vdGVyQ29tcG9uZW50KCkgKyBcIlxcbiAgICAgICAgXCI7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoaXRlbSkge1xuICAgIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcImNhcnQtaXRlbVxcXCI+XFxuXFx0XFx0XFx0XFx0PGRpdj5cXG5cXHRcXHRcXHRcXHRcXHQ8aW1nIHNyYz1cXFwiXCIgKyBpdGVtLnByb2R1Y3QuaW1hZ2UgKyBcIlxcXCIvPlxcblxcdFxcdFxcdFxcdFxcdFwiICsgaXRlbS5wcm9kdWN0LnRpdGxlICsgXCJcXG5cXHRcXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHRcXHQ8ZGl2PlxcblxcdFxcdFxcdFxcdFxcdFwiICsgaXRlbS5wcm9kdWN0LnByaWNlICsgXCJcXG5cXHRcXHRcXHRcXHRcXHRYIFwiICsgaXRlbS5xdWFudGl0eSArIFwiXFxuXFx0XFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0XFx0XFx0PGJ1dHRvbiBkYXRhLWlkPVxcXCJcIiArIGl0ZW0ucHJvZHVjdC5pZCArIFwiXFxcIiBjbGFzcz1cXFwiY2FydC1yZW1vdmVcXFwiPlg8L2J1dHRvbj5cXG5cXHRcXHRcXHQ8L2Rpdj5cIjtcbn1cbiIsImltcG9ydCBmb290ZXJDb21wb25lbnQgZnJvbSBcIi4vZm9vdGVyQ29tcG9uZW50XCI7XG5pbXBvcnQgaGVhZGVyQ29tcG9uZW50IGZyb20gXCIuL2hlYWRlckNvbXBvbmVudFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGV0YWlsc1BhZ2UoaWQsIHByb2R1Y3RzKSB7XG4gICAgdmFyIHByb2R1Y3QgPSBwcm9kdWN0cy5maW5kKGZ1bmN0aW9uIChwcm9kKSB7IHJldHVybiBwcm9kLmlkID09IE51bWJlcihpZCk7IH0pO1xuICAgIHJldHVybiBcIlxcbiAgICBcIiArIGhlYWRlckNvbXBvbmVudCgpICsgXCJcXG5cXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzPVxcXCJkZXRhaWxzLWNvbnRhaW5lclxcXCI+XFxuICAgICAgICAgICAgPGltZyBzcmM9XFxcIlwiICsgKHByb2R1Y3QgPT09IG51bGwgfHwgcHJvZHVjdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJvZHVjdC5pbWFnZSkgKyBcIlxcXCIgY2xhc3M9XFxcImltZy1kZXRhaWxzXFxcIi8+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5mby1zaG9wXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZS1wcmljZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aDIgaWQ9XFxcInByb2R1Y3QtbmFtZVxcXCI+XCIgKyAocHJvZHVjdCA9PT0gbnVsbCB8fCBwcm9kdWN0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9kdWN0LnRpdGxlKSArIFwiPC9oMj5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiRcIiArIChwcm9kdWN0ID09PSBudWxsIHx8IHByb2R1Y3QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb2R1Y3QucHJpY2UudG9GaXhlZCgyKSkgKyBcIjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVxcXCJudW1iZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImNhbnRpZGFkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XFxcImNhbnRpZGFkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbj1cXFwiMFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiMFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIC8+PGJ1dHRvbiBjbGFzcz1cXFwiY29tcHJhclxcXCI+Q29tcHJhcjwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGhyIGNsYXNzPVxcXCJoLWxpbmVcXFwiIC8+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPHAgY2xhc3M9XFxcImRldGFsbGVzXFxcIiBpZD1cXFwiZGV0YWlsc1xcXCI+XFxuICAgICAgICAgICAgXCIgKyAocHJvZHVjdCA9PT0gbnVsbCB8fCBwcm9kdWN0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9kdWN0LmRlc2NyaXB0aW9uKSArIFwiXFxuICAgICAgICAgICAgPC9wPlxcbiAgICAgICAgPC9hcnRpY2xlPlxcblxcbiAgICBcIiArIGZvb3RlckNvbXBvbmVudCgpICsgXCJcXG5cIjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvb3RlckNvbXBvbmVudCgpIHtcbiAgICByZXR1cm4gXCJcXG4gICAgICAgIDxmb290ZXI+XFxuICAgICAgICAgICAgPGEgaHJlZj1cXFwiaHR0cHM6Ly9naXRodWIuY29tL2ZsLW1hcnRpblxcXCI+ZmwtbWFydGluPC9hPlxcbiAgICAgICAgPC9mb290ZXI+XFxuICAgIFwiO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVhZGVyQ29tcG9uZW50KCkge1xuICAgIHJldHVybiBcIlxcbiAgICAgICAgPGhlYWRlcj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsb2dvLW5hbWVcXFwiPlxcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmFzIGZhLXRzaGlydFxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjL1xcXCIgY2xhc3M9XFxcInRpdGxlXFxcIj5NaVRpZW5kYTwvYT5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJ0XFxcIj5cXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiIy9jYXJ0XFxcIj48c3BhbiBjbGFzcz1cXFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgaWNvbm8tY2FydFxcXCJcXG4gICAgICAgICAgICAgICAgICAgID5zaG9wcGluZ19jYXJ0PC9zcGFuXFxuICAgICAgICAgICAgICAgID48L2E+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPVxcXCJjb3VudGVyXFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGxhYmVsIGlkPVxcXCJoYW1idXJnZXJcXFwiIGNsYXNzPVxcXCJoYW1idXJnZXJcXFwiIGZvcj1cXFwiY2hlY2ttZW51XFxcIlxcbiAgICAgICAgICAgICAgICA+PGkgY2xhc3M9XFxcImZhcyBmYS1iYXJzXFxcIj48L2lcXG4gICAgICAgICAgICA+PC9sYWJlbD5cXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGNsYXNzPVxcXCJjaGVja21lbnVcXFwiIGlkPVxcXCJjaGVja21lbnVcXFwiIC8+XFxuICAgICAgICAgICAgPG5hdmJhciBjbGFzcz1cXFwibWVudVxcXCI+XFxuICAgICAgICAgICAgICAgIDx1bD5cXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwicm91dGVyXFxcIiBocmVmPVxcXCIjL1xcXCI+SW5pY2lvPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwicm91dGVyXFxcIiBocmVmPVxcXCIjL3Nob3BcXFwiPlByb2R1Y3RvczwvYT5cXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgIDwvdWw+XFxuICAgICAgICAgICAgPC9uYXZiYXI+XFxuICAgICAgICA8L2hlYWRlcj5cXG4gICAgXCI7XG59XG4iLCJpbXBvcnQgaGVhZGVyQ29tcG9uZW50IGZyb20gXCIuL2hlYWRlckNvbXBvbmVudFwiO1xuaW1wb3J0IGZvb3RlckNvbXBvbmVudCBmcm9tIFwiLi9mb290ZXJDb21wb25lbnRcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWVDb21wb25lbnQoKSB7XG4gICAgcmV0dXJuIFwiXFxuXFx0XFx0XFx0XCIgKyBoZWFkZXJDb21wb25lbnQoKSArIFwiXFxuXFxuXFx0XFx0XFx0PGFydGljbGUgY2xhc3M9XFxcImNvbnRlbnRcXFwiPlxcblxcdFxcdFxcdFxcdDxkaXYgaWQ9XFxcInRvLWhvdmVyXFxcIiBjbGFzcz1cXFwidG8taG92ZXJcXFwiPlxcblxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBpY29uby1jZW50cmFsXFxcIiBpZD1cXFwiaWNvblxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0Y2hlY2tyb29tXFxuXFx0XFx0XFx0XFx0XFx0PC9zcGFuPjwvYnI+XFxuXFx0XFx0XFx0XFx0XFx0PGEgaHJlZj1cXFwiIy9zaG9wXFxcIiBpZD1cXFwidmVyLXByb2R1Y3Rvc1xcXCIgY2xhc3M9XFxcImZhZGUgaGlkZGVuIHZlci1wcm9kdWN0b3Mgcm91dGVyXFxcIlxcblxcdFxcdFxcdFxcdFxcdFxcdD5WZXIgTGlzdGFkbyBkZSBQcm9kdWN0b3M8L2FcXG5cXHRcXHRcXHRcXHRcXHQ+XFxuXFx0XFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0XFx0PC9hcnRpY2xlPlxcblxcblxcdFxcdFxcdFwiICsgZm9vdGVyQ29tcG9uZW50KCkgKyBcIlxcbiAgICAgICAgXCI7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9kdWN0Vmlldyhwcm9kdWN0KSB7XG4gICAgcmV0dXJuIFwiXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9kdWN0XFxcIj5cXG4gICAgICAgICAgICA8aW1nIHNyYz1cXFwiXCIgKyBwcm9kdWN0LmltYWdlICsgXCJcXFwiIGNsYXNzPVxcXCJpbWctc2hvcFxcXCIgLz5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9kdWN0LWluZm9cXFwiPlxcbiAgICAgICAgICAgICAgICA8aDI+XCIgKyBwcm9kdWN0LnRpdGxlICsgXCI8L2gyPlxcbiAgICAgICAgICAgICAgICA8c3Bhbj4kXCIgKyBwcm9kdWN0LnByaWNlLnRvRml4ZWQoMikgKyBcIjwvc3Bhbj48YSBocmVmPVxcXCIjL2RldGFpbHMvXCIgKyBwcm9kdWN0LmlkICsgXCJcXFwiIGNsYXNzPVxcXCJyb3V0ZXJcXFwiPkRldGFsbGVzPC9hPlxcbiAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgPGlucHV0XFxuICAgICAgICAgICAgICAgIHR5cGU9XFxcIm51bWJlclxcXCJcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcImNhbnRpZGFkXFxcIlxcbiAgICAgICAgICAgICAgICBuYW1lPVxcXCJjYW50aWRhZFxcXCJcXG4gICAgICAgICAgICAgICAgbWluPVxcXCIwXFxcIlxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiMFxcXCJcXG4gICAgICAgICAgICAvPjxidXR0b24gY2xhc3M9XFxcImNvbXByYXJcXFwiIGRhdGEtaW5kZXg9XCIgKyBwcm9kdWN0LmlkICsgXCI+Q29tcHJhcjwvYnV0dG9uPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuXCI7XG59XG4iLCJpbXBvcnQgZm9vdGVyQ29tcG9uZW50IGZyb20gXCIuL2Zvb3RlckNvbXBvbmVudFwiO1xuaW1wb3J0IGhlYWRlckNvbXBvbmVudCBmcm9tIFwiLi9oZWFkZXJDb21wb25lbnRcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNob3BDb21wb25lbnQoKSB7XG4gICAgcmV0dXJuIFwiXFxuICAgICAgICAgICAgXCIgKyBoZWFkZXJDb21wb25lbnQoKSArIFwiXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxpc3QtY29udGFpbmVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxuYXZiYXIgY2xhc3M9XFxcImNhdGVnb3JpZXMtbmF2XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgdmFsdWU9XFxcImVsZWN0cm9uaWNzXFxcIj5FbGVjdHJvbmljYTwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIHZhbHVlPVxcXCJqZXdlbGVyeVxcXCI+Sm95ZXJcXHUwMEVEYTwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIHZhbHVlPVxcXCJtZW4ncyBjbG90aGluZ1xcXCI+Um9wYSBtYXNjdWxpbmE8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiB2YWx1ZT1cXFwid29tZW4ncyBjbG90aGluZ1xcXCI+Um9wYSBmZW1lbmluYTwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8L25hdmJhcj5cXG4gICAgICAgICAgICAgICAgICAgIDxhcnRpY2xlIGlkPVxcXCJwcm9kdWN0cy1jb250YWluZXJcXFwiIGNsYXNzPVxcXCJwcm9kdWN0cy1jb250YWluZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuYXZiYXI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGNsYXNzPVxcXCJzb3J0LWNoZWNrXFxcIiB2YWx1ZT1cXFwidGl0bGVcXFwiPlRpdGxlPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgY2xhc3M9XFxcInNvcnQtY2hlY2tcXFwiIHZhbHVlPVxcXCJwcmljZVxcXCI+UHJpY2U8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBjbGFzcz1cXFwic29ydC1jaGVja1xcXCIgdmFsdWU9XFxcImNhdGVnb3J5XFxcIj5DYXRlZ29yeTwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XFxcInNvcnRcXFwiPk9yZGVuYXI8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25hdmJhcj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIEpTIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICBcIiArIGZvb3RlckNvbXBvbmVudCgpICsgXCJcXG4gICAgICAgICAgIFwiO1xufVxuLy9jaGVja2JveGVzIGRlYmVyw61hbiBlc3RhciBnZW5lcmFkb3MgZGluYW1pY2FtZW50ZSBlbiBiYXNlIGEgcHJvcGllZGFkZXMgZGUgcHJvZHVjdEludGVyZmFzZVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVsZXRlQnRuTGlzdGVuZXJzKGRvYywgY2FydCkge1xuICAgIHZhciBidXR0b25zID0gZG9jLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjYXJ0LXJlbW92ZVwiKTtcbiAgICBBcnJheS5mcm9tKGJ1dHRvbnMpLmZvckVhY2goZnVuY3Rpb24gKGJ1dHRvbikge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgY291bnRlciA9IGRvYy5nZXRFbGVtZW50QnlJZChcImNvdW50ZXJcIik7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICAvL2NvbW8gaGFnbyBwYXJhIGV2aXRhciBQcm9wZXJ0eSAnZGF0YScgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSAnSFRNTEJ1dHRvbkVsZW1lbnQnLiBzaSBubyBwb25nbyBhbnkgZW4gdGFyZ2V0P1xuICAgICAgICAgICAgY2FydC5yZW1vdmVQcm9kdWN0KHRhcmdldC5kYXRhc2V0LmlkKTtcbiAgICAgICAgICAgIGNhcnQuc2V0Q291bnRlcigpO1xuICAgICAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEhhc2hDaGFuZ2VFdmVudChcImhhc2hjaGFuZ2VcIikpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbiIsInZhciBDYXJ0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENhcnQoKSB7XG4gICAgICAgIHRoaXMuY291bnRlciA9IDA7XG4gICAgICAgIHRoaXMucHJvZHVjdHMgPSBbXTtcbiAgICB9XG4gICAgQ2FydC5wcm90b3R5cGUuc2V0Q291bnRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jb3VudGVyID0gdGhpcy5wcm9kdWN0cy5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiBhICsgYi5xdWFudGl0eTtcbiAgICAgICAgfSwgMCk7XG4gICAgfTtcbiAgICBDYXJ0LnByb3RvdHlwZS5hZGRQcm9kdWN0ID0gZnVuY3Rpb24gKHByb2R1Y3QsIHF1YW50aXR5KSB7XG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3RzLnNvbWUoZnVuY3Rpb24gKHByb2QpIHsgcmV0dXJuIHByb2QucHJvZHVjdC5pZCA9PSBwcm9kdWN0LmlkOyB9KSkge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5wcm9kdWN0cy5maW5kSW5kZXgoZnVuY3Rpb24gKHByb2QpIHsgcmV0dXJuIHByb2QucHJvZHVjdCA9PSBwcm9kdWN0OyB9KTtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdHNbaW5kZXhdLnF1YW50aXR5ICs9IHF1YW50aXR5O1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvZHVjdHMucHVzaCh7IHByb2R1Y3Q6IHByb2R1Y3QsIHF1YW50aXR5OiBxdWFudGl0eSB9KTtcbiAgICB9O1xuICAgIENhcnQucHJvdG90eXBlLnJlbW92ZVByb2R1Y3QgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLnByb2R1Y3RzLmZpbmRJbmRleChmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbS5wcm9kdWN0LmlkID09IGlkOyB9KTtcbiAgICAgICAgaWYgKCgoX2EgPSB0aGlzLnByb2R1Y3RzW2luZGV4XSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnF1YW50aXR5KSA9PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9kdWN0c1tpbmRleF0ucXVhbnRpdHkgLT0gMTtcbiAgICB9O1xuICAgIHJldHVybiBDYXJ0O1xufSgpKTtcbmV4cG9ydCBkZWZhdWx0IENhcnQ7XG4vL2N1YW5kbyBlbCBib3RvbiBkZXNhcGFyZXpjYSBkZWwgZG9tLCBubyB2YSBhIGV4aXN0aXIgZXN0ZSBwcm9ibGVtYSwgcGVybyBlbiBlc3RlIGNvbnRleHRvIHNpLiBEZWJlcmlhIGVzdGFyIGxhIGZ1bmNpb24gcmVtb3ZlXG4vL2N1YmllcnRhIGFudGUgbGEgc2l0dWFjaW9uIGRlIHF1ZSAhdGhpcy5wcm9kdWN0c1tpbmRleF0/IGxlaWEgMzVcbiIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgTGlzdCBmcm9tIFwiLi9MaXN0XCI7XG52YXIgQ2F0YWxvZ0xpc3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKENhdGFsb2dMaXN0LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIENhdGFsb2dMaXN0KCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5fcHJvZHVjdHMgPSBbXTtcbiAgICAgICAgX3RoaXMuX2FjdGl2ZUNhdGVnb3JpZXMgPSB7XG4gICAgICAgICAgICBlbGVjdHJvbmljczogZmFsc2UsXG4gICAgICAgICAgICBqZXdlbGVyeTogZmFsc2UsXG4gICAgICAgICAgICBcIm1lbidzIGNsb3RoaW5nXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b21lbidzIGNsb3RoaW5nXCI6IGZhbHNlLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDYXRhbG9nTGlzdC5wcm90b3R5cGUsIFwicHJvZHVjdHNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wcm9kdWN0cztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDYXRhbG9nTGlzdC5wcm90b3R5cGUsIFwiYWN0aXZlQ2F0ZWdvcmllc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FjdGl2ZUNhdGVnb3JpZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBDYXRhbG9nTGlzdC5wcm90b3R5cGUuc2V0Q2F0ZWdvcmllcyA9IGZ1bmN0aW9uIChjYXRlZ29yeSkge1xuICAgICAgICB0aGlzLmFjdGl2ZUNhdGVnb3JpZXNbY2F0ZWdvcnldXG4gICAgICAgICAgICA/ICh0aGlzLmFjdGl2ZUNhdGVnb3JpZXNbY2F0ZWdvcnldID0gZmFsc2UpXG4gICAgICAgICAgICA6ICh0aGlzLmFjdGl2ZUNhdGVnb3JpZXNbY2F0ZWdvcnldID0gdHJ1ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYWN0aXZlQ2F0ZWdvcmllcyk7XG4gICAgfTtcbiAgICBDYXRhbG9nTGlzdC5wcm90b3R5cGUuZ2V0UHJvZHVjdCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0cy5maW5kKGZ1bmN0aW9uIChwcm9kKSB7IHJldHVybiBwcm9kLmlkID09IGlkOyB9KTtcbiAgICB9O1xuICAgIENhdGFsb2dMaXN0LnByb3RvdHlwZS5hZGRQcm9kdWN0cyA9IGZ1bmN0aW9uIChwcm9kdWN0KSB7XG4gICAgICAgIHRoaXMucHJvZHVjdHMucHVzaChwcm9kdWN0KTtcbiAgICB9O1xuICAgIHJldHVybiBDYXRhbG9nTGlzdDtcbn0oTGlzdCkpO1xuZXhwb3J0IGRlZmF1bHQgQ2F0YWxvZ0xpc3Q7XG4iLCJ2YXIgX19zcHJlYWRBcnJheSA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheSkgfHwgZnVuY3Rpb24gKHRvLCBmcm9tLCBwYWNrKSB7XG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xuICAgICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcbn07XG52YXIgTGlzdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBMaXN0KCkge1xuICAgICAgICB0aGlzLm9iaiA9IHt9O1xuICAgICAgICB0aGlzLmNhY2hlID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICBMaXN0LnByb3RvdHlwZS5zZXRTb3J0aW5nID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAob2JqID09PSB2b2lkIDApIHsgb2JqID0ge307IH1cbiAgICAgICAgdGhpcy5vYmogPSBvYmo7XG4gICAgICAgIGlmICh0aGlzLmNhY2hlLmhhcyhvYmopKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgdGVtcCA9IF9fc3ByZWFkQXJyYXkoW10sIHRoaXMuX3Byb2R1Y3RzLCB0cnVlKTtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgICAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgX3RoaXMuc29ydEJ5S2V5KHRlbXAsIGtleSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNhY2hlLnNldChvYmosIHRlbXApO1xuICAgIH07XG4gICAgTGlzdC5wcm90b3R5cGUuc29ydEJ5ID0gZnVuY3Rpb24gKGEsIGIsIGtleSkge1xuICAgICAgICBpZiAoYVtrZXldID4gYltrZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYVtrZXldIDwgYltrZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfTtcbiAgICBMaXN0LnByb3RvdHlwZS5zb3J0QnlLZXkgPSBmdW5jdGlvbiAodGVtcCwga2V5KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRlbXAuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLnNvcnRCeShhLCBiLCBrZXkpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIExpc3QucHJvdG90eXBlLmdldFNvcnRlZEl0ZW1zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZS5nZXQodGhpcy5vYmopO1xuICAgIH07XG4gICAgcmV0dXJuIExpc3Q7XG59KCkpO1xuZXhwb3J0IGRlZmF1bHQgTGlzdDtcbi8vdGVtcCBjb21vIGFyZ3VtZW50bywgbXV0YW5kbyBtZWRpYW50ZSBzb3J0XG4vL2xpbmVhIDI4LCB0aXBhZG8gZGUgYXJndW1lbnRvcyBhIHkgYj9cbi8vdGlwYWRvLCBkZWJlcmlhIHNlciBhZ25vc3RpY28gcmVzcGVjdG8gYWwgdGlwbyBkZSBvYmpldG8gKHByZHVjdEludGVyZmFzZSk/XG4iLCJ2YXIgUHJvZHVjdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBQcm9kdWN0KCkge1xuICAgIH1cbiAgICBQcm9kdWN0LnByb3RvdHlwZS5nZXRUaXRsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gICAgfTtcbiAgICBQcm9kdWN0LnByb3RvdHlwZS5nZXRDYXRlZ29yeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2F0ZWdvcnk7XG4gICAgfTtcbiAgICBQcm9kdWN0LnByb3RvdHlwZS5nZXRQcmljZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpY2U7XG4gICAgfTtcbiAgICBQcm9kdWN0LnByb3RvdHlwZS5nZXRJRCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQ7XG4gICAgfTtcbiAgICBQcm9kdWN0LnByb3RvdHlwZS5nZXREZXNjcmlwdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gICAgfTtcbiAgICBQcm9kdWN0LnByb3RvdHlwZS5nZXRJbWFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1hZ2U7XG4gICAgfTtcbiAgICByZXR1cm4gUHJvZHVjdDtcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0O1xuLy9BTCBVU0FSIExBIElOVEVSRkFDRSBCT1JSRSBMT1MgXyBZIFJFRk9STVVMRSBHRVRURVJTLCBFU1RBIE9LP1xuLy9CT1JSRSBTRVRURVJTIEVOIEJBU0UgQSBOb3RlIHRoYXQgYSBmaWVsZC1iYWNrZWQgZ2V0L3NldCBwYWlyIHdpdGggbm8gZXh0cmEgbG9naWNcbi8vaXMgdmVyeSByYXJlbHkgdXNlZnVsIGluIEphdmFTY3JpcHQuIEl04oCZcyBmaW5lIHRvIGV4cG9zZSBwdWJsaWMgZmllbGRzIGlmXG4vL3lvdSBkb27igJl0IG5lZWQgdG8gYWRkIGFkZGl0aW9uYWwgbG9naWMgZHVyaW5nIHRoZSBnZXQvc2V0IG9wZXJhdGlvbnMuXG4iLCJ2YXIgU29ydE9iamVjdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTb3J0T2JqZWN0KCkge1xuICAgIH1cbiAgICByZXR1cm4gU29ydE9iamVjdDtcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBTb3J0T2JqZWN0O1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbmltcG9ydCBQcm9kdWN0IGZyb20gXCIuL1Byb2R1Y3RcIjtcbmltcG9ydCBDYXRhbG9nTGlzdCBmcm9tIFwiLi9DYXRhbG9nXCI7XG5pbXBvcnQgQ2FydCBmcm9tIFwiLi9DYXJ0XCI7XG52YXIgU3RvcmUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU3RvcmUoKSB7XG4gICAgICAgIHRoaXMuX2NhcnQgPSBuZXcgQ2FydCgpO1xuICAgICAgICB0aGlzLl9jYXRhbG9nID0gbmV3IENhdGFsb2dMaXN0KCk7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdG9yZS5wcm90b3R5cGUsIFwiY2FydFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhcnQ7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RvcmUucHJvdG90eXBlLCBcImNhdGFsb2dcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jYXRhbG9nO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgU3RvcmUucHJvdG90eXBlLnNldENhdGFsb2cgPSBmdW5jdGlvbiAoZmV0Y2hGdW5jdGlvbikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZGF0YTtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIGZldGNoRnVuY3Rpb24oKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdCA9IG5ldyBQcm9kdWN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC50aXRsZSA9IGl0ZW0udGl0bGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5jYXRlZ29yeSA9IGl0ZW0uY2F0ZWdvcnk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5pZCA9IGl0ZW0uaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5wcmljZSA9IGl0ZW0ucHJpY2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5kZXNjcmlwdGlvbiA9IGl0ZW0uZGVzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5pbWFnZSA9IGl0ZW0uaW1hZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuX2NhdGFsb2cuYWRkUHJvZHVjdHMocHJvZHVjdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gU3RvcmU7XG59KCkpO1xuZXhwb3J0IGRlZmF1bHQgU3RvcmU7XG4vLyBkZSBxdWUgbW9kbyB2aW5jdWxhciBlbCBjYXRhbG9nbyBhIGxhIGNhcnRhPyBjb21vIGFyZ3VlbWVudG8gZGUgc3VzIG1ldG9kb3MgbyBkZSBzdSBjb25zdHJ1Y3Rvcj9cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmZXRjaFByb2R1Y3RzKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRhdGE7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIGZldGNoKFwiaHR0cHM6Ly9mYWtlc3RvcmVhcGkuY29tL3Byb2R1Y3RzXCIpLnRoZW4oZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSldO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmZXRjaGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICAvL1BSVUVCQVxuICAgICAgICAgICAgICAgICAgICAvKlx0bGV0IHNvcnQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogMSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZS5jYXRhbG9nLnNldFNvcnRpbmcoc29ydCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMDApO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0b3JlLmNhdGFsb2cuZ2V0U29ydGVkSXRlbXMoKSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMDApOyovXG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBkYXRhXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgSG9tZVBhZ2UgZnJvbSBcIi4uL3BhZ2VzL0hvbWVQYWdlXCI7XG5pbXBvcnQgU2hvcFBhZ2UgZnJvbSBcIi4uL3BhZ2VzL1Nob3BQYWdlXCI7XG5pbXBvcnQgdXNlUGFyYW1zIGZyb20gXCIuLi91c2VQYXJhbXNcIjtcbmltcG9ydCBEZXRhaWxzUGFnZSBmcm9tIFwiLi4vcGFnZXMvRGV0YWlsc1BhZ2VcIjtcbmltcG9ydCBDYXJ0UGFnZSBmcm9tIFwiLi4vcGFnZXMvQ2FydFBhZ2VcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJvdXRlc0NhbGwodXJsKSB7XG4gICAgdmFyIHBhdGggPSB1c2VQYXJhbXMoKS5wYXRoO1xuICAgIHZhciByb3V0ZXMgPSB7XG4gICAgICAgIFwiXCI6IEhvbWVQYWdlLFxuICAgICAgICBcIiMvXCI6IEhvbWVQYWdlLFxuICAgICAgICBcIiMvc2hvcFwiOiBTaG9wUGFnZSxcbiAgICAgICAgXCIjL2RldGFpbHNcIjogRGV0YWlsc1BhZ2UsXG4gICAgICAgIFwiIy9jYXJ0XCI6IENhcnRQYWdlLFxuICAgICAgICAvLyBcIi80MDRcIjogKCkgPT4gZXJyb3JQYWdlKCksXG4gICAgfTtcbiAgICAvLyBpZiAoIXJvdXRlc1twYXRoXSkge1xuICAgIC8vIFx0cmV0dXJuIHJvdXRlc1tcIi80MDRcIl07XG4gICAgLy8gfVxuICAgIHJldHVybiByb3V0ZXNbcGF0aF07XG59XG4iLCJpbXBvcnQgY2FydENvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9jYXJ0Q29tcG9uZW50XCI7XG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCIuLi9hcHBcIjtcbmltcG9ydCBhcHBlbmRQcm9kdWN0IGZyb20gXCIuLi9hcHBlbmRQcm9kdWN0XCI7XG5pbXBvcnQgY2FydEl0ZW1WaWV3IGZyb20gXCIuLi9jb21wb25lbnRzL2NhcnRJdGVtVmlld1wiO1xuaW1wb3J0IHVwZGF0ZUNhcnRDb3VudGVyIGZyb20gXCIuLi91cGRhdGVDYXJ0Q291bnRlclwiO1xuaW1wb3J0IGRlbGV0ZUJ0bkxpc3RlbmVycyBmcm9tIFwiLi4vZGVsZXRlQnRuTGlzdGVyc1wiO1xudmFyIENhcnRQYWdlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENhcnRQYWdlKCkge1xuICAgIH1cbiAgICBDYXJ0UGFnZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgYy5pbm5lckhUTUwgPSBjYXJ0Q29tcG9uZW50KCk7XG4gICAgfTtcbiAgICBDYXJ0UGFnZS5wcm90b3R5cGUucGFnZVNjcmlwdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9leHRyYWVyIGp1bnRvIGEgU2hvcFBhZ2VcbiAgICAgICAgc3RvcmUuY2FydC5wcm9kdWN0cy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9kdWN0KSB7XG4gICAgICAgICAgICBhcHBlbmRQcm9kdWN0KGRvY3VtZW50LCBwcm9kdWN0LCBjYXJ0SXRlbVZpZXcpO1xuICAgICAgICB9KTtcbiAgICAgICAgZGVsZXRlQnRuTGlzdGVuZXJzKGRvY3VtZW50LCBzdG9yZS5jYXJ0KTtcbiAgICAgICAgdXBkYXRlQ2FydENvdW50ZXIoZG9jdW1lbnQsIHN0b3JlKTtcbiAgICAgICAgLy91cGRhdGUgbGlzdGEgZGUgcHJvZHVjdG9zIERPTVxuICAgIH07XG4gICAgcmV0dXJuIENhcnRQYWdlO1xufSgpKTtcbmV4cG9ydCBkZWZhdWx0IENhcnRQYWdlO1xuIiwiaW1wb3J0IGRldGFpbHNDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvZGV0YWlsc0NvbXBvbmVudFwiO1xuaW1wb3J0IHVzZVBhcmFtcyBmcm9tIFwiLi4vdXNlUGFyYW1zXCI7XG5pbXBvcnQgYnV5QnRuTGlzdGVuZXJzIGZyb20gXCIuLi9idXlCdG5MaXN0ZW5lcnNcIjtcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIi4uL2FwcFwiO1xuaW1wb3J0IHVwZGF0ZUNhcnRDb3VudGVyIGZyb20gXCIuLi91cGRhdGVDYXJ0Q291bnRlclwiO1xudmFyIERldGFpbHNQYWdlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERldGFpbHNQYWdlKCkge1xuICAgIH1cbiAgICBEZXRhaWxzUGFnZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgdmFyIHByb2R1Y3RJRCA9IHVzZVBhcmFtcygpLnByb2R1Y3RJRDtcbiAgICAgICAgYy5pbm5lckhUTUwgPSBkZXRhaWxzQ29tcG9uZW50KHByb2R1Y3RJRCwgc3RvcmUuY2F0YWxvZy5wcm9kdWN0cyk7XG4gICAgfTtcbiAgICBEZXRhaWxzUGFnZS5wcm90b3R5cGUucGFnZVNjcmlwdCA9IGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIGJ1eUJ0bkxpc3RlbmVycyhkb2N1bWVudCwgc3RvcmUpO1xuICAgICAgICB1cGRhdGVDYXJ0Q291bnRlcihkb2N1bWVudCwgc3RvcmUpO1xuICAgIH07XG4gICAgcmV0dXJuIERldGFpbHNQYWdlO1xufSgpKTtcbmV4cG9ydCBkZWZhdWx0IERldGFpbHNQYWdlO1xuIiwiaW1wb3J0IGhvbWVDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvaG9tZUNvbXBvbmVudFwiO1xuaW1wb3J0IHVwZGF0ZUNhcnRDb3VudGVyIGZyb20gXCIuLi91cGRhdGVDYXJ0Q291bnRlclwiO1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi4vYXBwXCI7XG52YXIgSG9tZVBhZ2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gICAgfVxuICAgIEhvbWVQYWdlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICBjLmlubmVySFRNTCA9IGhvbWVDb21wb25lbnQoKTtcbiAgICB9O1xuICAgIEhvbWVQYWdlLnByb3RvdHlwZS5wYWdlU2NyaXB0ID0gZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgdmFyIHZlclByb2R1Y3RvcyA9IGQuZ2V0RWxlbWVudEJ5SWQoXCJ2ZXItcHJvZHVjdG9zXCIpO1xuICAgICAgICB2YXIgaG92ZXJJdGVtcyA9IGQuZ2V0RWxlbWVudEJ5SWQoXCJ0by1ob3ZlclwiKTtcbiAgICAgICAgaG92ZXJJdGVtcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2ZXJQcm9kdWN0b3MuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XG4gICAgICAgIH0pO1xuICAgICAgICBob3Zlckl0ZW1zLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZlclByb2R1Y3Rvcy5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHVwZGF0ZUNhcnRDb3VudGVyKGRvY3VtZW50LCBzdG9yZSk7XG4gICAgfTtcbiAgICByZXR1cm4gSG9tZVBhZ2U7XG59KCkpO1xuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iLCJpbXBvcnQgc2hvcENvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9zaG9wQ29tcG9uZW50XCI7XG5pbXBvcnQgYnV5QnRuTGlzdGVuZXJzIGZyb20gXCIuLi9idXlCdG5MaXN0ZW5lcnNcIjtcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIi4uL2FwcFwiO1xuaW1wb3J0IHVwZGF0ZUNhcnRDb3VudGVyIGZyb20gXCIuLi91cGRhdGVDYXJ0Q291bnRlclwiO1xuaW1wb3J0IHJlbmRlckxpc3QgZnJvbSBcIi4uL3JlbmRlckxpc3RcIjtcbmltcG9ydCBzb3J0QnRuTGlzdGVuZXJzIGZyb20gXCIuLi9zb3J0QnRuTGlzdGVuZXJzXCI7XG52YXIgU2hvcFBhZ2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2hvcFBhZ2UoKSB7XG4gICAgfVxuICAgIFNob3BQYWdlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICBjLmlubmVySFRNTCA9IHNob3BDb21wb25lbnQoKTtcbiAgICB9O1xuICAgIFNob3BQYWdlLnByb3RvdHlwZS5wYWdlU2NyaXB0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZW5kZXJMaXN0KHN0b3JlLmNhdGFsb2cpO1xuICAgICAgICBidXlCdG5MaXN0ZW5lcnMoZG9jdW1lbnQsIHN0b3JlKTtcbiAgICAgICAgc29ydEJ0bkxpc3RlbmVycyhkb2N1bWVudCwgc3RvcmUuY2F0YWxvZyk7XG4gICAgICAgIHVwZGF0ZUNhcnRDb3VudGVyKGRvY3VtZW50LCBzdG9yZSk7XG4gICAgfTtcbiAgICByZXR1cm4gU2hvcFBhZ2U7XG59KCkpO1xuZXhwb3J0IGRlZmF1bHQgU2hvcFBhZ2U7XG4iLCJpbXBvcnQgYXBwZW5kUHJvZHVjdCBmcm9tIFwiLi9hcHBlbmRQcm9kdWN0XCI7XG5pbXBvcnQgcHJvZHVjdFZpZXcgZnJvbSBcIi4vY29tcG9uZW50cy9wcm9kdWN0Vmlld1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyTGlzdChjYXRhbG9nKSB7XG4gICAgdmFyIHNvcnRlZEl0ZW1zO1xuICAgIHNvcnRlZEl0ZW1zID0gY2F0YWxvZy5nZXRTb3J0ZWRJdGVtcygpO1xuICAgIGlmICghc29ydGVkSXRlbXMpXG4gICAgICAgIHNvcnRlZEl0ZW1zID0gY2F0YWxvZy5wcm9kdWN0cztcbiAgICBzb3J0ZWRJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9kdWN0KSB7XG4gICAgICAgIC8vXHRcdGlmIChjYXRhbG9nLmFjdGl2ZUNhdGVnb3JpZXNbcHJvZHVjdC5jYXRlZ29yeV0pIHtcbiAgICAgICAgYXBwZW5kUHJvZHVjdChkb2N1bWVudCwgcHJvZHVjdCwgcHJvZHVjdFZpZXcpO1xuICAgICAgICAvL1x0XHR9XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgU29ydE9iamVjdCBmcm9tIFwiLi9lbnRpdGllcy9Tb3J0T2JqZWN0XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzb3J0QnRuTGlzdGVuZXJzKGRvYywgY2F0YWxvZykge1xuICAgIHZhciBzb3J0Q2hlY2sgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzb3J0LWNoZWNrXCIpKTtcbiAgICB2YXIgc29ydEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydFwiKTtcbiAgICBzb3J0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzb3J0T2JqZWN0ID0gbmV3IFNvcnRPYmplY3QoKTtcbiAgICAgICAgc29ydENoZWNrLmZvckVhY2goZnVuY3Rpb24gKGJveCkge1xuICAgICAgICAgICAgdmFyIGtleSA9IGJveC52YWx1ZTtcbiAgICAgICAgICAgIGlmIChib3guY2hlY2tlZClcbiAgICAgICAgICAgICAgICBzb3J0T2JqZWN0W2tleV0gPSAxO1xuICAgICAgICB9KTtcbiAgICAgICAgY2F0YWxvZy5zZXRTb3J0aW5nKHNvcnRPYmplY3QpO1xuICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgSGFzaENoYW5nZUV2ZW50KFwiaGFzaGNoYW5nZVwiKSk7XG4gICAgfSk7XG59XG4vL2Rlc3B1ZXMgZGViZXJhIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBIYXNoQ2hhbmdlRXZlbnQoXCJoYXNoY2hhbmdlXCIpKTsgbyBpbXBvcnRhciBtZXRvZG8gcmVuZGVyP1xuLy9jbGFzZSBzb3J0T2JqZWN0IGVuIGJhc2UgYSBwcm9kdWN0PyBvIGludGVyZmF6PyBvIHR5cGU/XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVDYXJ0Q291bnRlcihkb2MsIHN0b3JlKSB7XG4gICAgdmFyIGNvdW50ZXIgPSBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJjb3VudGVyXCIpO1xuICAgIGNvdW50ZXIuaW5uZXJIVE1MID0gU3RyaW5nKHN0b3JlLmNhcnQuY291bnRlcik7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VQYXJhbXMoKSB7XG4gICAgdmFyIHVybCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuICAgIHZhciBzcGxpdGVkID0gdXJsLnNwbGl0KFwiL1wiKTtcbiAgICB2YXIgcHJvZHVjdElEID0gc3BsaXRlZFsyXTtcbiAgICB2YXIgcGF0aCA9IHNwbGl0ZWQuc2xpY2UoMCwgMikuam9pbihcIi9cIik7XG4gICAgcmV0dXJuIHsgcGF0aDogcGF0aCwgcHJvZHVjdElEOiBwcm9kdWN0SUQgfTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXBwLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9