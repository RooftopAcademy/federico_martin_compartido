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
    return "\n            " + (0,_headerComponent__WEBPACK_IMPORTED_MODULE_1__["default"])() + "\n\n                <article id=\"products-container\" class=\"products-container\">\n                    <navbar>\n                        <label><input type=\"checkbox\" class=\"sort-check\" value=\"title\">Title</label>\n                        <label><input type=\"checkbox\" class=\"sort-check\" value=\"price\">Price</label>\n                        <label><input type=\"checkbox\" class=\"sort-check\" value=\"category\">Category</label>\n                        <button id=\"sort\">Ordenar</button>\n                    </navbar>\n                    <!-- JS -->\n                </article>\n            \n            " + (0,_footerComponent__WEBPACK_IMPORTED_MODULE_0__["default"])() + "\n           ";
}
//en linea 9 crear checkboxes/botones para los distintos criterios


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
        return _this;
    }
    Object.defineProperty(CatalogList.prototype, "products", {
        get: function () {
            return this._products;
        },
        enumerable: false,
        configurable: true
    });
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
        var keys = Object.keys(obj);
        var temp = __spreadArray([], this._products, true);
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
        (0,_renderList__WEBPACK_IMPORTED_MODULE_4__["default"])();
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
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/app.ts");
/* harmony import */ var _appendProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appendProduct */ "./src/appendProduct.ts");
/* harmony import */ var _components_productView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/productView */ "./src/components/productView.ts");



