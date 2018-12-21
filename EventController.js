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
			}, freq);
		}
	}

	// Is called whenever Player buys a contract
	hasNewContract(id) {
		if(Number.isInteger(id)) {
			switch(id) {

				case 1: // Newsroom

				this.__app.__UIController.show('newsroomBlock');
				break;
			}
		}
	}

}