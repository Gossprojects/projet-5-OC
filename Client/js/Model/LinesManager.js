class LinesManager extends GameComponent {

	constructor(app) {

		super(app);

		this.__newsLines = [];
		
		this.__godLines = [
			{name: 'notEnoughEnergy', line: 'Il te faut d\'abord de l\'énergie. Patience.'}, 
			{name: 'notEnoughAttention', line: 'Apporte moi plus d\'attention.'}
		];

	}
	
	init() {
		this.getFromJson();
	}

	getFromJson() {
		var self = this;

		$.getJSON('json/news_lines.json', function(lines) {
			
			for(var i = 0; i < lines['newsLines'].length; i++) {

				self.__newsLines.push(lines['newsLines'][i]);
			}
			console.log(self.__newsLines);
		});
	}

	get newsLines() {
		return this.__newsLines;
	}
	
	get godLines() {
		return this.__godLines;
	}
}