class EnergyManager extends GameComponent {

	constructor(app) {

		super(app);

		this.__prices = [5, 10, 25, 50, 250, 500, 5000];
	}

	init() {
		// get energy JSON file
		// turn JSON file into array & store it in this.__levels
	}

	get prices() {
		return this.__prices;
	}
}