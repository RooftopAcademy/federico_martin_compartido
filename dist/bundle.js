/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/app.ts":
/*!*******************!*\
  !*** ./js/app.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": () => (/* binding */ store),
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _src_Store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/Store */ "./src/Store.ts");
/* harmony import */ var _src_components_homePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/homePage */ "./src/components/homePage.ts");
/* harmony import */ var _src_components_shopPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/shopPage */ "./src/components/shopPage.ts");
/* harmony import */ var _src_components_detailsPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/detailsPage */ "./src/components/detailsPage.ts");
/* harmony import */ var _src_components_errorPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/errorPage */ "./src/components/errorPage.ts");
/* harmony import */ var _homeLogic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./homeLogic */ "./js/homeLogic.ts");
/* harmony import */ var _shopLogic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shopLogic */ "./js/shopLogic.ts");
/* harmony import */ var _detailsLogic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./detailsLogic */ "./js/detailsLogic.ts");
/* harmony import */ var _src_fetchProducts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/fetchProducts */ "./src/fetchProducts.ts");
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









var container = document.getElementById("content");
function App(container) {
    var routes = {
        "#/": _src_components_homePage__WEBPACK_IMPORTED_MODULE_1__["default"],
        "#/shop": _src_components_shopPage__WEBPACK_IMPORTED_MODULE_2__["default"],
        "#/details": _src_components_detailsPage__WEBPACK_IMPORTED_MODULE_3__["default"],
        "/404": _src_components_errorPage__WEBPACK_IMPORTED_MODULE_4__["default"],
    };
    var logic = {
        "#/": _homeLogic__WEBPACK_IMPORTED_MODULE_5__["default"],
        "#/shop": _shopLogic__WEBPACK_IMPORTED_MODULE_6__["default"],
        "#/details": _detailsLogic__WEBPACK_IMPORTED_MODULE_7__["default"],
        //	"/404": errorPageLogic,
    };
    function render(route) {
        var splited = route.split("/");
        var productID = splited[2];
        var section = splited.slice(0, 2).join("/");
        if (routes[section]) {
            container.innerHTML = routes[section](productID, store);
            logic[section]();
        }
        else {
            container.innerHTML = routes["/404"]();
        }
    }
    function initialPage(window) {
        window.onload = function () {
            window.location.hash = "#/";
        };
        if (container) {
            container.innerHTML = routes["#/"]();
        }
        (0,_homeLogic__WEBPACK_IMPORTED_MODULE_5__["default"])();
    }
    return { render: render, initialPage: initialPage };
}
var app = App(container);
app.initialPage(window);
window.addEventListener("hashchange", function () {
    var route = window.location.hash;
    app.render(route);
});
var store = new _src_Store__WEBPACK_IMPORTED_MODULE_0__["default"]();
(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, store.setCatalog(_src_fetchProducts__WEBPACK_IMPORTED_MODULE_8__["default"])];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })();

//linea 38, esta ok pasar mas argumentos de los pedidos por dos de los casos? ts no muestra error


/***/ }),

/***/ "./js/detailsLogic.ts":
/*!****************************!*\
  !*** ./js/detailsLogic.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ detailsLogic)
/* harmony export */ });
/* harmony import */ var _src_buyBtnListeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/buyBtnListeners */ "./src/buyBtnListeners.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "./js/app.ts");


function detailsLogic() {
    (0,_src_buyBtnListeners__WEBPACK_IMPORTED_MODULE_0__["default"])(_app__WEBPACK_IMPORTED_MODULE_1__.store);
}


/***/ }),

/***/ "./js/homeLogic.ts":
/*!*************************!*\
  !*** ./js/homeLogic.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homeLogic)
/* harmony export */ });
function homeLogic() {
    var verProductos = document.getElementById("ver-productos");
    var hoverItems = document.getElementById("to-hover");
    if (verProductos && hoverItems) {
        hoverItems.addEventListener("mouseenter", function () {
            verProductos.classList.add("visible");
        });
        hoverItems.addEventListener("mouseleave", function () {
            verProductos.classList.remove("visible");
        });
    }
}


