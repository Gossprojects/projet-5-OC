class Timeline extends ApplicationComponent {

	constructor(app) {

		super(app);

		this.__onScreen = [];
	}

	newLine(line) {	// string
		this.__onScreen.unshift(line);
	}

	get onScreen() {
		return this.__onScreen;
	}
}