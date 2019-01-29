class EndController extends GameComponent {

    constructor(app) {

        super(app);

        this.__gameWrapper = $('.gameWrapper')[0];

        // GAME OVER SCREEN
        this.__gameOverWrapper = $('.endWrapper')[0];
        
        this.__retryBtn = $('#retry')[0];
        this.__sendBtn = $('#send')[0];
        
        this.__playerTime = $('#playerTime')[0];
        this.__playerAtt = $('#playerAtt')[0];
        this.__playerScore = $('#playerScore')[0];

        // SEND SCORE SCREEN
        this.__sendScoreWrapper = $('.submitWrapper')[0];

        this.__userName = $('#userName')[0];

        this.__backBtn = $('#back')[0];
        this.__submitBtn = $('#submit')[0];

        this.__scoreFinal = $('#scoreFinal')[0];

        this.__scoreTimeHidden = $('#scoreTimeHidden')[0];
        this.__scoreAttHidden = $('#scoreAttHidden')[0];
        this.__scoreFinalHidden = $('#scoreFinalHidden')[0];
    }

    /**
     * @function init
     * Called at game over, changes screen, prints scores and sets listeners
     */
    init() {
        let self = this;

        this.__app.gameController.stop();

        this.__app.UIController.toNewScreen(this.__gameWrapper, this.__gameOverWrapper, self.setListeners);

        this.__playerAtt.innerHTML = this.__scoreAttHidden.value = this.__app.__player.totalAttention;

        this.__playerTime.innerHTML = this.__scoreTimeHidden.value = this.__app.__timer.min + ' : ' + (this.__app.__timer.sec < 10 ? '0' : '') + this.__app.__timer.sec;

        this.__playerScore.innerHTML = this.__scoreFinal.innerHTML = this.__scoreFinalHidden.value = this.__app.__gameController.generateScore();
    }

    /**
     * @function setListeners
     * When game over screen is displayed, set buttons listeners
     * @param {Application} app context is necessary because this function is called as callback
     */
    setListeners(app) {

        $(app.endController.__retryBtn).on('click', () => {
            
            app.UIController.toNewScreen(app.endController.__gameOverWrapper, app.endController.__gameWrapper, app.start);

            $(app.endController.__retryBtn).unbind('click');
            $(app.endController.__sendBtn).unbind('click');
            $(app.endController.__backBtn).unbind('click');
            $(app.endController.__submitBtn).unbind('click');
        }); 

        $(app.endController.__sendBtn).on('click', () => app.UIController.toNewScreen(app.endController.__gameOverWrapper, app.endController.__sendScoreWrapper));

        $(app.endController.__backBtn).on('click', () => app.UIController.toNewScreen(app.endController.__sendScoreWrapper, app.endController.__gameOverWrapper));

        $(app.endController.__submitBtn).on('click', () => app.endController.sendForm());
    }

    sendForm() {

        if(this.__userName.value == "") {

            alert("Merci de renseigner un nom d'utilisateur");
        }
        else {
            this.__userName.value = this.__userName.value.replace(/[^a-zA-Z]/g, "");

            $('#sendScore').submit();
        }
    }
}