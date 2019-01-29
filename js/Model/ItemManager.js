class ItemManager {

	constructor() {

		this.__fileName = 'items';
		this.__sheetName = 'items';
		
		this.__items = [];
	}

	init() {
		return new Promise((resolve, reject) => { 
			
			$.getJSON('json/' + this.__fileName + '.json', items => {

				items[this.__sheetName].map(item => this.__items.push(new Item(item.name, item.target, item.operator, item.amount)));

				resolve();
			})
				.fail(() => reject(new Error('$.getJson() failed in ItemManager : could\'nt load ' + this.__fileName)));
		});
	}

	get items() {
		return this.__items;
	}
}