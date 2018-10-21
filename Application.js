class Application {

	constructor() {
		this.__gameController = new GameController(this);
		this.__player = new Player(this);
		this.__shopkeeper = new Shopkeeper(this);
		this.__ledger = new Ledger(this, this.__player); // Ledger needs Player instance
		this.__UIController = new UIController(this);
		this.__EventController = new EventController(this);
	}

	init() {
		console.log('init');
		this.__UIController.init();
		this.__EventController.init(100);
	}

	get gameController() {
		return this.__gameController;
	}
	get player() {
		return this.__player;
	}
	get shopkeeper() {
		return this.__shopkeeper;
	}
	get ledger() {
		return this.__ledger;
	}
}