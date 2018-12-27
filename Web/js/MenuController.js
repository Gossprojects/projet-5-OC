class MenuController extends GameComponent {
// To jQuerify (classic JS is baaad)

    constructor(app) {

        super(app);

        this.__menuWrapper = '';

        this.__introWrapper = '';
        this.__introButton = '';
        this.__introCount = 1;
        this.__introTexts = ['texte 1', 'texte 2', 'texte 3', 'texte 4', 'texte 5']; // To be externalized
    }

    toStart() {

    }

    toNextStep(index) {

        this.__introWrapper.innerHTML = '';
        this.__introWrapper.innerHTML = texts[index];
    
        this.__introCount++;
    }

    toEnding() {

        this.__menuWrapper.style.visibility = 'hidden';
    }
}