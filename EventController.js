class EventController extends ApplicationComponent {

	constructor(app) {

		super(app);

		this.__refresh = '';
	}

	init(freq) {
		if(Number.isInteger(freq)) {
			var self = this;

			this.__refresh = setInterval(function() {
				self.__app.__UIController.refresh();
				self.hasTeam();
			}, freq);
		}
	}

	hasTeam() {
		if(this.__app.__ledger.activeItems.length != 0) {
			this.__app.__UIController.show('teamBlock');
		}
	}
}