import headerComponent from "./headerComponent";
import footerComponent from "./footerComponent";
import ProductInterface from "../interfaces/ProductInterface";

export default function cartComponent(
	cartList: { product: ProductInterface; quantity: number }[]
): string {
	return `
			${headerComponent()}

			<div>${cartList}</div>

			${footerComponent()}
        `;
}
