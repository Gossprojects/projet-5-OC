class GameController extends ApplicationComponent {
	// USES JQUERY
	constructor(app) {

		super(app);
	}

	post() {
		if(!$(this.__app.__UIController.post).hasClass("onCooldown")) {

			// If post is not on cld, increase att by workStr and set cld
			this.__app.__player.increaseAttention(this.__app.__player.__workStr);
			this.__app.__player.workStr = this.__app.__player.workInit;
			this.__app.__UIController.setCooldown(this.__app.__UIController.post, this.__app.__player.__postCld);

			// Also print feedback in timeline
			this.__app.__timeline.newLine(this.__app.__linesManager.getLineOf(this.__app.__eventController.currentLv));
		}
	}

	work() {
		if(!$(this.__app.__UIController.work).hasClass("onCooldown")) {

			this.__app.__player.__workStr = this.__app.__player.__workStr + this.__app.__player.__workMult;
		}
	}

	buy(item) {
		var self = this;

		for(var i = 0; i < this.__app.__shopController.__inShop.length; i++) {

			if(item.name == this.__app.__shopController.__inShop[i].name) {
			// if item is in shop
				if(item.className === "modif") { 
				// if item is Modifier, activate & store in inventory
					this.__app.__shopController.activateModif(item);
					this.__app.__player.inventory.push(item);
				}
				else if(item.className === "empl") {
				// if item is employee, activate & store in inventory
					this.__app.__shopController.activateEmployee(item);
					this.__app.__player.inventory.push(item);
				}
				// if item has lines, activate them after low delay
				if(item.hasLines) {
					setTimeout(function() {
						self.__app.__shopController.activateItemLines(item);
					}, item.lowFreq * 1000);
				}
				// then delete from shop, check for new items & update UI
				this.__app.__shopController.__inShop.splice(i, 1);
				this.__app.__eventController.checkIfItem();
				this.__app.__UIController.updateShop();
			}
		}
	} 
}

