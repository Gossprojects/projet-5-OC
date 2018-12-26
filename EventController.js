class EventController extends ApplicationComponent {

	// Refreshes at init rate (ms) to stock attention lv
	// Dependign on attention lv :
	// - Show items in shop
	// 

	constructor(app) {

		super(app);

		this.__currentLv = 0; // attention lv
		this.__lvTable = [0, 5, 10, 50, 100, 1000]; // last value is 'infinite', not a real lv
		this.__sentItems = []; // records items shown in shop once

		this.__refresh = ''; // hydrated at init
	}

	init(itv) {
		var self = this;

		this.__refresh = setInterval(function() {
			self.update();
		}, itv);
	}

	update() {
		this.getCurrentLv();
		this.__app.__UIController.update();
	}

	getCurrentLv() {
		var newLv;
		this.checkIfItem();
		// loops through attention lv table to get current attention lv
		for(var i = 0; i <= this.__lvTable.length; i++) {
			if(this.__app.__player.attention >= this.__lvTable[i] 
			&& this.__app.__player.attention < this.__lvTable[i + 1]) {
				// store current lv in var
				newLv = i;
				break;
			}
		}

		if(this.__currentLv < newLv) {
		// if needed, update currentLv, check for new items & update shop UI
			this.__currentLv = newLv;
			this.checkIfItem();
			this.__app.__UIController.updateShop();
		}
	}

	checkIfItem() {
		// loops through item table to see if a new one must be shown
		var items = this.__app.__shopManager.items;
		var plyrInv = this.__app.__player.inventory;
		var wasShown;

		for(var i = 0; i < items.length; i++) {
		// loop through all items
		wasShown = false;

			if(this.__currentLv >= items[i].level) {
			// if current lv is enough to show item

				for(var y = 0; y < this.__sentItems.length; y++) {
				// loop through already sent items
					if(this.__sentItems[y].name === items[i].name) {
					// if item is in there, stop
						wasShown = true;
					}
				}
				if(plyrInv.length === 0 && wasShown === false) {
				// else & player inventory is empty (early game)
					if(!items[i].prev) {
						this.__sentItems.push(items[i]);
						this.__app.__shopController.show(items[i]);
						this.__app.__UIController.updateShop();
					}
				}
				else if(plyrInv.length > 0 && wasShown === false) {
				// else & player inventory is not empty
					if(!items[i].prev) {
					// if no previous item is required to show item
						this.__sentItems.push(items[i]);
						this.__app.__shopController.show(items[i]);
						this.__app.__UIController.updateShop();
					}
					else {
					// otherwise
						for(var z = 0; z < plyrInv.length; z++)	 {
						// loop through inventory
							if(plyrInv[z].id === items[i].prev) {
							// if player has required item for new item
								this.__sentItems.push(items[i]);
								this.__app.__shopController.show(items[i]);
								this.__app.__UIController.updateShop();
								console.log(items[i]);
							}
						}
					}
				}
			}
		}
	}

	get currentLv() {
		return this.__currentLv;
	}

	get lvTable() {
		return this.__lvTable;
	}
}