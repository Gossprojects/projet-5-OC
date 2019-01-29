class MenuController extends GameComponent {

    constructor(app) {

        super(app);

        // START SCREEN

		this.__startBtn = $('.startBtn')[0];
		this.__leaderboardBtn = $('.ldbBtn')[0];
		this.__menuWrapper = $('.menuWrapper')[0];
        this.__gameWrapper = $('.gameWrapper')[0];
        
        // INTRO 

        this.__introWrapper = $('.introWrapper')[0];
        this.__introTxt = $('.introText')[0];
        this.__introBtn = $('.nextBtn')[0];

        this.__introCount = 0;
    }

    init() {
        let self = this;

        return new Promise((resolve, reject) => {

            try {
                $(this.__gameWrapper).css('display', 'none');

                $(this.__startBtn).on('click', () => {
        
                    self.toIntro(self);
                    self.toNextStep(self.__introCount);
                });
        
                $(this.__introBtn).on('click', () => {
                    
                    if(self.__introCount < self.__app.__menuManager.lines.length) {
                        
                        self.toNextStep(self.__introCount);
                    }
                    else {
                        self.toGame(self);
                    }
                });

                resolve();
            }
            catch(err) {

                reject(err.message);
            }
        });
    }

    /**
     * @function toGame
     * Changes screen from Intro to Game, and calls game.start(), which needs game elements to be visible
     */
    toGame(self) {

        self.__app.__UIController.toNewScreen(self.__introWrapper, self.__gameWrapper, self.__app.start);
    }    

    toIntro(self) {

        self.__app.__UIController.toNewScreen(self.__menuWrapper, self.__introWrapper);
    }

    toNextStep(index) {

        this.__introTxt.innerHTML = '';
        this.__introTxt.innerHTML = this.__app.__menuManager.lines[index];

        this.__introBtn.innerHTML = '';
        this.__introBtn.innerHTML = this.__app.__menuManager.buttons[index];

        this.__introCount++;
    }
}