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
		var emp = this.__app.__shopkeeper.getItem(empl, "employee");
		var playerMethod = "plus" + emp.name.charAt(0).toUpperCase() + emp.name.substr(1);

		if(emp && this.__app.__player.money >= emp.price) {

			this.__app.__shopkeeper.activate(empl);
			this.__app.__player[playerMethod](); // Registering new employee in {Player}
		}
		else
			console.log('not enuf $');
	}

	fire(empl) {
		var emp = this.__app.__ledger.activeItemsNames(empl);
		var playerMethod = "minus" + empl.charAt(0).toUpperCase() + empl.substr(1);

		if(emp) {
			this.__app.__shopkeeper.deactivate(empl);
			this.__app.__player[playerMethod](); // Deleting new employee from {Player}
		}
	}

	sell(contract) {
		var contr = this.__app.__shopkeeper.getItem(contract, 'contract');
		if(this.__app.__player.money >= contr.price) {
	
			this.__app.__shopkeeper.sell(contract);

			this.__app.__EventController.hasNewContract(contr.unlockId);
			
			this.__app.__UIController.hide(contract);
		}
		else
			console.log('not enuf $');
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

