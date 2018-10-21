class Ledger extends ApplicationComponent {

	constructor(app, player) {
		
		super(app);

		this.__player = player;
		this.__activeItems = [];

		// Placeholders
		this.__lastEventID = -1;
		this.__playerChoicesID = [];
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

	get player() {
		return this.__player;
	}
	get activeItems() {
		return this.__activeItems;
	}


	

	// Ecrite pour stocker les propriétés de Player dynamiquement, plus nécessaire si on stocke {player}
	update(criteria) {
		if(typeof criteria == 'string') {
			var method = 'update' + criteria.charAt(0).toUpperCase() + criteria.substr(1);
			this[method]();
		}
	}
	// Placeholders
	updateLastEventID() {

	}

	updatePlayerChoicesID() {

	}
}