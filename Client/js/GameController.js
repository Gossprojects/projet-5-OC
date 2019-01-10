class GameController extends GameComponent {
	// USES JQUERY
	constructor(app) {

		super(app);
	}

	post() { // Post stuff to gain attention

		if(!$(this.__app.__UIController.post).hasClass("onCooldown")) {
			// If Post is NOT on cld

			// Increase att and HP by workStr 
			this.__app.__player.attention += this.__app.__player.__workStr;
			this.__app.__player.health += this.__app.__player.__workStr;

			// Reset Work
			this.__app.__player.workStr = this.__app.__player.workInit;
			this.__app.__player.workCount = 0;

			// Set Post on cooldown
			this.__app.__UIController.setCooldown(this.__app.__UIController.post, this.__app.__player.__postCld);
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

	hit(dmg) { // Handle what happens to {Player} during a hit

		this.__app.__player.health -= dmg;

		if(this.__app.__player.health <= 0) {
			this.__app.over = true;
		}
		console.log(dmg);
		console.log(this.__app.__speed + ' sec/ /' + this.__app.__accRate + ' %');
	}

	convert() { // Turn attention into energy (= passing a level)

		// check if current lv (-1 bc starts at 1) is > to Player energyEarned
		if((this.__app.__player.currentLv - 1) > this.__app.__player.energyEarned) {

			// Price is value from energyEarned index in prices array
			var price = this.__app.__energyManager.prices[this.__app.__player.energyEarned];
			
			this.__app.__player.attention -= price;
			this.__app.__player.energy++;
			this.__app.__player.energyEarned++;

			// Switch Player.hasConverted so UI updates next goal
			this.__app.__player.hasConverted = true;
		}
		else if(this.__app.__timeline.onScreen[0] != this.__app.__linesController.getGodLine('notEnoughAttention')) { 
		// Player has not yet passed a lv & error is not the last line on the timeline
			this.__app.__timeline.newLine(this.__app.__linesController.getGodLine('notEnoughAttention'));
		}
	}

	buy(item) { // Buy stuff with energy
		// check if Player has energy
		if(this.__app.__player.energy > 0) {

			this.__app.__player.energy--;
			this.__app.__player.energySpent++;
			this.__app.__itemController.activate(item);

			if(this.__app.__player.energy == 0) {
			// If all energy is spend, put all buy buttons on cooldown
				this.__app.__UIController.disable(this.__app.__UIController.researchElt);
				this.__app.__UIController.disable(this.__app.__UIController.formatElt);
				this.__app.__UIController.disable(this.__app.__UIController.interactionElt);
			}
		}
		else if(this.__app.__timeline.onScreen[0] != this.__app.__linesController.getGodLine('notEnoughEnergy')) {
			this.__app.__timeline.newLine(this.__app.__linesController.getGodLine('notEnoughEnergy'));
		}
	}

	stop() {
		// stops the game
		this.__app.__timer.stop();
		this.__app.__UIController.deleteListeners();
		clearInterval(this.__app.__eventController.refreshLoop);
		clearTimeout(this.__app.__eventController.hitLoop);
		// clear news feed loop
	}
}

