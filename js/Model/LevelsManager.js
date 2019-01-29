class LevelsManager {

    constructor() {

        this.__fileName = 'levels';
        this.__sheetName = 'levels';

        this.__levels = [];
    }

    init() {
        return new Promise((resolve, reject) => {

            $.getJSON('json/' + this.__fileName + '.json', levels => {
    
                levels[this.__sheetName].map(level => this.__levels.push(level));
                
                resolve();
            })
                .fail(() => reject(new Error('$.getJSON failed in LevelsManager : couldn\'t load ' + this.__fileName)));
        });
    }

    get levels() {
        return this.__levels;
    }
}