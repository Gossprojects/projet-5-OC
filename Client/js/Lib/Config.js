class Config extends GameComponent {

    constructor(app) {

        super(app);

        // Properties are created dynamically from game_config.json
    }

    init(callback) {
        var self = this;

        $.getJSON('json/game_config.json', function(params) {
			
			for(var i = 0; i < params['params'].length; i++) {
               
				self[params['params'][i].var] = params['params'][i].value;
            }
            
            callback(self.__app);
        });
    }
}