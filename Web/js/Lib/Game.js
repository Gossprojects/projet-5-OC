class Game {

	constructor() {

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
	}

	init() {
		console.log('init');
		this.__eventController.init(60); // framerate
		this.__UIController.init();
		this.__itemManager.init();
		this.__linesManager.init();
	}

	set player(newPlayer) {
	// hydrate {Player} with saved game 
		this.__player = newPlayer;
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
}