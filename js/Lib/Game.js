class Game {

	constructor() {
		this.__over = false; // Game over switch
		this.__levelsReady = false; // Game start switch

		this.__config = new Config();
		this.__player = new Player();
		this.__timeline = new Timeline();
		this.__timer = new Timer();

		this.__gameController = new GameController(this);
		this.__eventController = new EventController(this);
		this.__linesController = new LinesController(this);
		this.__itemController = new ItemController(this);
		this.__UIController = new UIController(this);
		this.__menuController = new MenuController(this);
		this.__endController = new EndController(this);
		this.__leaderboardController = new LeaderboardController();

		this.__levelsManager = new LevelsManager();
		this.__linesManager = new LinesManager();
		this.__itemManager = new ItemManager();
		this.__menuManager = new MenuManager();
	}

	/**
	 * @function init
	 * Sets up game & Start Screen when managers are ready with their json files
	 */
	init() {
		this.__config.init()
			.then(() => this.__player.init(this.__config))
			.catch(err => console.log(err));
		
		this.__itemManager.init()
			.catch(err => console.log(err));

		this.__linesManager.init()
			.then(() => this.__menuManager.init())
			.then(() => this.__menuController.init())
			.catch(err => console.log(err));
		
		this.__levelsManager.init()
			.then(() => this.__levelsReady = true)
			.catch(err => console.log(err));
	}

	/**
	 * @function start
	 * Effectively starts a game with new instances of game-dependant Classes
	 * @param {Application} self context for deferred calls
	 */
	start(self) {

		self.__over = false;

		self.__timeline.reset();
		
		self.__player.reset();
		self.__player.init(self.__config);
		
		self.__timer.reset();
		self.__timer.start();

		if(self.__levelsReady) {

			self.__eventController.init(self.__config.framerate)

				.then(() => self.__UIController.init())
				.catch(err => console.log(err));
		}
	}

	leaderboard(players) {
	
		this.__leaderboardController.init(players)
			.then(() => this.__leaderboardController.printAll())
			.catch(err => console.log(err));
	}

	// SETTERS

	set over(state) {
		if(typeof state === 'boolean')
			this.__over = state;
	}
	set levelsReady(state) {
		if(typeof state === 'boolean')
			this.__levelsReady = state;
	}

	// GETTERS

	get over() {
		return this.__over;
	}
	get levelsReady() {
		return this.__levelsReady;
	}

	get player() {
		return this.__player;
	}
	get timeline() {
		return this.__timeline;
	}
	get timer() {
		return this.__timer;
	}

	get gameController() {
		return this.__gameController;
	}
	get eventController() {
		return this.__eventController;
	}
	get linesController() {
		return this.__linesController;
	}
	get itemController() {
		return this.__itemController;
	}
	get UIController() {
		return this.__UIController;
	}
	get endController() {
		return this.__endController;
	}

	get linesManager() {
		return this.__linesManager;
	}
	get levelsManager() {
		return this.__levelsManager;
	}
	get itemManager() {
		return this.__itemManager;
	}
}