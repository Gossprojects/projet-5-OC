class GameController extends ApplicationComponent {

	constructor(app) {
		super(app);
	}

	post() {
		this.__app.__player.increaseAttention(1);
	}

	work() {
		this.__app.__player.increaseMoney(5)
	}

	hire(empl) {
		if(this.__app.__shopkeeper.getItem(empl, "employee")) {
			this.__app.__shopkeeper.activate(empl);
		}
	}

	fire(empl) {
		if(this.__app.__ledger.activeItemsName(empl)) {
			// If said employee is currently active

			this.__app.__shopkeeper.deactivate(empl);
		}
	}

	sell(contract) {
		
	}

	// Placeholders
	pause(app) {
		console.log(app + ' paused');
	}

	resume(app) {
		console.log(app + ' resumed');
	}
	
	check(truc) {
		console.log(truc);
	}
}

