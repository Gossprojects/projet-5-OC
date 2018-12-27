class GameController extends GameComponent {
	// USES JQUERY
	constructor(app) {

		super(app);
	}

	post() { // Post stuff to gain attention
		var self = this;

		if(!$(this.__app.__UIController.post).hasClass("onCooldown")) {
			// If Post is NOT on cld

			// Increase att by workStr and reset Work
			this.__app.__player.increaseAttention(this.__app.__player.__workStr);

			this.__app.__player.workStr = this.__app.__player.workInit;
			this.__app.__player.workCount = 0;

			// Set Post on cooldown
			this.__app.__UIController.setCooldown(this.__app.__UIController.post, this.__app.__player.__postCld);

			// Print feedback
			this.__app.__timeline.newLine(this.__app.__linesManager.getAttLineOf(this.__app.__player.currentLv));

			// After one second, print flavour text
			var timeout = setTimeout(function() {
				self.__app.__timeline.newLine(self.__app.__linesController.getItemLine());
			}, 1500);
		}
	}

	work() { // Work to increase next Post potential
		if(!$(this.__app.__UIController.work).hasClass("onCooldown")) {
			// If Work is NOT on cooldown
			
			// Increase workStr by workMult, count 1 work and check if workMax has been reached
			this.__app.__player.__workStr = this.__app.__player.__workStr + this.__app.__player.__workMult;
			
			this.__app.__player.__workCount++;

			if(this.__app.__player.__workCount >= this.__app.__player.__workMax) {
				// if workMax was reached, set Work on cooldown
				this.__app.__UIController.disable(this.__app.__UIController.work);
			}
		}
	}

	convert() { // Turn attention into energy (= passing a level)

		// check if current lv (-1 bc starts at 1) is > to Player energyEarned
		if((this.__app.__player.currentLv - 1) > this.__app.__player.energyEarned) {

			// Price is value from energyEarned index in prices array
			var price = this.__app.__energyManager.prices[this.__app.__player.energyEarned];
			
			this.__app.__player.decreaseAttention(price);
			this.__app.__player.energy++;
			this.__app.__player.energyEarned++;
		}
		else { // Player has not yet passed a lv
			this.__app.__timeline.newLine(this.__app.__linesController.getGodLine('notEnoughAttention'));
		}
	}

	buy(item) { // Buy stuff with energy
		// check if Player has energy
		if(this.__app.__player.energy > 0) {

			this.__app.__player.energy--;
			this.__app.__player.energySpent++;
			this.__app.__itemController.activate(item);
		}

		else {
			this.__app.__timeline.newLine(this.__app.__linesController.getGodLine('notEnoughEnergy'));
		}
	}
}
