class LinesController extends GameComponent {

    constructor(app) {

        super(app);
    }

	getNewsLine(lv) {

		let levelLines = [];
		
		this.__app.__linesManager.newsLines.map(line => {

			if(line.lv == lv)
				levelLines.push(line);
		});

		let rdm = Math.floor(Math.random() * levelLines.length);

		return levelLines[rdm];
	}
}