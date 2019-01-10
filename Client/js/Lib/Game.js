class Game {

	constructor() {
		this.__over = false;

		this.__speed = 12; // interval between each hit (secs)
		this.__accRate = 0.05; // acceleration rate (%)

		this.__player = new Player(this);
		this.__gameController = new GameController(this);
		this.__eventController = new EventController(this);
		this.__energyManager = new EnergyManager(this);
		this.__linesManager = new LinesManager(this);
		this.__linesController = new LinesController(this);
		this.__itemManager = new ItemManager(this);
		this.__itemController = new ItemController(this);
		this.__timeline = new Timeline(this);
		this.__UIController = new UIController(this);
		this.__menuController = new MenuController(this);
		this.__endController = new EndController(this);
		this.__timer = new Timer();
	}

	init() {
		console.log('init');
		this.__menuController.init();
		this.__linesManager.init();
		this.__itemManager.init();

		this.__over = false;
		this.__speed = 5; 
		this.__accRate = 0.5;
	}

	start() {
		console.log('start');
		this.__over = false;
		this.__speed = 5; 
		this.__accRate = 0.5;

		this.__player = new Player(this);
		this.__gameController = new GameController(this);
		this.__eventController = new EventController(this);
		this.__linesController = new LinesController(this);
		this.__itemController = new ItemController(this);
		this.__timeline = new Timeline(this);
		this.__UIController = new UIController(this);
		this.__menuController = new MenuController(this);
		this.__endController = new EndController(this);
		this.__timer = new Timer();

		this.__UIController.init();
		this.__eventController.init(60); // 60ms = framerate
		this.__timer.reset();
		this.__timer.start();
	}

	set over(state) {
		this.__over = state;
	}
	/**
	 * @param {any} newSpeed
	 */
	set speed(newSpeed) {
		if($.isNumeric(newSpeed))
			this.__speed = newSpeed;		
	}
	set accRate(newRate) {
		if($.isNumeric(newRate))
			this.__accRate = newRate;
	}

	get over() {
		return this.__over;
	}

	get speed() {
		return this.__speed;
	}
	get accRate() {
		return this.__accRate;
	}

	get player() {
		return this.__player;
	}
	get gameController() {
		return this.__gameController;
	}
	get eventController() {
		return this.__eventController;
	}
	get energyManager() {
		return this.__energyManager;
	}
	get linesManager() {
		return this.__linesManager;
	}
	get linesController() {
		return this.__linesController;
	}
	get itemManager() {
		return this.__itemManager;
	}
	get itemController() {
		return this.__itemController;
	}
	get timeline() {
		return this.__timeline;
	}
	get UIController() {
		return this.__UIController;
	}
	get timer() {
		return this.__timer;
	}
}