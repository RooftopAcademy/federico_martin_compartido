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
    return "\n            " + (0,_headerComponent__WEBPACK_IMPORTED_MODULE_1__["default"])() + "\n\n                <article id=\"products-container\" class=\"products-container\">\n                    <!-- JS -->\n                </article>\n            \n            " + (0,_footerComponent__WEBPACK_IMPORTED_MODULE_0__["default"])() + "\n           ";
}


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
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};

var CatalogList = /** @class */ (function (_super) {
    __extends(CatalogList, _super);
    function CatalogList() {
        var _this = _super.call(this) || this;
        _this._products = [];
        _this.results = __spreadArray([], _this._products, true);
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
        this._products.push(product);
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
var List = /** @class */ (function () {
    function List() {
    }
    return List;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (List);


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
    Product.prototype.geTTitle = function () {
        return this.title;
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
/* harmony import */ var _appendProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../appendProduct */ "./src/appendProduct.ts");
/* harmony import */ var _buyBtnListeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buyBtnListeners */ "./src/buyBtnListeners.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app */ "./src/app.ts");
/* harmony import */ var _components_productView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/productView */ "./src/components/productView.ts");
/* harmony import */ var _updateCartCounter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../updateCartCounter */ "./src/updateCartCounter.ts");






var ShopPage = /** @class */ (function () {
    function ShopPage() {
    }
    ShopPage.prototype.render = function (c) {
        c.innerHTML = (0,_components_shopComponent__WEBPACK_IMPORTED_MODULE_0__["default"])();
    };
    ShopPage.prototype.pageScript = function () {
        _app__WEBPACK_IMPORTED_MODULE_3__.store.catalog.products.forEach(function (product) {
            (0,_appendProduct__WEBPACK_IMPORTED_MODULE_1__["default"])(document, product, _components_productView__WEBPACK_IMPORTED_MODULE_4__["default"]);
        });
        (0,_buyBtnListeners__WEBPACK_IMPORTED_MODULE_2__["default"])(document, _app__WEBPACK_IMPORTED_MODULE_3__.store);
        (0,_updateCartCounter__WEBPACK_IMPORTED_MODULE_5__["default"])(document, _app__WEBPACK_IMPORTED_MODULE_3__.store);
    };
    return ShopPage;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShopPage);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNULFFBQVEsNERBQWUsV0FBVyx1Q0FBSztBQUN2QyxRQUFRLDhEQUFpQixXQUFXLHVDQUFLO0FBQ3pDO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNyQlQ7QUFDZjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0hlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7Ozs7Ozs7VUNOQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby8uL3NyYy9hcHBlbmRQcm9kdWN0LnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL2J1eUJ0bkxpc3RlbmVycy50cyIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby8uL3NyYy9jb21wb25lbnRzL2NhcnRDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vLi9zcmMvY29tcG9uZW50cy9jYXJ0SXRlbVZpZXcudHMiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vLi9zcmMvY29tcG9uZW50cy9kZXRhaWxzQ29tcG9uZW50LnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyQ29tcG9uZW50LnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyQ29tcG9uZW50LnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL2NvbXBvbmVudHMvaG9tZUNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby8uL3NyYy9jb21wb25lbnRzL3Byb2R1Y3RWaWV3LnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL2NvbXBvbmVudHMvc2hvcENvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby8uL3NyYy9kZWxldGVCdG5MaXN0ZXJzLnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL2VudGl0aWVzL0NhcnQudHMiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vLi9zcmMvZW50aXRpZXMvQ2F0YWxvZy50cyIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby8uL3NyYy9lbnRpdGllcy9MaXN0LnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL2VudGl0aWVzL1Byb2R1Y3QudHMiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vLi9zcmMvZW50aXRpZXMvU3RvcmUudHMiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vLi9zcmMvZmV0Y2hQcm9kdWN0cy50cyIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby8uL3NyYy9sb2dpYy9yb3V0ZXNDYWxsLnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL3BhZ2VzL0NhcnRQYWdlLnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL3BhZ2VzL0RldGFpbHNQYWdlLnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL3BhZ2VzL0hvbWVQYWdlLnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL3BhZ2VzL1Nob3BQYWdlLnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL3VwZGF0ZUNhcnRDb3VudGVyLnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL3VzZVBhcmFtcy50cyIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RvcmUgZnJvbSBcIi4vZW50aXRpZXMvU3RvcmVcIjtcbmltcG9ydCBmZXRjaFByb2R1Y3RzIGZyb20gXCIuL2ZldGNoUHJvZHVjdHNcIjtcbmltcG9ydCBnZXRQYWdlIGZyb20gXCIuL2xvZ2ljL3JvdXRlc0NhbGxcIjtcbnZhciBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhaW5lclwiKTtcbmZ1bmN0aW9uIEFwcChjb250YWluZXIpIHtcbiAgICB2YXIgc3RvcmUgPSBuZXcgU3RvcmUoKTtcbiAgICBzdG9yZS5zZXRDYXRhbG9nKGZldGNoUHJvZHVjdHMpO1xuICAgIGZ1bmN0aW9uIHJlbmRlcihyb3V0ZSkge1xuICAgICAgICB2YXIgcGFnZSA9IG5ldyAoZ2V0UGFnZShyb3V0ZSkpKCk7XG4gICAgICAgIHBhZ2UucmVuZGVyKGNvbnRhaW5lcik7XG4gICAgICAgIHBhZ2UucGFnZVNjcmlwdChkb2N1bWVudCk7XG4gICAgfVxuICAgIHJldHVybiB7IHJlbmRlcjogcmVuZGVyLCBzdG9yZTogc3RvcmUgfTtcbn1cbnZhciBhcHAgPSBBcHAoY29udGFpbmVyKTtcbnZhciBzdG9yZSA9IGFwcC5zdG9yZTtcbmFwcC5yZW5kZXIoXCIjL1wiKTtcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAod2luZG93LmxvY2F0aW9uLmhhc2ggPSBcIiMvXCIpOyB9O1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcm91dGUgPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcbiAgICBhcHAucmVuZGVyKHJvdXRlKTtcbn0pO1xuZXhwb3J0IHsgc3RvcmUgfTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcGVuZFByb2R1Y3QoZG9jLCBwcm9kdWN0LCB2aWV3KSB7XG4gICAgdmFyIHByb2R1Y3RzQ29udGFpbmVyID0gZG9jLmdldEVsZW1lbnRCeUlkKFwicHJvZHVjdHMtY29udGFpbmVyXCIpO1xuICAgIHByb2R1Y3RzQ29udGFpbmVyLmlubmVySFRNTCArPSB2aWV3KHByb2R1Y3QpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnV5QnRuTGlzdGVuZXJzKGRvYywgc3RvcmUpIHtcbiAgICB2YXIgYnV5QnRuID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY29tcHJhclwiKSk7XG4gICAgdmFyIGNvdW50ZXIgPSBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJjb3VudGVyXCIpO1xuICAgIGJ1eUJ0bi5mb3JFYWNoKGZ1bmN0aW9uIChidXR0b24pIHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgdmFyIHF1YW50aXR5SW5wdXQgPSB0YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgICAgICAgIGlmICghcXVhbnRpdHlJbnB1dC52YWx1ZSkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiRWxpZ2UgY3XDoW50YXMgcHJlbmRhcyBxdWllcmVzIGNvbXByYXJcIik7IC8vY2FtYmlhciBwb3IgZXN0aWxvIGVycm9yXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHByb2R1Y3RJRCA9IE51bWJlcih0YXJnZXQuZGF0YXNldC5pbmRleCk7XG4gICAgICAgICAgICB2YXIgcHJvZHVjdCA9IHN0b3JlLmNhdGFsb2cuZ2V0UHJvZHVjdChwcm9kdWN0SUQpO1xuICAgICAgICAgICAgc3RvcmUuY2FydC5hZGRQcm9kdWN0KHByb2R1Y3QsIE51bWJlcihxdWFudGl0eUlucHV0LnZhbHVlKSk7XG4gICAgICAgICAgICBzdG9yZS5jYXJ0LnNldENvdW50ZXIoKTtcbiAgICAgICAgICAgIC8vXHRjb3VudGVyLmlubmVySFRNTCA9IFN0cmluZyhzdG9yZS5jYXJ0LmNvdW50ZXIpOyAvL2RvbmRlIHViaWNhciBlc3RlIG1hbmVqbyBkZWwgRE9NPyB1c2FyIGVsIGhhc2hjaGFuZ2U/XG4gICAgICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgSGFzaENoYW5nZUV2ZW50KFwiaGFzaGNoYW5nZVwiKSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IGhlYWRlckNvbXBvbmVudCBmcm9tIFwiLi9oZWFkZXJDb21wb25lbnRcIjtcbmltcG9ydCBmb290ZXJDb21wb25lbnQgZnJvbSBcIi4vZm9vdGVyQ29tcG9uZW50XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYXJ0Q29tcG9uZW50KCkge1xuICAgIHJldHVybiBcIlxcblxcdFxcdFxcdFwiICsgaGVhZGVyQ29tcG9uZW50KCkgKyBcIlxcblxcdFxcdFxcdDxhcnRpY2xlIGNsYXNzPVxcXCJjYXJ0LWNvbnRhaW5lclxcXCI+XFxuXFx0XFx0XFx0XFx0PGRpdiBpZD1cXFwicHJvZHVjdHMtY29udGFpbmVyXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHQ8IS0tIEpTIC0tPlxcblxcdFxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdFxcdFxcdDxidXR0b24+Q2hlY2tvdXQ8L2J1dHRvbj5cXG5cXHRcXHRcXHQ8L2FydGljbGU+XFxuXFxuXFx0XFx0XFx0XCIgKyBmb290ZXJDb21wb25lbnQoKSArIFwiXFxuICAgICAgICBcIjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgcmV0dXJuIFwiPGRpdiBjbGFzcz1cXFwiY2FydC1pdGVtXFxcIj5cXG5cXHRcXHRcXHRcXHQ8ZGl2PlxcblxcdFxcdFxcdFxcdFxcdDxpbWcgc3JjPVxcXCJcIiArIGl0ZW0ucHJvZHVjdC5pbWFnZSArIFwiXFxcIi8+XFxuXFx0XFx0XFx0XFx0XFx0XCIgKyBpdGVtLnByb2R1Y3QudGl0bGUgKyBcIlxcblxcdFxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdFxcdFxcdDxkaXY+XFxuXFx0XFx0XFx0XFx0XFx0XCIgKyBpdGVtLnByb2R1Y3QucHJpY2UgKyBcIlxcblxcdFxcdFxcdFxcdFxcdFggXCIgKyBpdGVtLnF1YW50aXR5ICsgXCJcXG5cXHRcXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHRcXHQ8YnV0dG9uIGRhdGEtaWQ9XFxcIlwiICsgaXRlbS5wcm9kdWN0LmlkICsgXCJcXFwiIGNsYXNzPVxcXCJjYXJ0LXJlbW92ZVxcXCI+WDwvYnV0dG9uPlxcblxcdFxcdFxcdDwvZGl2PlwiO1xufVxuIiwiaW1wb3J0IGZvb3RlckNvbXBvbmVudCBmcm9tIFwiLi9mb290ZXJDb21wb25lbnRcIjtcbmltcG9ydCBoZWFkZXJDb21wb25lbnQgZnJvbSBcIi4vaGVhZGVyQ29tcG9uZW50XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZXRhaWxzUGFnZShpZCwgcHJvZHVjdHMpIHtcbiAgICB2YXIgcHJvZHVjdCA9IHByb2R1Y3RzLmZpbmQoZnVuY3Rpb24gKHByb2QpIHsgcmV0dXJuIHByb2QuaWQgPT0gTnVtYmVyKGlkKTsgfSk7XG4gICAgcmV0dXJuIFwiXFxuICAgIFwiICsgaGVhZGVyQ29tcG9uZW50KCkgKyBcIlxcblxcbiAgICAgICAgPGFydGljbGUgY2xhc3M9XFxcImRldGFpbHMtY29udGFpbmVyXFxcIj5cXG4gICAgICAgICAgICA8aW1nIHNyYz1cXFwiXCIgKyAocHJvZHVjdCA9PT0gbnVsbCB8fCBwcm9kdWN0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9kdWN0LmltYWdlKSArIFwiXFxcIiBjbGFzcz1cXFwiaW1nLWRldGFpbHNcXFwiLz5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbmZvLXNob3BcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lLXByaWNlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxoMiBpZD1cXFwicHJvZHVjdC1uYW1lXFxcIj5cIiArIChwcm9kdWN0ID09PSBudWxsIHx8IHByb2R1Y3QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb2R1Y3QudGl0bGUpICsgXCI8L2gyPlxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+JFwiICsgKHByb2R1Y3QgPT09IG51bGwgfHwgcHJvZHVjdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJvZHVjdC5wcmljZS50b0ZpeGVkKDIpKSArIFwiPC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XFxcIm51bWJlclxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiY2FudGlkYWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cXFwiY2FudGlkYWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluPVxcXCIwXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCIwXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgLz48YnV0dG9uIGNsYXNzPVxcXCJjb21wcmFyXFxcIj5Db21wcmFyPC9idXR0b24+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8aHIgY2xhc3M9XFxcImgtbGluZVxcXCIgLz5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwiZGV0YWxsZXNcXFwiIGlkPVxcXCJkZXRhaWxzXFxcIj5cXG4gICAgICAgICAgICBcIiArIChwcm9kdWN0ID09PSBudWxsIHx8IHByb2R1Y3QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb2R1Y3QuZGVzY3JpcHRpb24pICsgXCJcXG4gICAgICAgICAgICA8L3A+XFxuICAgICAgICA8L2FydGljbGU+XFxuXFxuICAgIFwiICsgZm9vdGVyQ29tcG9uZW50KCkgKyBcIlxcblwiO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9vdGVyQ29tcG9uZW50KCkge1xuICAgIHJldHVybiBcIlxcbiAgICAgICAgPGZvb3Rlcj5cXG4gICAgICAgICAgICA8YSBocmVmPVxcXCJodHRwczovL2dpdGh1Yi5jb20vZmwtbWFydGluXFxcIj5mbC1tYXJ0aW48L2E+XFxuICAgICAgICA8L2Zvb3Rlcj5cXG4gICAgXCI7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoZWFkZXJDb21wb25lbnQoKSB7XG4gICAgcmV0dXJuIFwiXFxuICAgICAgICA8aGVhZGVyPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxvZ28tbmFtZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYXMgZmEtdHNoaXJ0XFxcIj48L2k+XFxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XFxcIiMvXFxcIiBjbGFzcz1cXFwidGl0bGVcXFwiPk1pVGllbmRhPC9hPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcnRcXFwiPlxcbiAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjL2NhcnRcXFwiPjxzcGFuIGNsYXNzPVxcXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBpY29uby1jYXJ0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgPnNob3BwaW5nX2NhcnQ8L3NwYW5cXG4gICAgICAgICAgICAgICAgPjwvYT5cXG4gICAgICAgICAgICAgICAgPHNwYW4gaWQ9XFxcImNvdW50ZXJcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8bGFiZWwgaWQ9XFxcImhhbWJ1cmdlclxcXCIgY2xhc3M9XFxcImhhbWJ1cmdlclxcXCIgZm9yPVxcXCJjaGVja21lbnVcXFwiXFxuICAgICAgICAgICAgICAgID48aSBjbGFzcz1cXFwiZmFzIGZhLWJhcnNcXFwiPjwvaVxcbiAgICAgICAgICAgID48L2xhYmVsPlxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgY2xhc3M9XFxcImNoZWNrbWVudVxcXCIgaWQ9XFxcImNoZWNrbWVudVxcXCIgLz5cXG4gICAgICAgICAgICA8bmF2YmFyIGNsYXNzPVxcXCJtZW51XFxcIj5cXG4gICAgICAgICAgICAgICAgPHVsPlxcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJyb3V0ZXJcXFwiIGhyZWY9XFxcIiMvXFxcIj5JbmljaW88L2E+XFxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJyb3V0ZXJcXFwiIGhyZWY9XFxcIiMvc2hvcFxcXCI+UHJvZHVjdG9zPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgPC91bD5cXG4gICAgICAgICAgICA8L25hdmJhcj5cXG4gICAgICAgIDwvaGVhZGVyPlxcbiAgICBcIjtcbn1cbiIsImltcG9ydCBoZWFkZXJDb21wb25lbnQgZnJvbSBcIi4vaGVhZGVyQ29tcG9uZW50XCI7XG5pbXBvcnQgZm9vdGVyQ29tcG9uZW50IGZyb20gXCIuL2Zvb3RlckNvbXBvbmVudFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZUNvbXBvbmVudCgpIHtcbiAgICByZXR1cm4gXCJcXG5cXHRcXHRcXHRcIiArIGhlYWRlckNvbXBvbmVudCgpICsgXCJcXG5cXG5cXHRcXHRcXHQ8YXJ0aWNsZSBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxuXFx0XFx0XFx0XFx0PGRpdiBpZD1cXFwidG8taG92ZXJcXFwiIGNsYXNzPVxcXCJ0by1ob3ZlclxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIGljb25vLWNlbnRyYWxcXFwiIGlkPVxcXCJpY29uXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRjaGVja3Jvb21cXG5cXHRcXHRcXHRcXHRcXHQ8L3NwYW4+PC9icj5cXG5cXHRcXHRcXHRcXHRcXHQ8YSBocmVmPVxcXCIjL3Nob3BcXFwiIGlkPVxcXCJ2ZXItcHJvZHVjdG9zXFxcIiBjbGFzcz1cXFwiZmFkZSBoaWRkZW4gdmVyLXByb2R1Y3RvcyByb3V0ZXJcXFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0PlZlciBMaXN0YWRvIGRlIFByb2R1Y3RvczwvYVxcblxcdFxcdFxcdFxcdFxcdD5cXG5cXHRcXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHQ8L2FydGljbGU+XFxuXFxuXFx0XFx0XFx0XCIgKyBmb290ZXJDb21wb25lbnQoKSArIFwiXFxuICAgICAgICBcIjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2R1Y3RWaWV3KHByb2R1Y3QpIHtcbiAgICByZXR1cm4gXCJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2R1Y3RcXFwiPlxcbiAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJcIiArIHByb2R1Y3QuaW1hZ2UgKyBcIlxcXCIgY2xhc3M9XFxcImltZy1zaG9wXFxcIiAvPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2R1Y3QtaW5mb1xcXCI+XFxuICAgICAgICAgICAgICAgIDxoMj5cIiArIHByb2R1Y3QudGl0bGUgKyBcIjwvaDI+XFxuICAgICAgICAgICAgICAgIDxzcGFuPiRcIiArIHByb2R1Y3QucHJpY2UudG9GaXhlZCgyKSArIFwiPC9zcGFuPjxhIGhyZWY9XFxcIiMvZGV0YWlscy9cIiArIHByb2R1Y3QuaWQgKyBcIlxcXCIgY2xhc3M9XFxcInJvdXRlclxcXCI+RGV0YWxsZXM8L2E+XFxuICAgICAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICA8aW5wdXRcXG4gICAgICAgICAgICAgICAgdHlwZT1cXFwibnVtYmVyXFxcIlxcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwiY2FudGlkYWRcXFwiXFxuICAgICAgICAgICAgICAgIG5hbWU9XFxcImNhbnRpZGFkXFxcIlxcbiAgICAgICAgICAgICAgICBtaW49XFxcIjBcXFwiXFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCIwXFxcIlxcbiAgICAgICAgICAgIC8+PGJ1dHRvbiBjbGFzcz1cXFwiY29tcHJhclxcXCIgZGF0YS1pbmRleD1cIiArIHByb2R1Y3QuaWQgKyBcIj5Db21wcmFyPC9idXR0b24+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG5cIjtcbn1cbiIsImltcG9ydCBmb290ZXJDb21wb25lbnQgZnJvbSBcIi4vZm9vdGVyQ29tcG9uZW50XCI7XG5pbXBvcnQgaGVhZGVyQ29tcG9uZW50IGZyb20gXCIuL2hlYWRlckNvbXBvbmVudFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hvcENvbXBvbmVudCgpIHtcbiAgICByZXR1cm4gXCJcXG4gICAgICAgICAgICBcIiArIGhlYWRlckNvbXBvbmVudCgpICsgXCJcXG5cXG4gICAgICAgICAgICAgICAgPGFydGljbGUgaWQ9XFxcInByb2R1Y3RzLWNvbnRhaW5lclxcXCIgY2xhc3M9XFxcInByb2R1Y3RzLWNvbnRhaW5lclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8IS0tIEpTIC0tPlxcbiAgICAgICAgICAgICAgICA8L2FydGljbGU+XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgXCIgKyBmb290ZXJDb21wb25lbnQoKSArIFwiXFxuICAgICAgICAgICBcIjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlbGV0ZUJ0bkxpc3RlbmVycyhkb2MsIGNhcnQpIHtcbiAgICB2YXIgYnV0dG9ucyA9IGRvYy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2FydC1yZW1vdmVcIik7XG4gICAgQXJyYXkuZnJvbShidXR0b25zKS5mb3JFYWNoKGZ1bmN0aW9uIChidXR0b24pIHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIGNvdW50ZXIgPSBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJjb3VudGVyXCIpO1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgLy9jb21vIGhhZ28gcGFyYSBldml0YXIgUHJvcGVydHkgJ2RhdGEnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgJ0hUTUxCdXR0b25FbGVtZW50Jy4gc2kgbm8gcG9uZ28gYW55IGVuIHRhcmdldD9cbiAgICAgICAgICAgIGNhcnQucmVtb3ZlUHJvZHVjdCh0YXJnZXQuZGF0YXNldC5pZCk7XG4gICAgICAgICAgICBjYXJ0LnNldENvdW50ZXIoKTtcbiAgICAgICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBIYXNoQ2hhbmdlRXZlbnQoXCJoYXNoY2hhbmdlXCIpKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4iLCJ2YXIgQ2FydCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDYXJ0KCkge1xuICAgICAgICB0aGlzLmNvdW50ZXIgPSAwO1xuICAgICAgICB0aGlzLnByb2R1Y3RzID0gW107XG4gICAgfVxuICAgIENhcnQucHJvdG90eXBlLnNldENvdW50ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY291bnRlciA9IHRoaXMucHJvZHVjdHMucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gYSArIGIucXVhbnRpdHk7XG4gICAgICAgIH0sIDApO1xuICAgIH07XG4gICAgQ2FydC5wcm90b3R5cGUuYWRkUHJvZHVjdCA9IGZ1bmN0aW9uIChwcm9kdWN0LCBxdWFudGl0eSkge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWN0cy5zb21lKGZ1bmN0aW9uIChwcm9kKSB7IHJldHVybiBwcm9kLnByb2R1Y3QuaWQgPT0gcHJvZHVjdC5pZDsgfSkpIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMucHJvZHVjdHMuZmluZEluZGV4KGZ1bmN0aW9uIChwcm9kKSB7IHJldHVybiBwcm9kLnByb2R1Y3QgPT0gcHJvZHVjdDsgfSk7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RzW2luZGV4XS5xdWFudGl0eSArPSBxdWFudGl0eTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb2R1Y3RzLnB1c2goeyBwcm9kdWN0OiBwcm9kdWN0LCBxdWFudGl0eTogcXVhbnRpdHkgfSk7XG4gICAgfTtcbiAgICBDYXJ0LnByb3RvdHlwZS5yZW1vdmVQcm9kdWN0ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5wcm9kdWN0cy5maW5kSW5kZXgoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW0ucHJvZHVjdC5pZCA9PSBpZDsgfSk7XG4gICAgICAgIGlmICgoKF9hID0gdGhpcy5wcm9kdWN0c1tpbmRleF0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5xdWFudGl0eSkgPT0gMSkge1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvZHVjdHNbaW5kZXhdLnF1YW50aXR5IC09IDE7XG4gICAgfTtcbiAgICByZXR1cm4gQ2FydDtcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBDYXJ0O1xuLy9jdWFuZG8gZWwgYm90b24gZGVzYXBhcmV6Y2EgZGVsIGRvbSwgbm8gdmEgYSBleGlzdGlyIGVzdGUgcHJvYmxlbWEsIHBlcm8gZW4gZXN0ZSBjb250ZXh0byBzaS4gRGViZXJpYSBlc3RhciBsYSBmdW5jaW9uIHJlbW92ZVxuLy9jdWJpZXJ0YSBhbnRlIGxhIHNpdHVhY2lvbiBkZSBxdWUgIXRoaXMucHJvZHVjdHNbaW5kZXhdPyBsZWlhIDM1XG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fc3ByZWFkQXJyYXkgPSAodGhpcyAmJiB0aGlzLl9fc3ByZWFkQXJyYXkpIHx8IGZ1bmN0aW9uICh0bywgZnJvbSwgcGFjaykge1xuICAgIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGlmIChhciB8fCAhKGkgaW4gZnJvbSkpIHtcbiAgICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XG4gICAgICAgICAgICBhcltpXSA9IGZyb21baV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XG59O1xuaW1wb3J0IExpc3QgZnJvbSBcIi4vTGlzdFwiO1xudmFyIENhdGFsb2dMaXN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhDYXRhbG9nTGlzdCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDYXRhbG9nTGlzdCgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuX3Byb2R1Y3RzID0gW107XG4gICAgICAgIF90aGlzLnJlc3VsdHMgPSBfX3NwcmVhZEFycmF5KFtdLCBfdGhpcy5fcHJvZHVjdHMsIHRydWUpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDYXRhbG9nTGlzdC5wcm90b3R5cGUsIFwicHJvZHVjdHNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wcm9kdWN0cztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIENhdGFsb2dMaXN0LnByb3RvdHlwZS5nZXRQcm9kdWN0ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RzLmZpbmQoZnVuY3Rpb24gKHByb2QpIHsgcmV0dXJuIHByb2QuaWQgPT0gaWQ7IH0pO1xuICAgIH07XG4gICAgQ2F0YWxvZ0xpc3QucHJvdG90eXBlLmFkZFByb2R1Y3RzID0gZnVuY3Rpb24gKHByb2R1Y3QpIHtcbiAgICAgICAgdGhpcy5fcHJvZHVjdHMucHVzaChwcm9kdWN0KTtcbiAgICB9O1xuICAgIHJldHVybiBDYXRhbG9nTGlzdDtcbn0oTGlzdCkpO1xuZXhwb3J0IGRlZmF1bHQgQ2F0YWxvZ0xpc3Q7XG4iLCJ2YXIgTGlzdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBMaXN0KCkge1xuICAgIH1cbiAgICByZXR1cm4gTGlzdDtcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBMaXN0O1xuIiwidmFyIFByb2R1Y3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUHJvZHVjdCgpIHtcbiAgICB9XG4gICAgUHJvZHVjdC5wcm90b3R5cGUuZ2VUVGl0bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICAgIH07XG4gICAgUHJvZHVjdC5wcm90b3R5cGUuZ2V0UHJpY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByaWNlO1xuICAgIH07XG4gICAgUHJvZHVjdC5wcm90b3R5cGUuZ2V0SUQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xuICAgIH07XG4gICAgUHJvZHVjdC5wcm90b3R5cGUuZ2V0RGVzY3JpcHRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICAgIH07XG4gICAgUHJvZHVjdC5wcm90b3R5cGUuZ2V0SW1hZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmltYWdlO1xuICAgIH07XG4gICAgcmV0dXJuIFByb2R1Y3Q7XG59KCkpO1xuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdDtcbi8vQUwgVVNBUiBMQSBJTlRFUkZBQ0UgQk9SUkUgTE9TIF8gWSBSRUZPUk1VTEUgR0VUVEVSUywgRVNUQSBPSz9cbi8vQk9SUkUgU0VUVEVSUyBFTiBCQVNFIEEgTm90ZSB0aGF0IGEgZmllbGQtYmFja2VkIGdldC9zZXQgcGFpciB3aXRoIG5vIGV4dHJhIGxvZ2ljXG4vL2lzIHZlcnkgcmFyZWx5IHVzZWZ1bCBpbiBKYXZhU2NyaXB0LiBJdOKAmXMgZmluZSB0byBleHBvc2UgcHVibGljIGZpZWxkcyBpZlxuLy95b3UgZG9u4oCZdCBuZWVkIHRvIGFkZCBhZGRpdGlvbmFsIGxvZ2ljIGR1cmluZyB0aGUgZ2V0L3NldCBvcGVyYXRpb25zLlxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbmltcG9ydCBQcm9kdWN0IGZyb20gXCIuL1Byb2R1Y3RcIjtcbmltcG9ydCBDYXRhbG9nTGlzdCBmcm9tIFwiLi9DYXRhbG9nXCI7XG5pbXBvcnQgQ2FydCBmcm9tIFwiLi9DYXJ0XCI7XG52YXIgU3RvcmUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU3RvcmUoKSB7XG4gICAgICAgIHRoaXMuX2NhcnQgPSBuZXcgQ2FydCgpO1xuICAgICAgICB0aGlzLl9jYXRhbG9nID0gbmV3IENhdGFsb2dMaXN0KCk7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdG9yZS5wcm90b3R5cGUsIFwiY2FydFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhcnQ7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RvcmUucHJvdG90eXBlLCBcImNhdGFsb2dcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jYXRhbG9nO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgU3RvcmUucHJvdG90eXBlLnNldENhdGFsb2cgPSBmdW5jdGlvbiAoZmV0Y2hGdW5jdGlvbikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZGF0YTtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIGZldGNoRnVuY3Rpb24oKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdCA9IG5ldyBQcm9kdWN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC50aXRsZSA9IGl0ZW0udGl0bGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5pZCA9IGl0ZW0uaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5wcmljZSA9IGl0ZW0ucHJpY2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5kZXNjcmlwdGlvbiA9IGl0ZW0uZGVzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5pbWFnZSA9IGl0ZW0uaW1hZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuX2NhdGFsb2cuYWRkUHJvZHVjdHMocHJvZHVjdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gU3RvcmU7XG59KCkpO1xuZXhwb3J0IGRlZmF1bHQgU3RvcmU7XG4vLyBkZSBxdWUgbW9kbyB2aW5jdWxhciBlbCBjYXRhbG9nbyBhIGxhIGNhcnRhPyBjb21vIGFyZ3VlbWVudG8gZGUgc3VzIG1ldG9kb3MgbyBkZSBzdSBjb25zdHJ1Y3Rvcj9cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmZXRjaFByb2R1Y3RzKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRhdGE7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIGZldGNoKFwiaHR0cHM6Ly9mYWtlc3RvcmVhcGkuY29tL3Byb2R1Y3RzXCIpLnRoZW4oZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSldO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGRhdGFdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCBIb21lUGFnZSBmcm9tIFwiLi4vcGFnZXMvSG9tZVBhZ2VcIjtcbmltcG9ydCBTaG9wUGFnZSBmcm9tIFwiLi4vcGFnZXMvU2hvcFBhZ2VcIjtcbmltcG9ydCB1c2VQYXJhbXMgZnJvbSBcIi4uL3VzZVBhcmFtc1wiO1xuaW1wb3J0IERldGFpbHNQYWdlIGZyb20gXCIuLi9wYWdlcy9EZXRhaWxzUGFnZVwiO1xuaW1wb3J0IENhcnRQYWdlIGZyb20gXCIuLi9wYWdlcy9DYXJ0UGFnZVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm91dGVzQ2FsbCh1cmwpIHtcbiAgICB2YXIgcGF0aCA9IHVzZVBhcmFtcygpLnBhdGg7XG4gICAgdmFyIHJvdXRlcyA9IHtcbiAgICAgICAgXCJcIjogSG9tZVBhZ2UsXG4gICAgICAgIFwiIy9cIjogSG9tZVBhZ2UsXG4gICAgICAgIFwiIy9zaG9wXCI6IFNob3BQYWdlLFxuICAgICAgICBcIiMvZGV0YWlsc1wiOiBEZXRhaWxzUGFnZSxcbiAgICAgICAgXCIjL2NhcnRcIjogQ2FydFBhZ2UsXG4gICAgICAgIC8vIFwiLzQwNFwiOiAoKSA9PiBlcnJvclBhZ2UoKSxcbiAgICB9O1xuICAgIC8vIGlmICghcm91dGVzW3BhdGhdKSB7XG4gICAgLy8gXHRyZXR1cm4gcm91dGVzW1wiLzQwNFwiXTtcbiAgICAvLyB9XG4gICAgcmV0dXJuIHJvdXRlc1twYXRoXTtcbn1cbiIsImltcG9ydCBjYXJ0Q29tcG9uZW50IGZyb20gXCIuLi9jb21wb25lbnRzL2NhcnRDb21wb25lbnRcIjtcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIi4uL2FwcFwiO1xuaW1wb3J0IGFwcGVuZFByb2R1Y3QgZnJvbSBcIi4uL2FwcGVuZFByb2R1Y3RcIjtcbmltcG9ydCBjYXJ0SXRlbVZpZXcgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2FydEl0ZW1WaWV3XCI7XG5pbXBvcnQgdXBkYXRlQ2FydENvdW50ZXIgZnJvbSBcIi4uL3VwZGF0ZUNhcnRDb3VudGVyXCI7XG5pbXBvcnQgZGVsZXRlQnRuTGlzdGVuZXJzIGZyb20gXCIuLi9kZWxldGVCdG5MaXN0ZXJzXCI7XG52YXIgQ2FydFBhZ2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ2FydFBhZ2UoKSB7XG4gICAgfVxuICAgIENhcnRQYWdlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICBjLmlubmVySFRNTCA9IGNhcnRDb21wb25lbnQoKTtcbiAgICB9O1xuICAgIENhcnRQYWdlLnByb3RvdHlwZS5wYWdlU2NyaXB0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvL2V4dHJhZXIganVudG8gYSBTaG9wUGFnZVxuICAgICAgICBzdG9yZS5jYXJ0LnByb2R1Y3RzLmZvckVhY2goZnVuY3Rpb24gKHByb2R1Y3QpIHtcbiAgICAgICAgICAgIGFwcGVuZFByb2R1Y3QoZG9jdW1lbnQsIHByb2R1Y3QsIGNhcnRJdGVtVmlldyk7XG4gICAgICAgIH0pO1xuICAgICAgICBkZWxldGVCdG5MaXN0ZW5lcnMoZG9jdW1lbnQsIHN0b3JlLmNhcnQpO1xuICAgICAgICB1cGRhdGVDYXJ0Q291bnRlcihkb2N1bWVudCwgc3RvcmUpO1xuICAgICAgICAvL3VwZGF0ZSBsaXN0YSBkZSBwcm9kdWN0b3MgRE9NXG4gICAgfTtcbiAgICByZXR1cm4gQ2FydFBhZ2U7XG59KCkpO1xuZXhwb3J0IGRlZmF1bHQgQ2FydFBhZ2U7XG4iLCJpbXBvcnQgZGV0YWlsc0NvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9kZXRhaWxzQ29tcG9uZW50XCI7XG5pbXBvcnQgdXNlUGFyYW1zIGZyb20gXCIuLi91c2VQYXJhbXNcIjtcbmltcG9ydCBidXlCdG5MaXN0ZW5lcnMgZnJvbSBcIi4uL2J1eUJ0bkxpc3RlbmVyc1wiO1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi4vYXBwXCI7XG5pbXBvcnQgdXBkYXRlQ2FydENvdW50ZXIgZnJvbSBcIi4uL3VwZGF0ZUNhcnRDb3VudGVyXCI7XG52YXIgRGV0YWlsc1BhZ2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRGV0YWlsc1BhZ2UoKSB7XG4gICAgfVxuICAgIERldGFpbHNQYWdlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICB2YXIgcHJvZHVjdElEID0gdXNlUGFyYW1zKCkucHJvZHVjdElEO1xuICAgICAgICBjLmlubmVySFRNTCA9IGRldGFpbHNDb21wb25lbnQocHJvZHVjdElELCBzdG9yZS5jYXRhbG9nLnByb2R1Y3RzKTtcbiAgICB9O1xuICAgIERldGFpbHNQYWdlLnByb3RvdHlwZS5wYWdlU2NyaXB0ID0gZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgYnV5QnRuTGlzdGVuZXJzKGRvY3VtZW50LCBzdG9yZSk7XG4gICAgICAgIHVwZGF0ZUNhcnRDb3VudGVyKGRvY3VtZW50LCBzdG9yZSk7XG4gICAgfTtcbiAgICByZXR1cm4gRGV0YWlsc1BhZ2U7XG59KCkpO1xuZXhwb3J0IGRlZmF1bHQgRGV0YWlsc1BhZ2U7XG4iLCJpbXBvcnQgaG9tZUNvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9ob21lQ29tcG9uZW50XCI7XG5pbXBvcnQgdXBkYXRlQ2FydENvdW50ZXIgZnJvbSBcIi4uL3VwZGF0ZUNhcnRDb3VudGVyXCI7XG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCIuLi9hcHBcIjtcbnZhciBIb21lUGFnZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBIb21lUGFnZSgpIHtcbiAgICB9XG4gICAgSG9tZVBhZ2UucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIGMuaW5uZXJIVE1MID0gaG9tZUNvbXBvbmVudCgpO1xuICAgIH07XG4gICAgSG9tZVBhZ2UucHJvdG90eXBlLnBhZ2VTY3JpcHQgPSBmdW5jdGlvbiAoZCkge1xuICAgICAgICB2YXIgdmVyUHJvZHVjdG9zID0gZC5nZXRFbGVtZW50QnlJZChcInZlci1wcm9kdWN0b3NcIik7XG4gICAgICAgIHZhciBob3Zlckl0ZW1zID0gZC5nZXRFbGVtZW50QnlJZChcInRvLWhvdmVyXCIpO1xuICAgICAgICBob3Zlckl0ZW1zLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZlclByb2R1Y3Rvcy5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGhvdmVySXRlbXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmVyUHJvZHVjdG9zLmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgdXBkYXRlQ2FydENvdW50ZXIoZG9jdW1lbnQsIHN0b3JlKTtcbiAgICB9O1xuICAgIHJldHVybiBIb21lUGFnZTtcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiIsImltcG9ydCBzaG9wQ29tcG9uZW50IGZyb20gXCIuLi9jb21wb25lbnRzL3Nob3BDb21wb25lbnRcIjtcbmltcG9ydCBhcHBlbmRQcm9kdWN0IGZyb20gXCIuLi9hcHBlbmRQcm9kdWN0XCI7XG5pbXBvcnQgYnV5QnRuTGlzdGVuZXJzIGZyb20gXCIuLi9idXlCdG5MaXN0ZW5lcnNcIjtcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIi4uL2FwcFwiO1xuaW1wb3J0IHByb2R1Y3RWaWV3IGZyb20gXCIuLi9jb21wb25lbnRzL3Byb2R1Y3RWaWV3XCI7XG5pbXBvcnQgdXBkYXRlQ2FydENvdW50ZXIgZnJvbSBcIi4uL3VwZGF0ZUNhcnRDb3VudGVyXCI7XG52YXIgU2hvcFBhZ2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2hvcFBhZ2UoKSB7XG4gICAgfVxuICAgIFNob3BQYWdlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICBjLmlubmVySFRNTCA9IHNob3BDb21wb25lbnQoKTtcbiAgICB9O1xuICAgIFNob3BQYWdlLnByb3RvdHlwZS5wYWdlU2NyaXB0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzdG9yZS5jYXRhbG9nLnByb2R1Y3RzLmZvckVhY2goZnVuY3Rpb24gKHByb2R1Y3QpIHtcbiAgICAgICAgICAgIGFwcGVuZFByb2R1Y3QoZG9jdW1lbnQsIHByb2R1Y3QsIHByb2R1Y3RWaWV3KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGJ1eUJ0bkxpc3RlbmVycyhkb2N1bWVudCwgc3RvcmUpO1xuICAgICAgICB1cGRhdGVDYXJ0Q291bnRlcihkb2N1bWVudCwgc3RvcmUpO1xuICAgIH07XG4gICAgcmV0dXJuIFNob3BQYWdlO1xufSgpKTtcbmV4cG9ydCBkZWZhdWx0IFNob3BQYWdlO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlQ2FydENvdW50ZXIoZG9jLCBzdG9yZSkge1xuICAgIHZhciBjb3VudGVyID0gZG9jLmdldEVsZW1lbnRCeUlkKFwiY291bnRlclwiKTtcbiAgICBjb3VudGVyLmlubmVySFRNTCA9IFN0cmluZyhzdG9yZS5jYXJ0LmNvdW50ZXIpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlUGFyYW1zKCkge1xuICAgIHZhciB1cmwgPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcbiAgICB2YXIgc3BsaXRlZCA9IHVybC5zcGxpdChcIi9cIik7XG4gICAgdmFyIHByb2R1Y3RJRCA9IHNwbGl0ZWRbMl07XG4gICAgdmFyIHBhdGggPSBzcGxpdGVkLnNsaWNlKDAsIDIpLmpvaW4oXCIvXCIpO1xuICAgIHJldHVybiB7IHBhdGg6IHBhdGgsIHByb2R1Y3RJRDogcHJvZHVjdElEIH07XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2FwcC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==