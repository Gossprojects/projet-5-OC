class LinesController extends GameComponent {

    constructor(app) {

        super(app);
    }

	getNewsLine(lv) {
		// lv is integer, returns object line
		var levelLines = [];

		for(var i = 0; i < this.__app.__linesManager.newsLines.length; i++) {
		// pick all lines from lv
				console.log(lv);
			if(this.__app.__linesManager.newsLines[i].lv == lv) {
				levelLines.push(this.__app.__linesManager.newsLines[i]);
			}
		}

		var rdm = Math.floor(Math.random() * levelLines.length);

		return levelLines[rdm];
	}

	getGodLine(subject) {
		// subject is string, returns line as string property of object

		var lineObj = this.__app.__linesManager.godLines.find(function(elt) {
			return elt.name === subject;
		});
		if(lineObj)
			return lineObj.line;
	}
}