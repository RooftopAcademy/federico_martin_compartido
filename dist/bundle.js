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
        container.innerHTML = routes["#/"]();
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
store.setCatalog(_src_fetchProducts__WEBPACK_IMPORTED_MODULE_8__["default"]);

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

function appendProduct(doc, product) {
    var productsContainer = doc.getElementById("products-container");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBb0QscUVBQXFFLGNBQWM7QUFDeEosdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsbUNBQW1DLFNBQVM7QUFDNUMsbUNBQW1DLFdBQVcsVUFBVTtBQUN4RCwwQ0FBMEMsY0FBYztBQUN4RDtBQUNBLDhHQUE4RyxPQUFPO0FBQ3JILGlGQUFpRixpQkFBaUI7QUFDbEcseURBQXlELGdCQUFnQixRQUFRO0FBQ2pGLCtDQUErQyxnQkFBZ0IsZ0JBQWdCO0FBQy9FO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQSxVQUFVLFlBQVksYUFBYSxTQUFTLFVBQVU7QUFDdEQsb0NBQW9DLFNBQVM7QUFDN0M7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4R0FBOEcsb0JBQW9CO0FBQ2xJO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7Ozs7OztVQ2hEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vanMvYXBwLnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vanMvZGV0YWlsc0xvZ2ljLnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vanMvaG9tZUxvZ2ljLnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vanMvc2hvcExvZ2ljLnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL0NhcnQudHMiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vLi9zcmMvQ2F0YWxvZy50cyIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby8uL3NyYy9Qcm9kdWN0LnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL1N0b3JlLnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL2FwcGVuZFByb2R1Y3QudHMiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vLi9zcmMvYnV5QnRuTGlzdGVuZXJzLnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL2NvbXBvbmVudHMvZGV0YWlsc1BhZ2UudHMiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vLi9zcmMvY29tcG9uZW50cy9lcnJvclBhZ2UudHMiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vLi9zcmMvY29tcG9uZW50cy9ob21lUGFnZS50cyIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby8uL3NyYy9jb21wb25lbnRzL3Byb2R1Y3RWaWV3LnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL2NvbXBvbmVudHMvc2hvcFBhZ2UudHMiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vLi9zcmMvZmV0Y2hQcm9kdWN0cy50cyIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RvcmUgZnJvbSBcIi4uL3NyYy9TdG9yZVwiO1xuaW1wb3J0IGhvbWVQYWdlIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9ob21lUGFnZVwiO1xuaW1wb3J0IHNob3BQYWdlIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9zaG9wUGFnZVwiO1xuaW1wb3J0IGRldGFpbHNQYWdlIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9kZXRhaWxzUGFnZVwiO1xuaW1wb3J0IGVycm9yUGFnZSBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvZXJyb3JQYWdlXCI7XG5pbXBvcnQgaG9tZUxvZ2ljIGZyb20gXCIuL2hvbWVMb2dpY1wiO1xuaW1wb3J0IHNob3BMb2dpYyBmcm9tIFwiLi9zaG9wTG9naWNcIjtcbmltcG9ydCBkZXRhaWxzTG9naWMgZnJvbSBcIi4vZGV0YWlsc0xvZ2ljXCI7XG5pbXBvcnQgZmV0Y2hQcm9kdWN0cyBmcm9tIFwiLi4vc3JjL2ZldGNoUHJvZHVjdHNcIjtcbnZhciBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5mdW5jdGlvbiBBcHAoY29udGFpbmVyKSB7XG4gICAgdmFyIHJvdXRlcyA9IHtcbiAgICAgICAgXCIjL1wiOiBob21lUGFnZSxcbiAgICAgICAgXCIjL3Nob3BcIjogc2hvcFBhZ2UsXG4gICAgICAgIFwiIy9kZXRhaWxzXCI6IGRldGFpbHNQYWdlLFxuICAgICAgICBcIi80MDRcIjogZXJyb3JQYWdlLFxuICAgIH07XG4gICAgdmFyIGxvZ2ljID0ge1xuICAgICAgICBcIiMvXCI6IGhvbWVMb2dpYyxcbiAgICAgICAgXCIjL3Nob3BcIjogc2hvcExvZ2ljLFxuICAgICAgICBcIiMvZGV0YWlsc1wiOiBkZXRhaWxzTG9naWMsXG4gICAgICAgIC8vXHRcIi80MDRcIjogZXJyb3JQYWdlTG9naWMsXG4gICAgfTtcbiAgICBmdW5jdGlvbiByZW5kZXIocm91dGUpIHtcbiAgICAgICAgdmFyIHNwbGl0ZWQgPSByb3V0ZS5zcGxpdChcIi9cIik7XG4gICAgICAgIHZhciBwcm9kdWN0SUQgPSBzcGxpdGVkWzJdO1xuICAgICAgICB2YXIgc2VjdGlvbiA9IHNwbGl0ZWQuc2xpY2UoMCwgMikuam9pbihcIi9cIik7XG4gICAgICAgIGlmIChyb3V0ZXNbc2VjdGlvbl0pIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSByb3V0ZXNbc2VjdGlvbl0ocHJvZHVjdElELCBzdG9yZSk7XG4gICAgICAgICAgICBsb2dpY1tzZWN0aW9uXSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IHJvdXRlc1tcIi80MDRcIl0oKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBpbml0aWFsUGFnZSh3aW5kb3cpIHtcbiAgICAgICAgd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gXCIjL1wiO1xuICAgICAgICB9O1xuICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gcm91dGVzW1wiIy9cIl0oKTtcbiAgICAgICAgaG9tZUxvZ2ljKCk7XG4gICAgfVxuICAgIHJldHVybiB7IHJlbmRlcjogcmVuZGVyLCBpbml0aWFsUGFnZTogaW5pdGlhbFBhZ2UgfTtcbn1cbnZhciBhcHAgPSBBcHAoY29udGFpbmVyKTtcbmFwcC5pbml0aWFsUGFnZSh3aW5kb3cpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcm91dGUgPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcbiAgICBhcHAucmVuZGVyKHJvdXRlKTtcbn0pO1xudmFyIHN0b3JlID0gbmV3IFN0b3JlKCk7XG5zdG9yZS5zZXRDYXRhbG9nKGZldGNoUHJvZHVjdHMpO1xuZXhwb3J0IHsgc3RvcmUsIGFwcCB9O1xuLy9saW5lYSAzOCwgZXN0YSBvayBwYXNhciBtYXMgYXJndW1lbnRvcyBkZSBsb3MgcGVkaWRvcyBwb3IgZG9zIGRlIGxvcyBjYXNvcz8gdHMgbm8gbXVlc3RyYSBlcnJvclxuIiwiaW1wb3J0IGJ1eUJ0bkxpc3RlbmVycyBmcm9tIFwiLi4vc3JjL2J1eUJ0bkxpc3RlbmVyc1wiO1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi9hcHBcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRldGFpbHNMb2dpYygpIHtcbiAgICBidXlCdG5MaXN0ZW5lcnMoc3RvcmUpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZUxvZ2ljKCkge1xuICAgIHZhciB2ZXJQcm9kdWN0b3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZlci1wcm9kdWN0b3NcIik7XG4gICAgdmFyIGhvdmVySXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvLWhvdmVyXCIpO1xuICAgIGlmICh2ZXJQcm9kdWN0b3MgJiYgaG92ZXJJdGVtcykge1xuICAgICAgICBob3Zlckl0ZW1zLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZlclByb2R1Y3Rvcy5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGhvdmVySXRlbXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmVyUHJvZHVjdG9zLmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgYXBwZW5kUHJvZHVjdCBmcm9tIFwiLi4vc3JjL2FwcGVuZFByb2R1Y3RcIjtcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIi4vYXBwXCI7XG5pbXBvcnQgYnV5QnRuTGlzdGVuZXJzIGZyb20gXCIuLi9zcmMvYnV5QnRuTGlzdGVuZXJzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaG9wTG9naWMoKSB7XG4gICAgc3RvcmUuY2F0YWxvZy5wcm9kdWN0cy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9kdWN0KSB7XG4gICAgICAgIGFwcGVuZFByb2R1Y3QoZG9jdW1lbnQsIHByb2R1Y3QpO1xuICAgIH0pO1xuICAgIGJ1eUJ0bkxpc3RlbmVycyhzdG9yZSk7XG59XG4iLCJ2YXIgQ2FydCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDYXJ0KCkge1xuICAgICAgICB0aGlzLmNvdW50ZXIgPSAwO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ2FydC5wcm90b3R5cGUsIFwiYWRkUHJvZHVjdFwiLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKGNhbnRpZGFkKSB7XG4gICAgICAgICAgICB0aGlzLmNvdW50ZXIgKz0gTnVtYmVyKGNhbnRpZGFkKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBDYXJ0O1xufSgpKTtcbmV4cG9ydCBkZWZhdWx0IENhcnQ7XG4iLCJ2YXIgQ2F0YWxvZyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDYXRhbG9nKCkge1xuICAgICAgICB0aGlzLl9wcm9kdWN0cyA9IFtdO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ2F0YWxvZy5wcm90b3R5cGUsIFwicHJvZHVjdHNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wcm9kdWN0cztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIENhdGFsb2cucHJvdG90eXBlLmFkZFByb2R1Y3RzID0gZnVuY3Rpb24gKHByb2R1Y3QpIHtcbiAgICAgICAgdGhpcy5fcHJvZHVjdHMucHVzaChwcm9kdWN0KTtcbiAgICB9O1xuICAgIHJldHVybiBDYXRhbG9nO1xufSgpKTtcbmV4cG9ydCBkZWZhdWx0IENhdGFsb2c7XG4vL2xpbmVhIDQsIGVzIGxvIG1pc21vIHF1ZSBpbmljaWFsaXphciBlbiBlbCBjb25zdHJ1Y3Rvcj9cbiIsInZhciBQcm9kdWN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFByb2R1Y3QoKSB7XG4gICAgfVxuICAgIFByb2R1Y3QucHJvdG90eXBlLmdlVFRpdGxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgICB9O1xuICAgIFByb2R1Y3QucHJvdG90eXBlLmdldFByaWNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcmljZTtcbiAgICB9O1xuICAgIFByb2R1Y3QucHJvdG90eXBlLmdldElEID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pZDtcbiAgICB9O1xuICAgIFByb2R1Y3QucHJvdG90eXBlLmdldERlc2NyaXB0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICB9O1xuICAgIFByb2R1Y3QucHJvdG90eXBlLmdldEltYWdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbWFnZTtcbiAgICB9O1xuICAgIHJldHVybiBQcm9kdWN0O1xufSgpKTtcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3Q7XG4vL0FMIFVTQVIgTEEgSU5URVJGQUNFIEJPUlJFIExPUyBfIFkgUkVGT1JNVUxFIEdFVFRFUlMsIEVTVEEgT0s/XG4vL0JPUlJFIFNFVFRFUlMgRU4gQkFTRSBBIE5vdGUgdGhhdCBhIGZpZWxkLWJhY2tlZCBnZXQvc2V0IHBhaXIgd2l0aCBubyBleHRyYSBsb2dpY1xuLy9pcyB2ZXJ5IHJhcmVseSB1c2VmdWwgaW4gSmF2YVNjcmlwdC4gSXTigJlzIGZpbmUgdG8gZXhwb3NlIHB1YmxpYyBmaWVsZHMgaWZcbi8veW91IGRvbuKAmXQgbmVlZCB0byBhZGQgYWRkaXRpb25hbCBsb2dpYyBkdXJpbmcgdGhlIGdldC9zZXQgb3BlcmF0aW9ucy5cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5pbXBvcnQgUHJvZHVjdCBmcm9tIFwiLi9Qcm9kdWN0XCI7XG5pbXBvcnQgQ2F0YWxvZyBmcm9tIFwiLi9DYXRhbG9nXCI7XG5pbXBvcnQgQ2FydCBmcm9tIFwiLi9DYXJ0XCI7XG52YXIgU3RvcmUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU3RvcmUoKSB7XG4gICAgICAgIHRoaXMuX2NhcnQgPSBuZXcgQ2FydCgpO1xuICAgICAgICB0aGlzLl9jYXRhbG9nID0gbmV3IENhdGFsb2coKTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0b3JlLnByb3RvdHlwZSwgXCJjYXJ0XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FydDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdG9yZS5wcm90b3R5cGUsIFwiY2F0YWxvZ1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhdGFsb2c7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBTdG9yZS5wcm90b3R5cGUuc2V0Q2F0YWxvZyA9IGZ1bmN0aW9uIChmZXRjaEZ1bmN0aW9uKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBkYXRhO1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgZmV0Y2hGdW5jdGlvbigpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0ID0gbmV3IFByb2R1Y3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnRpdGxlID0gaXRlbS50aXRsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LmlkID0gaXRlbS5pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnByaWNlID0gaXRlbS5wcmljZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LmRlc2NyaXB0aW9uID0gaXRlbS5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LmltYWdlID0gaXRlbS5pbWFnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5fY2F0YWxvZy5hZGRQcm9kdWN0cyhwcm9kdWN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBTdG9yZTtcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBTdG9yZTtcbiIsImltcG9ydCBwcm9kdWN0VmlldyBmcm9tIFwiLi9jb21wb25lbnRzL3Byb2R1Y3RWaWV3XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcHBlbmRQcm9kdWN0KGRvYywgcHJvZHVjdCkge1xuICAgIHZhciBwcm9kdWN0c0NvbnRhaW5lciA9IGRvYy5nZXRFbGVtZW50QnlJZChcInByb2R1Y3RzLWNvbnRhaW5lclwiKTtcbiAgICBpZiAocHJvZHVjdHNDb250YWluZXIpIHtcbiAgICAgICAgcHJvZHVjdHNDb250YWluZXIuaW5uZXJIVE1MICs9IHByb2R1Y3RWaWV3KHByb2R1Y3QpO1xuICAgIH1cbn1cbiIsInZhciBjb3VudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3VudGVyXCIpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnV5QnRuTGlzdGVuZXJzKHN0b3JlKSB7XG4gICAgdmFyIGJ1eUJ0biA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNvbXByYXJcIikpO1xuICAgIGJ1eUJ0bi5mb3JFYWNoKGZ1bmN0aW9uIChidXR0b24pIHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICAgICAgdmFyIHByZVRhcmdldCA9IHRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgICAgICAgICAgICAgIGlmICghcHJlVGFyZ2V0LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiRWxpZ2UgY3XDoW50YXMgcHJlbmRhcyBxdWllcmVzIGNvbXByYXJcIik7IC8vY2FtYmlhciBwb3IgZXN0aWxvIGVycm9yXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZS5jYXJ0LmFkZFByb2R1Y3QgPSBOdW1iZXIocHJlVGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXIuaW5uZXJIVE1MID0gU3RyaW5nKHN0b3JlLmNhcnQuY291bnRlcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGV0YWlsc1BhZ2UoaGFzaCwgc3RvcmUpIHtcbiAgICB2YXIgcHJvZHVjdCA9IHN0b3JlLmNhdGFsb2cucHJvZHVjdHMuZmlsdGVyKGZ1bmN0aW9uIChwcm9kKSB7XG4gICAgICAgIHJldHVybiBwcm9kLmlkID09IE51bWJlcihoYXNoKTtcbiAgICB9KVswXTtcbiAgICByZXR1cm4gXCI8YXJ0aWNsZT5cXG4gICAgPGltZyBzcmM9XFxcIlwiICsgcHJvZHVjdC5pbWFnZSArIFwiXFxcIi8+XFxuICAgIDxkaXYgY2xhc3M9XFxcImluZm8tc2hvcFxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lLXByaWNlXFxcIj5cXG4gICAgICAgICAgICA8aDIgaWQ9XFxcInByb2R1Y3QtbmFtZVxcXCI+XCIgKyBwcm9kdWN0LnRpdGxlICsgXCI8L2gyPlxcbiAgICAgICAgICAgIDxzcGFuPiRcIiArIHByb2R1Y3QucHJpY2UudG9GaXhlZCgyKSArIFwiPC9zcGFuPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgIDxpbnB1dFxcbiAgICAgICAgICAgICAgICB0eXBlPVxcXCJudW1iZXJcXFwiXFxuICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJjYW50aWRhZFxcXCJcXG4gICAgICAgICAgICAgICAgbmFtZT1cXFwiY2FudGlkYWRcXFwiXFxuICAgICAgICAgICAgICAgIG1pbj1cXFwiMFxcXCJcXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIjBcXFwiXFxuICAgICAgICAgICAgLz48YnV0dG9uIGNsYXNzPVxcXCJjb21wcmFyXFxcIj5Db21wcmFyPC9idXR0b24+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxociBjbGFzcz1cXFwiaC1saW5lXFxcIiAvPlxcbiAgICA8L2Rpdj5cXG4gICAgPHAgY2xhc3M9XFxcImRldGFsbGVzXFxcIiBpZD1cXFwiZGV0YWlsc1xcXCI+XFxuICAgIFwiICsgcHJvZHVjdC5kZXNjcmlwdGlvbiArIFwiXFxuICAgIDwvcD5cXG48L2FydGljbGU+XCI7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlcnJvclBhZ2UoKSB7XG4gICAgcmV0dXJuIFwiIDxhcnRpY2xlIGlkPVxcXCJwcm9kdWN0cy1jb250YWluZXJcXFwiPkVSUk9SIFBBR0VcXG48L2FydGljbGU+XCI7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lUGFnZSgpIHtcbiAgICByZXR1cm4gXCJcXG5cXHRcXHRcXHQ8YXJ0aWNsZT5cXG5cXHRcXHRcXHRcXHQ8ZGl2IGlkPVxcXCJ0by1ob3ZlclxcXCIgY2xhc3M9XFxcInRvLWhvdmVyXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgaWNvbm8tY2VudHJhbFxcXCIgaWQ9XFxcImljb25cXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdGNoZWNrcm9vbVxcblxcdFxcdFxcdFxcdFxcdDwvc3Bhbj48L2JyPlxcblxcdFxcdFxcdFxcdFxcdDxhIGhyZWY9XFxcIiMvc2hvcFxcXCIgaWQ9XFxcInZlci1wcm9kdWN0b3NcXFwiIGNsYXNzPVxcXCJmYWRlIGhpZGRlbiB2ZXItcHJvZHVjdG9zIHJvdXRlclxcXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ+VmVyIExpc3RhZG8gZGUgUHJvZHVjdG9zPC9hXFxuXFx0XFx0XFx0XFx0XFx0PlxcblxcdFxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdFxcdDwvYXJ0aWNsZT5cXG4gICAgICAgICAgICBcIjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2R1Y3RWaWV3KHByb2R1Y3QpIHtcbiAgICByZXR1cm4gXCJcXG4gICAgPGRpdiBjbGFzcz1cXFwicHJvZHVjdFxcXCIgZGF0YS1pbmRleD1cIiArIHByb2R1Y3QuaWQgKyBcIj5cXG4gICAgPGltZyBzcmM9XFxcIlwiICsgcHJvZHVjdC5pbWFnZSArIFwiXFxcIiBjbGFzcz1cXFwiYmx1ZS1zaGlydFxcXCIgLz5cXG4gICAgPGRpdiBjbGFzcz1cXFwicHJvZHVjdC1pbmZvXFxcIj5cXG4gICAgICAgIDxoMj5cIiArIHByb2R1Y3QudGl0bGUgKyBcIjwvaDI+XFxuICAgICAgICA8c3Bhbj4kXCIgKyBwcm9kdWN0LnByaWNlLnRvRml4ZWQoMikgKyBcIjwvc3Bhbj48YSBocmVmPVxcXCIjL2RldGFpbHMvXCIgKyBwcm9kdWN0LmlkICsgXCJcXFwiIGNsYXNzPVxcXCJyb3V0ZXJcXFwiPkRldGFsbGVzPC9hPlxcbiAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICA8aW5wdXRcXG4gICAgICAgICAgICAgICAgdHlwZT1cXFwibnVtYmVyXFxcIlxcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwiY2FudGlkYWRcXFwiXFxuICAgICAgICAgICAgICAgIG5hbWU9XFxcImNhbnRpZGFkXFxcIlxcbiAgICAgICAgICAgICAgICBtaW49XFxcIjBcXFwiXFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCIwXFxcIlxcbiAgICAgICAgICAgIC8+PGJ1dHRvbiBjbGFzcz1cXFwiY29tcHJhclxcXCI+Q29tcHJhcjwvYnV0dG9uPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbjwvZGl2PlxcblwiO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hvcFBhZ2UoKSB7XG4gICAgcmV0dXJuIFwiXFxuICAgICAgICAgICAgICAgIDxhcnRpY2xlIGlkPVxcXCJwcm9kdWN0cy1jb250YWluZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBKUyAtLT5cXG4gICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxcbiAgICAgICAgICAgXCI7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmV0Y2hQcm9kdWN0cygpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYXRhO1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBmZXRjaChcImh0dHBzOi8vZmFrZXN0b3JlYXBpLmNvbS9wcm9kdWN0c1wiKS50aGVuKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pXTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBkYXRhXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vanMvYXBwLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9