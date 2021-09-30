interface PageInterface {
    render(c : HTMLElement) : void

    registerEvents(d : Document): void
}

export default PageInterface