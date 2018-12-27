class LinesController extends GameComponent {

    constructor(app) {

        super(app);
    }

    getItemLine() {
		var self = this;
		var lines = [];

		// if Player has invested in research
		if(this.__app.__player.srch > 0) {
			// push srch lines of Player investment
			var srch = this.getItem('srch');
			lines = lines.concat(srch.lines[this.__app.__player.srch - 1]);
		}

		// if Player has invested in format
		if(this.__app.__player.frmt > 0) {

			var frmt = this.getItem('frmt');
			lines = lines.concat(frmt.lines[this.__app.__player.frmt - 1]);
		}

		// if Player has invested in interaction
		if(this.__app.__player.intctn > 0) {

			var intctn = this.getItem('intctn');
			lines = lines.concat(intctn.lines[this.__app.__player.intctn - 1]);
		}

		// if we have lines, pick one at random
		if(lines.length > 0)
			var itemLine = this.getRandomLineOf(lines);

		return itemLine;
	}

	getItem(name) {

		var item;

		this.__app.__linesManager.itmLines.forEach(function(elt) {
		// pick item with called name
			if(elt.name === name) {

				item = elt;
			}
		});

		return item;
	}

	getRandomLineOf(lines) {

		var max = lines.length;
		var lineIndex = Math.floor(Math.random() * max); // random between 0 and max

		return lines[lineIndex];
	}

	getGodLine(subject) {

		var lineObj = this.__app.__linesManager.godLines.find(function(elt) {
			return elt.name === subject;
		});
		if(lineObj)
			return lineObj.line;
	}
}