/***/ }),

/***/ "./js/shopLogic.ts":
/*!*************************!*\
  !*** ./js/shopLogic.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ shopLogic)
/* harmony export */ });
/* harmony import */ var _src_appendProduct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/appendProduct */ "./src/appendProduct.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "./js/app.ts");
/* harmony import */ var _src_buyBtnListeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/buyBtnListeners */ "./src/buyBtnListeners.ts");



function shopLogic() {
    _app__WEBPACK_IMPORTED_MODULE_1__.store.catalog.products.forEach(function (product) {
        (0,_src_appendProduct__WEBPACK_IMPORTED_MODULE_0__["default"])(document, product);
    });
    (0,_src_buyBtnListeners__WEBPACK_IMPORTED_MODULE_2__["default"])(_app__WEBPACK_IMPORTED_MODULE_1__.store);
}


/***/ }),

/***/ "./src/Cart.ts":
/*!*********************!*\
  !*** ./src/Cart.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Cart = /** @class */ (function () {
    function Cart() {
        this.counter = 0;
    }
    Object.defineProperty(Cart.prototype, "addProduct", {
        set: function (cantidad) {
            this.counter += Number(cantidad);
        },
        enumerable: false,
        configurable: true
    });
    return Cart;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);


/***/ }),

/***/ "./src/Catalog.ts":
/*!************************!*\
  !*** ./src/Catalog.ts ***!
  \************************/
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
    Catalog.prototype.addProducts = function (product) {
        this._products.push(product);
    };
    return Catalog;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Catalog);
//linea 4, es lo mismo que inicializar en el constructor?


/***/ }),

/***/ "./src/Product.ts":
/*!************************!*\
  !*** ./src/Product.ts ***!
  \************************/
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

/***/ "./src/Store.ts":
/*!**********************!*\
  !*** ./src/Store.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product */ "./src/Product.ts");
/* harmony import */ var _Catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Catalog */ "./src/Catalog.ts");
/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cart */ "./src/Cart.ts");
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
/* harmony import */ var _components_productView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/productView */ "./src/components/productView.ts");

function appendProduct(document, product) {
    var productsContainer = document.getElementById("products-container");
    if (productsContainer) {
        productsContainer.innerHTML += (0,_components_productView__WEBPACK_IMPORTED_MODULE_0__["default"])(product);
    }
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
var counter = document.getElementById("counter");
function buyBtnListeners(store) {
    var buyBtn = Array.from(document.getElementsByClassName("comprar"));
    buyBtn.forEach(function (button) {
        button.addEventListener("click", function (e) {
            if (e) {
                var target = e.target;
                var preTarget = target.previousElementSibling;
                console.log(preTarget.value);
                if (!preTarget.value) {
                    alert("Elige cuántas prendas quieres comprar"); //cambiar por estilo error
                }
                else {
                    store.cart.addProduct = Number(preTarget.value);
                    if (counter) {
                        counter.innerHTML = String(store.cart.counter);
                    }
                }
            }
        });
    });
}


/***/ }),

/***/ "./src/components/detailsPage.ts":
/*!***************************************!*\
  !*** ./src/components/detailsPage.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ detailsPage)
/* harmony export */ });
function detailsPage(hash, store) {
    var product = store.catalog.products.filter(function (prod) {
        return prod.id == Number(hash);
    })[0];
    return "<article>\n    <img src=\"" + product.image + "\"/>\n    <div class=\"info-shop\">\n        <div class=\"name-price\">\n            <h2 id=\"product-name\">" + product.title + "</h2>\n            <span>$" + product.price.toFixed(2) + "</span>\n        </div>\n        <div>\n            <input\n                type=\"number\"\n                class=\"cantidad\"\n                name=\"cantidad\"\n                min=\"0\"\n                placeholder=\"0\"\n            /><button class=\"comprar\">Comprar</button>\n        </div>\n        <hr class=\"h-line\" />\n    </div>\n    <p class=\"detalles\" id=\"details\">\n    " + product.description + "\n    </p>\n</article>";
}


