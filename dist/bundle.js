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
            counter.innerHTML = String(store.cart.counter); //donde ubicar este manejo del DOM? funcion update counter?
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
    return "\n\t\t\t" + (0,_headerComponent__WEBPACK_IMPORTED_MODULE_0__["default"])() + "\n\t\t\t<article>\n\t\t\t\t<div id=\"products-container\">\n\t\t\t\t\t<!-- JS -->\n\t\t\t\t</div>\n\t\t\t\t<button>Comprar</button>\n\t\t\t</article>\n\n\t\t\t" + (0,_footerComponent__WEBPACK_IMPORTED_MODULE_1__["default"])() + "\n        ";
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
    return "<div class=\"cart-item\">\n\t\t\t\t<div>\n\t\t\t\t\t<img src=\"" + item.product.image + "\"/>\n\t\t\t\t\t" + item.product.title + "\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t" + item.product.price + "\n\t\t\t\t\tX " + item.quantity + "\n\t\t\t\t</div>\n\t\t\t</div>";
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
    return "\n    " + (0,_headerComponent__WEBPACK_IMPORTED_MODULE_1__["default"])() + "\n\n        <article>\n            <img src=\"" + (product === null || product === void 0 ? void 0 : product.image) + "\"/>\n            <div class=\"info-shop\">\n                <div class=\"name-price\">\n                    <h2 id=\"product-name\">" + (product === null || product === void 0 ? void 0 : product.title) + "</h2>\n                    <span>$" + (product === null || product === void 0 ? void 0 : product.price.toFixed(2)) + "</span>\n                </div>\n                <div>\n                    <input\n                        type=\"number\"\n                        class=\"cantidad\"\n                        name=\"cantidad\"\n                        min=\"0\"\n                        placeholder=\"0\"\n                    /><button class=\"comprar\">Comprar</button>\n                </div>\n                <hr class=\"h-line\" />\n            </div>\n            <p class=\"detalles\" id=\"details\">\n            " + (product === null || product === void 0 ? void 0 : product.description) + "\n            </p>\n        </article>\n\n    " + (0,_footerComponent__WEBPACK_IMPORTED_MODULE_0__["default"])() + "\n";
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
    return "\n        <div class=\"product\">\n            <img src=\"" + product.image + "\" class=\"blue-shirt\" />\n            <div class=\"product-info\">\n                <h2>" + product.title + "</h2>\n                <span>$" + product.price.toFixed(2) + "</span><a href=\"#/details/" + product.id + "\" class=\"router\">Detalles</a>\n            <div>\n            <input\n                type=\"number\"\n                class=\"cantidad\"\n                name=\"cantidad\"\n                min=\"0\"\n                placeholder=\"0\"\n            /><button class=\"comprar\" data-index=" + product.id + ">Comprar</button>\n            </div>\n            </div>\n        </div>\n";
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
    return "\n            " + (0,_headerComponent__WEBPACK_IMPORTED_MODULE_1__["default"])() + "\n\n                <article id=\"products-container\">\n                    <!-- JS -->\n                </article>\n            \n            " + (0,_footerComponent__WEBPACK_IMPORTED_MODULE_0__["default"])() + "\n           ";
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
        this.products.push({ product: product, quantity: quantity });
        this.setCounter();
    };
    return Cart;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);


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
var Catalog = /** @class */ (function () {
    function Catalog() {
        this._products = [];
    }
    Object.defineProperty(Catalog.prototype, "products", {
        get: function () {
            return this._products;
        },
        enumerable: false,
        configurable: true
    });
    Catalog.prototype.getProduct = function (id) {
        return this.products.find(function (prod) { return prod.id == id; });
    };
    Catalog.prototype.addProducts = function (product) {
        this._products.push(product);
    };
    return Catalog;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Catalog);
//linea 4, es lo mismo que inicializar en el constructor?


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





var CartPage = /** @class */ (function () {
    function CartPage() {
    }
    CartPage.prototype.render = function (c) {
        c.innerHTML = (0,_components_cartComponent__WEBPACK_IMPORTED_MODULE_0__["default"])();
    };
    CartPage.prototype.pageScript = function () {
        _app__WEBPACK_IMPORTED_MODULE_1__.store.cart.products.forEach(function (product) {
            (0,_appendProduct__WEBPACK_IMPORTED_MODULE_2__["default"])(document, product, _components_cartItemView__WEBPACK_IMPORTED_MODULE_3__["default"]);
        });
        (0,_updateCartCounter__WEBPACK_IMPORTED_MODULE_4__["default"])(document, _app__WEBPACK_IMPORTED_MODULE_1__.store);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxzQkFBc0IscUVBQWE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUSw4REFBaUIsV0FBVyx1Q0FBSztBQUN6QztBQUNBO0FBQ0EsQ0FBQztBQUNELGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJnQztBQUNYO0FBQ0k7QUFDbEI7QUFDcUI7QUFDQztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixxRUFBYTtBQUNuQztBQUNBO0FBQ0EsUUFBUSxnRUFBOEI7QUFDdEMsWUFBWSwwREFBYSxvQkFBb0IsK0RBQVc7QUFDeEQsU0FBUztBQUNULFFBQVEsNERBQWUsV0FBVyx1Q0FBSztBQUN2QyxRQUFRLDhEQUFpQixXQUFXLHVDQUFLO0FBQ3pDO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNyQlQ7QUFDZjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0hlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7Ozs7Ozs7VUNOQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby8uL3NyYy9hcHBlbmRQcm9kdWN0LnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL2J1eUJ0bkxpc3RlbmVycy50cyIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby8uL3NyYy9jb21wb25lbnRzL2NhcnRDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vLi9zcmMvY29tcG9uZW50cy9jYXJ0SXRlbVZpZXcudHMiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vLi9zcmMvY29tcG9uZW50cy9kZXRhaWxzQ29tcG9uZW50LnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyQ29tcG9uZW50LnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyQ29tcG9uZW50LnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL2NvbXBvbmVudHMvaG9tZUNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby8uL3NyYy9jb21wb25lbnRzL3Byb2R1Y3RWaWV3LnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL2NvbXBvbmVudHMvc2hvcENvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby8uL3NyYy9lbnRpdGllcy9DYXJ0LnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL2VudGl0aWVzL0NhdGFsb2cudHMiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vLi9zcmMvZW50aXRpZXMvUHJvZHVjdC50cyIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby8uL3NyYy9lbnRpdGllcy9TdG9yZS50cyIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby8uL3NyYy9mZXRjaFByb2R1Y3RzLnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL2xvZ2ljL3JvdXRlc0NhbGwudHMiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vLi9zcmMvcGFnZXMvQ2FydFBhZ2UudHMiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vLi9zcmMvcGFnZXMvRGV0YWlsc1BhZ2UudHMiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vLi9zcmMvcGFnZXMvSG9tZVBhZ2UudHMiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vLi9zcmMvcGFnZXMvU2hvcFBhZ2UudHMiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vLi9zcmMvdXBkYXRlQ2FydENvdW50ZXIudHMiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vLi9zcmMvdXNlUGFyYW1zLnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdG9yZSBmcm9tIFwiLi9lbnRpdGllcy9TdG9yZVwiO1xuaW1wb3J0IGZldGNoUHJvZHVjdHMgZnJvbSBcIi4vZmV0Y2hQcm9kdWN0c1wiO1xuaW1wb3J0IGdldFBhZ2UgZnJvbSBcIi4vbG9naWMvcm91dGVzQ2FsbFwiO1xudmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFpbmVyXCIpO1xuZnVuY3Rpb24gQXBwKGNvbnRhaW5lcikge1xuICAgIHZhciBzdG9yZSA9IG5ldyBTdG9yZSgpO1xuICAgIHN0b3JlLnNldENhdGFsb2coZmV0Y2hQcm9kdWN0cyk7XG4gICAgZnVuY3Rpb24gcmVuZGVyKHJvdXRlKSB7XG4gICAgICAgIHZhciBwYWdlID0gbmV3IChnZXRQYWdlKHJvdXRlKSkoKTtcbiAgICAgICAgcGFnZS5yZW5kZXIoY29udGFpbmVyKTtcbiAgICAgICAgcGFnZS5wYWdlU2NyaXB0KGRvY3VtZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIHsgcmVuZGVyOiByZW5kZXIsIHN0b3JlOiBzdG9yZSB9O1xufVxudmFyIGFwcCA9IEFwcChjb250YWluZXIpO1xudmFyIHN0b3JlID0gYXBwLnN0b3JlO1xuYXBwLnJlbmRlcihcIiMvXCIpO1xud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh3aW5kb3cubG9jYXRpb24uaGFzaCA9IFwiIy9cIik7IH07XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImhhc2hjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgIHZhciByb3V0ZSA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuICAgIGFwcC5yZW5kZXIocm91dGUpO1xufSk7XG5leHBvcnQgeyBzdG9yZSB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXBwZW5kUHJvZHVjdChkb2MsIHByb2R1Y3QsIHZpZXcpIHtcbiAgICB2YXIgcHJvZHVjdHNDb250YWluZXIgPSBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJwcm9kdWN0cy1jb250YWluZXJcIik7XG4gICAgcHJvZHVjdHNDb250YWluZXIuaW5uZXJIVE1MICs9IHZpZXcocHJvZHVjdCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidXlCdG5MaXN0ZW5lcnMoZG9jLCBzdG9yZSkge1xuICAgIHZhciBidXlCdG4gPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjb21wcmFyXCIpKTtcbiAgICB2YXIgY291bnRlciA9IGRvYy5nZXRFbGVtZW50QnlJZChcImNvdW50ZXJcIik7XG4gICAgYnV5QnRuLmZvckVhY2goZnVuY3Rpb24gKGJ1dHRvbikge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICB2YXIgcXVhbnRpdHlJbnB1dCA9IHRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgICAgICAgICAgaWYgKCFxdWFudGl0eUlucHV0LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJFbGlnZSBjdcOhbnRhcyBwcmVuZGFzIHF1aWVyZXMgY29tcHJhclwiKTsgLy9jYW1iaWFyIHBvciBlc3RpbG8gZXJyb3JcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcHJvZHVjdElEID0gTnVtYmVyKHRhcmdldC5kYXRhc2V0LmluZGV4KTtcbiAgICAgICAgICAgIHZhciBwcm9kdWN0ID0gc3RvcmUuY2F0YWxvZy5nZXRQcm9kdWN0KHByb2R1Y3RJRCk7XG4gICAgICAgICAgICBzdG9yZS5jYXJ0LmFkZFByb2R1Y3QocHJvZHVjdCwgTnVtYmVyKHF1YW50aXR5SW5wdXQudmFsdWUpKTtcbiAgICAgICAgICAgIGNvdW50ZXIuaW5uZXJIVE1MID0gU3RyaW5nKHN0b3JlLmNhcnQuY291bnRlcik7IC8vZG9uZGUgdWJpY2FyIGVzdGUgbWFuZWpvIGRlbCBET00/IGZ1bmNpb24gdXBkYXRlIGNvdW50ZXI/XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IGhlYWRlckNvbXBvbmVudCBmcm9tIFwiLi9oZWFkZXJDb21wb25lbnRcIjtcbmltcG9ydCBmb290ZXJDb21wb25lbnQgZnJvbSBcIi4vZm9vdGVyQ29tcG9uZW50XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYXJ0Q29tcG9uZW50KCkge1xuICAgIHJldHVybiBcIlxcblxcdFxcdFxcdFwiICsgaGVhZGVyQ29tcG9uZW50KCkgKyBcIlxcblxcdFxcdFxcdDxhcnRpY2xlPlxcblxcdFxcdFxcdFxcdDxkaXYgaWQ9XFxcInByb2R1Y3RzLWNvbnRhaW5lclxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0PCEtLSBKUyAtLT5cXG5cXHRcXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHRcXHQ8YnV0dG9uPkNvbXByYXI8L2J1dHRvbj5cXG5cXHRcXHRcXHQ8L2FydGljbGU+XFxuXFxuXFx0XFx0XFx0XCIgKyBmb290ZXJDb21wb25lbnQoKSArIFwiXFxuICAgICAgICBcIjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgcmV0dXJuIFwiPGRpdiBjbGFzcz1cXFwiY2FydC1pdGVtXFxcIj5cXG5cXHRcXHRcXHRcXHQ8ZGl2PlxcblxcdFxcdFxcdFxcdFxcdDxpbWcgc3JjPVxcXCJcIiArIGl0ZW0ucHJvZHVjdC5pbWFnZSArIFwiXFxcIi8+XFxuXFx0XFx0XFx0XFx0XFx0XCIgKyBpdGVtLnByb2R1Y3QudGl0bGUgKyBcIlxcblxcdFxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdFxcdFxcdDxkaXY+XFxuXFx0XFx0XFx0XFx0XFx0XCIgKyBpdGVtLnByb2R1Y3QucHJpY2UgKyBcIlxcblxcdFxcdFxcdFxcdFxcdFggXCIgKyBpdGVtLnF1YW50aXR5ICsgXCJcXG5cXHRcXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHQ8L2Rpdj5cIjtcbn1cbiIsImltcG9ydCBmb290ZXJDb21wb25lbnQgZnJvbSBcIi4vZm9vdGVyQ29tcG9uZW50XCI7XG5pbXBvcnQgaGVhZGVyQ29tcG9uZW50IGZyb20gXCIuL2hlYWRlckNvbXBvbmVudFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGV0YWlsc1BhZ2UoaWQsIHByb2R1Y3RzKSB7XG4gICAgdmFyIHByb2R1Y3QgPSBwcm9kdWN0cy5maW5kKGZ1bmN0aW9uIChwcm9kKSB7IHJldHVybiBwcm9kLmlkID09IE51bWJlcihpZCk7IH0pO1xuICAgIHJldHVybiBcIlxcbiAgICBcIiArIGhlYWRlckNvbXBvbmVudCgpICsgXCJcXG5cXG4gICAgICAgIDxhcnRpY2xlPlxcbiAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJcIiArIChwcm9kdWN0ID09PSBudWxsIHx8IHByb2R1Y3QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb2R1Y3QuaW1hZ2UpICsgXCJcXFwiLz5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbmZvLXNob3BcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lLXByaWNlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxoMiBpZD1cXFwicHJvZHVjdC1uYW1lXFxcIj5cIiArIChwcm9kdWN0ID09PSBudWxsIHx8IHByb2R1Y3QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb2R1Y3QudGl0bGUpICsgXCI8L2gyPlxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+JFwiICsgKHByb2R1Y3QgPT09IG51bGwgfHwgcHJvZHVjdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJvZHVjdC5wcmljZS50b0ZpeGVkKDIpKSArIFwiPC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XFxcIm51bWJlclxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiY2FudGlkYWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cXFwiY2FudGlkYWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluPVxcXCIwXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCIwXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgLz48YnV0dG9uIGNsYXNzPVxcXCJjb21wcmFyXFxcIj5Db21wcmFyPC9idXR0b24+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8aHIgY2xhc3M9XFxcImgtbGluZVxcXCIgLz5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwiZGV0YWxsZXNcXFwiIGlkPVxcXCJkZXRhaWxzXFxcIj5cXG4gICAgICAgICAgICBcIiArIChwcm9kdWN0ID09PSBudWxsIHx8IHByb2R1Y3QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb2R1Y3QuZGVzY3JpcHRpb24pICsgXCJcXG4gICAgICAgICAgICA8L3A+XFxuICAgICAgICA8L2FydGljbGU+XFxuXFxuICAgIFwiICsgZm9vdGVyQ29tcG9uZW50KCkgKyBcIlxcblwiO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9vdGVyQ29tcG9uZW50KCkge1xuICAgIHJldHVybiBcIlxcbiAgICAgICAgPGZvb3Rlcj5cXG4gICAgICAgICAgICA8YSBocmVmPVxcXCJodHRwczovL2dpdGh1Yi5jb20vZmwtbWFydGluXFxcIj5mbC1tYXJ0aW48L2E+XFxuICAgICAgICA8L2Zvb3Rlcj5cXG4gICAgXCI7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoZWFkZXJDb21wb25lbnQoKSB7XG4gICAgcmV0dXJuIFwiXFxuICAgICAgICA8aGVhZGVyPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxvZ28tbmFtZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYXMgZmEtdHNoaXJ0XFxcIj48L2k+XFxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XFxcIiMvXFxcIiBjbGFzcz1cXFwidGl0bGVcXFwiPk1pVGllbmRhPC9hPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcnRcXFwiPlxcbiAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjL2NhcnRcXFwiPjxzcGFuIGNsYXNzPVxcXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBpY29uby1jYXJ0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgPnNob3BwaW5nX2NhcnQ8L3NwYW5cXG4gICAgICAgICAgICAgICAgPjwvYT5cXG4gICAgICAgICAgICAgICAgPHNwYW4gaWQ9XFxcImNvdW50ZXJcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8bGFiZWwgaWQ9XFxcImhhbWJ1cmdlclxcXCIgY2xhc3M9XFxcImhhbWJ1cmdlclxcXCIgZm9yPVxcXCJjaGVja21lbnVcXFwiXFxuICAgICAgICAgICAgICAgID48aSBjbGFzcz1cXFwiZmFzIGZhLWJhcnNcXFwiPjwvaVxcbiAgICAgICAgICAgID48L2xhYmVsPlxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgY2xhc3M9XFxcImNoZWNrbWVudVxcXCIgaWQ9XFxcImNoZWNrbWVudVxcXCIgLz5cXG4gICAgICAgICAgICA8bmF2YmFyIGNsYXNzPVxcXCJtZW51XFxcIj5cXG4gICAgICAgICAgICAgICAgPHVsPlxcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJyb3V0ZXJcXFwiIGhyZWY9XFxcIiMvXFxcIj5JbmljaW88L2E+XFxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJyb3V0ZXJcXFwiIGhyZWY9XFxcIiMvc2hvcFxcXCI+UHJvZHVjdG9zPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgPC91bD5cXG4gICAgICAgICAgICA8L25hdmJhcj5cXG4gICAgICAgIDwvaGVhZGVyPlxcbiAgICBcIjtcbn1cbiIsImltcG9ydCBoZWFkZXJDb21wb25lbnQgZnJvbSBcIi4vaGVhZGVyQ29tcG9uZW50XCI7XG5pbXBvcnQgZm9vdGVyQ29tcG9uZW50IGZyb20gXCIuL2Zvb3RlckNvbXBvbmVudFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZUNvbXBvbmVudCgpIHtcbiAgICByZXR1cm4gXCJcXG5cXHRcXHRcXHRcIiArIGhlYWRlckNvbXBvbmVudCgpICsgXCJcXG5cXG5cXHRcXHRcXHQ8YXJ0aWNsZSBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxuXFx0XFx0XFx0XFx0PGRpdiBpZD1cXFwidG8taG92ZXJcXFwiIGNsYXNzPVxcXCJ0by1ob3ZlclxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIGljb25vLWNlbnRyYWxcXFwiIGlkPVxcXCJpY29uXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRjaGVja3Jvb21cXG5cXHRcXHRcXHRcXHRcXHQ8L3NwYW4+PC9icj5cXG5cXHRcXHRcXHRcXHRcXHQ8YSBocmVmPVxcXCIjL3Nob3BcXFwiIGlkPVxcXCJ2ZXItcHJvZHVjdG9zXFxcIiBjbGFzcz1cXFwiZmFkZSBoaWRkZW4gdmVyLXByb2R1Y3RvcyByb3V0ZXJcXFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0PlZlciBMaXN0YWRvIGRlIFByb2R1Y3RvczwvYVxcblxcdFxcdFxcdFxcdFxcdD5cXG5cXHRcXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHQ8L2FydGljbGU+XFxuXFxuXFx0XFx0XFx0XCIgKyBmb290ZXJDb21wb25lbnQoKSArIFwiXFxuICAgICAgICBcIjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2R1Y3RWaWV3KHByb2R1Y3QpIHtcbiAgICByZXR1cm4gXCJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2R1Y3RcXFwiPlxcbiAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJcIiArIHByb2R1Y3QuaW1hZ2UgKyBcIlxcXCIgY2xhc3M9XFxcImJsdWUtc2hpcnRcXFwiIC8+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvZHVjdC1pbmZvXFxcIj5cXG4gICAgICAgICAgICAgICAgPGgyPlwiICsgcHJvZHVjdC50aXRsZSArIFwiPC9oMj5cXG4gICAgICAgICAgICAgICAgPHNwYW4+JFwiICsgcHJvZHVjdC5wcmljZS50b0ZpeGVkKDIpICsgXCI8L3NwYW4+PGEgaHJlZj1cXFwiIy9kZXRhaWxzL1wiICsgcHJvZHVjdC5pZCArIFwiXFxcIiBjbGFzcz1cXFwicm91dGVyXFxcIj5EZXRhbGxlczwvYT5cXG4gICAgICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgIDxpbnB1dFxcbiAgICAgICAgICAgICAgICB0eXBlPVxcXCJudW1iZXJcXFwiXFxuICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJjYW50aWRhZFxcXCJcXG4gICAgICAgICAgICAgICAgbmFtZT1cXFwiY2FudGlkYWRcXFwiXFxuICAgICAgICAgICAgICAgIG1pbj1cXFwiMFxcXCJcXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIjBcXFwiXFxuICAgICAgICAgICAgLz48YnV0dG9uIGNsYXNzPVxcXCJjb21wcmFyXFxcIiBkYXRhLWluZGV4PVwiICsgcHJvZHVjdC5pZCArIFwiPkNvbXByYXI8L2J1dHRvbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcblwiO1xufVxuIiwiaW1wb3J0IGZvb3RlckNvbXBvbmVudCBmcm9tIFwiLi9mb290ZXJDb21wb25lbnRcIjtcbmltcG9ydCBoZWFkZXJDb21wb25lbnQgZnJvbSBcIi4vaGVhZGVyQ29tcG9uZW50XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaG9wQ29tcG9uZW50KCkge1xuICAgIHJldHVybiBcIlxcbiAgICAgICAgICAgIFwiICsgaGVhZGVyQ29tcG9uZW50KCkgKyBcIlxcblxcbiAgICAgICAgICAgICAgICA8YXJ0aWNsZSBpZD1cXFwicHJvZHVjdHMtY29udGFpbmVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gSlMgLS0+XFxuICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICBcIiArIGZvb3RlckNvbXBvbmVudCgpICsgXCJcXG4gICAgICAgICAgIFwiO1xufVxuIiwidmFyIENhcnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ2FydCgpIHtcbiAgICAgICAgdGhpcy5jb3VudGVyID0gMDtcbiAgICAgICAgdGhpcy5wcm9kdWN0cyA9IFtdO1xuICAgIH1cbiAgICBDYXJ0LnByb3RvdHlwZS5zZXRDb3VudGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNvdW50ZXIgPSB0aGlzLnByb2R1Y3RzLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIGEgKyBiLnF1YW50aXR5O1xuICAgICAgICB9LCAwKTtcbiAgICB9O1xuICAgIENhcnQucHJvdG90eXBlLmFkZFByb2R1Y3QgPSBmdW5jdGlvbiAocHJvZHVjdCwgcXVhbnRpdHkpIHtcbiAgICAgICAgdGhpcy5wcm9kdWN0cy5wdXNoKHsgcHJvZHVjdDogcHJvZHVjdCwgcXVhbnRpdHk6IHF1YW50aXR5IH0pO1xuICAgICAgICB0aGlzLnNldENvdW50ZXIoKTtcbiAgICB9O1xuICAgIHJldHVybiBDYXJ0O1xufSgpKTtcbmV4cG9ydCBkZWZhdWx0IENhcnQ7XG4iLCJ2YXIgQ2F0YWxvZyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDYXRhbG9nKCkge1xuICAgICAgICB0aGlzLl9wcm9kdWN0cyA9IFtdO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ2F0YWxvZy5wcm90b3R5cGUsIFwicHJvZHVjdHNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wcm9kdWN0cztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIENhdGFsb2cucHJvdG90eXBlLmdldFByb2R1Y3QgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdHMuZmluZChmdW5jdGlvbiAocHJvZCkgeyByZXR1cm4gcHJvZC5pZCA9PSBpZDsgfSk7XG4gICAgfTtcbiAgICBDYXRhbG9nLnByb3RvdHlwZS5hZGRQcm9kdWN0cyA9IGZ1bmN0aW9uIChwcm9kdWN0KSB7XG4gICAgICAgIHRoaXMuX3Byb2R1Y3RzLnB1c2gocHJvZHVjdCk7XG4gICAgfTtcbiAgICByZXR1cm4gQ2F0YWxvZztcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBDYXRhbG9nO1xuLy9saW5lYSA0LCBlcyBsbyBtaXNtbyBxdWUgaW5pY2lhbGl6YXIgZW4gZWwgY29uc3RydWN0b3I/XG4iLCJ2YXIgUHJvZHVjdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBQcm9kdWN0KCkge1xuICAgIH1cbiAgICBQcm9kdWN0LnByb3RvdHlwZS5nZVRUaXRsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gICAgfTtcbiAgICBQcm9kdWN0LnByb3RvdHlwZS5nZXRQcmljZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpY2U7XG4gICAgfTtcbiAgICBQcm9kdWN0LnByb3RvdHlwZS5nZXRJRCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQ7XG4gICAgfTtcbiAgICBQcm9kdWN0LnByb3RvdHlwZS5nZXREZXNjcmlwdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gICAgfTtcbiAgICBQcm9kdWN0LnByb3RvdHlwZS5nZXRJbWFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1hZ2U7XG4gICAgfTtcbiAgICByZXR1cm4gUHJvZHVjdDtcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0O1xuLy9BTCBVU0FSIExBIElOVEVSRkFDRSBCT1JSRSBMT1MgXyBZIFJFRk9STVVMRSBHRVRURVJTLCBFU1RBIE9LP1xuLy9CT1JSRSBTRVRURVJTIEVOIEJBU0UgQSBOb3RlIHRoYXQgYSBmaWVsZC1iYWNrZWQgZ2V0L3NldCBwYWlyIHdpdGggbm8gZXh0cmEgbG9naWNcbi8vaXMgdmVyeSByYXJlbHkgdXNlZnVsIGluIEphdmFTY3JpcHQuIEl04oCZcyBmaW5lIHRvIGV4cG9zZSBwdWJsaWMgZmllbGRzIGlmXG4vL3lvdSBkb27igJl0IG5lZWQgdG8gYWRkIGFkZGl0aW9uYWwgbG9naWMgZHVyaW5nIHRoZSBnZXQvc2V0IG9wZXJhdGlvbnMuXG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuaW1wb3J0IFByb2R1Y3QgZnJvbSBcIi4vUHJvZHVjdFwiO1xuaW1wb3J0IENhdGFsb2cgZnJvbSBcIi4vQ2F0YWxvZ1wiO1xuaW1wb3J0IENhcnQgZnJvbSBcIi4vQ2FydFwiO1xudmFyIFN0b3JlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFN0b3JlKCkge1xuICAgICAgICB0aGlzLl9jYXJ0ID0gbmV3IENhcnQoKTtcbiAgICAgICAgdGhpcy5fY2F0YWxvZyA9IG5ldyBDYXRhbG9nKCk7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdG9yZS5wcm90b3R5cGUsIFwiY2FydFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhcnQ7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RvcmUucHJvdG90eXBlLCBcImNhdGFsb2dcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jYXRhbG9nO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgU3RvcmUucHJvdG90eXBlLnNldENhdGFsb2cgPSBmdW5jdGlvbiAoZmV0Y2hGdW5jdGlvbikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZGF0YTtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIGZldGNoRnVuY3Rpb24oKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdCA9IG5ldyBQcm9kdWN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC50aXRsZSA9IGl0ZW0udGl0bGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5pZCA9IGl0ZW0uaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5wcmljZSA9IGl0ZW0ucHJpY2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5kZXNjcmlwdGlvbiA9IGl0ZW0uZGVzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5pbWFnZSA9IGl0ZW0uaW1hZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuX2NhdGFsb2cuYWRkUHJvZHVjdHMocHJvZHVjdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gU3RvcmU7XG59KCkpO1xuZXhwb3J0IGRlZmF1bHQgU3RvcmU7XG4vLyBkZSBxdWUgbW9kbyB2aW5jdWxhciBlbCBjYXRhbG9nbyBhIGxhIGNhcnRhPyBjb21vIGFyZ3VlbWVudG8gZGUgc3VzIG1ldG9kb3MgbyBkZSBzdSBjb25zdHJ1Y3Rvcj9cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmZXRjaFByb2R1Y3RzKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRhdGE7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIGZldGNoKFwiaHR0cHM6Ly9mYWtlc3RvcmVhcGkuY29tL3Byb2R1Y3RzXCIpLnRoZW4oZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSldO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGRhdGFdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCBIb21lUGFnZSBmcm9tIFwiLi4vcGFnZXMvSG9tZVBhZ2VcIjtcbmltcG9ydCBTaG9wUGFnZSBmcm9tIFwiLi4vcGFnZXMvU2hvcFBhZ2VcIjtcbmltcG9ydCB1c2VQYXJhbXMgZnJvbSBcIi4uL3VzZVBhcmFtc1wiO1xuaW1wb3J0IERldGFpbHNQYWdlIGZyb20gXCIuLi9wYWdlcy9EZXRhaWxzUGFnZVwiO1xuaW1wb3J0IENhcnRQYWdlIGZyb20gXCIuLi9wYWdlcy9DYXJ0UGFnZVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm91dGVzQ2FsbCh1cmwpIHtcbiAgICB2YXIgcGF0aCA9IHVzZVBhcmFtcygpLnBhdGg7XG4gICAgdmFyIHJvdXRlcyA9IHtcbiAgICAgICAgXCJcIjogSG9tZVBhZ2UsXG4gICAgICAgIFwiIy9cIjogSG9tZVBhZ2UsXG4gICAgICAgIFwiIy9zaG9wXCI6IFNob3BQYWdlLFxuICAgICAgICBcIiMvZGV0YWlsc1wiOiBEZXRhaWxzUGFnZSxcbiAgICAgICAgXCIjL2NhcnRcIjogQ2FydFBhZ2UsXG4gICAgICAgIC8vIFwiLzQwNFwiOiAoKSA9PiBlcnJvclBhZ2UoKSxcbiAgICB9O1xuICAgIC8vIGlmICghcm91dGVzW3BhdGhdKSB7XG4gICAgLy8gXHRyZXR1cm4gcm91dGVzW1wiLzQwNFwiXTtcbiAgICAvLyB9XG4gICAgcmV0dXJuIHJvdXRlc1twYXRoXTtcbn1cbiIsImltcG9ydCBjYXJ0Q29tcG9uZW50IGZyb20gXCIuLi9jb21wb25lbnRzL2NhcnRDb21wb25lbnRcIjtcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIi4uL2FwcFwiO1xuaW1wb3J0IGFwcGVuZFByb2R1Y3QgZnJvbSBcIi4uL2FwcGVuZFByb2R1Y3RcIjtcbmltcG9ydCBjYXJ0SXRlbVZpZXcgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2FydEl0ZW1WaWV3XCI7XG5pbXBvcnQgdXBkYXRlQ2FydENvdW50ZXIgZnJvbSBcIi4uL3VwZGF0ZUNhcnRDb3VudGVyXCI7XG52YXIgQ2FydFBhZ2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ2FydFBhZ2UoKSB7XG4gICAgfVxuICAgIENhcnRQYWdlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICBjLmlubmVySFRNTCA9IGNhcnRDb21wb25lbnQoKTtcbiAgICB9O1xuICAgIENhcnRQYWdlLnByb3RvdHlwZS5wYWdlU2NyaXB0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzdG9yZS5jYXJ0LnByb2R1Y3RzLmZvckVhY2goZnVuY3Rpb24gKHByb2R1Y3QpIHtcbiAgICAgICAgICAgIGFwcGVuZFByb2R1Y3QoZG9jdW1lbnQsIHByb2R1Y3QsIGNhcnRJdGVtVmlldyk7XG4gICAgICAgIH0pO1xuICAgICAgICB1cGRhdGVDYXJ0Q291bnRlcihkb2N1bWVudCwgc3RvcmUpO1xuICAgIH07XG4gICAgcmV0dXJuIENhcnRQYWdlO1xufSgpKTtcbmV4cG9ydCBkZWZhdWx0IENhcnRQYWdlO1xuIiwiaW1wb3J0IGRldGFpbHNDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvZGV0YWlsc0NvbXBvbmVudFwiO1xuaW1wb3J0IHVzZVBhcmFtcyBmcm9tIFwiLi4vdXNlUGFyYW1zXCI7XG5pbXBvcnQgYnV5QnRuTGlzdGVuZXJzIGZyb20gXCIuLi9idXlCdG5MaXN0ZW5lcnNcIjtcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIi4uL2FwcFwiO1xuaW1wb3J0IHVwZGF0ZUNhcnRDb3VudGVyIGZyb20gXCIuLi91cGRhdGVDYXJ0Q291bnRlclwiO1xudmFyIERldGFpbHNQYWdlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERldGFpbHNQYWdlKCkge1xuICAgIH1cbiAgICBEZXRhaWxzUGFnZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgdmFyIHByb2R1Y3RJRCA9IHVzZVBhcmFtcygpLnByb2R1Y3RJRDtcbiAgICAgICAgYy5pbm5lckhUTUwgPSBkZXRhaWxzQ29tcG9uZW50KHByb2R1Y3RJRCwgc3RvcmUuY2F0YWxvZy5wcm9kdWN0cyk7XG4gICAgfTtcbiAgICBEZXRhaWxzUGFnZS5wcm90b3R5cGUucGFnZVNjcmlwdCA9IGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIGJ1eUJ0bkxpc3RlbmVycyhkb2N1bWVudCwgc3RvcmUpO1xuICAgICAgICB1cGRhdGVDYXJ0Q291bnRlcihkb2N1bWVudCwgc3RvcmUpO1xuICAgIH07XG4gICAgcmV0dXJuIERldGFpbHNQYWdlO1xufSgpKTtcbmV4cG9ydCBkZWZhdWx0IERldGFpbHNQYWdlO1xuIiwiaW1wb3J0IGhvbWVDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvaG9tZUNvbXBvbmVudFwiO1xuaW1wb3J0IHVwZGF0ZUNhcnRDb3VudGVyIGZyb20gXCIuLi91cGRhdGVDYXJ0Q291bnRlclwiO1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi4vYXBwXCI7XG52YXIgSG9tZVBhZ2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gICAgfVxuICAgIEhvbWVQYWdlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICBjLmlubmVySFRNTCA9IGhvbWVDb21wb25lbnQoKTtcbiAgICB9O1xuICAgIEhvbWVQYWdlLnByb3RvdHlwZS5wYWdlU2NyaXB0ID0gZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgdmFyIHZlclByb2R1Y3RvcyA9IGQuZ2V0RWxlbWVudEJ5SWQoXCJ2ZXItcHJvZHVjdG9zXCIpO1xuICAgICAgICB2YXIgaG92ZXJJdGVtcyA9IGQuZ2V0RWxlbWVudEJ5SWQoXCJ0by1ob3ZlclwiKTtcbiAgICAgICAgaG92ZXJJdGVtcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2ZXJQcm9kdWN0b3MuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XG4gICAgICAgIH0pO1xuICAgICAgICBob3Zlckl0ZW1zLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZlclByb2R1Y3Rvcy5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHVwZGF0ZUNhcnRDb3VudGVyKGRvY3VtZW50LCBzdG9yZSk7XG4gICAgfTtcbiAgICByZXR1cm4gSG9tZVBhZ2U7XG59KCkpO1xuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iLCJpbXBvcnQgc2hvcENvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9zaG9wQ29tcG9uZW50XCI7XG5pbXBvcnQgYXBwZW5kUHJvZHVjdCBmcm9tIFwiLi4vYXBwZW5kUHJvZHVjdFwiO1xuaW1wb3J0IGJ1eUJ0bkxpc3RlbmVycyBmcm9tIFwiLi4vYnV5QnRuTGlzdGVuZXJzXCI7XG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCIuLi9hcHBcIjtcbmltcG9ydCBwcm9kdWN0VmlldyBmcm9tIFwiLi4vY29tcG9uZW50cy9wcm9kdWN0Vmlld1wiO1xuaW1wb3J0IHVwZGF0ZUNhcnRDb3VudGVyIGZyb20gXCIuLi91cGRhdGVDYXJ0Q291bnRlclwiO1xudmFyIFNob3BQYWdlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNob3BQYWdlKCkge1xuICAgIH1cbiAgICBTaG9wUGFnZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgYy5pbm5lckhUTUwgPSBzaG9wQ29tcG9uZW50KCk7XG4gICAgfTtcbiAgICBTaG9wUGFnZS5wcm90b3R5cGUucGFnZVNjcmlwdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3RvcmUuY2F0YWxvZy5wcm9kdWN0cy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9kdWN0KSB7XG4gICAgICAgICAgICBhcHBlbmRQcm9kdWN0KGRvY3VtZW50LCBwcm9kdWN0LCBwcm9kdWN0Vmlldyk7XG4gICAgICAgIH0pO1xuICAgICAgICBidXlCdG5MaXN0ZW5lcnMoZG9jdW1lbnQsIHN0b3JlKTtcbiAgICAgICAgdXBkYXRlQ2FydENvdW50ZXIoZG9jdW1lbnQsIHN0b3JlKTtcbiAgICB9O1xuICAgIHJldHVybiBTaG9wUGFnZTtcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBTaG9wUGFnZTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZUNhcnRDb3VudGVyKGRvYywgc3RvcmUpIHtcbiAgICB2YXIgY291bnRlciA9IGRvYy5nZXRFbGVtZW50QnlJZChcImNvdW50ZXJcIik7XG4gICAgY291bnRlci5pbm5lckhUTUwgPSBTdHJpbmcoc3RvcmUuY2FydC5jb3VudGVyKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVBhcmFtcygpIHtcbiAgICB2YXIgdXJsID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XG4gICAgdmFyIHNwbGl0ZWQgPSB1cmwuc3BsaXQoXCIvXCIpO1xuICAgIHZhciBwcm9kdWN0SUQgPSBzcGxpdGVkWzJdO1xuICAgIHZhciBwYXRoID0gc3BsaXRlZC5zbGljZSgwLCAyKS5qb2luKFwiL1wiKTtcbiAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBwcm9kdWN0SUQ6IHByb2R1Y3RJRCB9O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9hcHAudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=