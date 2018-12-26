class LinesController extends ApplicationComponent {

	constructor(app) {

		super(app);

		//this.__manager = new LinesManager;
		this.__attLines = [
							[{line: 'Your post gets no attention', chance: 1}],
							[{line: 'Your post gets no attention', chance: 0.5}, {line: 'Your post gets drowned in noise', chance: 0.5}],
							[{line: 'Your post gets drowned in noise', chance: 0.4}, {line: 'Your post gets no attention', chance: 0.4}, {line: 'Someone from your family read your post', chance: 0.2}],
							[{line: 'Someone from your family read your post', chance: 0.33}, {line: 'Your post is a drop in the ocean', chance: 0.33}, {line: 'Your post gets drowned in noise', chance: 0.33}],
							[{line: 'A friend of yours read your post', chance: 0.4}, {line: 'Couple of relatives read your post', chance: 0.2}, {line: 'Your post gets drowned in noise', chance: 0.4}]
						];

		this.__itmLines = [
							{name: 'pen', lines: ''},
							{name: 'camera'}
						];				
	}

	init() {
		//this.__lines = this.__app.__linesManager.getLinesOf(att);
	}

	get attLines() {
		return this.__attLines;
	}


	/*EARLY WIP
	printLinesOf(lvl) {
		var lines = this.__app.__linesManager.getLinesOf(lvl);
		var cld = 10; // post cld

		for(i = 0; i < lines; i++) {
			this.printLine(lines[i], cld);
		}
	}
	printLine(line, cld) {
		// Needs line.chance & line.max & line.text

		// Handle case of line not appearing
		if(line.chance < 100) {
			var min = 0;
		}
		else {
			var min = 1;
		}

		// Nb of times lines appears
		var occurrences = Math.floor(Math.random() * line.max) + min;

		for(var i = 1; i <= occurrences; i++) {
			var isLine = Math.floor(Math.random() * 100);
			if(isLine <= line.chance) {
				var timeout = Math.random() * cld;
				send(line.text, timeout);
			}
		}
	}

	send(line, timeout) {
		// calls UI to print line
		// timeout in secs
		var self = setTimeout(function() {
			this.__app.__UIController.sendLine(line);
			clearTimeout(self);
		}, timeout * 1000);
	}
	*/
}