function renderList() {
    var sortedItems;
    sortedItems = _app__WEBPACK_IMPORTED_MODULE_0__.store.catalog.getSortedItems();
    if (!sortedItems)
        sortedItems = _app__WEBPACK_IMPORTED_MODULE_0__.store.catalog.products;
    sortedItems.forEach(function (product) {
        (0,_appendProduct__WEBPACK_IMPORTED_MODULE_1__["default"])(document, product, _components_productView__WEBPACK_IMPORTED_MODULE_2__["default"]);
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
        console.log(sortObject);
        catalog.setSorting(sortObject);
        window.dispatchEvent(new HashChangeEvent("hashchange"));
    });
}
//crear checkboxes que definan forma de objeto sort
//crear boton ordenar para llamar setsorting aplicando el ojeto creado en base a disposicion de checkboxes
//despues debera window.dispatchEvent(new HashChangeEvent("hashchange")); o importar metodo render?
//interfaz sortObject en base a product? o interfaz? o type?


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby8uL3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vLi9zcmMvYXBwZW5kUHJvZHVjdC50cyIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby8uL3NyYy9idXlCdG5MaXN0ZW5lcnMudHMiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vLi9zcmMvY29tcG9uZW50cy9jYXJ0Q29tcG9uZW50LnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL2NvbXBvbmVudHMvY2FydEl0ZW1WaWV3LnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL2NvbXBvbmVudHMvZGV0YWlsc0NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby8uL3NyYy9jb21wb25lbnRzL2Zvb3RlckNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby8uL3NyYy9jb21wb25lbnRzL2hlYWRlckNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby8uL3NyYy9jb21wb25lbnRzL2hvbWVDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vLi9zcmMvY29tcG9uZW50cy9wcm9kdWN0Vmlldy50cyIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby8uL3NyYy9jb21wb25lbnRzL3Nob3BDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vLi9zcmMvZGVsZXRlQnRuTGlzdGVycy50cyIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby8uL3NyYy9lbnRpdGllcy9DYXJ0LnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL2VudGl0aWVzL0NhdGFsb2cudHMiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vLi9zcmMvZW50aXRpZXMvTGlzdC50cyIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby8uL3NyYy9lbnRpdGllcy9Qcm9kdWN0LnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL2VudGl0aWVzL1NvcnRPYmplY3QudHMiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vLi9zcmMvZW50aXRpZXMvU3RvcmUudHMiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vLi9zcmMvZmV0Y2hQcm9kdWN0cy50cyIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby8uL3NyYy9sb2dpYy9yb3V0ZXNDYWxsLnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL3BhZ2VzL0NhcnRQYWdlLnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL3BhZ2VzL0RldGFpbHNQYWdlLnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL3BhZ2VzL0hvbWVQYWdlLnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL3BhZ2VzL1Nob3BQYWdlLnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL3JlbmRlckxpc3QudHMiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vLi9zcmMvc29ydEJ0bkxpc3RlbmVycy50cyIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby8uL3NyYy91cGRhdGVDYXJ0Q291bnRlci50cyIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby8uL3NyYy91c2VQYXJhbXMudHMiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0b3JlIGZyb20gXCIuL2VudGl0aWVzL1N0b3JlXCI7XG5pbXBvcnQgZmV0Y2hQcm9kdWN0cyBmcm9tIFwiLi9mZXRjaFByb2R1Y3RzXCI7XG5pbXBvcnQgZ2V0UGFnZSBmcm9tIFwiLi9sb2dpYy9yb3V0ZXNDYWxsXCI7XG52YXIgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWluZXJcIik7XG5mdW5jdGlvbiBBcHAoY29udGFpbmVyKSB7XG4gICAgdmFyIHN0b3JlID0gbmV3IFN0b3JlKCk7XG4gICAgc3RvcmUuc2V0Q2F0YWxvZyhmZXRjaFByb2R1Y3RzKTtcbiAgICBmdW5jdGlvbiByZW5kZXIocm91dGUpIHtcbiAgICAgICAgdmFyIHBhZ2UgPSBuZXcgKGdldFBhZ2Uocm91dGUpKSgpO1xuICAgICAgICBwYWdlLnJlbmRlcihjb250YWluZXIpO1xuICAgICAgICBwYWdlLnBhZ2VTY3JpcHQoZG9jdW1lbnQpO1xuICAgIH1cbiAgICByZXR1cm4geyByZW5kZXI6IHJlbmRlciwgc3RvcmU6IHN0b3JlIH07XG59XG52YXIgYXBwID0gQXBwKGNvbnRhaW5lcik7XG52YXIgc3RvcmUgPSBhcHAuc3RvcmU7XG5hcHAucmVuZGVyKFwiIy9cIik7XG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gKHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gXCIjL1wiKTsgfTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJvdXRlID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XG4gICAgYXBwLnJlbmRlcihyb3V0ZSk7XG59KTtcbmV4cG9ydCB7IHN0b3JlIH07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcHBlbmRQcm9kdWN0KGRvYywgcHJvZHVjdCwgdmlldykge1xuICAgIHZhciBwcm9kdWN0c0NvbnRhaW5lciA9IGRvYy5nZXRFbGVtZW50QnlJZChcInByb2R1Y3RzLWNvbnRhaW5lclwiKTtcbiAgICBwcm9kdWN0c0NvbnRhaW5lci5pbm5lckhUTUwgKz0gdmlldyhwcm9kdWN0KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1eUJ0bkxpc3RlbmVycyhkb2MsIHN0b3JlKSB7XG4gICAgdmFyIGJ1eUJ0biA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNvbXByYXJcIikpO1xuICAgIHZhciBjb3VudGVyID0gZG9jLmdldEVsZW1lbnRCeUlkKFwiY291bnRlclwiKTtcbiAgICBidXlCdG4uZm9yRWFjaChmdW5jdGlvbiAoYnV0dG9uKSB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgICAgIHZhciBxdWFudGl0eUlucHV0ID0gdGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgICBpZiAoIXF1YW50aXR5SW5wdXQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICBhbGVydChcIkVsaWdlIGN1w6FudGFzIHByZW5kYXMgcXVpZXJlcyBjb21wcmFyXCIpOyAvL2NhbWJpYXIgcG9yIGVzdGlsbyBlcnJvclxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBwcm9kdWN0SUQgPSBOdW1iZXIodGFyZ2V0LmRhdGFzZXQuaW5kZXgpO1xuICAgICAgICAgICAgdmFyIHByb2R1Y3QgPSBzdG9yZS5jYXRhbG9nLmdldFByb2R1Y3QocHJvZHVjdElEKTtcbiAgICAgICAgICAgIHN0b3JlLmNhcnQuYWRkUHJvZHVjdChwcm9kdWN0LCBOdW1iZXIocXVhbnRpdHlJbnB1dC52YWx1ZSkpO1xuICAgICAgICAgICAgc3RvcmUuY2FydC5zZXRDb3VudGVyKCk7XG4gICAgICAgICAgICAvL1x0Y291bnRlci5pbm5lckhUTUwgPSBTdHJpbmcoc3RvcmUuY2FydC5jb3VudGVyKTsgLy9kb25kZSB1YmljYXIgZXN0ZSBtYW5lam8gZGVsIERPTT8gdXNhciBlbCBoYXNoY2hhbmdlP1xuICAgICAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEhhc2hDaGFuZ2VFdmVudChcImhhc2hjaGFuZ2VcIikpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCBoZWFkZXJDb21wb25lbnQgZnJvbSBcIi4vaGVhZGVyQ29tcG9uZW50XCI7XG5pbXBvcnQgZm9vdGVyQ29tcG9uZW50IGZyb20gXCIuL2Zvb3RlckNvbXBvbmVudFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FydENvbXBvbmVudCgpIHtcbiAgICByZXR1cm4gXCJcXG5cXHRcXHRcXHRcIiArIGhlYWRlckNvbXBvbmVudCgpICsgXCJcXG5cXHRcXHRcXHQ8YXJ0aWNsZSBjbGFzcz1cXFwiY2FydC1jb250YWluZXJcXFwiPlxcblxcdFxcdFxcdFxcdDxkaXYgaWQ9XFxcInByb2R1Y3RzLWNvbnRhaW5lclxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0PCEtLSBKUyAtLT5cXG5cXHRcXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHRcXHQ8YnV0dG9uPkNoZWNrb3V0PC9idXR0b24+XFxuXFx0XFx0XFx0PC9hcnRpY2xlPlxcblxcblxcdFxcdFxcdFwiICsgZm9vdGVyQ29tcG9uZW50KCkgKyBcIlxcbiAgICAgICAgXCI7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoaXRlbSkge1xuICAgIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcImNhcnQtaXRlbVxcXCI+XFxuXFx0XFx0XFx0XFx0PGRpdj5cXG5cXHRcXHRcXHRcXHRcXHQ8aW1nIHNyYz1cXFwiXCIgKyBpdGVtLnByb2R1Y3QuaW1hZ2UgKyBcIlxcXCIvPlxcblxcdFxcdFxcdFxcdFxcdFwiICsgaXRlbS5wcm9kdWN0LnRpdGxlICsgXCJcXG5cXHRcXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHRcXHQ8ZGl2PlxcblxcdFxcdFxcdFxcdFxcdFwiICsgaXRlbS5wcm9kdWN0LnByaWNlICsgXCJcXG5cXHRcXHRcXHRcXHRcXHRYIFwiICsgaXRlbS5xdWFudGl0eSArIFwiXFxuXFx0XFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0XFx0XFx0PGJ1dHRvbiBkYXRhLWlkPVxcXCJcIiArIGl0ZW0ucHJvZHVjdC5pZCArIFwiXFxcIiBjbGFzcz1cXFwiY2FydC1yZW1vdmVcXFwiPlg8L2J1dHRvbj5cXG5cXHRcXHRcXHQ8L2Rpdj5cIjtcbn1cbiIsImltcG9ydCBmb290ZXJDb21wb25lbnQgZnJvbSBcIi4vZm9vdGVyQ29tcG9uZW50XCI7XG5pbXBvcnQgaGVhZGVyQ29tcG9uZW50IGZyb20gXCIuL2hlYWRlckNvbXBvbmVudFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGV0YWlsc1BhZ2UoaWQsIHByb2R1Y3RzKSB7XG4gICAgdmFyIHByb2R1Y3QgPSBwcm9kdWN0cy5maW5kKGZ1bmN0aW9uIChwcm9kKSB7IHJldHVybiBwcm9kLmlkID09IE51bWJlcihpZCk7IH0pO1xuICAgIHJldHVybiBcIlxcbiAgICBcIiArIGhlYWRlckNvbXBvbmVudCgpICsgXCJcXG5cXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzPVxcXCJkZXRhaWxzLWNvbnRhaW5lclxcXCI+XFxuICAgICAgICAgICAgPGltZyBzcmM9XFxcIlwiICsgKHByb2R1Y3QgPT09IG51bGwgfHwgcHJvZHVjdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJvZHVjdC5pbWFnZSkgKyBcIlxcXCIgY2xhc3M9XFxcImltZy1kZXRhaWxzXFxcIi8+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5mby1zaG9wXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZS1wcmljZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aDIgaWQ9XFxcInByb2R1Y3QtbmFtZVxcXCI+XCIgKyAocHJvZHVjdCA9PT0gbnVsbCB8fCBwcm9kdWN0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9kdWN0LnRpdGxlKSArIFwiPC9oMj5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiRcIiArIChwcm9kdWN0ID09PSBudWxsIHx8IHByb2R1Y3QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb2R1Y3QucHJpY2UudG9GaXhlZCgyKSkgKyBcIjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVxcXCJudW1iZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImNhbnRpZGFkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XFxcImNhbnRpZGFkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbj1cXFwiMFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiMFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIC8+PGJ1dHRvbiBjbGFzcz1cXFwiY29tcHJhclxcXCI+Q29tcHJhcjwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGhyIGNsYXNzPVxcXCJoLWxpbmVcXFwiIC8+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPHAgY2xhc3M9XFxcImRldGFsbGVzXFxcIiBpZD1cXFwiZGV0YWlsc1xcXCI+XFxuICAgICAgICAgICAgXCIgKyAocHJvZHVjdCA9PT0gbnVsbCB8fCBwcm9kdWN0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9kdWN0LmRlc2NyaXB0aW9uKSArIFwiXFxuICAgICAgICAgICAgPC9wPlxcbiAgICAgICAgPC9hcnRpY2xlPlxcblxcbiAgICBcIiArIGZvb3RlckNvbXBvbmVudCgpICsgXCJcXG5cIjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvb3RlckNvbXBvbmVudCgpIHtcbiAgICByZXR1cm4gXCJcXG4gICAgICAgIDxmb290ZXI+XFxuICAgICAgICAgICAgPGEgaHJlZj1cXFwiaHR0cHM6Ly9naXRodWIuY29tL2ZsLW1hcnRpblxcXCI+ZmwtbWFydGluPC9hPlxcbiAgICAgICAgPC9mb290ZXI+XFxuICAgIFwiO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVhZGVyQ29tcG9uZW50KCkge1xuICAgIHJldHVybiBcIlxcbiAgICAgICAgPGhlYWRlcj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsb2dvLW5hbWVcXFwiPlxcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmFzIGZhLXRzaGlydFxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjL1xcXCIgY2xhc3M9XFxcInRpdGxlXFxcIj5NaVRpZW5kYTwvYT5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJ0XFxcIj5cXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiIy9jYXJ0XFxcIj48c3BhbiBjbGFzcz1cXFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgaWNvbm8tY2FydFxcXCJcXG4gICAgICAgICAgICAgICAgICAgID5zaG9wcGluZ19jYXJ0PC9zcGFuXFxuICAgICAgICAgICAgICAgID48L2E+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPVxcXCJjb3VudGVyXFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGxhYmVsIGlkPVxcXCJoYW1idXJnZXJcXFwiIGNsYXNzPVxcXCJoYW1idXJnZXJcXFwiIGZvcj1cXFwiY2hlY2ttZW51XFxcIlxcbiAgICAgICAgICAgICAgICA+PGkgY2xhc3M9XFxcImZhcyBmYS1iYXJzXFxcIj48L2lcXG4gICAgICAgICAgICA+PC9sYWJlbD5cXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGNsYXNzPVxcXCJjaGVja21lbnVcXFwiIGlkPVxcXCJjaGVja21lbnVcXFwiIC8+XFxuICAgICAgICAgICAgPG5hdmJhciBjbGFzcz1cXFwibWVudVxcXCI+XFxuICAgICAgICAgICAgICAgIDx1bD5cXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwicm91dGVyXFxcIiBocmVmPVxcXCIjL1xcXCI+SW5pY2lvPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwicm91dGVyXFxcIiBocmVmPVxcXCIjL3Nob3BcXFwiPlByb2R1Y3RvczwvYT5cXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgIDwvdWw+XFxuICAgICAgICAgICAgPC9uYXZiYXI+XFxuICAgICAgICA8L2hlYWRlcj5cXG4gICAgXCI7XG59XG4iLCJpbXBvcnQgaGVhZGVyQ29tcG9uZW50IGZyb20gXCIuL2hlYWRlckNvbXBvbmVudFwiO1xuaW1wb3J0IGZvb3RlckNvbXBvbmVudCBmcm9tIFwiLi9mb290ZXJDb21wb25lbnRcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWVDb21wb25lbnQoKSB7XG4gICAgcmV0dXJuIFwiXFxuXFx0XFx0XFx0XCIgKyBoZWFkZXJDb21wb25lbnQoKSArIFwiXFxuXFxuXFx0XFx0XFx0PGFydGljbGUgY2xhc3M9XFxcImNvbnRlbnRcXFwiPlxcblxcdFxcdFxcdFxcdDxkaXYgaWQ9XFxcInRvLWhvdmVyXFxcIiBjbGFzcz1cXFwidG8taG92ZXJcXFwiPlxcblxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBpY29uby1jZW50cmFsXFxcIiBpZD1cXFwiaWNvblxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0Y2hlY2tyb29tXFxuXFx0XFx0XFx0XFx0XFx0PC9zcGFuPjwvYnI+XFxuXFx0XFx0XFx0XFx0XFx0PGEgaHJlZj1cXFwiIy9zaG9wXFxcIiBpZD1cXFwidmVyLXByb2R1Y3Rvc1xcXCIgY2xhc3M9XFxcImZhZGUgaGlkZGVuIHZlci1wcm9kdWN0b3Mgcm91dGVyXFxcIlxcblxcdFxcdFxcdFxcdFxcdFxcdD5WZXIgTGlzdGFkbyBkZSBQcm9kdWN0b3M8L2FcXG5cXHRcXHRcXHRcXHRcXHQ+XFxuXFx0XFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0XFx0PC9hcnRpY2xlPlxcblxcblxcdFxcdFxcdFwiICsgZm9vdGVyQ29tcG9uZW50KCkgKyBcIlxcbiAgICAgICAgXCI7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9kdWN0Vmlldyhwcm9kdWN0KSB7XG4gICAgcmV0dXJuIFwiXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9kdWN0XFxcIj5cXG4gICAgICAgICAgICA8aW1nIHNyYz1cXFwiXCIgKyBwcm9kdWN0LmltYWdlICsgXCJcXFwiIGNsYXNzPVxcXCJpbWctc2hvcFxcXCIgLz5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9kdWN0LWluZm9cXFwiPlxcbiAgICAgICAgICAgICAgICA8aDI+XCIgKyBwcm9kdWN0LnRpdGxlICsgXCI8L2gyPlxcbiAgICAgICAgICAgICAgICA8c3Bhbj4kXCIgKyBwcm9kdWN0LnByaWNlLnRvRml4ZWQoMikgKyBcIjwvc3Bhbj48YSBocmVmPVxcXCIjL2RldGFpbHMvXCIgKyBwcm9kdWN0LmlkICsgXCJcXFwiIGNsYXNzPVxcXCJyb3V0ZXJcXFwiPkRldGFsbGVzPC9hPlxcbiAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgPGlucHV0XFxuICAgICAgICAgICAgICAgIHR5cGU9XFxcIm51bWJlclxcXCJcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcImNhbnRpZGFkXFxcIlxcbiAgICAgICAgICAgICAgICBuYW1lPVxcXCJjYW50aWRhZFxcXCJcXG4gICAgICAgICAgICAgICAgbWluPVxcXCIwXFxcIlxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiMFxcXCJcXG4gICAgICAgICAgICAvPjxidXR0b24gY2xhc3M9XFxcImNvbXByYXJcXFwiIGRhdGEtaW5kZXg9XCIgKyBwcm9kdWN0LmlkICsgXCI+Q29tcHJhcjwvYnV0dG9uPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuXCI7XG59XG4iLCJpbXBvcnQgZm9vdGVyQ29tcG9uZW50IGZyb20gXCIuL2Zvb3RlckNvbXBvbmVudFwiO1xuaW1wb3J0IGhlYWRlckNvbXBvbmVudCBmcm9tIFwiLi9oZWFkZXJDb21wb25lbnRcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNob3BDb21wb25lbnQoKSB7XG4gICAgcmV0dXJuIFwiXFxuICAgICAgICAgICAgXCIgKyBoZWFkZXJDb21wb25lbnQoKSArIFwiXFxuXFxuICAgICAgICAgICAgICAgIDxhcnRpY2xlIGlkPVxcXCJwcm9kdWN0cy1jb250YWluZXJcXFwiIGNsYXNzPVxcXCJwcm9kdWN0cy1jb250YWluZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPG5hdmJhcj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBjbGFzcz1cXFwic29ydC1jaGVja1xcXCIgdmFsdWU9XFxcInRpdGxlXFxcIj5UaXRsZTwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgY2xhc3M9XFxcInNvcnQtY2hlY2tcXFwiIHZhbHVlPVxcXCJwcmljZVxcXCI+UHJpY2U8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGNsYXNzPVxcXCJzb3J0LWNoZWNrXFxcIiB2YWx1ZT1cXFwiY2F0ZWdvcnlcXFwiPkNhdGVnb3J5PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVxcXCJzb3J0XFxcIj5PcmRlbmFyPC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICA8L25hdmJhcj5cXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gSlMgLS0+XFxuICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICBcIiArIGZvb3RlckNvbXBvbmVudCgpICsgXCJcXG4gICAgICAgICAgIFwiO1xufVxuLy9lbiBsaW5lYSA5IGNyZWFyIGNoZWNrYm94ZXMvYm90b25lcyBwYXJhIGxvcyBkaXN0aW50b3MgY3JpdGVyaW9zXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWxldGVCdG5MaXN0ZW5lcnMoZG9jLCBjYXJ0KSB7XG4gICAgdmFyIGJ1dHRvbnMgPSBkb2MuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNhcnQtcmVtb3ZlXCIpO1xuICAgIEFycmF5LmZyb20oYnV0dG9ucykuZm9yRWFjaChmdW5jdGlvbiAoYnV0dG9uKSB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciBjb3VudGVyID0gZG9jLmdldEVsZW1lbnRCeUlkKFwiY291bnRlclwiKTtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgICAgIC8vY29tbyBoYWdvIHBhcmEgZXZpdGFyIFByb3BlcnR5ICdkYXRhJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlICdIVE1MQnV0dG9uRWxlbWVudCcuIHNpIG5vIHBvbmdvIGFueSBlbiB0YXJnZXQ/XG4gICAgICAgICAgICBjYXJ0LnJlbW92ZVByb2R1Y3QodGFyZ2V0LmRhdGFzZXQuaWQpO1xuICAgICAgICAgICAgY2FydC5zZXRDb3VudGVyKCk7XG4gICAgICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgSGFzaENoYW5nZUV2ZW50KFwiaGFzaGNoYW5nZVwiKSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuIiwidmFyIENhcnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ2FydCgpIHtcbiAgICAgICAgdGhpcy5jb3VudGVyID0gMDtcbiAgICAgICAgdGhpcy5wcm9kdWN0cyA9IFtdO1xuICAgIH1cbiAgICBDYXJ0LnByb3RvdHlwZS5zZXRDb3VudGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNvdW50ZXIgPSB0aGlzLnByb2R1Y3RzLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIGEgKyBiLnF1YW50aXR5O1xuICAgICAgICB9LCAwKTtcbiAgICB9O1xuICAgIENhcnQucHJvdG90eXBlLmFkZFByb2R1Y3QgPSBmdW5jdGlvbiAocHJvZHVjdCwgcXVhbnRpdHkpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvZHVjdHMuc29tZShmdW5jdGlvbiAocHJvZCkgeyByZXR1cm4gcHJvZC5wcm9kdWN0LmlkID09IHByb2R1Y3QuaWQ7IH0pKSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLnByb2R1Y3RzLmZpbmRJbmRleChmdW5jdGlvbiAocHJvZCkgeyByZXR1cm4gcHJvZC5wcm9kdWN0ID09IHByb2R1Y3Q7IH0pO1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0c1tpbmRleF0ucXVhbnRpdHkgKz0gcXVhbnRpdHk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9kdWN0cy5wdXNoKHsgcHJvZHVjdDogcHJvZHVjdCwgcXVhbnRpdHk6IHF1YW50aXR5IH0pO1xuICAgIH07XG4gICAgQ2FydC5wcm90b3R5cGUucmVtb3ZlUHJvZHVjdCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMucHJvZHVjdHMuZmluZEluZGV4KGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBpdGVtLnByb2R1Y3QuaWQgPT0gaWQ7IH0pO1xuICAgICAgICBpZiAoKChfYSA9IHRoaXMucHJvZHVjdHNbaW5kZXhdKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucXVhbnRpdHkpID09IDEpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb2R1Y3RzW2luZGV4XS5xdWFudGl0eSAtPSAxO1xuICAgIH07XG4gICAgcmV0dXJuIENhcnQ7XG59KCkpO1xuZXhwb3J0IGRlZmF1bHQgQ2FydDtcbi8vY3VhbmRvIGVsIGJvdG9uIGRlc2FwYXJlemNhIGRlbCBkb20sIG5vIHZhIGEgZXhpc3RpciBlc3RlIHByb2JsZW1hLCBwZXJvIGVuIGVzdGUgY29udGV4dG8gc2kuIERlYmVyaWEgZXN0YXIgbGEgZnVuY2lvbiByZW1vdmVcbi8vY3ViaWVydGEgYW50ZSBsYSBzaXR1YWNpb24gZGUgcXVlICF0aGlzLnByb2R1Y3RzW2luZGV4XT8gbGVpYSAzNVxuIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCBMaXN0IGZyb20gXCIuL0xpc3RcIjtcbnZhciBDYXRhbG9nTGlzdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQ2F0YWxvZ0xpc3QsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQ2F0YWxvZ0xpc3QoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLl9wcm9kdWN0cyA9IFtdO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDYXRhbG9nTGlzdC5wcm90b3R5cGUsIFwicHJvZHVjdHNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wcm9kdWN0cztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIENhdGFsb2dMaXN0LnByb3RvdHlwZS5nZXRQcm9kdWN0ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RzLmZpbmQoZnVuY3Rpb24gKHByb2QpIHsgcmV0dXJuIHByb2QuaWQgPT0gaWQ7IH0pO1xuICAgIH07XG4gICAgQ2F0YWxvZ0xpc3QucHJvdG90eXBlLmFkZFByb2R1Y3RzID0gZnVuY3Rpb24gKHByb2R1Y3QpIHtcbiAgICAgICAgdGhpcy5wcm9kdWN0cy5wdXNoKHByb2R1Y3QpO1xuICAgIH07XG4gICAgcmV0dXJuIENhdGFsb2dMaXN0O1xufShMaXN0KSk7XG5leHBvcnQgZGVmYXVsdCBDYXRhbG9nTGlzdDtcbiIsInZhciBfX3NwcmVhZEFycmF5ID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5KSB8fCBmdW5jdGlvbiAodG8sIGZyb20sIHBhY2spIHtcbiAgICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xuICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XG4gICAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xuICAgICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0by5jb25jYXQoYXIgfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSkpO1xufTtcbnZhciBMaXN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIExpc3QoKSB7XG4gICAgICAgIHRoaXMub2JqID0ge307XG4gICAgICAgIHRoaXMuY2FjaGUgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIExpc3QucHJvdG90eXBlLnNldFNvcnRpbmcgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChvYmogPT09IHZvaWQgMCkgeyBvYmogPSB7fTsgfVxuICAgICAgICB0aGlzLm9iaiA9IG9iajtcbiAgICAgICAgaWYgKHRoaXMuY2FjaGUuaGFzKG9iaikpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICAgICAgdmFyIHRlbXAgPSBfX3NwcmVhZEFycmF5KFtdLCB0aGlzLl9wcm9kdWN0cywgdHJ1ZSk7XG4gICAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBfdGhpcy5zb3J0QnlLZXkodGVtcCwga2V5KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2FjaGUuc2V0KG9iaiwgdGVtcCk7XG4gICAgfTtcbiAgICBMaXN0LnByb3RvdHlwZS5zb3J0QnkgPSBmdW5jdGlvbiAoYSwgYiwga2V5KSB7XG4gICAgICAgIGlmIChhW2tleV0gPiBiW2tleV0pIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhW2tleV0gPCBiW2tleV0pIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9O1xuICAgIExpc3QucHJvdG90eXBlLnNvcnRCeUtleSA9IGZ1bmN0aW9uICh0ZW1wLCBrZXkpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGVtcC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuc29ydEJ5KGEsIGIsIGtleSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTGlzdC5wcm90b3R5cGUuZ2V0U29ydGVkSXRlbXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlLmdldCh0aGlzLm9iaik7XG4gICAgfTtcbiAgICByZXR1cm4gTGlzdDtcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBMaXN0O1xuLy90ZW1wIGNvbW8gYXJndW1lbnRvLCBtdXRhbmRvIG1lZGlhbnRlIHNvcnRcbi8vbGluZWEgMjgsIHRpcGFkbyBkZSBhcmd1bWVudG9zIGEgeSBiP1xuLy90aXBhZG8sIGRlYmVyaWEgc2VyIGFnbm9zdGljbyByZXNwZWN0byBhbCB0aXBvIGRlIG9iamV0byAocHJkdWN0SW50ZXJmYXNlKT9cbiIsInZhciBQcm9kdWN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFByb2R1Y3QoKSB7XG4gICAgfVxuICAgIFByb2R1Y3QucHJvdG90eXBlLmdldFRpdGxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgICB9O1xuICAgIFByb2R1Y3QucHJvdG90eXBlLmdldENhdGVnb3J5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYXRlZ29yeTtcbiAgICB9O1xuICAgIFByb2R1Y3QucHJvdG90eXBlLmdldFByaWNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcmljZTtcbiAgICB9O1xuICAgIFByb2R1Y3QucHJvdG90eXBlLmdldElEID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pZDtcbiAgICB9O1xuICAgIFByb2R1Y3QucHJvdG90eXBlLmdldERlc2NyaXB0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICB9O1xuICAgIFByb2R1Y3QucHJvdG90eXBlLmdldEltYWdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbWFnZTtcbiAgICB9O1xuICAgIHJldHVybiBQcm9kdWN0O1xufSgpKTtcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3Q7XG4vL0FMIFVTQVIgTEEgSU5URVJGQUNFIEJPUlJFIExPUyBfIFkgUkVGT1JNVUxFIEdFVFRFUlMsIEVTVEEgT0s/XG4vL0JPUlJFIFNFVFRFUlMgRU4gQkFTRSBBIE5vdGUgdGhhdCBhIGZpZWxkLWJhY2tlZCBnZXQvc2V0IHBhaXIgd2l0aCBubyBleHRyYSBsb2dpY1xuLy9pcyB2ZXJ5IHJhcmVseSB1c2VmdWwgaW4gSmF2YVNjcmlwdC4gSXTigJlzIGZpbmUgdG8gZXhwb3NlIHB1YmxpYyBmaWVsZHMgaWZcbi8veW91IGRvbuKAmXQgbmVlZCB0byBhZGQgYWRkaXRpb25hbCBsb2dpYyBkdXJpbmcgdGhlIGdldC9zZXQgb3BlcmF0aW9ucy5cbiIsInZhciBTb3J0T2JqZWN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNvcnRPYmplY3QoKSB7XG4gICAgfVxuICAgIHJldHVybiBTb3J0T2JqZWN0O1xufSgpKTtcbmV4cG9ydCBkZWZhdWx0IFNvcnRPYmplY3Q7XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuaW1wb3J0IFByb2R1Y3QgZnJvbSBcIi4vUHJvZHVjdFwiO1xuaW1wb3J0IENhdGFsb2dMaXN0IGZyb20gXCIuL0NhdGFsb2dcIjtcbmltcG9ydCBDYXJ0IGZyb20gXCIuL0NhcnRcIjtcbnZhciBTdG9yZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTdG9yZSgpIHtcbiAgICAgICAgdGhpcy5fY2FydCA9IG5ldyBDYXJ0KCk7XG4gICAgICAgIHRoaXMuX2NhdGFsb2cgPSBuZXcgQ2F0YWxvZ0xpc3QoKTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0b3JlLnByb3RvdHlwZSwgXCJjYXJ0XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FydDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdG9yZS5wcm90b3R5cGUsIFwiY2F0YWxvZ1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhdGFsb2c7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBTdG9yZS5wcm90b3R5cGUuc2V0Q2F0YWxvZyA9IGZ1bmN0aW9uIChmZXRjaEZ1bmN0aW9uKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBkYXRhO1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgZmV0Y2hGdW5jdGlvbigpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0ID0gbmV3IFByb2R1Y3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnRpdGxlID0gaXRlbS50aXRsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LmNhdGVnb3J5ID0gaXRlbS5jYXRlZ29yeTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LmlkID0gaXRlbS5pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnByaWNlID0gaXRlbS5wcmljZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LmRlc2NyaXB0aW9uID0gaXRlbS5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LmltYWdlID0gaXRlbS5pbWFnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5fY2F0YWxvZy5hZGRQcm9kdWN0cyhwcm9kdWN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBTdG9yZTtcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBTdG9yZTtcbi8vIGRlIHF1ZSBtb2RvIHZpbmN1bGFyIGVsIGNhdGFsb2dvIGEgbGEgY2FydGE/IGNvbW8gYXJndWVtZW50byBkZSBzdXMgbWV0b2RvcyBvIGRlIHN1IGNvbnN0cnVjdG9yP1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZldGNoUHJvZHVjdHMoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGF0YTtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgZmV0Y2goXCJodHRwczovL2Zha2VzdG9yZWFwaS5jb20vcHJvZHVjdHNcIikudGhlbihmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KV07XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBkYXRhID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAvL1BSVUVCQVxuICAgICAgICAgICAgICAgICAgICAvKlx0bGV0IHNvcnQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogMSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZS5jYXRhbG9nLnNldFNvcnRpbmcoc29ydCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMDApO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0b3JlLmNhdGFsb2cuZ2V0U29ydGVkSXRlbXMoKSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMDApOyovXG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBkYXRhXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgSG9tZVBhZ2UgZnJvbSBcIi4uL3BhZ2VzL0hvbWVQYWdlXCI7XG5pbXBvcnQgU2hvcFBhZ2UgZnJvbSBcIi4uL3BhZ2VzL1Nob3BQYWdlXCI7XG5pbXBvcnQgdXNlUGFyYW1zIGZyb20gXCIuLi91c2VQYXJhbXNcIjtcbmltcG9ydCBEZXRhaWxzUGFnZSBmcm9tIFwiLi4vcGFnZXMvRGV0YWlsc1BhZ2VcIjtcbmltcG9ydCBDYXJ0UGFnZSBmcm9tIFwiLi4vcGFnZXMvQ2FydFBhZ2VcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJvdXRlc0NhbGwodXJsKSB7XG4gICAgdmFyIHBhdGggPSB1c2VQYXJhbXMoKS5wYXRoO1xuICAgIHZhciByb3V0ZXMgPSB7XG4gICAgICAgIFwiXCI6IEhvbWVQYWdlLFxuICAgICAgICBcIiMvXCI6IEhvbWVQYWdlLFxuICAgICAgICBcIiMvc2hvcFwiOiBTaG9wUGFnZSxcbiAgICAgICAgXCIjL2RldGFpbHNcIjogRGV0YWlsc1BhZ2UsXG4gICAgICAgIFwiIy9jYXJ0XCI6IENhcnRQYWdlLFxuICAgICAgICAvLyBcIi80MDRcIjogKCkgPT4gZXJyb3JQYWdlKCksXG4gICAgfTtcbiAgICAvLyBpZiAoIXJvdXRlc1twYXRoXSkge1xuICAgIC8vIFx0cmV0dXJuIHJvdXRlc1tcIi80MDRcIl07XG4gICAgLy8gfVxuICAgIHJldHVybiByb3V0ZXNbcGF0aF07XG59XG4iLCJpbXBvcnQgY2FydENvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9jYXJ0Q29tcG9uZW50XCI7XG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCIuLi9hcHBcIjtcbmltcG9ydCBhcHBlbmRQcm9kdWN0IGZyb20gXCIuLi9hcHBlbmRQcm9kdWN0XCI7XG5pbXBvcnQgY2FydEl0ZW1WaWV3IGZyb20gXCIuLi9jb21wb25lbnRzL2NhcnRJdGVtVmlld1wiO1xuaW1wb3J0IHVwZGF0ZUNhcnRDb3VudGVyIGZyb20gXCIuLi91cGRhdGVDYXJ0Q291bnRlclwiO1xuaW1wb3J0IGRlbGV0ZUJ0bkxpc3RlbmVycyBmcm9tIFwiLi4vZGVsZXRlQnRuTGlzdGVyc1wiO1xudmFyIENhcnRQYWdlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENhcnRQYWdlKCkge1xuICAgIH1cbiAgICBDYXJ0UGFnZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgYy5pbm5lckhUTUwgPSBjYXJ0Q29tcG9uZW50KCk7XG4gICAgfTtcbiAgICBDYXJ0UGFnZS5wcm90b3R5cGUucGFnZVNjcmlwdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9leHRyYWVyIGp1bnRvIGEgU2hvcFBhZ2VcbiAgICAgICAgc3RvcmUuY2FydC5wcm9kdWN0cy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9kdWN0KSB7XG4gICAgICAgICAgICBhcHBlbmRQcm9kdWN0KGRvY3VtZW50LCBwcm9kdWN0LCBjYXJ0SXRlbVZpZXcpO1xuICAgICAgICB9KTtcbiAgICAgICAgZGVsZXRlQnRuTGlzdGVuZXJzKGRvY3VtZW50LCBzdG9yZS5jYXJ0KTtcbiAgICAgICAgdXBkYXRlQ2FydENvdW50ZXIoZG9jdW1lbnQsIHN0b3JlKTtcbiAgICAgICAgLy91cGRhdGUgbGlzdGEgZGUgcHJvZHVjdG9zIERPTVxuICAgIH07XG4gICAgcmV0dXJuIENhcnRQYWdlO1xufSgpKTtcbmV4cG9ydCBkZWZhdWx0IENhcnRQYWdlO1xuIiwiaW1wb3J0IGRldGFpbHNDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvZGV0YWlsc0NvbXBvbmVudFwiO1xuaW1wb3J0IHVzZVBhcmFtcyBmcm9tIFwiLi4vdXNlUGFyYW1zXCI7XG5pbXBvcnQgYnV5QnRuTGlzdGVuZXJzIGZyb20gXCIuLi9idXlCdG5MaXN0ZW5lcnNcIjtcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIi4uL2FwcFwiO1xuaW1wb3J0IHVwZGF0ZUNhcnRDb3VudGVyIGZyb20gXCIuLi91cGRhdGVDYXJ0Q291bnRlclwiO1xudmFyIERldGFpbHNQYWdlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERldGFpbHNQYWdlKCkge1xuICAgIH1cbiAgICBEZXRhaWxzUGFnZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgdmFyIHByb2R1Y3RJRCA9IHVzZVBhcmFtcygpLnByb2R1Y3RJRDtcbiAgICAgICAgYy5pbm5lckhUTUwgPSBkZXRhaWxzQ29tcG9uZW50KHByb2R1Y3RJRCwgc3RvcmUuY2F0YWxvZy5wcm9kdWN0cyk7XG4gICAgfTtcbiAgICBEZXRhaWxzUGFnZS5wcm90b3R5cGUucGFnZVNjcmlwdCA9IGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIGJ1eUJ0bkxpc3RlbmVycyhkb2N1bWVudCwgc3RvcmUpO1xuICAgICAgICB1cGRhdGVDYXJ0Q291bnRlcihkb2N1bWVudCwgc3RvcmUpO1xuICAgIH07XG4gICAgcmV0dXJuIERldGFpbHNQYWdlO1xufSgpKTtcbmV4cG9ydCBkZWZhdWx0IERldGFpbHNQYWdlO1xuIiwiaW1wb3J0IGhvbWVDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvaG9tZUNvbXBvbmVudFwiO1xuaW1wb3J0IHVwZGF0ZUNhcnRDb3VudGVyIGZyb20gXCIuLi91cGRhdGVDYXJ0Q291bnRlclwiO1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi4vYXBwXCI7XG52YXIgSG9tZVBhZ2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gICAgfVxuICAgIEhvbWVQYWdlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICBjLmlubmVySFRNTCA9IGhvbWVDb21wb25lbnQoKTtcbiAgICB9O1xuICAgIEhvbWVQYWdlLnByb3RvdHlwZS5wYWdlU2NyaXB0ID0gZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgdmFyIHZlclByb2R1Y3RvcyA9IGQuZ2V0RWxlbWVudEJ5SWQoXCJ2ZXItcHJvZHVjdG9zXCIpO1xuICAgICAgICB2YXIgaG92ZXJJdGVtcyA9IGQuZ2V0RWxlbWVudEJ5SWQoXCJ0by1ob3ZlclwiKTtcbiAgICAgICAgaG92ZXJJdGVtcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2ZXJQcm9kdWN0b3MuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XG4gICAgICAgIH0pO1xuICAgICAgICBob3Zlckl0ZW1zLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZlclByb2R1Y3Rvcy5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHVwZGF0ZUNhcnRDb3VudGVyKGRvY3VtZW50LCBzdG9yZSk7XG4gICAgfTtcbiAgICByZXR1cm4gSG9tZVBhZ2U7XG59KCkpO1xuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iLCJpbXBvcnQgc2hvcENvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9zaG9wQ29tcG9uZW50XCI7XG5pbXBvcnQgYnV5QnRuTGlzdGVuZXJzIGZyb20gXCIuLi9idXlCdG5MaXN0ZW5lcnNcIjtcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIi4uL2FwcFwiO1xuaW1wb3J0IHVwZGF0ZUNhcnRDb3VudGVyIGZyb20gXCIuLi91cGRhdGVDYXJ0Q291bnRlclwiO1xuaW1wb3J0IHJlbmRlckxpc3QgZnJvbSBcIi4uL3JlbmRlckxpc3RcIjtcbmltcG9ydCBzb3J0QnRuTGlzdGVuZXJzIGZyb20gXCIuLi9zb3J0QnRuTGlzdGVuZXJzXCI7XG52YXIgU2hvcFBhZ2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2hvcFBhZ2UoKSB7XG4gICAgfVxuICAgIFNob3BQYWdlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICBjLmlubmVySFRNTCA9IHNob3BDb21wb25lbnQoKTtcbiAgICB9O1xuICAgIFNob3BQYWdlLnByb3RvdHlwZS5wYWdlU2NyaXB0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZW5kZXJMaXN0KCk7XG4gICAgICAgIGJ1eUJ0bkxpc3RlbmVycyhkb2N1bWVudCwgc3RvcmUpO1xuICAgICAgICBzb3J0QnRuTGlzdGVuZXJzKGRvY3VtZW50LCBzdG9yZS5jYXRhbG9nKTtcbiAgICAgICAgdXBkYXRlQ2FydENvdW50ZXIoZG9jdW1lbnQsIHN0b3JlKTtcbiAgICB9O1xuICAgIHJldHVybiBTaG9wUGFnZTtcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBTaG9wUGFnZTtcbiIsImltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIi4vYXBwXCI7XG5pbXBvcnQgYXBwZW5kUHJvZHVjdCBmcm9tIFwiLi9hcHBlbmRQcm9kdWN0XCI7XG5pbXBvcnQgcHJvZHVjdFZpZXcgZnJvbSBcIi4vY29tcG9uZW50cy9wcm9kdWN0Vmlld1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyTGlzdCgpIHtcbiAgICB2YXIgc29ydGVkSXRlbXM7XG4gICAgc29ydGVkSXRlbXMgPSBzdG9yZS5jYXRhbG9nLmdldFNvcnRlZEl0ZW1zKCk7XG4gICAgaWYgKCFzb3J0ZWRJdGVtcylcbiAgICAgICAgc29ydGVkSXRlbXMgPSBzdG9yZS5jYXRhbG9nLnByb2R1Y3RzO1xuICAgIHNvcnRlZEl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKHByb2R1Y3QpIHtcbiAgICAgICAgYXBwZW5kUHJvZHVjdChkb2N1bWVudCwgcHJvZHVjdCwgcHJvZHVjdFZpZXcpO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IFNvcnRPYmplY3QgZnJvbSBcIi4vZW50aXRpZXMvU29ydE9iamVjdFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc29ydEJ0bkxpc3RlbmVycyhkb2MsIGNhdGFsb2cpIHtcbiAgICB2YXIgc29ydENoZWNrID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic29ydC1jaGVja1wiKSk7XG4gICAgdmFyIHNvcnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnRcIik7XG4gICAgc29ydEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc29ydE9iamVjdCA9IG5ldyBTb3J0T2JqZWN0KCk7XG4gICAgICAgIHNvcnRDaGVjay5mb3JFYWNoKGZ1bmN0aW9uIChib3gpIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBib3gudmFsdWU7XG4gICAgICAgICAgICBpZiAoYm94LmNoZWNrZWQpXG4gICAgICAgICAgICAgICAgc29ydE9iamVjdFtrZXldID0gMTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHNvcnRPYmplY3QpO1xuICAgICAgICBjYXRhbG9nLnNldFNvcnRpbmcoc29ydE9iamVjdCk7XG4gICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBIYXNoQ2hhbmdlRXZlbnQoXCJoYXNoY2hhbmdlXCIpKTtcbiAgICB9KTtcbn1cbi8vY3JlYXIgY2hlY2tib3hlcyBxdWUgZGVmaW5hbiBmb3JtYSBkZSBvYmpldG8gc29ydFxuLy9jcmVhciBib3RvbiBvcmRlbmFyIHBhcmEgbGxhbWFyIHNldHNvcnRpbmcgYXBsaWNhbmRvIGVsIG9qZXRvIGNyZWFkbyBlbiBiYXNlIGEgZGlzcG9zaWNpb24gZGUgY2hlY2tib3hlc1xuLy9kZXNwdWVzIGRlYmVyYSB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgSGFzaENoYW5nZUV2ZW50KFwiaGFzaGNoYW5nZVwiKSk7IG8gaW1wb3J0YXIgbWV0b2RvIHJlbmRlcj9cbi8vaW50ZXJmYXogc29ydE9iamVjdCBlbiBiYXNlIGEgcHJvZHVjdD8gbyBpbnRlcmZhej8gbyB0eXBlP1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlQ2FydENvdW50ZXIoZG9jLCBzdG9yZSkge1xuICAgIHZhciBjb3VudGVyID0gZG9jLmdldEVsZW1lbnRCeUlkKFwiY291bnRlclwiKTtcbiAgICBjb3VudGVyLmlubmVySFRNTCA9IFN0cmluZyhzdG9yZS5jYXJ0LmNvdW50ZXIpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlUGFyYW1zKCkge1xuICAgIHZhciB1cmwgPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcbiAgICB2YXIgc3BsaXRlZCA9IHVybC5zcGxpdChcIi9cIik7XG4gICAgdmFyIHByb2R1Y3RJRCA9IHNwbGl0ZWRbMl07XG4gICAgdmFyIHBhdGggPSBzcGxpdGVkLnNsaWNlKDAsIDIpLmpvaW4oXCIvXCIpO1xuICAgIHJldHVybiB7IHBhdGg6IHBhdGgsIHByb2R1Y3RJRDogcHJvZHVjdElEIH07XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2FwcC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==