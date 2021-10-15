export default class ActiveCategories {
	_state!: {
		[category: string]: boolean;
	};

	constructor() {
		this._state = {
			electronics: false,
			jewelery: false,
			"men's clothing": false,
			"women's clothing": false,
		};
	}

	get state() {
		return this._state;
	}

	setCategories(category: string) {
		this.state[category]
			? (this.state[category] = false)
			: (this.state[category] = true);
	}

	resetState() {
		for (const category in this.state) {
			this.state[category] = false;
		}
	}
}
