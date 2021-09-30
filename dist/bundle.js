/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

function detailsLogic(store) {
    (0,_src_buyBtnListeners__WEBPACK_IMPORTED_MODULE_0__["default"])(store);
}
//OK usar nombre de parametro igual que la variable que es argumento?


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
function homeLogic(doc) {
    var verProductos = doc.getElementById("ver-productos");
    var hoverItems = doc.getElementById("to-hover");
    hoverItems.addEventListener("mouseenter", function () {
        verProductos.classList.add("visible");
    });
    hoverItems.addEventListener("mouseleave", function () {
        verProductos.classList.remove("visible");
    });
}


/***/ }),

/***/ "./js/logicCall.ts":
/*!*************************!*\
  !*** ./js/logicCall.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ logicCall)
/* harmony export */ });
/* harmony import */ var _homeLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeLogic */ "./js/homeLogic.ts");
/* harmony import */ var _shopLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shopLogic */ "./js/shopLogic.ts");
/* harmony import */ var _detailsLogic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detailsLogic */ "./js/detailsLogic.ts");



function logicCall(section, store, doc) {
    var logic = {
        "#/": function () { return (0,_homeLogic__WEBPACK_IMPORTED_MODULE_0__["default"])(doc); },
        "#/shop": function () { return (0,_shopLogic__WEBPACK_IMPORTED_MODULE_1__["default"])(store); },
        "#/details": function () { return (0,_detailsLogic__WEBPACK_IMPORTED_MODULE_2__["default"])(store); },
        //	"/404": errorPageLogic,
    };
    if (!logic[section]) {
        logic["/404"]();
    }
    logic[section]();
}


/***/ }),

/***/ "./js/routesCall.ts":
/*!**************************!*\
  !*** ./js/routesCall.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ routesCall)
/* harmony export */ });
/* harmony import */ var _src_components_homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/components/homePage */ "./src/components/homePage.ts");
/* harmony import */ var _src_components_shopPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/shopPage */ "./src/components/shopPage.ts");
/* harmony import */ var _src_components_detailsPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/detailsPage */ "./src/components/detailsPage.ts");
/* harmony import */ var _src_components_errorPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/errorPage */ "./src/components/errorPage.ts");




function routesCall(section, productID, products) {
    var routes = {
        "#/": _src_components_homePage__WEBPACK_IMPORTED_MODULE_0__["default"],
        "#/shop": _src_components_shopPage__WEBPACK_IMPORTED_MODULE_1__["default"],
        "#/details": function () { return (0,_src_components_detailsPage__WEBPACK_IMPORTED_MODULE_2__["default"])(productID, products); },
        "/404": function () { return (0,_src_components_errorPage__WEBPACK_IMPORTED_MODULE_3__["default"])(); },
    };
    if (!routes[section]) {
        return routes["/404"]();
    }
    return routes[section]();
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
/* harmony import */ var _src_buyBtnListeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/buyBtnListeners */ "./src/buyBtnListeners.ts");


function shopLogic(store) {
    store.catalog.products.forEach(function (product) {
        (0,_src_appendProduct__WEBPACK_IMPORTED_MODULE_0__["default"])(document, product);
    });
    (0,_src_buyBtnListeners__WEBPACK_IMPORTED_MODULE_1__["default"])(store);
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
    productsContainer.innerHTML += (0,_components_productView__WEBPACK_IMPORTED_MODULE_0__["default"])(product);
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
function detailsPage(hash, products) {
    var product = products.filter(function (prod) {
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************!*\
  !*** ./js/app.ts ***!
  \*******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_Store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/Store */ "./src/Store.ts");
/* harmony import */ var _src_fetchProducts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/fetchProducts */ "./src/fetchProducts.ts");
/* harmony import */ var _routesCall__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routesCall */ "./js/routesCall.ts");
/* harmony import */ var _logicCall__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logicCall */ "./js/logicCall.ts");




