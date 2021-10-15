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
    return "\n\t\t\t" + (0,_headerComponent__WEBPACK_IMPORTED_MODULE_0__["default"])() + "\n\n\t\t\t<article class=\"content\">\n\t\t\t\t<div id=\"to-hover\" class=\"to-hover\">\n\t\t\t\t\t<span class=\"material-icons-outlined icono-central\" id=\"icon\">\n\t\t\t\t\t\tcheckroom\n\t\t\t\t\t</span></br>\n\t\t\t\t\t\n\t\t\t\t\t<button value=\"electronics\" class=\"category-selector\">\n\t\t\t\t\t\t<a href=\"#/shop\" id=\"ver-productos\" class=\"fade hidden ver-productos router\">Electr\u00F3nica</a>\n\t\t\t\t\t</button>\n\n\t\t\t\t\t<button value=\"jewelery\" class=\"category-selector\">\n\t\t\t\t\t\t<a href=\"#/shop\" id=\"ver-productos\" class=\"fade hidden ver-productos router\">Joyer\u00EDa</a>\n\t\t\t\t\t</button>\n\n\t\t\t\t\t<button value=\"men's clothing\" class=\"category-selector\">\n\t\t\t\t\t\t<a href=\"#/shop\" id=\"ver-productos\" class=\"fade hidden ver-productos router\">Ropa masculina</a>\n\t\t\t\t\t</button>\n\n\t\t\t\t\t<button value=\"women's clothing\" class=\"category-selector\">\n\t\t\t\t\t\t<a href=\"#/shop\" id=\"ver-productos\" class=\"fade hidden ver-productos router\">Ropa femenina</a>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</article>\n\n\t\t\t" + (0,_footerComponent__WEBPACK_IMPORTED_MODULE_1__["default"])() + "\n        ";
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
    return "\n            " + (0,_headerComponent__WEBPACK_IMPORTED_MODULE_1__["default"])() + "\n                <div class=\"list-container\">\n                    <navbar class=\"categories-nav\" id=\"categories-nav\">\n                      <label><input type=\"checkbox\" class=\"category-selector\" value=\"electronics\">Electronica</label>\n                      <label><input type=\"checkbox\" class=\"category-selector\" value=\"jewelery\">Joyer\u00EDa</label>\n                      <label><input type=\"checkbox\" class=\"category-selector\" value=\"men's clothing\">Ropa masculina</label>\n                      <label><input type=\"checkbox\" class=\"category-selector\" value=\"women's clothing\">Ropa femenina</label>\n                    </navbar>\n                    <article id=\"products-container\" class=\"products-container\">\n                        <navbar>\n                            <label><input type=\"checkbox\" class=\"sort-check\" value=\"title\">Title</label>\n                            <label><input type=\"checkbox\" class=\"sort-check\" value=\"price\">Price</label>\n                            <label><input type=\"checkbox\" class=\"sort-check\" value=\"category\">Category</label>\n                            <button id=\"sort\">Ordenar</button>\n                        </navbar>\n                        <!-- JS -->\n                    </article>\n                </div>\n            " + (0,_footerComponent__WEBPACK_IMPORTED_MODULE_0__["default"])() + "\n           ";
}
//checkboxes deberían estar generados dinamicamente en base a propiedades de productInterfase


/***/ }),

/***/ "./src/dom/appendProduct.ts":
/*!**********************************!*\
  !*** ./src/dom/appendProduct.ts ***!
  \**********************************/
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

/***/ "./src/dom/renderList.ts":
/*!*******************************!*\
  !*** ./src/dom/renderList.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderList)
/* harmony export */ });
/* harmony import */ var _appendProduct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appendProduct */ "./src/dom/appendProduct.ts");
/* harmony import */ var _components_productView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/productView */ "./src/components/productView.ts");


function renderList(catalog) {
    var sortedItems;
    sortedItems = catalog.getSortedItems();
    if (!sortedItems)
        sortedItems = catalog.products;
    sortedItems.forEach(function (product) {
        if (catalog.activeCategories.state[product.category]) {
            (0,_appendProduct__WEBPACK_IMPORTED_MODULE_0__["default"])(document, product, _components_productView__WEBPACK_IMPORTED_MODULE_1__["default"]);
        }
    });
}


/***/ }),

/***/ "./src/dom/updateCartCounter.ts":
/*!**************************************!*\
  !*** ./src/dom/updateCartCounter.ts ***!
  \**************************************/
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

/***/ "./src/dom/updateCategoriesNav.ts":
/*!****************************************!*\
  !*** ./src/dom/updateCategoriesNav.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateCategoriesNav)
/* harmony export */ });
function updateCategoriesNav(doc, activeCategories) {
    var selectors = Array.from(doc.getElementsByClassName("category-selector"));
    selectors.forEach(function (selector) {
        activeCategories.state[selector.value]
            ? (selector.checked = true)
            : (selector.checked = false);
    });
}


/***/ }),

/***/ "./src/entities/ActiveCategories.ts":
/*!******************************************!*\
  !*** ./src/entities/ActiveCategories.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var ActiveCategories = /** @class */ (function () {
    function ActiveCategories() {
        this._state = {
            electronics: false,
            jewelery: false,
            "men's clothing": false,
            "women's clothing": false,
        };
    }
    Object.defineProperty(ActiveCategories.prototype, "state", {
        get: function () {
            return this._state;
        },
        enumerable: false,
        configurable: true
    });
    ActiveCategories.prototype.setCategories = function (category) {
        this.state[category]
            ? (this.state[category] = false)
            : (this.state[category] = true);
    };
    ActiveCategories.prototype.resetState = function () {
        for (var category in this.state) {
            this.state[category] = false;
        }
    };
    return ActiveCategories;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActiveCategories);


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
        if (this.products.some(function (prod) { var _a; return ((_a = prod.product) === null || _a === void 0 ? void 0 : _a.id) == (product === null || product === void 0 ? void 0 : product.id); })) {
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
/* harmony import */ var _ActiveCategories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActiveCategories */ "./src/entities/ActiveCategories.ts");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List */ "./src/entities/List.ts");
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
        _this._activeCategories = new _ActiveCategories__WEBPACK_IMPORTED_MODULE_0__["default"]();
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
    CatalogList.prototype.getProduct = function (id) {
        return this.products.find(function (prod) { return prod.id == id; });
    };
    CatalogList.prototype.addProducts = function (product) {
        this.products.push(product);
    };
    return CatalogList;
}(_List__WEBPACK_IMPORTED_MODULE_1__["default"]));
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
                    return [2 /*return*/, data];
            }
        });
    });
}


/***/ }),

/***/ "./src/listeners/buyBtnListeners.ts":
/*!******************************************!*\
  !*** ./src/listeners/buyBtnListeners.ts ***!
  \******************************************/
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
            window.dispatchEvent(new HashChangeEvent("hashchange"));
        });
    });
}


/***/ }),

/***/ "./src/listeners/categorySelectorsListeners.ts":
/*!*****************************************************!*\
  !*** ./src/listeners/categorySelectorsListeners.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ categorySelectorsListeners)
/* harmony export */ });
function categorySelectorsListeners(doc, activeCategories) {
    var categorySelectors = Array.from(doc.getElementsByClassName("category-selector"));
    categorySelectors.forEach(function (selector) {
        return selector.addEventListener("change", function (e) {
            var checkbox = e.target;
            activeCategories.setCategories(checkbox.value);
            window.dispatchEvent(new HashChangeEvent("hashchange"));
        });
    });
}


/***/ }),

/***/ "./src/listeners/deleteBtnListers.ts":
/*!*******************************************!*\
  !*** ./src/listeners/deleteBtnListers.ts ***!
  \*******************************************/
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

/***/ "./src/listeners/initialCategoryListeners.ts":
/*!***************************************************!*\
  !*** ./src/listeners/initialCategoryListeners.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initialCategoryListeners)
/* harmony export */ });
function initialCategoryListeners(doc, activeCategories) {
    //activeCategories.resetState();
    var categorySelectors = Array.from(doc.getElementsByClassName("category-selector"));
    categorySelectors.forEach(function (button) {
        return button.addEventListener("click", function () {
            activeCategories.setCategories(button.value);
            window.dispatchEvent(new HashChangeEvent("hashchange"));
        });
    });
}


/***/ }),

/***/ "./src/listeners/sortBtnListeners.ts":
/*!*******************************************!*\
  !*** ./src/listeners/sortBtnListeners.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sortBtnListeners)
/* harmony export */ });
/* harmony import */ var _entities_SortObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities/SortObject */ "./src/entities/SortObject.ts");

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
/* harmony import */ var _useParams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useParams */ "./src/logic/useParams.ts");
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

/***/ "./src/logic/useParams.ts":
/*!********************************!*\
  !*** ./src/logic/useParams.ts ***!
  \********************************/
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
/* harmony import */ var _dom_appendProduct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom/appendProduct */ "./src/dom/appendProduct.ts");
/* harmony import */ var _components_cartItemView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/cartItemView */ "./src/components/cartItemView.ts");
/* harmony import */ var _dom_updateCartCounter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom/updateCartCounter */ "./src/dom/updateCartCounter.ts");
/* harmony import */ var _listeners_deleteBtnListers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../listeners/deleteBtnListers */ "./src/listeners/deleteBtnListers.ts");






