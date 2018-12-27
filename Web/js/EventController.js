class EventController extends GameComponent {
// Loops each init rate (ms) to update game level

	constructor(app, currentLv = 1) {

		super(app);

		this.__levels = [5, 10, 50, 100, 500, 1000, 5000]; // to be externalized
		this.__refresh = ''; // hydrated at init
	}

	init(itv) {
		var self = this;

		// set framerate
		this.__refresh = setInterval(function() {
			self.update();
		}, itv);

		// if resuming game, delete all previous levels
		if(this.__app.__player.currentLv > 1) {
			this.__levels = this.__levels.slice(this.__app.__player.currentLv - 1);
		}

		// get energy JSON file
		// turn JSON file into array & store it in this.__levels
	}

	update() {
		this.updateLv();
		this.__app.__UIController.update();
	}

	updateLv() {

		for(var i = 0; i <= this.__levels.length; i++) {
			if(this.__app.__player.attention >= this.__levels[i]) {
				this.__app.__player.currentLv++;
				this.__levels = this.__levels.slice(1);
				break;
			}
		}
	}

	get levels() {
		return this.__levels;
	}
}