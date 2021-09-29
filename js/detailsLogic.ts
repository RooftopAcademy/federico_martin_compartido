import eventListeners from "../src/EventListeners";
import { store } from "./app";

export default function detailsLogic(): void {
	eventListeners(store);
}
