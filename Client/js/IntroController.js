class IntroController extends GameComponent {

    constructor(app) {

        super(app);
        
        // get DOM elt w/ jQuery
        this.__contentWrapper; 
        this.__nextBtn;

        this.__content = ['intro1', 'intro2', 'intro3'];
    }

    init() {
        // set click/touch event
        var self = this;
        var i = 1;

        this.toPage(0);

        this.__nextBtn.onclick = function() {

            if(i < (this.__content.length - 1)) {

                self.toPage(i);
            }
            else if(i < this.__content.length) {
            // last step, change 'Next' button to 'Start'
                self.toLast();
            }
            else {
            // hide intro box and start game
                self.toGame();
            }
        }

    }

    toPage(index) {
        // prints content[index] text
        this.__contentWrapper.innerHTML = '';
        this.__contentWrapper.innerHTML =this.__content[index];
    }

    toLast() {
        // last step before Game init
        this.toPage(this.__content.length - 1);

        this.__nextBtn.innerHTML = '';
        this.__nextBtn.innerHTML = 'Start';
    }

    toGame() {
        // hide intro UI to 'reveal' game UI
        this.__contentWrapper.style.visibility = 'hidden';
    }
}