class Timeline {

	constructor() {

		this.__onScreen = [];
	}

	newLine(line) {
		
		if(typeof line === 'string') {

			this.__onScreen.unshift(line);
		}
		else 
			return new Error('New line is not a string');
	}

	reset() {
		this.__onScreen = [];
	}

	get onScreen() {
		return this.__onScreen;
	}
}