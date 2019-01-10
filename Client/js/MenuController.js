class MenuController extends GameComponent {
// To jQuerify (classic JS is baaad)

    constructor(app) {

        super(app);

        // START SCREEN

		this.__startBtn = $('.startBtn')[0];
		this.__leaderboardBtn = $('.ldbBtn')[0];
		this.__menuWrapper = $('.menuWrapper')[0];
        this.__gameWrapper = $('.gameWrapper')[0];
        
        // INTRO 

        this.__introWrapper = '';
        this.__introButton = '';
        this.__introCount = 1;
        this.__introTexts = ['texte 1', 'texte 2', 'texte 3', 'texte 4', 'texte 5']; // To be externalized
    }

    init() {
        var self = this;

        $(self.__gameWrapper).css('display', 'none');

		$(this.__startBtn).on('click', function() {

            self.__app.start();
			
            $(self.__menuWrapper).css('display', 'none');
            $(self.__gameWrapper).css('display', 'grid');
        });
    }

    toGame() {

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