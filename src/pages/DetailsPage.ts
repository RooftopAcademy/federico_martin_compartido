import detailsComponent from "../components/detailsComponent";
import useParams from "../useParams";
import PageInterface from "./PageInterface";

class DetailsPage implements PageInterface {
    render(c : HTMLElement) : void {
        const params = useParams()
        c.innerHTML = detailsComponent(params[2], [])
    }

    registerEvents(d : Document): void {}
}

export default DetailsPage