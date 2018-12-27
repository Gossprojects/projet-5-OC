class ItemManager extends GameComponent {

	constructor(app) {

		super(app);

		this.__items = [];
	}

	init() {
		this.getAll();
		// JSONless WIP
		var research = new Item('srch', 'workMax', '+', 3);
		var format = new Item('frmt', 'workInit', '*', 2);
		var interaction = new Item('intcn', 'postCld', '-', 0.5);

		this.__items.push(research, format, interaction);
	}

	getAll() {
		var jsonItems = this.getItemsFromJson();
		// turns jsonElts into js array
		// fills in __modifiers & __employees
		// merges both into __items
	}
	
	getItemsFromJson() {
		// ajax call
		// returns json array
	}

	createItem(modif) {
		// creates JS Item from JSON Item
		var item = new Item(spec.att, spec.val, spec.priceType, spec.price, spec.timer);
		
		return item;
	}

	get items() {
		return this.__items;
	}
}