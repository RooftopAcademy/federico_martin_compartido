import buyBtnListeners from "../src/buyBtnListeners";
import { store } from "./app";

export default function detailsLogic(): void {
	buyBtnListeners(store);
}
