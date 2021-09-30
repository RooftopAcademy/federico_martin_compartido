import buyBtnListeners from "../buyBtnListeners";
import Store from "../entities/Store";

export default function detailsLogic(store: Store): void {
	buyBtnListeners(store);
}

//OK usar nombre de parametro igual que la variable que es argumento?
