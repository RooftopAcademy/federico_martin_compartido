"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Store_1 = __importDefault(require("../src/Store"));
const appendProduct_1 = __importDefault(require("../src/appendProduct"));
const store = new Store_1.default();
const productsContainer = document.getElementById("products-container");
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield store.setCatalog();
    store.catalog.products.forEach((product) => __awaiter(void 0, void 0, void 0, function* () {
        (0, appendProduct_1.default)(productsContainer, product);
    }));
    const comprarBtn = Array.from(document.getElementsByClassName("comprar"));
    comprarBtn.forEach((button) => {
        button.addEventListener("click", (e) => {
            if (e.target.previousElementSibling.value == 0) {
                alert("Elige cuántas prendas quieres comprar");
            }
            else {
                store.cart.addProduct = e.target.previousElementSibling.value;
                if (counter) {
                    counter.innerHTML = store.cart.counter;
                }
            }
        });
    });
}))();
const counter = document.getElementById("counter");
