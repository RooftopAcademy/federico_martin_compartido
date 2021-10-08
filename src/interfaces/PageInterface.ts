export default interface PageInterface {
	render(c: HTMLElement): void;

	pageScript(d: Document): void;
}
