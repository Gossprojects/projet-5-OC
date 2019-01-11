class LinesManager extends GameComponent {

	constructor(app) {

		super(app);

		this.__newsLines = [];
		
		this.__godLines = [
			{name: 'notEnoughEnergy', line: 'Il te faut d\'abord de l\'énergie.'}, 
			{name: 'notEnoughAttention', line: 'Apporte moi plus d\'attention.'}
		];

	}
	
	init(callback) {
		this.getFromJson(callback);
	}

	getFromJson(callback) {
		var self = this;

		$.getJSON('json/news_lines.json', function(lines) {

			for(var i = 0; i < lines['newsLines'].length; i++) {
				
				self.__newsLines.push(lines['newsLines'][i]);
			}

			callback(self.__app);
		});
	}

	get newsLines() {
		return this.__newsLines;
	}
	
	get godLines() {
		return this.__godLines;
	}
}