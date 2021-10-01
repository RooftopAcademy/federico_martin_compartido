export default interface PageInterface {
	render(c: HTMLElement): void;

	registerEvents(d: Document): void;
}
