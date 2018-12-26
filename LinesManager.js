class LinesManager extends ApplicationComponent {

	constructor(app) {

		super(app);

		this.__attLines = [
			[{line: 'Your post gets no attention', chance: 1}],
			[{line: 'Your post gets few attention', chance: 0.5}, {line: 'Your post gets drowned in noise', chance: 0.5}],
			[{line: 'Your post gets drowned in noise', chance: 0.4}, {line: 'Someone from your family read your post', chance: 0.2}],
			[{line: 'Someone from your family read your post', chance: 0.33}, {line: 'Your post is a drop in the ocean', chance: 0.33}, {line: 'Your post gets drowned in noise', chance: 0.33}],
			[{line: 'A friend of yours read your post', chance: 0.4}, {line: 'Couple of relatives read your post', chance: 0.2}, {line: 'Your post gets drowned in noise', chance: 0.4}]
		];

		this.__itmLines = [
			{name: 'comments', lines: [
				[], // lv 0
				[	// lv 1
					{line: 'Someone commented your post', chance: 1}
				],
				[	// lv 2
					{line: 'Someone commented your post', chance: 0.5}, 
					{line: 'Someone said your post is fake news', chance: 0.5}
				],
				[	// lv 3
					{line: 'Someone commented your post', chance: 0.25}, 
					{line: 'Someone said your post is fake news', chance: 0.25}, 
					{line: 'Someone called you names', chance: 0.25}, 
					{line: 'Someone thanks you for your post', chance: 0.25}					
				]
			]},
			{name: 'camera', lines: [{}, {}, {}]}
		];				

	}
	
	init() {
		//this.getLines();
	}

	getLineOf(lv) {
		var lines = this.__attLines[lv];

		return this.getRandomLineFrom(lines);
	}

	getItemLineOf(item) {
		if(item.hasLines) {
			var lines = [];

			for(var i = 0; i < this.__itmLines.length; i++) {
				
				if(this.__itmLines[i].name === item.name) {
					// reach required item
					// get its lines of current lv
					lines = this.__itmLines[i].lines[this.__app.__eventController.currentLv];
				}
			}
	
			return this.getRandomLineFrom(lines);
		}
	}

	getRandomLineFrom(lines) {
		// where lines is array of {line, chance} objects
		var chances = [];
		var rdm = Math.random();

		for(var i = 0; i < lines.length; i++) {
			// put all % in separate array
			chances.push(lines[i].chance);
		}

		for(var i = 0; i < chances.length; i++) {
			// compound % for easy loop testing
			if((i - 1) >= 0) {
				chances[i] = chances[i] + chances[i - 1];
			}
		}

		for(var i = 0; i < chances.length; i++) {
			// test rdm nb to % and return corresponding line
			if(rdm <= chances[i]) {
				return lines[i].line;
				break;
			}
		}
	}

	getLines() {
		var lines = [];

		var attLines = this.getAttLinesFromJson();
		// convert to js

		var itmLines = this.getItmLinesFromJson();
		// convert to js

		this.__attLines = attLines;
		this.__itmLines = itmLines;
	}

	getAttLinesFromJson() {
		// json
	}

	getItmLinesFromJson() {
		// json
		// [item: [level: [[line, chance], [line, chance]]]]
	}

	get attLines() {
		return this.__attLines;
	}
	get itmLines() {
		return this.__itmLines;
	}
}