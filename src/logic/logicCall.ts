import homeLogic from "./homeLogic";
import shopLogic from "./shopLogic";
import detailsLogic from "./detailsLogic";
import Store from "../Store";

export default function logicCall(
	section: string,
	store: Store,
	doc: Document
) {
	const logic: any = {
		"#/": () => homeLogic(doc),
		"#/shop": () => shopLogic(store),
		"#/details": () => detailsLogic(store),
		//	"/404": errorPageLogic,
	};

	if (!logic[section]) {
		logic["/404"]();
	}

	logic[section]();
}
