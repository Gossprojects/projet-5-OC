class GameController extends GameComponent {

	constructor(app) {

		super(app);
	}

	/**
	 * @function post
	 * Triggers main game action : 
	 * - distributes work points
	 * - resets work
	 * - sets cooldown
	 */
	post() {
		if(!this.__app.__player.onCld) {

			// Only your total attention (score) and health points are affected by format (* workMult)
			// Attention points (used to convert energy) are not
			let damage = this.__app.player.workStr * this.__app.player.workMult;

			this.__app.player.attention += this.__app.player.workStr;
			this.__app.player.totalAttention += damage;
			this.__app.player.health += damage;

			this.__app.player.workStr = this.__app.player.workInit;
			this.__app.player.workCount = 0;

			this.__app.UIController.postCooldown(this.__app.player.postCld);
			this.__app.UIController.printDamage(damage);
			this.__app.player.onCld = true;
		}
	}

	work() {
		if(!$(this.__app.UIController.work).hasClass("onCooldown")) {

			this.__app.player.workStr++;
			this.__app.player.workCount++;

			if(this.__app.player.workCount >= this.__app.player.workMax)
				this.__app.UIController.disable(this.__app.UIController.work);
		}
	}

	/**
	 * @function hit
	 * Handles game variables after a hit :
	 * - decreases health points
	 * - updates speed and damage according to current lv rates
	 * - if hp = 0, triggers game over
	 * @param {int} dmg 
	 */
	hit(dmg) {

		this.__app.player.health -= dmg;

		this.__app.player.speed -= (this.__app.player.speed * this.__app.levelsManager.levels[this.__app.player.currentLv - 1].accRate);

		this.__app.player.currentDmg = (this.__app.player.currentDmg * this.__app.levelsManager.levels[this.__app.player.currentLv - 1].dmgRate);

		this.__app.UIController.printDamage(-Math.abs(dmg));

		if(this.__app.player.health <= 0) {

			this.__app.over = true;
		}
	}

	convert() {

		if(!this.__app.player.hasConverted) {

			this.__app.player.attention -= this.__app.eventController.currentPrice;
			this.__app.player.energy++;
			this.__app.player.energyEarned++;

			this.__app.player.hasConverted = true;
		}
		else 
			return new Error('Couldn\'t convert points : Player has already converted');
	}

	/**
	 * @function buy
	 * Handle energy investment in items and activation of items
	 * @param {string} item name
	 */
	buy(item) { 

		if(this.__app.player.energy > 0) {

			this.__app.player.energy--;
			this.__app.player.energySpent++;
			this.__app.itemController.activate(item);

			if(this.__app.player.energy == 0) {

				this.__app.UIController.disable(this.__app.UIController.researchBtn);
				this.__app.UIController.disable(this.__app.UIController.formatBtn);
				this.__app.UIController.disable(this.__app.UIController.interactionBtn);
			}
		}
		else 
			return new Error('Not enough energy');
	}

	/**
	 * @function generateScore
	 * Player score = attention earned + 1 point for each sec after 2 minutes
	 * Ex : 50 attention points in 2'10 = 60 score points
	 */
	generateScore() {

		let attScore = this.__app.__player.totalAttention;
		let timeScore = (this.__app.__timer.duration > 120 ? (this.__app.__timer.duration - 120) : 0);

		return (attScore + timeScore);
	}

	/**
	 * @function stop
	 * At game over, stops timer, clears both framerate and hit loops, and delete all listeners
	 */
	stop() {

		this.__app.timer.stop();

		this.__app.UIController.deleteListeners();

		clearInterval(this.__app.__eventController.refreshLoop);
		clearTimeout(this.__app.__eventController.hitLoop);
	}
}

