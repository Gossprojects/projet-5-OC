class LinesManager {

	constructor() {

		this.__fileName = 'news_lines';
		this.__sheetName = 'newsLines';
		
		this.__newsLines = [];
	}
	
	init() {
		return new Promise((resolve, reject) => {

			$.getJSON('json/' + this.__fileName + '.json', lines => {

				lines[this.__sheetName].map((line) => this.__newsLines.push(line));

				resolve();
			})
				.fail(() => reject(new Error('$.getJSON() failed in LinesManager : couldn\'t load ' + this.__fileName)));
		});
	}

	get newsLines() {
		return this.__newsLines;
	}
}