class Config {

    constructor() {

        this.__fileName = 'game_config';
        this.__sheetName = 'params';
    }

    init() {
        let self = this;

        return new Promise((resolve, reject) => {

            $.getJSON('json/'+ self.__fileName + '.json', params => {
            
                params[this.__sheetName].map(param => self[param.var] = param.value);
     
                resolve();
            })
                .fail(() => reject(new Error('$.getJson() failed in Config : could`\'nt load ' + self.__fileName)));
        });
    } 
}