/***/ }),

/***/ "./src/components/errorPage.ts":
/*!*************************************!*\
  !*** ./src/components/errorPage.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ errorPage)
/* harmony export */ });
function errorPage() {
    return " <article id=\"products-container\">ERROR PAGE\n</article>";
}


/***/ }),

/***/ "./src/components/homePage.ts":
/*!************************************!*\
  !*** ./src/components/homePage.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homePage)
/* harmony export */ });
function homePage() {
    return "\n\t\t\t<article>\n\t\t\t\t<div id=\"to-hover\" class=\"to-hover\">\n\t\t\t\t\t<span class=\"material-icons-outlined icono-central\" id=\"icon\">\n\t\t\t\t\t\tcheckroom\n\t\t\t\t\t</span></br>\n\t\t\t\t\t<a href=\"#/shop\" id=\"ver-productos\" class=\"fade hidden ver-productos router\"\n\t\t\t\t\t\t>Ver Listado de Productos</a\n\t\t\t\t\t>\n\t\t\t\t</div>\n\t\t\t</article>\n            ";
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
    return "\n    <div class=\"product\" data-index=" + product.id + ">\n    <img src=\"" + product.image + "\" class=\"blue-shirt\" />\n    <div class=\"product-info\">\n        <h2>" + product.title + "</h2>\n        <span>$" + product.price.toFixed(2) + "</span><a href=\"#/details/" + product.id + "\" class=\"router\">Detalles</a>\n        <div>\n            <input\n                type=\"number\"\n                class=\"cantidad\"\n                name=\"cantidad\"\n                min=\"0\"\n                placeholder=\"0\"\n            /><button class=\"comprar\">Comprar</button>\n        </div>\n    </div>\n</div>\n";
}


/***/ }),

