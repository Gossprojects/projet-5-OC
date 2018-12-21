class Ledger extends ApplicationComponent {

	constructor(app, player) {
		
		super(app);

		this.__player = player;
		this.__activeItems = [];
		this.__activePlaces = [];
	}

	activeItemsNames() {
		var activeItems = [];

		for(var i = 0; i < this.__activeItems.length; i++) {
			var itemName = this.__activeItems[i].name;
			activeItems.push(itemName);
		}

		return activeItems;
	}

	set activeItems(newArray) {
		this.__activeItems = newArray;
	}

	set activePlaces(newArray) {
		this.__activePlaces = newArray;
	}

	get player() {
		return this.__player;
	}

	get activeItems() {
		return this.__activeItems;
	}

	get activePlaces() {
		return this.__activePlaces;
	}


	// Ecrite pour stocker les propriétés de Player dynamiquement, plus nécessaire en stockant {player}
	update(criteria) {
		if(typeof criteria == 'string') {
			var method = 'update' + criteria.charAt(0).toUpperCase() + criteria.substr(1);
			this[method]();
		}
	}
}