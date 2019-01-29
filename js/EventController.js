/**
 * @classdesc
 * This class fills two purposes :
 * - Handling the hit loop, where fake news hit the player faster & faster
 * - Serving as reference for current game level
 * 
 * It must be initiated with a framerate (ms)
 * Its lvs are sliced during the game and reseted before each new game
 */
class EventController extends GameComponent {

	constructor(app) {

		super(app);

		/**
		 * @property array : level goals of current game
		 */
		this.__levels = [];

		/**
		 * @property int : current conversion price (changes each lv up)
		 */
		this.__currentPrice = ''; 

		/**
		 * @property int : framerate setInterval ID
		 */
		this.__refreshLoop = '';
	}

	init(itv) {
		let self = this;
		clearInterval(this.__refreshLoop);
		this.__levels = [];

		return new Promise((resolve, reject) => {

			try {
				this.__app.__levelsManager.levels.map(level => this.__levels.push(level.goal));
			
				this.__refreshLoop = setInterval(() => self.update(), itv);
	
				setTimeout(() => self.hit(), self.__app.__player.speed * 1000);

				resolve();
			}
			catch(err) {

				reject(err.message);
			}
		});

	}

	/**
	 * @function hit
	 * A function called more & more frequently until the game is over
	 * 1- Prints a new line
	 * 2- Calls GameController to update Player properties
	 * 3- Calls UIController to update UI
	 */
	hit() {
		let self = this;

		let lineObj = this.__app.__linesController.getNewsLine(this.__app.__player.currentLv);

		this.__app.__timeline.newLine(lineObj.line);

		this.__app.__gameController.hit(this.__app.__player.currentDmg);

		this.__app.__UIController.update();

		if(!this.__app.over === true) {

			this.__hitLoop = setTimeout(() => {
				self.hit();
			}, self.__app.__player.speed * 1000);
		}
	}

	/**
	 * @function update
	 * A function called each frame to catch game over state, and update current lv & UI
	 */
	update() {
		
		if(this.__app.over === true) {

			this.__app.__UIController.endGame();
		}
		else {
			
			this.updateLv();

			this.__app.__UIController.update();
		}
	}

	updateLv() {
		
		if(this.__app.__player.attention >= this.levels[0] && this.__app.__player.hasConverted) {

				this.__app.__player.currentLv++;

				this.__currentPrice = this.__levels[0];

				this.__levels = this.__levels.slice(1);	

				this.__app.__player.hasConverted = false;
		}
	}

	// GETTERS

	get levels() {
		return this.__levels;
	}

	get currentPrice() {
		return this.__currentPrice;
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