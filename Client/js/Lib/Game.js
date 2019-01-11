class Game {

	constructor() {
		this.__over = false;

		this.__config = new Config(this);
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
		// When JSON config is ready, config game
		this.__config.init(this.configWhenReady);
		
		this.__itemManager.init();

		// When JSON lines are ready (largest file), print start screen
		this.__linesManager.init(this.linesWhenReady);
	}

	start() {
		console.log('start');
		this.__over = false;

		this.__player = new Player(this, this.__config.gameSpeed);
	//	this.__gameController = new GameController(this);
		this.__eventController = new EventController(this);
	//	this.__linesController = new LinesController(this);
	//	this.__itemController = new ItemController(this);
		this.__timeline = new Timeline(this);
	//	this.__UIController = new UIController(this);
	//	this.__menuController = new MenuController(this);
	//	this.__endController = new EndController(this);
	//	this.__timer = new Timer();

		this.__eventController.init(this.__config.framerate);
		this.__UIController.init();
		this.__timer.reset();
		this.__timer.start();
	}

	configWhenReady(self) {
		self.__player.__speed = self.__config.gameSpeed;
	}

	linesWhenReady(self) {
		self.__menuController.init();
	}

	// SETTERS

	set over(state) {
		this.__over = state;
	}
	set speed(newSpeed) {
		if($.isNumeric(newSpeed))
			this.__speed = newSpeed;		
	}
	set accRate(newRate) {
		if($.isNumeric(newRate))
			this.__accRate = newRate;
	}

	// GETTERS

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