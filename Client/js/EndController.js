class EndController extends UIController {

    constructor(app) {

        super(app);

        // Game Over screen
        this.__gameOverWrapper = $('.endWrapper')[0];
        this.__retryBtn = $('#retry')[0];
        this.__sendBtn = $('#send')[0];

        // Send Score screen
        this.__sendScoreWrapper = $('.submitWrapper')[0];
        this.__backBtn = $('#back')[0];
        this.__submitBtn = $('#submit')[0];

        this.__gameWrapper = $('.gameWrapper')[0];

        this.__playerTime = $('#playerTime')[0];
        this.__playerAtt = $('#playerAtt')[0];

        this.__scoreTime = $('#scoreTime')[0];
        this.__scoreAtt = $('#scoreAtt')[0];
        this.__scoreTimeHidden = $('#scoreTimeHidden')[0];
        this.__scoreAttHidden = $('#scoreAttHidden')[0];
        this.__scoreInttimeHidden = $('#scoreIntTimeHidden')[0];
    }

    init() {
        var self = this;
        // stop game
        this.__app.__gameController.stop();

        // show game over UI
        $(this.__gameOverWrapper).css('display', 'grid');
        $(this.__gameWrapper).css('display', 'none');

        // print scores
        // time is a 'min : sec' string, printed on screen and saved in hidden input form
        this.__playerTime.innerHTML = this.__scoreTime.innerHTML = this.__scoreTimeHidden.value = this.__app.__timer.min + ' : ' + this.__app.__timer.sec;
        // time is also saved as one integer (in secs) so scores are easily ranked
        this.__scoreInttimeHidden.value = this.__app.__timer.duration;
        this.__playerAtt.innerHTML = this.__scoreAtt.innerHTML = this.__scoreAttHidden.value = this.__app.__player.totalAttention;

        // bind buttons
        // Game Over screen : restart
        $(this.__retryBtn).on('click', function() {
            
            self.__app.start();

            $(self.__gameOverWrapper).css('display', 'none');
            $(self.__gameWrapper).css('display', 'grid');

            $(self.__retryBtn).unbind('click');
        }); 
        // Game Over screen : send score
        $(this.__sendBtn).on('click', function() {
        
            $(self.__gameOverWrapper).css('display', 'none');
            $(self.__sendScoreWrapper).css('display', 'grid');
        });

        // Send Score screen : back
        $(this.__backBtn).on('click', function() {

            $(self.__gameOverWrapper).css('display', 'grid');
            $(self.__sendScoreWrapper).css('display', 'none');
        });
        // Send Score screen : submit
        $(this.__submitBtn).on('click', function() {
            // ECHAPPER CARACTERES NON PRIS EN CHARGE PAR LA POLICE : ¤|\_^@%§~{}=
            $('#sendScore').submit();
        });
    }
}