var CartPage = /** @class */ (function () {
    function CartPage() {
    }
    CartPage.prototype.render = function (c) {
        c.innerHTML = (0,_components_cartComponent__WEBPACK_IMPORTED_MODULE_0__["default"])();
    };
    CartPage.prototype.pageScript = function () {
        _app__WEBPACK_IMPORTED_MODULE_1__.store.cart.products.forEach(function (product) {
            (0,_dom_appendProduct__WEBPACK_IMPORTED_MODULE_2__["default"])(document, product, _components_cartItemView__WEBPACK_IMPORTED_MODULE_3__["default"]);
        });
        (0,_listeners_deleteBtnListers__WEBPACK_IMPORTED_MODULE_5__["default"])(document, _app__WEBPACK_IMPORTED_MODULE_1__.store.cart);
        (0,_dom_updateCartCounter__WEBPACK_IMPORTED_MODULE_4__["default"])(document, _app__WEBPACK_IMPORTED_MODULE_1__.store);
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
/* harmony import */ var _logic_useParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logic/useParams */ "./src/logic/useParams.ts");
/* harmony import */ var _listeners_buyBtnListeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../listeners/buyBtnListeners */ "./src/listeners/buyBtnListeners.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app */ "./src/app.ts");
/* harmony import */ var _dom_updateCartCounter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom/updateCartCounter */ "./src/dom/updateCartCounter.ts");





var DetailsPage = /** @class */ (function () {
    function DetailsPage() {
    }
    DetailsPage.prototype.render = function (c) {
        var productID = (0,_logic_useParams__WEBPACK_IMPORTED_MODULE_1__["default"])().productID;
        c.innerHTML = (0,_components_detailsComponent__WEBPACK_IMPORTED_MODULE_0__["default"])(productID, _app__WEBPACK_IMPORTED_MODULE_3__.store.catalog.products);
    };
    DetailsPage.prototype.pageScript = function (d) {
        (0,_listeners_buyBtnListeners__WEBPACK_IMPORTED_MODULE_2__["default"])(document, _app__WEBPACK_IMPORTED_MODULE_3__.store);
        (0,_dom_updateCartCounter__WEBPACK_IMPORTED_MODULE_4__["default"])(document, _app__WEBPACK_IMPORTED_MODULE_3__.store);
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
/* harmony import */ var _dom_updateCartCounter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom/updateCartCounter */ "./src/dom/updateCartCounter.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app */ "./src/app.ts");
/* harmony import */ var _listeners_initialCategoryListeners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../listeners/initialCategoryListeners */ "./src/listeners/initialCategoryListeners.ts");




var HomePage = /** @class */ (function () {
    function HomePage() {
    }
    HomePage.prototype.render = function (c) {
        c.innerHTML = (0,_components_homeComponent__WEBPACK_IMPORTED_MODULE_0__["default"])();
    };
    HomePage.prototype.pageScript = function (d) {
        var verProductos = Array.from(d.getElementsByClassName("ver-productos"));
        var hoverItems = d.getElementById("to-hover");
        hoverItems.addEventListener("mouseenter", function () {
            verProductos.forEach(function (button) { return button.classList.add("visible"); });
        });
        hoverItems.addEventListener("mouseleave", function () {
            verProductos.forEach(function (button) {
                return button.classList.remove("visible");
            });
        });
        (0,_listeners_initialCategoryListeners__WEBPACK_IMPORTED_MODULE_3__["default"])(document, _app__WEBPACK_IMPORTED_MODULE_2__.store.catalog.activeCategories);
        (0,_dom_updateCartCounter__WEBPACK_IMPORTED_MODULE_1__["default"])(document, _app__WEBPACK_IMPORTED_MODULE_2__.store);
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
/* harmony import */ var _listeners_buyBtnListeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../listeners/buyBtnListeners */ "./src/listeners/buyBtnListeners.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app */ "./src/app.ts");
/* harmony import */ var _dom_updateCartCounter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom/updateCartCounter */ "./src/dom/updateCartCounter.ts");
/* harmony import */ var _dom_renderList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom/renderList */ "./src/dom/renderList.ts");
/* harmony import */ var _listeners_sortBtnListeners__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../listeners/sortBtnListeners */ "./src/listeners/sortBtnListeners.ts");
/* harmony import */ var _dom_updateCategoriesNav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom/updateCategoriesNav */ "./src/dom/updateCategoriesNav.ts");
/* harmony import */ var _listeners_categorySelectorsListeners__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../listeners/categorySelectorsListeners */ "./src/listeners/categorySelectorsListeners.ts");








var ShopPage = /** @class */ (function () {
    function ShopPage() {
    }
    ShopPage.prototype.render = function (c) {
        c.innerHTML = (0,_components_shopComponent__WEBPACK_IMPORTED_MODULE_0__["default"])();
    };
    ShopPage.prototype.pageScript = function () {
        (0,_dom_renderList__WEBPACK_IMPORTED_MODULE_4__["default"])(_app__WEBPACK_IMPORTED_MODULE_2__.store.catalog);
        (0,_listeners_buyBtnListeners__WEBPACK_IMPORTED_MODULE_1__["default"])(document, _app__WEBPACK_IMPORTED_MODULE_2__.store);
        (0,_listeners_sortBtnListeners__WEBPACK_IMPORTED_MODULE_5__["default"])(document, _app__WEBPACK_IMPORTED_MODULE_2__.store.catalog);
        (0,_listeners_categorySelectorsListeners__WEBPACK_IMPORTED_MODULE_7__["default"])(document, _app__WEBPACK_IMPORTED_MODULE_2__.store.catalog.activeCategories);
        (0,_dom_updateCategoriesNav__WEBPACK_IMPORTED_MODULE_6__["default"])(document, _app__WEBPACK_IMPORTED_MODULE_2__.store.catalog.activeCategories);
        (0,_dom_updateCartCounter__WEBPACK_IMPORTED_MODULE_3__["default"])(document, _app__WEBPACK_IMPORTED_MODULE_2__.store);
    };
    return ShopPage;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShopPage);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF3QixXQUFXLGdFQUE4QjtBQUN6RSxRQUFRLGtFQUFpQixXQUFXLHVDQUFLO0FBQ3pDO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCZ0M7QUFDRztBQUM1QjtBQUMwQjtBQUNkO0FBQ2tCO0FBQ0E7QUFDb0I7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscUVBQWE7QUFDbkM7QUFDQTtBQUNBLFFBQVEsMkRBQVUsQ0FBQywrQ0FBYTtBQUNoQyxRQUFRLHNFQUFlLFdBQVcsdUNBQUs7QUFDdkMsUUFBUSx1RUFBZ0IsV0FBVywrQ0FBYTtBQUNoRCxRQUFRLGlGQUEwQixXQUFXLGdFQUE4QjtBQUMzRSxRQUFRLG9FQUFtQixXQUFXLGdFQUE4QjtBQUNwRSxRQUFRLGtFQUFpQixXQUFXLHVDQUFLO0FBQ3pDO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7O1VDeEJ4QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby8uL3NyYy9jb21wb25lbnRzL2NhcnRDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vLi9zcmMvY29tcG9uZW50cy9jYXJ0SXRlbVZpZXcudHMiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vLi9zcmMvY29tcG9uZW50cy9kZXRhaWxzQ29tcG9uZW50LnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyQ29tcG9uZW50LnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyQ29tcG9uZW50LnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL2NvbXBvbmVudHMvaG9tZUNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby8uL3NyYy9jb21wb25lbnRzL3Byb2R1Y3RWaWV3LnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL2NvbXBvbmVudHMvc2hvcENvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby8uL3NyYy9kb20vYXBwZW5kUHJvZHVjdC50cyIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby8uL3NyYy9kb20vcmVuZGVyTGlzdC50cyIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby8uL3NyYy9kb20vdXBkYXRlQ2FydENvdW50ZXIudHMiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vLi9zcmMvZG9tL3VwZGF0ZUNhdGVnb3JpZXNOYXYudHMiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vLi9zcmMvZW50aXRpZXMvQWN0aXZlQ2F0ZWdvcmllcy50cyIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby8uL3NyYy9lbnRpdGllcy9DYXJ0LnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL2VudGl0aWVzL0NhdGFsb2cudHMiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vLi9zcmMvZW50aXRpZXMvTGlzdC50cyIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby8uL3NyYy9lbnRpdGllcy9Qcm9kdWN0LnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL2VudGl0aWVzL1NvcnRPYmplY3QudHMiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vLi9zcmMvZW50aXRpZXMvU3RvcmUudHMiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vLi9zcmMvZmV0Y2hQcm9kdWN0cy50cyIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby8uL3NyYy9saXN0ZW5lcnMvYnV5QnRuTGlzdGVuZXJzLnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL2xpc3RlbmVycy9jYXRlZ29yeVNlbGVjdG9yc0xpc3RlbmVycy50cyIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby8uL3NyYy9saXN0ZW5lcnMvZGVsZXRlQnRuTGlzdGVycy50cyIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby8uL3NyYy9saXN0ZW5lcnMvaW5pdGlhbENhdGVnb3J5TGlzdGVuZXJzLnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL2xpc3RlbmVycy9zb3J0QnRuTGlzdGVuZXJzLnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL2xvZ2ljL3JvdXRlc0NhbGwudHMiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vLi9zcmMvbG9naWMvdXNlUGFyYW1zLnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL3BhZ2VzL0NhcnRQYWdlLnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL3BhZ2VzL0RldGFpbHNQYWdlLnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL3BhZ2VzL0hvbWVQYWdlLnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvLy4vc3JjL3BhZ2VzL1Nob3BQYWdlLnRzIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ZlZGVyaWNvX21hcnRpbl9jb21wYXJ0aWRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9mZWRlcmljb19tYXJ0aW5fY29tcGFydGlkby93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZmVkZXJpY29fbWFydGluX2NvbXBhcnRpZG8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdG9yZSBmcm9tIFwiLi9lbnRpdGllcy9TdG9yZVwiO1xuaW1wb3J0IGZldGNoUHJvZHVjdHMgZnJvbSBcIi4vZmV0Y2hQcm9kdWN0c1wiO1xuaW1wb3J0IGdldFBhZ2UgZnJvbSBcIi4vbG9naWMvcm91dGVzQ2FsbFwiO1xudmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFpbmVyXCIpO1xuZnVuY3Rpb24gQXBwKGNvbnRhaW5lcikge1xuICAgIHZhciBzdG9yZSA9IG5ldyBTdG9yZSgpO1xuICAgIHN0b3JlLnNldENhdGFsb2coZmV0Y2hQcm9kdWN0cyk7XG4gICAgZnVuY3Rpb24gcmVuZGVyKHJvdXRlKSB7XG4gICAgICAgIHZhciBwYWdlID0gbmV3IChnZXRQYWdlKHJvdXRlKSkoKTtcbiAgICAgICAgcGFnZS5yZW5kZXIoY29udGFpbmVyKTtcbiAgICAgICAgcGFnZS5wYWdlU2NyaXB0KGRvY3VtZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIHsgcmVuZGVyOiByZW5kZXIsIHN0b3JlOiBzdG9yZSB9O1xufVxudmFyIGFwcCA9IEFwcChjb250YWluZXIpO1xudmFyIHN0b3JlID0gYXBwLnN0b3JlO1xuYXBwLnJlbmRlcihcIiMvXCIpO1xud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh3aW5kb3cubG9jYXRpb24uaGFzaCA9IFwiIy9cIik7IH07XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImhhc2hjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgIHZhciByb3V0ZSA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuICAgIGFwcC5yZW5kZXIocm91dGUpO1xufSk7XG5leHBvcnQgeyBzdG9yZSB9O1xuIiwiaW1wb3J0IGhlYWRlckNvbXBvbmVudCBmcm9tIFwiLi9oZWFkZXJDb21wb25lbnRcIjtcbmltcG9ydCBmb290ZXJDb21wb25lbnQgZnJvbSBcIi4vZm9vdGVyQ29tcG9uZW50XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYXJ0Q29tcG9uZW50KCkge1xuICAgIHJldHVybiBcIlxcblxcdFxcdFxcdFwiICsgaGVhZGVyQ29tcG9uZW50KCkgKyBcIlxcblxcdFxcdFxcdDxhcnRpY2xlIGNsYXNzPVxcXCJjYXJ0LWNvbnRhaW5lclxcXCI+XFxuXFx0XFx0XFx0XFx0PGRpdiBpZD1cXFwicHJvZHVjdHMtY29udGFpbmVyXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHQ8IS0tIEpTIC0tPlxcblxcdFxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdFxcdFxcdDxidXR0b24+Q2hlY2tvdXQ8L2J1dHRvbj5cXG5cXHRcXHRcXHQ8L2FydGljbGU+XFxuXFxuXFx0XFx0XFx0XCIgKyBmb290ZXJDb21wb25lbnQoKSArIFwiXFxuICAgICAgICBcIjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgcmV0dXJuIFwiPGRpdiBjbGFzcz1cXFwiY2FydC1pdGVtXFxcIj5cXG5cXHRcXHRcXHRcXHQ8ZGl2PlxcblxcdFxcdFxcdFxcdFxcdDxpbWcgc3JjPVxcXCJcIiArIGl0ZW0ucHJvZHVjdC5pbWFnZSArIFwiXFxcIi8+XFxuXFx0XFx0XFx0XFx0XFx0XCIgKyBpdGVtLnByb2R1Y3QudGl0bGUgKyBcIlxcblxcdFxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdFxcdFxcdDxkaXY+XFxuXFx0XFx0XFx0XFx0XFx0XCIgKyBpdGVtLnByb2R1Y3QucHJpY2UgKyBcIlxcblxcdFxcdFxcdFxcdFxcdFggXCIgKyBpdGVtLnF1YW50aXR5ICsgXCJcXG5cXHRcXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHRcXHQ8YnV0dG9uIGRhdGEtaWQ9XFxcIlwiICsgaXRlbS5wcm9kdWN0LmlkICsgXCJcXFwiIGNsYXNzPVxcXCJjYXJ0LXJlbW92ZVxcXCI+WDwvYnV0dG9uPlxcblxcdFxcdFxcdDwvZGl2PlwiO1xufVxuIiwiaW1wb3J0IGZvb3RlckNvbXBvbmVudCBmcm9tIFwiLi9mb290ZXJDb21wb25lbnRcIjtcbmltcG9ydCBoZWFkZXJDb21wb25lbnQgZnJvbSBcIi4vaGVhZGVyQ29tcG9uZW50XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZXRhaWxzUGFnZShpZCwgcHJvZHVjdHMpIHtcbiAgICB2YXIgcHJvZHVjdCA9IHByb2R1Y3RzLmZpbmQoZnVuY3Rpb24gKHByb2QpIHsgcmV0dXJuIHByb2QuaWQgPT0gTnVtYmVyKGlkKTsgfSk7XG4gICAgcmV0dXJuIFwiXFxuICAgIFwiICsgaGVhZGVyQ29tcG9uZW50KCkgKyBcIlxcblxcbiAgICAgICAgPGFydGljbGUgY2xhc3M9XFxcImRldGFpbHMtY29udGFpbmVyXFxcIj5cXG4gICAgICAgICAgICA8aW1nIHNyYz1cXFwiXCIgKyAocHJvZHVjdCA9PT0gbnVsbCB8fCBwcm9kdWN0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9kdWN0LmltYWdlKSArIFwiXFxcIiBjbGFzcz1cXFwiaW1nLWRldGFpbHNcXFwiLz5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbmZvLXNob3BcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lLXByaWNlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxoMiBpZD1cXFwicHJvZHVjdC1uYW1lXFxcIj5cIiArIChwcm9kdWN0ID09PSBudWxsIHx8IHByb2R1Y3QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb2R1Y3QudGl0bGUpICsgXCI8L2gyPlxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+JFwiICsgKHByb2R1Y3QgPT09IG51bGwgfHwgcHJvZHVjdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJvZHVjdC5wcmljZS50b0ZpeGVkKDIpKSArIFwiPC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XFxcIm51bWJlclxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiY2FudGlkYWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cXFwiY2FudGlkYWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluPVxcXCIwXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCIwXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgLz48YnV0dG9uIGNsYXNzPVxcXCJjb21wcmFyXFxcIj5Db21wcmFyPC9idXR0b24+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8aHIgY2xhc3M9XFxcImgtbGluZVxcXCIgLz5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwiZGV0YWxsZXNcXFwiIGlkPVxcXCJkZXRhaWxzXFxcIj5cXG4gICAgICAgICAgICBcIiArIChwcm9kdWN0ID09PSBudWxsIHx8IHByb2R1Y3QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb2R1Y3QuZGVzY3JpcHRpb24pICsgXCJcXG4gICAgICAgICAgICA8L3A+XFxuICAgICAgICA8L2FydGljbGU+XFxuXFxuICAgIFwiICsgZm9vdGVyQ29tcG9uZW50KCkgKyBcIlxcblwiO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9vdGVyQ29tcG9uZW50KCkge1xuICAgIHJldHVybiBcIlxcbiAgICAgICAgPGZvb3Rlcj5cXG4gICAgICAgICAgICA8YSBocmVmPVxcXCJodHRwczovL2dpdGh1Yi5jb20vZmwtbWFydGluXFxcIj5mbC1tYXJ0aW48L2E+XFxuICAgICAgICA8L2Zvb3Rlcj5cXG4gICAgXCI7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoZWFkZXJDb21wb25lbnQoKSB7XG4gICAgcmV0dXJuIFwiXFxuICAgICAgICA8aGVhZGVyPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxvZ28tbmFtZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYXMgZmEtdHNoaXJ0XFxcIj48L2k+XFxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XFxcIiMvXFxcIiBjbGFzcz1cXFwidGl0bGVcXFwiPk1pVGllbmRhPC9hPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcnRcXFwiPlxcbiAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjL2NhcnRcXFwiPjxzcGFuIGNsYXNzPVxcXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBpY29uby1jYXJ0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgPnNob3BwaW5nX2NhcnQ8L3NwYW5cXG4gICAgICAgICAgICAgICAgPjwvYT5cXG4gICAgICAgICAgICAgICAgPHNwYW4gaWQ9XFxcImNvdW50ZXJcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8bGFiZWwgaWQ9XFxcImhhbWJ1cmdlclxcXCIgY2xhc3M9XFxcImhhbWJ1cmdlclxcXCIgZm9yPVxcXCJjaGVja21lbnVcXFwiXFxuICAgICAgICAgICAgICAgID48aSBjbGFzcz1cXFwiZmFzIGZhLWJhcnNcXFwiPjwvaVxcbiAgICAgICAgICAgID48L2xhYmVsPlxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgY2xhc3M9XFxcImNoZWNrbWVudVxcXCIgaWQ9XFxcImNoZWNrbWVudVxcXCIgLz5cXG4gICAgICAgICAgICA8bmF2YmFyIGNsYXNzPVxcXCJtZW51XFxcIj5cXG4gICAgICAgICAgICAgICAgPHVsPlxcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJyb3V0ZXJcXFwiIGhyZWY9XFxcIiMvXFxcIj5JbmljaW88L2E+XFxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJyb3V0ZXJcXFwiIGhyZWY9XFxcIiMvc2hvcFxcXCI+UHJvZHVjdG9zPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgPC91bD5cXG4gICAgICAgICAgICA8L25hdmJhcj5cXG4gICAgICAgIDwvaGVhZGVyPlxcbiAgICBcIjtcbn1cbiIsImltcG9ydCBoZWFkZXJDb21wb25lbnQgZnJvbSBcIi4vaGVhZGVyQ29tcG9uZW50XCI7XG5pbXBvcnQgZm9vdGVyQ29tcG9uZW50IGZyb20gXCIuL2Zvb3RlckNvbXBvbmVudFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZUNvbXBvbmVudCgpIHtcbiAgICByZXR1cm4gXCJcXG5cXHRcXHRcXHRcIiArIGhlYWRlckNvbXBvbmVudCgpICsgXCJcXG5cXG5cXHRcXHRcXHQ8YXJ0aWNsZSBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxuXFx0XFx0XFx0XFx0PGRpdiBpZD1cXFwidG8taG92ZXJcXFwiIGNsYXNzPVxcXCJ0by1ob3ZlclxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIGljb25vLWNlbnRyYWxcXFwiIGlkPVxcXCJpY29uXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRjaGVja3Jvb21cXG5cXHRcXHRcXHRcXHRcXHQ8L3NwYW4+PC9icj5cXG5cXHRcXHRcXHRcXHRcXHRcXG5cXHRcXHRcXHRcXHRcXHQ8YnV0dG9uIHZhbHVlPVxcXCJlbGVjdHJvbmljc1xcXCIgY2xhc3M9XFxcImNhdGVnb3J5LXNlbGVjdG9yXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHQ8YSBocmVmPVxcXCIjL3Nob3BcXFwiIGlkPVxcXCJ2ZXItcHJvZHVjdG9zXFxcIiBjbGFzcz1cXFwiZmFkZSBoaWRkZW4gdmVyLXByb2R1Y3RvcyByb3V0ZXJcXFwiPkVsZWN0clxcdTAwRjNuaWNhPC9hPlxcblxcdFxcdFxcdFxcdFxcdDwvYnV0dG9uPlxcblxcblxcdFxcdFxcdFxcdFxcdDxidXR0b24gdmFsdWU9XFxcImpld2VsZXJ5XFxcIiBjbGFzcz1cXFwiY2F0ZWdvcnktc2VsZWN0b3JcXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdDxhIGhyZWY9XFxcIiMvc2hvcFxcXCIgaWQ9XFxcInZlci1wcm9kdWN0b3NcXFwiIGNsYXNzPVxcXCJmYWRlIGhpZGRlbiB2ZXItcHJvZHVjdG9zIHJvdXRlclxcXCI+Sm95ZXJcXHUwMEVEYTwvYT5cXG5cXHRcXHRcXHRcXHRcXHQ8L2J1dHRvbj5cXG5cXG5cXHRcXHRcXHRcXHRcXHQ8YnV0dG9uIHZhbHVlPVxcXCJtZW4ncyBjbG90aGluZ1xcXCIgY2xhc3M9XFxcImNhdGVnb3J5LXNlbGVjdG9yXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHQ8YSBocmVmPVxcXCIjL3Nob3BcXFwiIGlkPVxcXCJ2ZXItcHJvZHVjdG9zXFxcIiBjbGFzcz1cXFwiZmFkZSBoaWRkZW4gdmVyLXByb2R1Y3RvcyByb3V0ZXJcXFwiPlJvcGEgbWFzY3VsaW5hPC9hPlxcblxcdFxcdFxcdFxcdFxcdDwvYnV0dG9uPlxcblxcblxcdFxcdFxcdFxcdFxcdDxidXR0b24gdmFsdWU9XFxcIndvbWVuJ3MgY2xvdGhpbmdcXFwiIGNsYXNzPVxcXCJjYXRlZ29yeS1zZWxlY3RvclxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0PGEgaHJlZj1cXFwiIy9zaG9wXFxcIiBpZD1cXFwidmVyLXByb2R1Y3Rvc1xcXCIgY2xhc3M9XFxcImZhZGUgaGlkZGVuIHZlci1wcm9kdWN0b3Mgcm91dGVyXFxcIj5Sb3BhIGZlbWVuaW5hPC9hPlxcblxcdFxcdFxcdFxcdFxcdDwvYnV0dG9uPlxcblxcdFxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdFxcdDwvYXJ0aWNsZT5cXG5cXG5cXHRcXHRcXHRcIiArIGZvb3RlckNvbXBvbmVudCgpICsgXCJcXG4gICAgICAgIFwiO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvZHVjdFZpZXcocHJvZHVjdCkge1xuICAgIHJldHVybiBcIlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvZHVjdFxcXCI+XFxuICAgICAgICAgICAgPGltZyBzcmM9XFxcIlwiICsgcHJvZHVjdC5pbWFnZSArIFwiXFxcIiBjbGFzcz1cXFwiaW1nLXNob3BcXFwiIC8+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvZHVjdC1pbmZvXFxcIj5cXG4gICAgICAgICAgICAgICAgPGgyPlwiICsgcHJvZHVjdC50aXRsZSArIFwiPC9oMj5cXG4gICAgICAgICAgICAgICAgPHNwYW4+JFwiICsgcHJvZHVjdC5wcmljZS50b0ZpeGVkKDIpICsgXCI8L3NwYW4+PGEgaHJlZj1cXFwiIy9kZXRhaWxzL1wiICsgcHJvZHVjdC5pZCArIFwiXFxcIiBjbGFzcz1cXFwicm91dGVyXFxcIj5EZXRhbGxlczwvYT5cXG4gICAgICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgIDxpbnB1dFxcbiAgICAgICAgICAgICAgICB0eXBlPVxcXCJudW1iZXJcXFwiXFxuICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJjYW50aWRhZFxcXCJcXG4gICAgICAgICAgICAgICAgbmFtZT1cXFwiY2FudGlkYWRcXFwiXFxuICAgICAgICAgICAgICAgIG1pbj1cXFwiMFxcXCJcXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIjBcXFwiXFxuICAgICAgICAgICAgLz48YnV0dG9uIGNsYXNzPVxcXCJjb21wcmFyXFxcIiBkYXRhLWluZGV4PVwiICsgcHJvZHVjdC5pZCArIFwiPkNvbXByYXI8L2J1dHRvbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcblwiO1xufVxuIiwiaW1wb3J0IGZvb3RlckNvbXBvbmVudCBmcm9tIFwiLi9mb290ZXJDb21wb25lbnRcIjtcbmltcG9ydCBoZWFkZXJDb21wb25lbnQgZnJvbSBcIi4vaGVhZGVyQ29tcG9uZW50XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaG9wQ29tcG9uZW50KCkge1xuICAgIHJldHVybiBcIlxcbiAgICAgICAgICAgIFwiICsgaGVhZGVyQ29tcG9uZW50KCkgKyBcIlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsaXN0LWNvbnRhaW5lclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bmF2YmFyIGNsYXNzPVxcXCJjYXRlZ29yaWVzLW5hdlxcXCIgaWQ9XFxcImNhdGVnb3JpZXMtbmF2XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgY2xhc3M9XFxcImNhdGVnb3J5LXNlbGVjdG9yXFxcIiB2YWx1ZT1cXFwiZWxlY3Ryb25pY3NcXFwiPkVsZWN0cm9uaWNhPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgY2xhc3M9XFxcImNhdGVnb3J5LXNlbGVjdG9yXFxcIiB2YWx1ZT1cXFwiamV3ZWxlcnlcXFwiPkpveWVyXFx1MDBFRGE8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBjbGFzcz1cXFwiY2F0ZWdvcnktc2VsZWN0b3JcXFwiIHZhbHVlPVxcXCJtZW4ncyBjbG90aGluZ1xcXCI+Um9wYSBtYXNjdWxpbmE8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBjbGFzcz1cXFwiY2F0ZWdvcnktc2VsZWN0b3JcXFwiIHZhbHVlPVxcXCJ3b21lbidzIGNsb3RoaW5nXFxcIj5Sb3BhIGZlbWVuaW5hPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDwvbmF2YmFyPlxcbiAgICAgICAgICAgICAgICAgICAgPGFydGljbGUgaWQ9XFxcInByb2R1Y3RzLWNvbnRhaW5lclxcXCIgY2xhc3M9XFxcInByb2R1Y3RzLWNvbnRhaW5lclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5hdmJhcj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgY2xhc3M9XFxcInNvcnQtY2hlY2tcXFwiIHZhbHVlPVxcXCJ0aXRsZVxcXCI+VGl0bGU8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBjbGFzcz1cXFwic29ydC1jaGVja1xcXCIgdmFsdWU9XFxcInByaWNlXFxcIj5QcmljZTwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGNsYXNzPVxcXCJzb3J0LWNoZWNrXFxcIiB2YWx1ZT1cXFwiY2F0ZWdvcnlcXFwiPkNhdGVnb3J5PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cXFwic29ydFxcXCI+T3JkZW5hcjwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmF2YmFyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gSlMgLS0+XFxuICAgICAgICAgICAgICAgICAgICA8L2FydGljbGU+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIFwiICsgZm9vdGVyQ29tcG9uZW50KCkgKyBcIlxcbiAgICAgICAgICAgXCI7XG59XG4vL2NoZWNrYm94ZXMgZGViZXLDrWFuIGVzdGFyIGdlbmVyYWRvcyBkaW5hbWljYW1lbnRlIGVuIGJhc2UgYSBwcm9waWVkYWRlcyBkZSBwcm9kdWN0SW50ZXJmYXNlXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcHBlbmRQcm9kdWN0KGRvYywgcHJvZHVjdCwgdmlldykge1xuICAgIHZhciBwcm9kdWN0c0NvbnRhaW5lciA9IGRvYy5nZXRFbGVtZW50QnlJZChcInByb2R1Y3RzLWNvbnRhaW5lclwiKTtcbiAgICBwcm9kdWN0c0NvbnRhaW5lci5pbm5lckhUTUwgKz0gdmlldyhwcm9kdWN0KTtcbn1cbiIsImltcG9ydCBhcHBlbmRQcm9kdWN0IGZyb20gXCIuL2FwcGVuZFByb2R1Y3RcIjtcbmltcG9ydCBwcm9kdWN0VmlldyBmcm9tIFwiLi4vY29tcG9uZW50cy9wcm9kdWN0Vmlld1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyTGlzdChjYXRhbG9nKSB7XG4gICAgdmFyIHNvcnRlZEl0ZW1zO1xuICAgIHNvcnRlZEl0ZW1zID0gY2F0YWxvZy5nZXRTb3J0ZWRJdGVtcygpO1xuICAgIGlmICghc29ydGVkSXRlbXMpXG4gICAgICAgIHNvcnRlZEl0ZW1zID0gY2F0YWxvZy5wcm9kdWN0cztcbiAgICBzb3J0ZWRJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9kdWN0KSB7XG4gICAgICAgIGlmIChjYXRhbG9nLmFjdGl2ZUNhdGVnb3JpZXMuc3RhdGVbcHJvZHVjdC5jYXRlZ29yeV0pIHtcbiAgICAgICAgICAgIGFwcGVuZFByb2R1Y3QoZG9jdW1lbnQsIHByb2R1Y3QsIHByb2R1Y3RWaWV3KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlQ2FydENvdW50ZXIoZG9jLCBzdG9yZSkge1xuICAgIHZhciBjb3VudGVyID0gZG9jLmdldEVsZW1lbnRCeUlkKFwiY291bnRlclwiKTtcbiAgICBjb3VudGVyLmlubmVySFRNTCA9IFN0cmluZyhzdG9yZS5jYXJ0LmNvdW50ZXIpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlQ2F0ZWdvcmllc05hdihkb2MsIGFjdGl2ZUNhdGVnb3JpZXMpIHtcbiAgICB2YXIgc2VsZWN0b3JzID0gQXJyYXkuZnJvbShkb2MuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNhdGVnb3J5LXNlbGVjdG9yXCIpKTtcbiAgICBzZWxlY3RvcnMuZm9yRWFjaChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgICAgYWN0aXZlQ2F0ZWdvcmllcy5zdGF0ZVtzZWxlY3Rvci52YWx1ZV1cbiAgICAgICAgICAgID8gKHNlbGVjdG9yLmNoZWNrZWQgPSB0cnVlKVxuICAgICAgICAgICAgOiAoc2VsZWN0b3IuY2hlY2tlZCA9IGZhbHNlKTtcbiAgICB9KTtcbn1cbiIsInZhciBBY3RpdmVDYXRlZ29yaWVzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFjdGl2ZUNhdGVnb3JpZXMoKSB7XG4gICAgICAgIHRoaXMuX3N0YXRlID0ge1xuICAgICAgICAgICAgZWxlY3Ryb25pY3M6IGZhbHNlLFxuICAgICAgICAgICAgamV3ZWxlcnk6IGZhbHNlLFxuICAgICAgICAgICAgXCJtZW4ncyBjbG90aGluZ1wiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29tZW4ncyBjbG90aGluZ1wiOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFjdGl2ZUNhdGVnb3JpZXMucHJvdG90eXBlLCBcInN0YXRlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBBY3RpdmVDYXRlZ29yaWVzLnByb3RvdHlwZS5zZXRDYXRlZ29yaWVzID0gZnVuY3Rpb24gKGNhdGVnb3J5KSB7XG4gICAgICAgIHRoaXMuc3RhdGVbY2F0ZWdvcnldXG4gICAgICAgICAgICA/ICh0aGlzLnN0YXRlW2NhdGVnb3J5XSA9IGZhbHNlKVxuICAgICAgICAgICAgOiAodGhpcy5zdGF0ZVtjYXRlZ29yeV0gPSB0cnVlKTtcbiAgICB9O1xuICAgIEFjdGl2ZUNhdGVnb3JpZXMucHJvdG90eXBlLnJlc2V0U3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAodmFyIGNhdGVnb3J5IGluIHRoaXMuc3RhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGVbY2F0ZWdvcnldID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBBY3RpdmVDYXRlZ29yaWVzO1xufSgpKTtcbmV4cG9ydCBkZWZhdWx0IEFjdGl2ZUNhdGVnb3JpZXM7XG4iLCJ2YXIgQ2FydCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDYXJ0KCkge1xuICAgICAgICB0aGlzLmNvdW50ZXIgPSAwO1xuICAgICAgICB0aGlzLnByb2R1Y3RzID0gW107XG4gICAgfVxuICAgIENhcnQucHJvdG90eXBlLnNldENvdW50ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY291bnRlciA9IHRoaXMucHJvZHVjdHMucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gYSArIGIucXVhbnRpdHk7XG4gICAgICAgIH0sIDApO1xuICAgIH07XG4gICAgQ2FydC5wcm90b3R5cGUuYWRkUHJvZHVjdCA9IGZ1bmN0aW9uIChwcm9kdWN0LCBxdWFudGl0eSkge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWN0cy5zb21lKGZ1bmN0aW9uIChwcm9kKSB7IHZhciBfYTsgcmV0dXJuICgoX2EgPSBwcm9kLnByb2R1Y3QpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pZCkgPT0gKHByb2R1Y3QgPT09IG51bGwgfHwgcHJvZHVjdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJvZHVjdC5pZCk7IH0pKSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLnByb2R1Y3RzLmZpbmRJbmRleChmdW5jdGlvbiAocHJvZCkgeyByZXR1cm4gcHJvZC5wcm9kdWN0ID09IHByb2R1Y3Q7IH0pO1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0c1tpbmRleF0ucXVhbnRpdHkgKz0gcXVhbnRpdHk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9kdWN0cy5wdXNoKHsgcHJvZHVjdDogcHJvZHVjdCwgcXVhbnRpdHk6IHF1YW50aXR5IH0pO1xuICAgIH07XG4gICAgQ2FydC5wcm90b3R5cGUucmVtb3ZlUHJvZHVjdCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMucHJvZHVjdHMuZmluZEluZGV4KGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBpdGVtLnByb2R1Y3QuaWQgPT0gaWQ7IH0pO1xuICAgICAgICBpZiAoKChfYSA9IHRoaXMucHJvZHVjdHNbaW5kZXhdKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucXVhbnRpdHkpID09IDEpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb2R1Y3RzW2luZGV4XS5xdWFudGl0eSAtPSAxO1xuICAgIH07XG4gICAgcmV0dXJuIENhcnQ7XG59KCkpO1xuZXhwb3J0IGRlZmF1bHQgQ2FydDtcbi8vY3VhbmRvIGVsIGJvdG9uIGRlc2FwYXJlemNhIGRlbCBkb20sIG5vIHZhIGEgZXhpc3RpciBlc3RlIHByb2JsZW1hLCBwZXJvIGVuIGVzdGUgY29udGV4dG8gc2kuIERlYmVyaWEgZXN0YXIgbGEgZnVuY2lvbiByZW1vdmVcbi8vY3ViaWVydGEgYW50ZSBsYSBzaXR1YWNpb24gZGUgcXVlICF0aGlzLnByb2R1Y3RzW2luZGV4XT8gbGVpYSAzNVxuIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCBBY3RpdmVDYXRlZ29yaWVzIGZyb20gXCIuL0FjdGl2ZUNhdGVnb3JpZXNcIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuL0xpc3RcIjtcbnZhciBDYXRhbG9nTGlzdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQ2F0YWxvZ0xpc3QsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQ2F0YWxvZ0xpc3QoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLl9wcm9kdWN0cyA9IFtdO1xuICAgICAgICBfdGhpcy5fYWN0aXZlQ2F0ZWdvcmllcyA9IG5ldyBBY3RpdmVDYXRlZ29yaWVzKCk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENhdGFsb2dMaXN0LnByb3RvdHlwZSwgXCJwcm9kdWN0c1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2R1Y3RzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENhdGFsb2dMaXN0LnByb3RvdHlwZSwgXCJhY3RpdmVDYXRlZ29yaWVzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYWN0aXZlQ2F0ZWdvcmllcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIENhdGFsb2dMaXN0LnByb3RvdHlwZS5nZXRQcm9kdWN0ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RzLmZpbmQoZnVuY3Rpb24gKHByb2QpIHsgcmV0dXJuIHByb2QuaWQgPT0gaWQ7IH0pO1xuICAgIH07XG4gICAgQ2F0YWxvZ0xpc3QucHJvdG90eXBlLmFkZFByb2R1Y3RzID0gZnVuY3Rpb24gKHByb2R1Y3QpIHtcbiAgICAgICAgdGhpcy5wcm9kdWN0cy5wdXNoKHByb2R1Y3QpO1xuICAgIH07XG4gICAgcmV0dXJuIENhdGFsb2dMaXN0O1xufShMaXN0KSk7XG5leHBvcnQgZGVmYXVsdCBDYXRhbG9nTGlzdDtcbiIsInZhciBfX3NwcmVhZEFycmF5ID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5KSB8fCBmdW5jdGlvbiAodG8sIGZyb20sIHBhY2spIHtcbiAgICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xuICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XG4gICAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xuICAgICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0by5jb25jYXQoYXIgfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSkpO1xufTtcbnZhciBMaXN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIExpc3QoKSB7XG4gICAgICAgIHRoaXMub2JqID0ge307XG4gICAgICAgIHRoaXMuY2FjaGUgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIExpc3QucHJvdG90eXBlLnNldFNvcnRpbmcgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChvYmogPT09IHZvaWQgMCkgeyBvYmogPSB7fTsgfVxuICAgICAgICB0aGlzLm9iaiA9IG9iajtcbiAgICAgICAgaWYgKHRoaXMuY2FjaGUuaGFzKG9iaikpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHZhciB0ZW1wID0gX19zcHJlYWRBcnJheShbXSwgdGhpcy5fcHJvZHVjdHMsIHRydWUpO1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBfdGhpcy5zb3J0QnlLZXkodGVtcCwga2V5KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2FjaGUuc2V0KG9iaiwgdGVtcCk7XG4gICAgfTtcbiAgICBMaXN0LnByb3RvdHlwZS5zb3J0QnkgPSBmdW5jdGlvbiAoYSwgYiwga2V5KSB7XG4gICAgICAgIGlmIChhW2tleV0gPiBiW2tleV0pIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhW2tleV0gPCBiW2tleV0pIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9O1xuICAgIExpc3QucHJvdG90eXBlLnNvcnRCeUtleSA9IGZ1bmN0aW9uICh0ZW1wLCBrZXkpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGVtcC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuc29ydEJ5KGEsIGIsIGtleSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTGlzdC5wcm90b3R5cGUuZ2V0U29ydGVkSXRlbXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlLmdldCh0aGlzLm9iaik7XG4gICAgfTtcbiAgICByZXR1cm4gTGlzdDtcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBMaXN0O1xuLy90ZW1wIGNvbW8gYXJndW1lbnRvLCBtdXRhbmRvIG1lZGlhbnRlIHNvcnRcbi8vbGluZWEgMjgsIHRpcGFkbyBkZSBhcmd1bWVudG9zIGEgeSBiP1xuLy90aXBhZG8sIGRlYmVyaWEgc2VyIGFnbm9zdGljbyByZXNwZWN0byBhbCB0aXBvIGRlIG9iamV0byAocHJkdWN0SW50ZXJmYXNlKT9cbiIsInZhciBQcm9kdWN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFByb2R1Y3QoKSB7XG4gICAgfVxuICAgIFByb2R1Y3QucHJvdG90eXBlLmdldFRpdGxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgICB9O1xuICAgIFByb2R1Y3QucHJvdG90eXBlLmdldENhdGVnb3J5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYXRlZ29yeTtcbiAgICB9O1xuICAgIFByb2R1Y3QucHJvdG90eXBlLmdldFByaWNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcmljZTtcbiAgICB9O1xuICAgIFByb2R1Y3QucHJvdG90eXBlLmdldElEID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pZDtcbiAgICB9O1xuICAgIFByb2R1Y3QucHJvdG90eXBlLmdldERlc2NyaXB0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICB9O1xuICAgIFByb2R1Y3QucHJvdG90eXBlLmdldEltYWdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbWFnZTtcbiAgICB9O1xuICAgIHJldHVybiBQcm9kdWN0O1xufSgpKTtcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3Q7XG4vL0FMIFVTQVIgTEEgSU5URVJGQUNFIEJPUlJFIExPUyBfIFkgUkVGT1JNVUxFIEdFVFRFUlMsIEVTVEEgT0s/XG4vL0JPUlJFIFNFVFRFUlMgRU4gQkFTRSBBIE5vdGUgdGhhdCBhIGZpZWxkLWJhY2tlZCBnZXQvc2V0IHBhaXIgd2l0aCBubyBleHRyYSBsb2dpY1xuLy9pcyB2ZXJ5IHJhcmVseSB1c2VmdWwgaW4gSmF2YVNjcmlwdC4gSXTigJlzIGZpbmUgdG8gZXhwb3NlIHB1YmxpYyBmaWVsZHMgaWZcbi8veW91IGRvbuKAmXQgbmVlZCB0byBhZGQgYWRkaXRpb25hbCBsb2dpYyBkdXJpbmcgdGhlIGdldC9zZXQgb3BlcmF0aW9ucy5cbiIsInZhciBTb3J0T2JqZWN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNvcnRPYmplY3QoKSB7XG4gICAgfVxuICAgIHJldHVybiBTb3J0T2JqZWN0O1xufSgpKTtcbmV4cG9ydCBkZWZhdWx0IFNvcnRPYmplY3Q7XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuaW1wb3J0IFByb2R1Y3QgZnJvbSBcIi4vUHJvZHVjdFwiO1xuaW1wb3J0IENhdGFsb2dMaXN0IGZyb20gXCIuL0NhdGFsb2dcIjtcbmltcG9ydCBDYXJ0IGZyb20gXCIuL0NhcnRcIjtcbnZhciBTdG9yZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTdG9yZSgpIHtcbiAgICAgICAgdGhpcy5fY2FydCA9IG5ldyBDYXJ0KCk7XG4gICAgICAgIHRoaXMuX2NhdGFsb2cgPSBuZXcgQ2F0YWxvZ0xpc3QoKTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0b3JlLnByb3RvdHlwZSwgXCJjYXJ0XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FydDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdG9yZS5wcm90b3R5cGUsIFwiY2F0YWxvZ1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhdGFsb2c7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBTdG9yZS5wcm90b3R5cGUuc2V0Q2F0YWxvZyA9IGZ1bmN0aW9uIChmZXRjaEZ1bmN0aW9uKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBkYXRhO1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgZmV0Y2hGdW5jdGlvbigpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0ID0gbmV3IFByb2R1Y3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnRpdGxlID0gaXRlbS50aXRsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LmNhdGVnb3J5ID0gaXRlbS5jYXRlZ29yeTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LmlkID0gaXRlbS5pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnByaWNlID0gaXRlbS5wcmljZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LmRlc2NyaXB0aW9uID0gaXRlbS5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LmltYWdlID0gaXRlbS5pbWFnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5fY2F0YWxvZy5hZGRQcm9kdWN0cyhwcm9kdWN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBTdG9yZTtcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBTdG9yZTtcbi8vIGRlIHF1ZSBtb2RvIHZpbmN1bGFyIGVsIGNhdGFsb2dvIGEgbGEgY2FydGE/IGNvbW8gYXJndWVtZW50byBkZSBzdXMgbWV0b2RvcyBvIGRlIHN1IGNvbnN0cnVjdG9yP1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZldGNoUHJvZHVjdHMoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGF0YTtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgZmV0Y2goXCJodHRwczovL2Zha2VzdG9yZWFwaS5jb20vcHJvZHVjdHNcIikudGhlbihmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KV07XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBkYXRhID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZGF0YV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnV5QnRuTGlzdGVuZXJzKGRvYywgc3RvcmUpIHtcbiAgICB2YXIgYnV5QnRuID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY29tcHJhclwiKSk7XG4gICAgdmFyIGNvdW50ZXIgPSBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJjb3VudGVyXCIpO1xuICAgIGJ1eUJ0bi5mb3JFYWNoKGZ1bmN0aW9uIChidXR0b24pIHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgdmFyIHF1YW50aXR5SW5wdXQgPSB0YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgICAgICAgIGlmICghcXVhbnRpdHlJbnB1dC52YWx1ZSkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiRWxpZ2UgY3XDoW50YXMgcHJlbmRhcyBxdWllcmVzIGNvbXByYXJcIik7IC8vY2FtYmlhciBwb3IgZXN0aWxvIGVycm9yXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHByb2R1Y3RJRCA9IE51bWJlcih0YXJnZXQuZGF0YXNldC5pbmRleCk7XG4gICAgICAgICAgICB2YXIgcHJvZHVjdCA9IHN0b3JlLmNhdGFsb2cuZ2V0UHJvZHVjdChwcm9kdWN0SUQpO1xuICAgICAgICAgICAgc3RvcmUuY2FydC5hZGRQcm9kdWN0KHByb2R1Y3QsIE51bWJlcihxdWFudGl0eUlucHV0LnZhbHVlKSk7XG4gICAgICAgICAgICBzdG9yZS5jYXJ0LnNldENvdW50ZXIoKTtcbiAgICAgICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBIYXNoQ2hhbmdlRXZlbnQoXCJoYXNoY2hhbmdlXCIpKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYXRlZ29yeVNlbGVjdG9yc0xpc3RlbmVycyhkb2MsIGFjdGl2ZUNhdGVnb3JpZXMpIHtcbiAgICB2YXIgY2F0ZWdvcnlTZWxlY3RvcnMgPSBBcnJheS5mcm9tKGRvYy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2F0ZWdvcnktc2VsZWN0b3JcIikpO1xuICAgIGNhdGVnb3J5U2VsZWN0b3JzLmZvckVhY2goZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiBzZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgY2hlY2tib3ggPSBlLnRhcmdldDtcbiAgICAgICAgICAgIGFjdGl2ZUNhdGVnb3JpZXMuc2V0Q2F0ZWdvcmllcyhjaGVja2JveC52YWx1ZSk7XG4gICAgICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgSGFzaENoYW5nZUV2ZW50KFwiaGFzaGNoYW5nZVwiKSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVsZXRlQnRuTGlzdGVuZXJzKGRvYywgY2FydCkge1xuICAgIHZhciBidXR0b25zID0gZG9jLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjYXJ0LXJlbW92ZVwiKTtcbiAgICBBcnJheS5mcm9tKGJ1dHRvbnMpLmZvckVhY2goZnVuY3Rpb24gKGJ1dHRvbikge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgY291bnRlciA9IGRvYy5nZXRFbGVtZW50QnlJZChcImNvdW50ZXJcIik7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICAvL2NvbW8gaGFnbyBwYXJhIGV2aXRhciBQcm9wZXJ0eSAnZGF0YScgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSAnSFRNTEJ1dHRvbkVsZW1lbnQnLiBzaSBubyBwb25nbyBhbnkgZW4gdGFyZ2V0P1xuICAgICAgICAgICAgY2FydC5yZW1vdmVQcm9kdWN0KHRhcmdldC5kYXRhc2V0LmlkKTtcbiAgICAgICAgICAgIGNhcnQuc2V0Q291bnRlcigpO1xuICAgICAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEhhc2hDaGFuZ2VFdmVudChcImhhc2hjaGFuZ2VcIikpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRpYWxDYXRlZ29yeUxpc3RlbmVycyhkb2MsIGFjdGl2ZUNhdGVnb3JpZXMpIHtcbiAgICAvL2FjdGl2ZUNhdGVnb3JpZXMucmVzZXRTdGF0ZSgpO1xuICAgIHZhciBjYXRlZ29yeVNlbGVjdG9ycyA9IEFycmF5LmZyb20oZG9jLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjYXRlZ29yeS1zZWxlY3RvclwiKSk7XG4gICAgY2F0ZWdvcnlTZWxlY3RvcnMuZm9yRWFjaChmdW5jdGlvbiAoYnV0dG9uKSB7XG4gICAgICAgIHJldHVybiBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGFjdGl2ZUNhdGVnb3JpZXMuc2V0Q2F0ZWdvcmllcyhidXR0b24udmFsdWUpO1xuICAgICAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEhhc2hDaGFuZ2VFdmVudChcImhhc2hjaGFuZ2VcIikpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCBTb3J0T2JqZWN0IGZyb20gXCIuLi9lbnRpdGllcy9Tb3J0T2JqZWN0XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzb3J0QnRuTGlzdGVuZXJzKGRvYywgY2F0YWxvZykge1xuICAgIHZhciBzb3J0Q2hlY2sgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzb3J0LWNoZWNrXCIpKTtcbiAgICB2YXIgc29ydEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydFwiKTtcbiAgICBzb3J0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzb3J0T2JqZWN0ID0gbmV3IFNvcnRPYmplY3QoKTtcbiAgICAgICAgc29ydENoZWNrLmZvckVhY2goZnVuY3Rpb24gKGJveCkge1xuICAgICAgICAgICAgdmFyIGtleSA9IGJveC52YWx1ZTtcbiAgICAgICAgICAgIGlmIChib3guY2hlY2tlZClcbiAgICAgICAgICAgICAgICBzb3J0T2JqZWN0W2tleV0gPSAxO1xuICAgICAgICB9KTtcbiAgICAgICAgY2F0YWxvZy5zZXRTb3J0aW5nKHNvcnRPYmplY3QpO1xuICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgSGFzaENoYW5nZUV2ZW50KFwiaGFzaGNoYW5nZVwiKSk7XG4gICAgfSk7XG59XG4vL2Rlc3B1ZXMgZGViZXJhIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBIYXNoQ2hhbmdlRXZlbnQoXCJoYXNoY2hhbmdlXCIpKTsgbyBpbXBvcnRhciBtZXRvZG8gcmVuZGVyP1xuLy9jbGFzZSBzb3J0T2JqZWN0IGVuIGJhc2UgYSBwcm9kdWN0PyBvIGludGVyZmF6PyBvIHR5cGU/XG4iLCJpbXBvcnQgSG9tZVBhZ2UgZnJvbSBcIi4uL3BhZ2VzL0hvbWVQYWdlXCI7XG5pbXBvcnQgU2hvcFBhZ2UgZnJvbSBcIi4uL3BhZ2VzL1Nob3BQYWdlXCI7XG5pbXBvcnQgdXNlUGFyYW1zIGZyb20gXCIuL3VzZVBhcmFtc1wiO1xuaW1wb3J0IERldGFpbHNQYWdlIGZyb20gXCIuLi9wYWdlcy9EZXRhaWxzUGFnZVwiO1xuaW1wb3J0IENhcnRQYWdlIGZyb20gXCIuLi9wYWdlcy9DYXJ0UGFnZVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm91dGVzQ2FsbCh1cmwpIHtcbiAgICB2YXIgcGF0aCA9IHVzZVBhcmFtcygpLnBhdGg7XG4gICAgdmFyIHJvdXRlcyA9IHtcbiAgICAgICAgXCJcIjogSG9tZVBhZ2UsXG4gICAgICAgIFwiIy9cIjogSG9tZVBhZ2UsXG4gICAgICAgIFwiIy9zaG9wXCI6IFNob3BQYWdlLFxuICAgICAgICBcIiMvZGV0YWlsc1wiOiBEZXRhaWxzUGFnZSxcbiAgICAgICAgXCIjL2NhcnRcIjogQ2FydFBhZ2UsXG4gICAgICAgIC8vIFwiLzQwNFwiOiAoKSA9PiBlcnJvclBhZ2UoKSxcbiAgICB9O1xuICAgIC8vIGlmICghcm91dGVzW3BhdGhdKSB7XG4gICAgLy8gXHRyZXR1cm4gcm91dGVzW1wiLzQwNFwiXTtcbiAgICAvLyB9XG4gICAgcmV0dXJuIHJvdXRlc1twYXRoXTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVBhcmFtcygpIHtcbiAgICB2YXIgdXJsID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XG4gICAgdmFyIHNwbGl0ZWQgPSB1cmwuc3BsaXQoXCIvXCIpO1xuICAgIHZhciBwcm9kdWN0SUQgPSBzcGxpdGVkWzJdO1xuICAgIHZhciBwYXRoID0gc3BsaXRlZC5zbGljZSgwLCAyKS5qb2luKFwiL1wiKTtcbiAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBwcm9kdWN0SUQ6IHByb2R1Y3RJRCB9O1xufVxuIiwiaW1wb3J0IGNhcnRDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2FydENvbXBvbmVudFwiO1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi4vYXBwXCI7XG5pbXBvcnQgYXBwZW5kUHJvZHVjdCBmcm9tIFwiLi4vZG9tL2FwcGVuZFByb2R1Y3RcIjtcbmltcG9ydCBjYXJ0SXRlbVZpZXcgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2FydEl0ZW1WaWV3XCI7XG5pbXBvcnQgdXBkYXRlQ2FydENvdW50ZXIgZnJvbSBcIi4uL2RvbS91cGRhdGVDYXJ0Q291bnRlclwiO1xuaW1wb3J0IGRlbGV0ZUJ0bkxpc3RlbmVycyBmcm9tIFwiLi4vbGlzdGVuZXJzL2RlbGV0ZUJ0bkxpc3RlcnNcIjtcbnZhciBDYXJ0UGFnZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDYXJ0UGFnZSgpIHtcbiAgICB9XG4gICAgQ2FydFBhZ2UucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIGMuaW5uZXJIVE1MID0gY2FydENvbXBvbmVudCgpO1xuICAgIH07XG4gICAgQ2FydFBhZ2UucHJvdG90eXBlLnBhZ2VTY3JpcHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN0b3JlLmNhcnQucHJvZHVjdHMuZm9yRWFjaChmdW5jdGlvbiAocHJvZHVjdCkge1xuICAgICAgICAgICAgYXBwZW5kUHJvZHVjdChkb2N1bWVudCwgcHJvZHVjdCwgY2FydEl0ZW1WaWV3KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRlbGV0ZUJ0bkxpc3RlbmVycyhkb2N1bWVudCwgc3RvcmUuY2FydCk7XG4gICAgICAgIHVwZGF0ZUNhcnRDb3VudGVyKGRvY3VtZW50LCBzdG9yZSk7XG4gICAgfTtcbiAgICByZXR1cm4gQ2FydFBhZ2U7XG59KCkpO1xuZXhwb3J0IGRlZmF1bHQgQ2FydFBhZ2U7XG4iLCJpbXBvcnQgZGV0YWlsc0NvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9kZXRhaWxzQ29tcG9uZW50XCI7XG5pbXBvcnQgdXNlUGFyYW1zIGZyb20gXCIuLi9sb2dpYy91c2VQYXJhbXNcIjtcbmltcG9ydCBidXlCdG5MaXN0ZW5lcnMgZnJvbSBcIi4uL2xpc3RlbmVycy9idXlCdG5MaXN0ZW5lcnNcIjtcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIi4uL2FwcFwiO1xuaW1wb3J0IHVwZGF0ZUNhcnRDb3VudGVyIGZyb20gXCIuLi9kb20vdXBkYXRlQ2FydENvdW50ZXJcIjtcbnZhciBEZXRhaWxzUGFnZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEZXRhaWxzUGFnZSgpIHtcbiAgICB9XG4gICAgRGV0YWlsc1BhZ2UucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIHZhciBwcm9kdWN0SUQgPSB1c2VQYXJhbXMoKS5wcm9kdWN0SUQ7XG4gICAgICAgIGMuaW5uZXJIVE1MID0gZGV0YWlsc0NvbXBvbmVudChwcm9kdWN0SUQsIHN0b3JlLmNhdGFsb2cucHJvZHVjdHMpO1xuICAgIH07XG4gICAgRGV0YWlsc1BhZ2UucHJvdG90eXBlLnBhZ2VTY3JpcHQgPSBmdW5jdGlvbiAoZCkge1xuICAgICAgICBidXlCdG5MaXN0ZW5lcnMoZG9jdW1lbnQsIHN0b3JlKTtcbiAgICAgICAgdXBkYXRlQ2FydENvdW50ZXIoZG9jdW1lbnQsIHN0b3JlKTtcbiAgICB9O1xuICAgIHJldHVybiBEZXRhaWxzUGFnZTtcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBEZXRhaWxzUGFnZTtcbiIsImltcG9ydCBob21lQ29tcG9uZW50IGZyb20gXCIuLi9jb21wb25lbnRzL2hvbWVDb21wb25lbnRcIjtcbmltcG9ydCB1cGRhdGVDYXJ0Q291bnRlciBmcm9tIFwiLi4vZG9tL3VwZGF0ZUNhcnRDb3VudGVyXCI7XG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCIuLi9hcHBcIjtcbmltcG9ydCBpbml0aWFsQ2F0ZWdvcnlMaXN0ZW5lcnMgZnJvbSBcIi4uL2xpc3RlbmVycy9pbml0aWFsQ2F0ZWdvcnlMaXN0ZW5lcnNcIjtcbnZhciBIb21lUGFnZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBIb21lUGFnZSgpIHtcbiAgICB9XG4gICAgSG9tZVBhZ2UucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIGMuaW5uZXJIVE1MID0gaG9tZUNvbXBvbmVudCgpO1xuICAgIH07XG4gICAgSG9tZVBhZ2UucHJvdG90eXBlLnBhZ2VTY3JpcHQgPSBmdW5jdGlvbiAoZCkge1xuICAgICAgICB2YXIgdmVyUHJvZHVjdG9zID0gQXJyYXkuZnJvbShkLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ2ZXItcHJvZHVjdG9zXCIpKTtcbiAgICAgICAgdmFyIGhvdmVySXRlbXMgPSBkLmdldEVsZW1lbnRCeUlkKFwidG8taG92ZXJcIik7XG4gICAgICAgIGhvdmVySXRlbXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmVyUHJvZHVjdG9zLmZvckVhY2goZnVuY3Rpb24gKGJ1dHRvbikgeyByZXR1cm4gYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpOyB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGhvdmVySXRlbXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmVyUHJvZHVjdG9zLmZvckVhY2goZnVuY3Rpb24gKGJ1dHRvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGluaXRpYWxDYXRlZ29yeUxpc3RlbmVycyhkb2N1bWVudCwgc3RvcmUuY2F0YWxvZy5hY3RpdmVDYXRlZ29yaWVzKTtcbiAgICAgICAgdXBkYXRlQ2FydENvdW50ZXIoZG9jdW1lbnQsIHN0b3JlKTtcbiAgICB9O1xuICAgIHJldHVybiBIb21lUGFnZTtcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiIsImltcG9ydCBzaG9wQ29tcG9uZW50IGZyb20gXCIuLi9jb21wb25lbnRzL3Nob3BDb21wb25lbnRcIjtcbmltcG9ydCBidXlCdG5MaXN0ZW5lcnMgZnJvbSBcIi4uL2xpc3RlbmVycy9idXlCdG5MaXN0ZW5lcnNcIjtcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIi4uL2FwcFwiO1xuaW1wb3J0IHVwZGF0ZUNhcnRDb3VudGVyIGZyb20gXCIuLi9kb20vdXBkYXRlQ2FydENvdW50ZXJcIjtcbmltcG9ydCByZW5kZXJMaXN0IGZyb20gXCIuLi9kb20vcmVuZGVyTGlzdFwiO1xuaW1wb3J0IHNvcnRCdG5MaXN0ZW5lcnMgZnJvbSBcIi4uL2xpc3RlbmVycy9zb3J0QnRuTGlzdGVuZXJzXCI7XG5pbXBvcnQgdXBkYXRlQ2F0ZWdvcmllc05hdiBmcm9tIFwiLi4vZG9tL3VwZGF0ZUNhdGVnb3JpZXNOYXZcIjtcbmltcG9ydCBjYXRlZ29yeVNlbGVjdG9yc0xpc3RlbmVycyBmcm9tIFwiLi4vbGlzdGVuZXJzL2NhdGVnb3J5U2VsZWN0b3JzTGlzdGVuZXJzXCI7XG52YXIgU2hvcFBhZ2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2hvcFBhZ2UoKSB7XG4gICAgfVxuICAgIFNob3BQYWdlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICBjLmlubmVySFRNTCA9IHNob3BDb21wb25lbnQoKTtcbiAgICB9O1xuICAgIFNob3BQYWdlLnByb3RvdHlwZS5wYWdlU2NyaXB0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZW5kZXJMaXN0KHN0b3JlLmNhdGFsb2cpO1xuICAgICAgICBidXlCdG5MaXN0ZW5lcnMoZG9jdW1lbnQsIHN0b3JlKTtcbiAgICAgICAgc29ydEJ0bkxpc3RlbmVycyhkb2N1bWVudCwgc3RvcmUuY2F0YWxvZyk7XG4gICAgICAgIGNhdGVnb3J5U2VsZWN0b3JzTGlzdGVuZXJzKGRvY3VtZW50LCBzdG9yZS5jYXRhbG9nLmFjdGl2ZUNhdGVnb3JpZXMpO1xuICAgICAgICB1cGRhdGVDYXRlZ29yaWVzTmF2KGRvY3VtZW50LCBzdG9yZS5jYXRhbG9nLmFjdGl2ZUNhdGVnb3JpZXMpO1xuICAgICAgICB1cGRhdGVDYXJ0Q291bnRlcihkb2N1bWVudCwgc3RvcmUpO1xuICAgIH07XG4gICAgcmV0dXJuIFNob3BQYWdlO1xufSgpKTtcbmV4cG9ydCBkZWZhdWx0IFNob3BQYWdlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9hcHAudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=