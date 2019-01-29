class ItemController extends GameComponent {

	constructor(app) {

		super(app);
	}

	/**
	 * @function activate
	 * Runs item effectson Player and records 1 use
	 * @param {string} item name
	 */
	activate(newItem) {

		let item = this.getActive(newItem);

		if(item.operator === '+') {
			this.__app.__player[item.target] = this.__app.__player[item.target] + item.amount;
		}
		if(item.operator === '-') {
			this.__app.__player[item.target] = this.__app.__player[item.target] - item.amount;
		}
		if(item.operator === '*'){
			this.__app.__player[item.target] = this.__app.__player[item.target] * item.amount;
		}
		if(item.operator === '/'){
			this.__app.__player[item.target] = this.__app.__player[item.target] / item.amount;
		}

		this.__app.__player[item.name]++;

	}

	getActive(item) {

		try {
			return this.__app.__itemManager.items.find(elt => elt.name === item);
		}
		catch(err) {

			console.log('ItemController couldn\'t find ' + item + ' in ItemManager.items');
		}
	}
}