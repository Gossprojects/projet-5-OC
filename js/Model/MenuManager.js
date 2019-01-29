class MenuManager {

    constructor() {

        this.__txtFileName = 'intro_texts';
        this.__txtSheetName = 'lines';

        this.__btnFileName = 'intro_buttons';
        this.__btnSheetName = 'buttons';

        this.__lines = [];
        this.__buttons = [];
    }

    init() {
        return new Promise((resolve, reject) => {

            $.when(this.get(this.__txtFileName, this.__txtSheetName, this.__lines), this.get(this.__btnFileName, this.__btnSheetName, this.__buttons))
                
                .done(() => resolve())

                .fail((err) => reject(err));
        });
    }
    get(fileName, sheetName, prop) {

        return new Promise((resolve, reject) => {
            
            $.getJSON('json/' + fileName + '.json', lines => {

                lines[sheetName].map(line => prop.push(line));

                resolve();
            })
                .fail(() => reject(new Error('$.getJSON() failed in MenuManager : could\'nt load ' + fileName)));
        });
    }

    get lines() {
        return this.__lines;
    }

    get buttons() {
        return this.__buttons;
    }
}