class Timeline extends GameComponent {

	constructor(app) {

		super(app);

		this.__onScreen = [];
	}

	newLine(line) {	// string
		if(line) {
			this.__onScreen.unshift(line);
		}
	}

	get onScreen() {
		return this.__onScreen;
	}
}