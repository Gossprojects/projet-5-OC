class ItemManager extends GameComponent {

	constructor(app) {

		super(app);

		this.__items = [];
	}

	init() {
		this.getAll();
		// JSONless WIP
		var research = new Item('srch', 'workMax', '+', 3);
		var format = new Item('frmt', 'workInit', '+', 2);
		var interaction = new Item('intcn', 'postCld', '*', 0.6);

		this.__items.push(research, format, interaction);
	}

	get items() {
		return this.__items;
	}
}