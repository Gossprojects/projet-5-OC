class ItemController extends GameComponent {

	constructor(app) {

		super(app);
	}

	activate(item) {
		// receives item name as string, runs its effects on Player and records 1 use

		var activeItem = this.getActive(item);

		if(activeItem.operator === '+') {
			this.__app.__player[activeItem.target] = this.__app.__player[activeItem.target] + activeItem.amount;
		}
		if(activeItem.operator === '-') {
			this.__app.__player[activeItem.target] = this.__app.__player[activeItem.target] - activeItem.amount;
		}
		if(activeItem.operator === '*'){
			this.__app.__player[activeItem.target] = this.__app.__player[activeItem.target] * activeItem.amount;
		}

		this.__app.__player[activeItem.name]++;
	}

	getActive(item) {
		// receives item name as string and gets item from ItemManager

		var items = this.__app.__itemManager.items;

		var activeItem = items.find(function(elt) {
			return elt.name === item;
		});
		
		return activeItem;
	}
}