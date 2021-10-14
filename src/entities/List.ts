import ProductInterface from "../interfaces/ProductInterface";

export default abstract class List {
	obj: {} = {};
	cache: Map<{}, ProductInterface[]> = new Map();
	_products!: ProductInterface[];

	setSorting(obj = {}) {
		this.obj = obj;

		if (this.cache.has(obj)) return;

		let keys = Object.keys(obj);

		const temp = [...this._products];

		keys.forEach((key) => {
			this.sortByKey(temp, key);
		});

		this.cache.set(obj, temp);
	}

	sortBy(a: any, b: any, key: string) {
		if (a[key] > b[key]) {
			return 1;
		}
		if (a[key] < b[key]) {
			return -1;
		}
		return 0;
	}

	sortByKey(temp: ProductInterface[], key: string) {
		temp.sort((a, b) => {
			return this.sortBy(a, b, key);
		});
	}

	getSortedItems() {
		return this.cache.get(this.obj);
	}
}

//temp como argumento, mutando mediante sort
//linea 28, tipado de argumentos a y b?
//tipado, deberia ser agnostico respecto al tipo de objeto (prductInterfase)?
