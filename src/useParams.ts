export default function useParams() {
    const url = window.location.hash
	const splited = url.split("/");
	const productID = splited[2];
	return splited.slice(0, 2).join("/");
}
