class Application {

	constructor() {
		this.__gameController = new GameController(this);
		this.__player = new Player(this);
		this.__UIController = new UIController(this);
		this.__timeline = new Timeline(this);
		this.__shopController = new ShopController(this);
		this.__shopManager = new ShopManager(this);
		this.__eventController = new EventController(this);
		this.__linesManager = new LinesManager(this);
	}

	init() {
		console.log('init');
		this.__eventController.init(60); // framerate
		this.__UIController.init();
		this.__shopManager.init();
		this.__linesManager.init();
	}

	get player() {
		return this.__player;
	}
	get gameController() {
		return this.__gameController;
	}
	get shopController() {
		return this.__shopController;
	}
	get shopManager() {
		return this.__shopManager;
	}
	get eventController() {
		return this.__eventController;
	}
	get linesController() {
		return this.__linesController;
	}
}