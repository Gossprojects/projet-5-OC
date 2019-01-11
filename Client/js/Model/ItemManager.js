class ItemManager extends GameComponent {

	constructor(app) {

		super(app);

		this.__items = [];
	}

	init() {
		var self = this, research, format, interaction;

		$.getJSON('json/items.json', function(items) {
			
			var srch = items['items'].find(function(item) {
				return item.name == "srch";
			});
			research = new Item(srch.name, srch.target, srch.operator, srch.amount);
			console.log(research);

			var frmt = items['items'].find(function(item) {
				return item.name == "frmt";
			});
			format = new Item(frmt.name, frmt.target, frmt.operator, frmt.amount);

			var intcn = items['items'].find(function(item) {
				return item.name == "intcn";
			});
			interaction = new Item(intcn.name, intcn.target, intcn.operator, intcn.amount);

			self.__items.push(research, format, interaction);
        });
	}

	get items() {
		return this.__items;
	}
}