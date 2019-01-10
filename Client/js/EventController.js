class EventController extends GameComponent {
// Loops each init rate (ms) to update game level

	constructor(app) {

		super(app);

		this.__levels = [3, 5, 10, 25, 50, 100, 200]; // to be externalized

		this.__refreshLoop = ''; // framerate interval
		this.__hitLoop = '';
	}

	init(itv) {
		var self = this;

		// set framerate
		this.__refreshLoop = setInterval(function() {
			self.update();
		}, itv);

		// set first hit
		this.__hitLoop = setTimeout(function() {
			self.hit();
		}, self.__app.speed * 1000);

		// get energy JSON file
		// turn JSON file into array & store it in this.__levels
	}

	hit() { // Handles hit intervals, time acceleration, and what happens in the timeline
	
		var self = this;
		var lineObj = this.__app.__linesController.getNewsLine(this.__app.__player.currentLv);

		this.__app.__timeline.newLine(lineObj.line);
		this.__app.__gameController.hit(lineObj.dmg);
		this.__app.__UIController.update();

		if(!this.__app.over === true) {
		// if game is not over, call this function again in game.speed seconds
			self.__hitLoop = setTimeout(function() {
				self.hit();
			}, self.__app.speed * 1000);
		}

		this.__app.speed -= (this.__app.speed * this.__app.accRate);
	}

	update() {
		if(this.__app.over === true) {
		// if game is over
			this.__app.__UIController.endGame();
		}
		else {
			this.updateLv();
			this.__app.__UIController.update();
		}
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

	get refreshLoop() {
		return this.__refreshLoop;
	}

	get hitLoop() {
		return this.__hitLoop;
	}

	get newsLines() {
		return this.__newsLines;
	}
}