var container = document.getElementById("content");
function App(container) {
    var store = new _src_Store__WEBPACK_IMPORTED_MODULE_0__["default"]();
    store.setCatalog(_src_fetchProducts__WEBPACK_IMPORTED_MODULE_1__["default"]);
    function render(route) {
        var splited = route.split("/");
        var productID = splited[2];
        var section = splited.slice(0, 2).join("/");
        container.innerHTML = (0,_routesCall__WEBPACK_IMPORTED_MODULE_2__["default"])(section, productID, store.catalog.products);
        (0,_logicCall__WEBPACK_IMPORTED_MODULE_3__["default"])(section, store, document);
    }
    return { render: render };
}
var app = App(container);
app.render("#/");
window.addEventListener("hashchange", function () {
    var route = window.location.hash;
    app.render(route);
});
//pasar el documento como argumento o el elemento en específico?

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3JILGlGQUFpRixpQkFBaUI7QUFDbEcseURBQXlELGdCQUFnQixRQUFRO0FBQ2pGLCtDQUErQyxnQkFBZ0IsZ0JBQWdCO0FBQy9FO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQSxVQUFVLFlBQVksYUFBYSxTQUFTLFVBQVU7QUFDdEQsb0NBQW9DLFNBQVM7QUFDN0M7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4R0FBOEcsb0JBQW9CO0FBQ2xJO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7Ozs7OztVQ2hEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTmlDO0FBQ2dCO0FBQ1g7QUFDRjtBQUNwQztBQUNBO0FBQ0Esb0JBQW9CLGtEQUFLO0FBQ3pCLHFCQUFxQiwwREFBYTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qix1REFBVTtBQUN4QyxRQUFRLHNEQUFTO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vanMvZGV0YWlsc0xvZ2ljLnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vanMvaG9tZUxvZ2ljLnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vanMvbG9naWNDYWxsLnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vanMvcm91dGVzQ2FsbC50cyIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby8uL2pzL3Nob3BMb2dpYy50cyIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby8uL3NyYy9DYXJ0LnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL0NhdGFsb2cudHMiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vLi9zcmMvUHJvZHVjdC50cyIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby8uL3NyYy9TdG9yZS50cyIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby8uL3NyYy9hcHBlbmRQcm9kdWN0LnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL2J1eUJ0bkxpc3RlbmVycy50cyIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby8uL3NyYy9jb21wb25lbnRzL2RldGFpbHNQYWdlLnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL2NvbXBvbmVudHMvZXJyb3JQYWdlLnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL2NvbXBvbmVudHMvaG9tZVBhZ2UudHMiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vLi9zcmMvY29tcG9uZW50cy9wcm9kdWN0Vmlldy50cyIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby8uL3NyYy9jb21wb25lbnRzL3Nob3BQYWdlLnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL2ZldGNoUHJvZHVjdHMudHMiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby8uL2pzL2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYnV5QnRuTGlzdGVuZXJzIGZyb20gXCIuLi9zcmMvYnV5QnRuTGlzdGVuZXJzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZXRhaWxzTG9naWMoc3RvcmUpIHtcbiAgICBidXlCdG5MaXN0ZW5lcnMoc3RvcmUpO1xufVxuLy9PSyB1c2FyIG5vbWJyZSBkZSBwYXJhbWV0cm8gaWd1YWwgcXVlIGxhIHZhcmlhYmxlIHF1ZSBlcyBhcmd1bWVudG8/XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lTG9naWMoZG9jKSB7XG4gICAgdmFyIHZlclByb2R1Y3RvcyA9IGRvYy5nZXRFbGVtZW50QnlJZChcInZlci1wcm9kdWN0b3NcIik7XG4gICAgdmFyIGhvdmVySXRlbXMgPSBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJ0by1ob3ZlclwiKTtcbiAgICBob3Zlckl0ZW1zLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmVyUHJvZHVjdG9zLmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xuICAgIH0pO1xuICAgIGhvdmVySXRlbXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2ZXJQcm9kdWN0b3MuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgaG9tZUxvZ2ljIGZyb20gXCIuL2hvbWVMb2dpY1wiO1xuaW1wb3J0IHNob3BMb2dpYyBmcm9tIFwiLi9zaG9wTG9naWNcIjtcbmltcG9ydCBkZXRhaWxzTG9naWMgZnJvbSBcIi4vZGV0YWlsc0xvZ2ljXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2dpY0NhbGwoc2VjdGlvbiwgc3RvcmUsIGRvYykge1xuICAgIHZhciBsb2dpYyA9IHtcbiAgICAgICAgXCIjL1wiOiBmdW5jdGlvbiAoKSB7IHJldHVybiBob21lTG9naWMoZG9jKTsgfSxcbiAgICAgICAgXCIjL3Nob3BcIjogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2hvcExvZ2ljKHN0b3JlKTsgfSxcbiAgICAgICAgXCIjL2RldGFpbHNcIjogZnVuY3Rpb24gKCkgeyByZXR1cm4gZGV0YWlsc0xvZ2ljKHN0b3JlKTsgfSxcbiAgICAgICAgLy9cdFwiLzQwNFwiOiBlcnJvclBhZ2VMb2dpYyxcbiAgICB9O1xuICAgIGlmICghbG9naWNbc2VjdGlvbl0pIHtcbiAgICAgICAgbG9naWNbXCIvNDA0XCJdKCk7XG4gICAgfVxuICAgIGxvZ2ljW3NlY3Rpb25dKCk7XG59XG4iLCJpbXBvcnQgaG9tZVBhZ2UgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL2hvbWVQYWdlXCI7XG5pbXBvcnQgc2hvcFBhZ2UgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL3Nob3BQYWdlXCI7XG5pbXBvcnQgZGV0YWlsc1BhZ2UgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL2RldGFpbHNQYWdlXCI7XG5pbXBvcnQgZXJyb3JQYWdlIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9lcnJvclBhZ2VcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJvdXRlc0NhbGwoc2VjdGlvbiwgcHJvZHVjdElELCBwcm9kdWN0cykge1xuICAgIHZhciByb3V0ZXMgPSB7XG4gICAgICAgIFwiIy9cIjogaG9tZVBhZ2UsXG4gICAgICAgIFwiIy9zaG9wXCI6IHNob3BQYWdlLFxuICAgICAgICBcIiMvZGV0YWlsc1wiOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkZXRhaWxzUGFnZShwcm9kdWN0SUQsIHByb2R1Y3RzKTsgfSxcbiAgICAgICAgXCIvNDA0XCI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGVycm9yUGFnZSgpOyB9LFxuICAgIH07XG4gICAgaWYgKCFyb3V0ZXNbc2VjdGlvbl0pIHtcbiAgICAgICAgcmV0dXJuIHJvdXRlc1tcIi80MDRcIl0oKTtcbiAgICB9XG4gICAgcmV0dXJuIHJvdXRlc1tzZWN0aW9uXSgpO1xufVxuIiwiaW1wb3J0IGFwcGVuZFByb2R1Y3QgZnJvbSBcIi4uL3NyYy9hcHBlbmRQcm9kdWN0XCI7XG5pbXBvcnQgYnV5QnRuTGlzdGVuZXJzIGZyb20gXCIuLi9zcmMvYnV5QnRuTGlzdGVuZXJzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaG9wTG9naWMoc3RvcmUpIHtcbiAgICBzdG9yZS5jYXRhbG9nLnByb2R1Y3RzLmZvckVhY2goZnVuY3Rpb24gKHByb2R1Y3QpIHtcbiAgICAgICAgYXBwZW5kUHJvZHVjdChkb2N1bWVudCwgcHJvZHVjdCk7XG4gICAgfSk7XG4gICAgYnV5QnRuTGlzdGVuZXJzKHN0b3JlKTtcbn1cbiIsInZhciBDYXJ0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENhcnQoKSB7XG4gICAgICAgIHRoaXMuY291bnRlciA9IDA7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDYXJ0LnByb3RvdHlwZSwgXCJhZGRQcm9kdWN0XCIsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoY2FudGlkYWQpIHtcbiAgICAgICAgICAgIHRoaXMuY291bnRlciArPSBOdW1iZXIoY2FudGlkYWQpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIENhcnQ7XG59KCkpO1xuZXhwb3J0IGRlZmF1bHQgQ2FydDtcbiIsInZhciBDYXRhbG9nID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENhdGFsb2coKSB7XG4gICAgICAgIHRoaXMuX3Byb2R1Y3RzID0gW107XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDYXRhbG9nLnByb3RvdHlwZSwgXCJwcm9kdWN0c1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2R1Y3RzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgQ2F0YWxvZy5wcm90b3R5cGUuYWRkUHJvZHVjdHMgPSBmdW5jdGlvbiAocHJvZHVjdCkge1xuICAgICAgICB0aGlzLl9wcm9kdWN0cy5wdXNoKHByb2R1Y3QpO1xuICAgIH07XG4gICAgcmV0dXJuIENhdGFsb2c7XG59KCkpO1xuZXhwb3J0IGRlZmF1bHQgQ2F0YWxvZztcbi8vbGluZWEgNCwgZXMgbG8gbWlzbW8gcXVlIGluaWNpYWxpemFyIGVuIGVsIGNvbnN0cnVjdG9yP1xuIiwidmFyIFByb2R1Y3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUHJvZHVjdCgpIHtcbiAgICB9XG4gICAgUHJvZHVjdC5wcm90b3R5cGUuZ2VUVGl0bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICAgIH07XG4gICAgUHJvZHVjdC5wcm90b3R5cGUuZ2V0UHJpY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByaWNlO1xuICAgIH07XG4gICAgUHJvZHVjdC5wcm90b3R5cGUuZ2V0SUQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xuICAgIH07XG4gICAgUHJvZHVjdC5wcm90b3R5cGUuZ2V0RGVzY3JpcHRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICAgIH07XG4gICAgUHJvZHVjdC5wcm90b3R5cGUuZ2V0SW1hZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmltYWdlO1xuICAgIH07XG4gICAgcmV0dXJuIFByb2R1Y3Q7XG59KCkpO1xuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdDtcbi8vQUwgVVNBUiBMQSBJTlRFUkZBQ0UgQk9SUkUgTE9TIF8gWSBSRUZPUk1VTEUgR0VUVEVSUywgRVNUQSBPSz9cbi8vQk9SUkUgU0VUVEVSUyBFTiBCQVNFIEEgTm90ZSB0aGF0IGEgZmllbGQtYmFja2VkIGdldC9zZXQgcGFpciB3aXRoIG5vIGV4dHJhIGxvZ2ljXG4vL2lzIHZlcnkgcmFyZWx5IHVzZWZ1bCBpbiBKYXZhU2NyaXB0LiBJdOKAmXMgZmluZSB0byBleHBvc2UgcHVibGljIGZpZWxkcyBpZlxuLy95b3UgZG9u4oCZdCBuZWVkIHRvIGFkZCBhZGRpdGlvbmFsIGxvZ2ljIGR1cmluZyB0aGUgZ2V0L3NldCBvcGVyYXRpb25zLlxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbmltcG9ydCBQcm9kdWN0IGZyb20gXCIuL1Byb2R1Y3RcIjtcbmltcG9ydCBDYXRhbG9nIGZyb20gXCIuL0NhdGFsb2dcIjtcbmltcG9ydCBDYXJ0IGZyb20gXCIuL0NhcnRcIjtcbnZhciBTdG9yZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTdG9yZSgpIHtcbiAgICAgICAgdGhpcy5fY2FydCA9IG5ldyBDYXJ0KCk7XG4gICAgICAgIHRoaXMuX2NhdGFsb2cgPSBuZXcgQ2F0YWxvZygpO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RvcmUucHJvdG90eXBlLCBcImNhcnRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jYXJ0O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0b3JlLnByb3RvdHlwZSwgXCJjYXRhbG9nXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2F0YWxvZztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIFN0b3JlLnByb3RvdHlwZS5zZXRDYXRhbG9nID0gZnVuY3Rpb24gKGZldGNoRnVuY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGRhdGE7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBmZXRjaEZ1bmN0aW9uKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb2R1Y3QgPSBuZXcgUHJvZHVjdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QudGl0bGUgPSBpdGVtLnRpdGxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QuaWQgPSBpdGVtLmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QucHJpY2UgPSBpdGVtLnByaWNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QuZGVzY3JpcHRpb24gPSBpdGVtLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QuaW1hZ2UgPSBpdGVtLmltYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLl9jYXRhbG9nLmFkZFByb2R1Y3RzKHByb2R1Y3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFN0b3JlO1xufSgpKTtcbmV4cG9ydCBkZWZhdWx0IFN0b3JlO1xuIiwiaW1wb3J0IHByb2R1Y3RWaWV3IGZyb20gXCIuL2NvbXBvbmVudHMvcHJvZHVjdFZpZXdcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcGVuZFByb2R1Y3QoZG9jLCBwcm9kdWN0KSB7XG4gICAgdmFyIHByb2R1Y3RzQ29udGFpbmVyID0gZG9jLmdldEVsZW1lbnRCeUlkKFwicHJvZHVjdHMtY29udGFpbmVyXCIpO1xuICAgIHByb2R1Y3RzQ29udGFpbmVyLmlubmVySFRNTCArPSBwcm9kdWN0Vmlldyhwcm9kdWN0KTtcbn1cbiIsInZhciBjb3VudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3VudGVyXCIpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnV5QnRuTGlzdGVuZXJzKHN0b3JlKSB7XG4gICAgdmFyIGJ1eUJ0biA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNvbXByYXJcIikpO1xuICAgIGJ1eUJ0bi5mb3JFYWNoKGZ1bmN0aW9uIChidXR0b24pIHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICAgICAgdmFyIHByZVRhcmdldCA9IHRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgICAgICAgICAgICAgIGlmICghcHJlVGFyZ2V0LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiRWxpZ2UgY3XDoW50YXMgcHJlbmRhcyBxdWllcmVzIGNvbXByYXJcIik7IC8vY2FtYmlhciBwb3IgZXN0aWxvIGVycm9yXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZS5jYXJ0LmFkZFByb2R1Y3QgPSBOdW1iZXIocHJlVGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXIuaW5uZXJIVE1MID0gU3RyaW5nKHN0b3JlLmNhcnQuY291bnRlcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGV0YWlsc1BhZ2UoaGFzaCwgcHJvZHVjdHMpIHtcbiAgICB2YXIgcHJvZHVjdCA9IHByb2R1Y3RzLmZpbHRlcihmdW5jdGlvbiAocHJvZCkge1xuICAgICAgICByZXR1cm4gcHJvZC5pZCA9PSBOdW1iZXIoaGFzaCk7XG4gICAgfSlbMF07XG4gICAgcmV0dXJuIFwiPGFydGljbGU+XFxuICAgIDxpbWcgc3JjPVxcXCJcIiArIHByb2R1Y3QuaW1hZ2UgKyBcIlxcXCIvPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJpbmZvLXNob3BcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZS1wcmljZVxcXCI+XFxuICAgICAgICAgICAgPGgyIGlkPVxcXCJwcm9kdWN0LW5hbWVcXFwiPlwiICsgcHJvZHVjdC50aXRsZSArIFwiPC9oMj5cXG4gICAgICAgICAgICA8c3Bhbj4kXCIgKyBwcm9kdWN0LnByaWNlLnRvRml4ZWQoMikgKyBcIjwvc3Bhbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICA8aW5wdXRcXG4gICAgICAgICAgICAgICAgdHlwZT1cXFwibnVtYmVyXFxcIlxcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwiY2FudGlkYWRcXFwiXFxuICAgICAgICAgICAgICAgIG5hbWU9XFxcImNhbnRpZGFkXFxcIlxcbiAgICAgICAgICAgICAgICBtaW49XFxcIjBcXFwiXFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCIwXFxcIlxcbiAgICAgICAgICAgIC8+PGJ1dHRvbiBjbGFzcz1cXFwiY29tcHJhclxcXCI+Q29tcHJhcjwvYnV0dG9uPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8aHIgY2xhc3M9XFxcImgtbGluZVxcXCIgLz5cXG4gICAgPC9kaXY+XFxuICAgIDxwIGNsYXNzPVxcXCJkZXRhbGxlc1xcXCIgaWQ9XFxcImRldGFpbHNcXFwiPlxcbiAgICBcIiArIHByb2R1Y3QuZGVzY3JpcHRpb24gKyBcIlxcbiAgICA8L3A+XFxuPC9hcnRpY2xlPlwiO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXJyb3JQYWdlKCkge1xuICAgIHJldHVybiBcIiA8YXJ0aWNsZSBpZD1cXFwicHJvZHVjdHMtY29udGFpbmVyXFxcIj5FUlJPUiBQQUdFXFxuPC9hcnRpY2xlPlwiO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZVBhZ2UoKSB7XG4gICAgcmV0dXJuIFwiXFxuXFx0XFx0XFx0PGFydGljbGU+XFxuXFx0XFx0XFx0XFx0PGRpdiBpZD1cXFwidG8taG92ZXJcXFwiIGNsYXNzPVxcXCJ0by1ob3ZlclxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIGljb25vLWNlbnRyYWxcXFwiIGlkPVxcXCJpY29uXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRjaGVja3Jvb21cXG5cXHRcXHRcXHRcXHRcXHQ8L3NwYW4+PC9icj5cXG5cXHRcXHRcXHRcXHRcXHQ8YSBocmVmPVxcXCIjL3Nob3BcXFwiIGlkPVxcXCJ2ZXItcHJvZHVjdG9zXFxcIiBjbGFzcz1cXFwiZmFkZSBoaWRkZW4gdmVyLXByb2R1Y3RvcyByb3V0ZXJcXFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0PlZlciBMaXN0YWRvIGRlIFByb2R1Y3RvczwvYVxcblxcdFxcdFxcdFxcdFxcdD5cXG5cXHRcXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHQ8L2FydGljbGU+XFxuICAgICAgICAgICAgXCI7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9kdWN0Vmlldyhwcm9kdWN0KSB7XG4gICAgcmV0dXJuIFwiXFxuICAgIDxkaXYgY2xhc3M9XFxcInByb2R1Y3RcXFwiIGRhdGEtaW5kZXg9XCIgKyBwcm9kdWN0LmlkICsgXCI+XFxuICAgIDxpbWcgc3JjPVxcXCJcIiArIHByb2R1Y3QuaW1hZ2UgKyBcIlxcXCIgY2xhc3M9XFxcImJsdWUtc2hpcnRcXFwiIC8+XFxuICAgIDxkaXYgY2xhc3M9XFxcInByb2R1Y3QtaW5mb1xcXCI+XFxuICAgICAgICA8aDI+XCIgKyBwcm9kdWN0LnRpdGxlICsgXCI8L2gyPlxcbiAgICAgICAgPHNwYW4+JFwiICsgcHJvZHVjdC5wcmljZS50b0ZpeGVkKDIpICsgXCI8L3NwYW4+PGEgaHJlZj1cXFwiIy9kZXRhaWxzL1wiICsgcHJvZHVjdC5pZCArIFwiXFxcIiBjbGFzcz1cXFwicm91dGVyXFxcIj5EZXRhbGxlczwvYT5cXG4gICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgPGlucHV0XFxuICAgICAgICAgICAgICAgIHR5cGU9XFxcIm51bWJlclxcXCJcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcImNhbnRpZGFkXFxcIlxcbiAgICAgICAgICAgICAgICBuYW1lPVxcXCJjYW50aWRhZFxcXCJcXG4gICAgICAgICAgICAgICAgbWluPVxcXCIwXFxcIlxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiMFxcXCJcXG4gICAgICAgICAgICAvPjxidXR0b24gY2xhc3M9XFxcImNvbXByYXJcXFwiPkNvbXByYXI8L2J1dHRvbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cXG5cIjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNob3BQYWdlKCkge1xuICAgIHJldHVybiBcIlxcbiAgICAgICAgICAgICAgICA8YXJ0aWNsZSBpZD1cXFwicHJvZHVjdHMtY29udGFpbmVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gSlMgLS0+XFxuICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cXG4gICAgICAgICAgIFwiO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZldGNoUHJvZHVjdHMoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGF0YTtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgZmV0Y2goXCJodHRwczovL2Zha2VzdG9yZWFwaS5jb20vcHJvZHVjdHNcIikudGhlbihmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KV07XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBkYXRhID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZGF0YV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgU3RvcmUgZnJvbSBcIi4uL3NyYy9TdG9yZVwiO1xuaW1wb3J0IGZldGNoUHJvZHVjdHMgZnJvbSBcIi4uL3NyYy9mZXRjaFByb2R1Y3RzXCI7XG5pbXBvcnQgcm91dGVzQ2FsbCBmcm9tIFwiLi9yb3V0ZXNDYWxsXCI7XG5pbXBvcnQgbG9naWNDYWxsIGZyb20gXCIuL2xvZ2ljQ2FsbFwiO1xudmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbmZ1bmN0aW9uIEFwcChjb250YWluZXIpIHtcbiAgICB2YXIgc3RvcmUgPSBuZXcgU3RvcmUoKTtcbiAgICBzdG9yZS5zZXRDYXRhbG9nKGZldGNoUHJvZHVjdHMpO1xuICAgIGZ1bmN0aW9uIHJlbmRlcihyb3V0ZSkge1xuICAgICAgICB2YXIgc3BsaXRlZCA9IHJvdXRlLnNwbGl0KFwiL1wiKTtcbiAgICAgICAgdmFyIHByb2R1Y3RJRCA9IHNwbGl0ZWRbMl07XG4gICAgICAgIHZhciBzZWN0aW9uID0gc3BsaXRlZC5zbGljZSgwLCAyKS5qb2luKFwiL1wiKTtcbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IHJvdXRlc0NhbGwoc2VjdGlvbiwgcHJvZHVjdElELCBzdG9yZS5jYXRhbG9nLnByb2R1Y3RzKTtcbiAgICAgICAgbG9naWNDYWxsKHNlY3Rpb24sIHN0b3JlLCBkb2N1bWVudCk7XG4gICAgfVxuICAgIHJldHVybiB7IHJlbmRlcjogcmVuZGVyIH07XG59XG52YXIgYXBwID0gQXBwKGNvbnRhaW5lcik7XG5hcHAucmVuZGVyKFwiIy9cIik7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImhhc2hjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgIHZhciByb3V0ZSA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuICAgIGFwcC5yZW5kZXIocm91dGUpO1xufSk7XG4vL3Bhc2FyIGVsIGRvY3VtZW50byBjb21vIGFyZ3VtZW50byBvIGVsIGVsZW1lbnRvIGVuIGVzcGVjw61maWNvP1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9