/***/ "./src/components/shopPage.ts":
/*!************************************!*\
  !*** ./src/components/shopPage.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ shopPage)
/* harmony export */ });
function shopPage() {
    return "\n                <article id=\"products-container\">\n                    <!-- JS -->\n                </article>\n           ";
}


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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/app.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSxVQUFVLFlBQVksYUFBYSxTQUFTLFVBQVU7QUFDdEQsb0NBQW9DLFNBQVM7QUFDN0M7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4R0FBOEcsb0JBQW9CO0FBQ2xJO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7Ozs7OztVQ2hEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vanMvYXBwLnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vanMvZGV0YWlsc0xvZ2ljLnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vanMvaG9tZUxvZ2ljLnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vanMvc2hvcExvZ2ljLnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL0NhcnQudHMiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vLi9zcmMvQ2F0YWxvZy50cyIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby8uL3NyYy9Qcm9kdWN0LnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL1N0b3JlLnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL2FwcGVuZFByb2R1Y3QudHMiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vLi9zcmMvYnV5QnRuTGlzdGVuZXJzLnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL2NvbXBvbmVudHMvZGV0YWlsc1BhZ2UudHMiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vLi9zcmMvY29tcG9uZW50cy9lcnJvclBhZ2UudHMiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vLi9zcmMvY29tcG9uZW50cy9ob21lUGFnZS50cyIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby8uL3NyYy9jb21wb25lbnRzL3Byb2R1Y3RWaWV3LnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL2NvbXBvbmVudHMvc2hvcFBhZ2UudHMiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vLi9zcmMvZmV0Y2hQcm9kdWN0cy50cyIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuaW1wb3J0IFN0b3JlIGZyb20gXCIuLi9zcmMvU3RvcmVcIjtcbmltcG9ydCBob21lUGFnZSBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvaG9tZVBhZ2VcIjtcbmltcG9ydCBzaG9wUGFnZSBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvc2hvcFBhZ2VcIjtcbmltcG9ydCBkZXRhaWxzUGFnZSBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvZGV0YWlsc1BhZ2VcIjtcbmltcG9ydCBlcnJvclBhZ2UgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL2Vycm9yUGFnZVwiO1xuaW1wb3J0IGhvbWVMb2dpYyBmcm9tIFwiLi9ob21lTG9naWNcIjtcbmltcG9ydCBzaG9wTG9naWMgZnJvbSBcIi4vc2hvcExvZ2ljXCI7XG5pbXBvcnQgZGV0YWlsc0xvZ2ljIGZyb20gXCIuL2RldGFpbHNMb2dpY1wiO1xuaW1wb3J0IGZldGNoUHJvZHVjdHMgZnJvbSBcIi4uL3NyYy9mZXRjaFByb2R1Y3RzXCI7XG52YXIgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuZnVuY3Rpb24gQXBwKGNvbnRhaW5lcikge1xuICAgIHZhciByb3V0ZXMgPSB7XG4gICAgICAgIFwiIy9cIjogaG9tZVBhZ2UsXG4gICAgICAgIFwiIy9zaG9wXCI6IHNob3BQYWdlLFxuICAgICAgICBcIiMvZGV0YWlsc1wiOiBkZXRhaWxzUGFnZSxcbiAgICAgICAgXCIvNDA0XCI6IGVycm9yUGFnZSxcbiAgICB9O1xuICAgIHZhciBsb2dpYyA9IHtcbiAgICAgICAgXCIjL1wiOiBob21lTG9naWMsXG4gICAgICAgIFwiIy9zaG9wXCI6IHNob3BMb2dpYyxcbiAgICAgICAgXCIjL2RldGFpbHNcIjogZGV0YWlsc0xvZ2ljLFxuICAgICAgICAvL1x0XCIvNDA0XCI6IGVycm9yUGFnZUxvZ2ljLFxuICAgIH07XG4gICAgZnVuY3Rpb24gcmVuZGVyKHJvdXRlKSB7XG4gICAgICAgIHZhciBzcGxpdGVkID0gcm91dGUuc3BsaXQoXCIvXCIpO1xuICAgICAgICB2YXIgcHJvZHVjdElEID0gc3BsaXRlZFsyXTtcbiAgICAgICAgdmFyIHNlY3Rpb24gPSBzcGxpdGVkLnNsaWNlKDAsIDIpLmpvaW4oXCIvXCIpO1xuICAgICAgICBpZiAocm91dGVzW3NlY3Rpb25dKSB7XG4gICAgICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gcm91dGVzW3NlY3Rpb25dKHByb2R1Y3RJRCwgc3RvcmUpO1xuICAgICAgICAgICAgbG9naWNbc2VjdGlvbl0oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSByb3V0ZXNbXCIvNDA0XCJdKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gaW5pdGlhbFBhZ2Uod2luZG93KSB7XG4gICAgICAgIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IFwiIy9cIjtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IHJvdXRlc1tcIiMvXCJdKCk7XG4gICAgICAgIH1cbiAgICAgICAgaG9tZUxvZ2ljKCk7XG4gICAgfVxuICAgIHJldHVybiB7IHJlbmRlcjogcmVuZGVyLCBpbml0aWFsUGFnZTogaW5pdGlhbFBhZ2UgfTtcbn1cbnZhciBhcHAgPSBBcHAoY29udGFpbmVyKTtcbmFwcC5pbml0aWFsUGFnZSh3aW5kb3cpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcm91dGUgPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcbiAgICBhcHAucmVuZGVyKHJvdXRlKTtcbn0pO1xudmFyIHN0b3JlID0gbmV3IFN0b3JlKCk7XG4oZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgc3RvcmUuc2V0Q2F0YWxvZyhmZXRjaFByb2R1Y3RzKV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH0pKCk7XG5leHBvcnQgeyBzdG9yZSwgYXBwIH07XG4vL2xpbmVhIDM4LCBlc3RhIG9rIHBhc2FyIG1hcyBhcmd1bWVudG9zIGRlIGxvcyBwZWRpZG9zIHBvciBkb3MgZGUgbG9zIGNhc29zPyB0cyBubyBtdWVzdHJhIGVycm9yXG4iLCJpbXBvcnQgYnV5QnRuTGlzdGVuZXJzIGZyb20gXCIuLi9zcmMvYnV5QnRuTGlzdGVuZXJzXCI7XG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCIuL2FwcFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGV0YWlsc0xvZ2ljKCkge1xuICAgIGJ1eUJ0bkxpc3RlbmVycyhzdG9yZSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lTG9naWMoKSB7XG4gICAgdmFyIHZlclByb2R1Y3RvcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmVyLXByb2R1Y3Rvc1wiKTtcbiAgICB2YXIgaG92ZXJJdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG8taG92ZXJcIik7XG4gICAgaWYgKHZlclByb2R1Y3RvcyAmJiBob3Zlckl0ZW1zKSB7XG4gICAgICAgIGhvdmVySXRlbXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmVyUHJvZHVjdG9zLmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgaG92ZXJJdGVtcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2ZXJQcm9kdWN0b3MuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCBhcHBlbmRQcm9kdWN0IGZyb20gXCIuLi9zcmMvYXBwZW5kUHJvZHVjdFwiO1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi9hcHBcIjtcbmltcG9ydCBidXlCdG5MaXN0ZW5lcnMgZnJvbSBcIi4uL3NyYy9idXlCdG5MaXN0ZW5lcnNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNob3BMb2dpYygpIHtcbiAgICBzdG9yZS5jYXRhbG9nLnByb2R1Y3RzLmZvckVhY2goZnVuY3Rpb24gKHByb2R1Y3QpIHtcbiAgICAgICAgYXBwZW5kUHJvZHVjdChkb2N1bWVudCwgcHJvZHVjdCk7XG4gICAgfSk7XG4gICAgYnV5QnRuTGlzdGVuZXJzKHN0b3JlKTtcbn1cbiIsInZhciBDYXJ0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENhcnQoKSB7XG4gICAgICAgIHRoaXMuY291bnRlciA9IDA7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDYXJ0LnByb3RvdHlwZSwgXCJhZGRQcm9kdWN0XCIsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoY2FudGlkYWQpIHtcbiAgICAgICAgICAgIHRoaXMuY291bnRlciArPSBOdW1iZXIoY2FudGlkYWQpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIENhcnQ7XG59KCkpO1xuZXhwb3J0IGRlZmF1bHQgQ2FydDtcbiIsInZhciBDYXRhbG9nID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENhdGFsb2coKSB7XG4gICAgICAgIHRoaXMuX3Byb2R1Y3RzID0gW107XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDYXRhbG9nLnByb3RvdHlwZSwgXCJwcm9kdWN0c1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2R1Y3RzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgQ2F0YWxvZy5wcm90b3R5cGUuYWRkUHJvZHVjdHMgPSBmdW5jdGlvbiAocHJvZHVjdCkge1xuICAgICAgICB0aGlzLl9wcm9kdWN0cy5wdXNoKHByb2R1Y3QpO1xuICAgIH07XG4gICAgcmV0dXJuIENhdGFsb2c7XG59KCkpO1xuZXhwb3J0IGRlZmF1bHQgQ2F0YWxvZztcbi8vbGluZWEgNCwgZXMgbG8gbWlzbW8gcXVlIGluaWNpYWxpemFyIGVuIGVsIGNvbnN0cnVjdG9yP1xuIiwidmFyIFByb2R1Y3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUHJvZHVjdCgpIHtcbiAgICB9XG4gICAgUHJvZHVjdC5wcm90b3R5cGUuZ2VUVGl0bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICAgIH07XG4gICAgUHJvZHVjdC5wcm90b3R5cGUuZ2V0UHJpY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByaWNlO1xuICAgIH07XG4gICAgUHJvZHVjdC5wcm90b3R5cGUuZ2V0SUQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xuICAgIH07XG4gICAgUHJvZHVjdC5wcm90b3R5cGUuZ2V0RGVzY3JpcHRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICAgIH07XG4gICAgUHJvZHVjdC5wcm90b3R5cGUuZ2V0SW1hZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmltYWdlO1xuICAgIH07XG4gICAgcmV0dXJuIFByb2R1Y3Q7XG59KCkpO1xuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdDtcbi8vQUwgVVNBUiBMQSBJTlRFUkZBQ0UgQk9SUkUgTE9TIF8gWSBSRUZPUk1VTEUgR0VUVEVSUywgRVNUQSBPSz9cbi8vQk9SUkUgU0VUVEVSUyBFTiBCQVNFIEEgTm90ZSB0aGF0IGEgZmllbGQtYmFja2VkIGdldC9zZXQgcGFpciB3aXRoIG5vIGV4dHJhIGxvZ2ljXG4vL2lzIHZlcnkgcmFyZWx5IHVzZWZ1bCBpbiBKYXZhU2NyaXB0LiBJdOKAmXMgZmluZSB0byBleHBvc2UgcHVibGljIGZpZWxkcyBpZlxuLy95b3UgZG9u4oCZdCBuZWVkIHRvIGFkZCBhZGRpdGlvbmFsIGxvZ2ljIGR1cmluZyB0aGUgZ2V0L3NldCBvcGVyYXRpb25zLlxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbmltcG9ydCBQcm9kdWN0IGZyb20gXCIuL1Byb2R1Y3RcIjtcbmltcG9ydCBDYXRhbG9nIGZyb20gXCIuL0NhdGFsb2dcIjtcbmltcG9ydCBDYXJ0IGZyb20gXCIuL0NhcnRcIjtcbnZhciBTdG9yZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTdG9yZSgpIHtcbiAgICAgICAgdGhpcy5fY2FydCA9IG5ldyBDYXJ0KCk7XG4gICAgICAgIHRoaXMuX2NhdGFsb2cgPSBuZXcgQ2F0YWxvZygpO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RvcmUucHJvdG90eXBlLCBcImNhcnRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jYXJ0O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0b3JlLnByb3RvdHlwZSwgXCJjYXRhbG9nXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2F0YWxvZztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIFN0b3JlLnByb3RvdHlwZS5zZXRDYXRhbG9nID0gZnVuY3Rpb24gKGZldGNoRnVuY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGRhdGE7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBmZXRjaEZ1bmN0aW9uKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb2R1Y3QgPSBuZXcgUHJvZHVjdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QudGl0bGUgPSBpdGVtLnRpdGxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QuaWQgPSBpdGVtLmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QucHJpY2UgPSBpdGVtLnByaWNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QuZGVzY3JpcHRpb24gPSBpdGVtLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QuaW1hZ2UgPSBpdGVtLmltYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLl9jYXRhbG9nLmFkZFByb2R1Y3RzKHByb2R1Y3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFN0b3JlO1xufSgpKTtcbmV4cG9ydCBkZWZhdWx0IFN0b3JlO1xuIiwiaW1wb3J0IHByb2R1Y3RWaWV3IGZyb20gXCIuL2NvbXBvbmVudHMvcHJvZHVjdFZpZXdcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcGVuZFByb2R1Y3QoZG9jdW1lbnQsIHByb2R1Y3QpIHtcbiAgICB2YXIgcHJvZHVjdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2R1Y3RzLWNvbnRhaW5lclwiKTtcbiAgICBpZiAocHJvZHVjdHNDb250YWluZXIpIHtcbiAgICAgICAgcHJvZHVjdHNDb250YWluZXIuaW5uZXJIVE1MICs9IHByb2R1Y3RWaWV3KHByb2R1Y3QpO1xuICAgIH1cbn1cbiIsInZhciBjb3VudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3VudGVyXCIpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnV5QnRuTGlzdGVuZXJzKHN0b3JlKSB7XG4gICAgdmFyIGJ1eUJ0biA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNvbXByYXJcIikpO1xuICAgIGJ1eUJ0bi5mb3JFYWNoKGZ1bmN0aW9uIChidXR0b24pIHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICAgICAgdmFyIHByZVRhcmdldCA9IHRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByZVRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFwcmVUYXJnZXQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJFbGlnZSBjdcOhbnRhcyBwcmVuZGFzIHF1aWVyZXMgY29tcHJhclwiKTsgLy9jYW1iaWFyIHBvciBlc3RpbG8gZXJyb3JcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLmNhcnQuYWRkUHJvZHVjdCA9IE51bWJlcihwcmVUYXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlci5pbm5lckhUTUwgPSBTdHJpbmcoc3RvcmUuY2FydC5jb3VudGVyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZXRhaWxzUGFnZShoYXNoLCBzdG9yZSkge1xuICAgIHZhciBwcm9kdWN0ID0gc3RvcmUuY2F0YWxvZy5wcm9kdWN0cy5maWx0ZXIoZnVuY3Rpb24gKHByb2QpIHtcbiAgICAgICAgcmV0dXJuIHByb2QuaWQgPT0gTnVtYmVyKGhhc2gpO1xuICAgIH0pWzBdO1xuICAgIHJldHVybiBcIjxhcnRpY2xlPlxcbiAgICA8aW1nIHNyYz1cXFwiXCIgKyBwcm9kdWN0LmltYWdlICsgXCJcXFwiLz5cXG4gICAgPGRpdiBjbGFzcz1cXFwiaW5mby1zaG9wXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWUtcHJpY2VcXFwiPlxcbiAgICAgICAgICAgIDxoMiBpZD1cXFwicHJvZHVjdC1uYW1lXFxcIj5cIiArIHByb2R1Y3QudGl0bGUgKyBcIjwvaDI+XFxuICAgICAgICAgICAgPHNwYW4+JFwiICsgcHJvZHVjdC5wcmljZS50b0ZpeGVkKDIpICsgXCI8L3NwYW4+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgPGlucHV0XFxuICAgICAgICAgICAgICAgIHR5cGU9XFxcIm51bWJlclxcXCJcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcImNhbnRpZGFkXFxcIlxcbiAgICAgICAgICAgICAgICBuYW1lPVxcXCJjYW50aWRhZFxcXCJcXG4gICAgICAgICAgICAgICAgbWluPVxcXCIwXFxcIlxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiMFxcXCJcXG4gICAgICAgICAgICAvPjxidXR0b24gY2xhc3M9XFxcImNvbXByYXJcXFwiPkNvbXByYXI8L2J1dHRvbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGhyIGNsYXNzPVxcXCJoLWxpbmVcXFwiIC8+XFxuICAgIDwvZGl2PlxcbiAgICA8cCBjbGFzcz1cXFwiZGV0YWxsZXNcXFwiIGlkPVxcXCJkZXRhaWxzXFxcIj5cXG4gICAgXCIgKyBwcm9kdWN0LmRlc2NyaXB0aW9uICsgXCJcXG4gICAgPC9wPlxcbjwvYXJ0aWNsZT5cIjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVycm9yUGFnZSgpIHtcbiAgICByZXR1cm4gXCIgPGFydGljbGUgaWQ9XFxcInByb2R1Y3RzLWNvbnRhaW5lclxcXCI+RVJST1IgUEFHRVxcbjwvYXJ0aWNsZT5cIjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWVQYWdlKCkge1xuICAgIHJldHVybiBcIlxcblxcdFxcdFxcdDxhcnRpY2xlPlxcblxcdFxcdFxcdFxcdDxkaXYgaWQ9XFxcInRvLWhvdmVyXFxcIiBjbGFzcz1cXFwidG8taG92ZXJcXFwiPlxcblxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBpY29uby1jZW50cmFsXFxcIiBpZD1cXFwiaWNvblxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0Y2hlY2tyb29tXFxuXFx0XFx0XFx0XFx0XFx0PC9zcGFuPjwvYnI+XFxuXFx0XFx0XFx0XFx0XFx0PGEgaHJlZj1cXFwiIy9zaG9wXFxcIiBpZD1cXFwidmVyLXByb2R1Y3Rvc1xcXCIgY2xhc3M9XFxcImZhZGUgaGlkZGVuIHZlci1wcm9kdWN0b3Mgcm91dGVyXFxcIlxcblxcdFxcdFxcdFxcdFxcdFxcdD5WZXIgTGlzdGFkbyBkZSBQcm9kdWN0b3M8L2FcXG5cXHRcXHRcXHRcXHRcXHQ+XFxuXFx0XFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0XFx0PC9hcnRpY2xlPlxcbiAgICAgICAgICAgIFwiO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvZHVjdFZpZXcocHJvZHVjdCkge1xuICAgIHJldHVybiBcIlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwcm9kdWN0XFxcIiBkYXRhLWluZGV4PVwiICsgcHJvZHVjdC5pZCArIFwiPlxcbiAgICA8aW1nIHNyYz1cXFwiXCIgKyBwcm9kdWN0LmltYWdlICsgXCJcXFwiIGNsYXNzPVxcXCJibHVlLXNoaXJ0XFxcIiAvPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwcm9kdWN0LWluZm9cXFwiPlxcbiAgICAgICAgPGgyPlwiICsgcHJvZHVjdC50aXRsZSArIFwiPC9oMj5cXG4gICAgICAgIDxzcGFuPiRcIiArIHByb2R1Y3QucHJpY2UudG9GaXhlZCgyKSArIFwiPC9zcGFuPjxhIGhyZWY9XFxcIiMvZGV0YWlscy9cIiArIHByb2R1Y3QuaWQgKyBcIlxcXCIgY2xhc3M9XFxcInJvdXRlclxcXCI+RGV0YWxsZXM8L2E+XFxuICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgIDxpbnB1dFxcbiAgICAgICAgICAgICAgICB0eXBlPVxcXCJudW1iZXJcXFwiXFxuICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJjYW50aWRhZFxcXCJcXG4gICAgICAgICAgICAgICAgbmFtZT1cXFwiY2FudGlkYWRcXFwiXFxuICAgICAgICAgICAgICAgIG1pbj1cXFwiMFxcXCJcXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIjBcXFwiXFxuICAgICAgICAgICAgLz48YnV0dG9uIGNsYXNzPVxcXCJjb21wcmFyXFxcIj5Db21wcmFyPC9idXR0b24+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XFxuXCI7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaG9wUGFnZSgpIHtcbiAgICByZXR1cm4gXCJcXG4gICAgICAgICAgICAgICAgPGFydGljbGUgaWQ9XFxcInByb2R1Y3RzLWNvbnRhaW5lclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8IS0tIEpTIC0tPlxcbiAgICAgICAgICAgICAgICA8L2FydGljbGU+XFxuICAgICAgICAgICBcIjtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmZXRjaFByb2R1Y3RzKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRhdGE7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIGZldGNoKFwiaHR0cHM6Ly9mYWtlc3RvcmVhcGkuY29tL3Byb2R1Y3RzXCIpLnRoZW4oZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSldO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGRhdGFdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9qcy9hcHAudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=