class UIController extends GameComponent {

	constructor(app) {
		
		super(app);

		// GAME WRAPPER
		this.__wrapper = $('.gameWrapper')[0];

		// STATS
		this.__attentionPtsElt = $('#attPts')[0];

		this.__workStr = $('#workStr')[0];
		this.__workMax = $('#workMax')[0];

		this.__convertPtsElt = $('#convertPts')[0];
		this.__energyPtsElt = $('#nrjPts')[0];

		this.__health = $('.healthBar')[0];
		this.__hitPoints = [];

		this.__researchElt = $('#srchPts')[0];
		this.__formatElt = $('#frmtPts')[0];
		this.__interactionElt = $('#intcnPts')[0];

		this.__researchDesc = $('#srchDesc')[0];
		this.__formatDesc = $('#frmtDesc')[0];
		this.__interactionDesc = $('#intcnDesc')[0];

		// BUTTONS
		this.__post = $('#post')[0];
		this.__work = $('#work')[0];

		this.__convert = $('#convert')[0];

		this.__researchBtn = $('#srch')[0];
		this.__formatBtn = $('#frmt')[0];
		this.__interactionBtn = $('#intcn')[0];

		this.__buttons = [this.__post, this.__work, this.__convert, this.__researchBtn, this.__formatBtn, this.__interactionBtn];

		// TIMELINE
		this.__timelineElt = $('.timeline')[0];

		// DAMAGE 
		this.__damagePoint = $('.damagePoint')[0];
		this.__dmgElts = 0;

		// TIMER
		this.__minElt = $('#min')[0];
		this.__secElt = $('#sec')[0];

		// EFFECTS
		this.__postShadow = $('#postShadow')[0];
	}

	/**
	 * @function init
	 * When game elements are displayed
	 * Set listeners on game buttons
	 * Set visual effects
	 * Deactivate default layout buttons
	 */
	init() {

		try {
			this.__dmgElts = 0;

			this.setListeners();
			this.setEffects();
	
			this.disable(this.__work);
			this.disable(this.__researchBtn);
			this.disable(this.__formatBtn);
			this.disable(this.__interactionBtn);
		}
		catch(err) {
			return err.message;
		}
	}

	/**
	 * @function update
	 * Called each frame to update every variable element of the game
	 */
	update() {

		this.updateAttention();
		this.updateWork();
		this.updateHealth();
		this.updateShop();
		this.updateEnergy();
		this.updateTimer();
		this.updateTimeline();
	}

	/**
	 * @function postCooldown
	 * Handles post button cooldown effect and corresponding work button layout
	 * @param {int} duration cooldown time (ms)
	 */
	postCooldown(duration) {

		let self = this;
		duration = duration * 1000;

		let shadow = document.createElement('div');

		$(shadow).addClass('postShadow');
		$(shadow).css('transition-duration', this.__app.__player.postCld + 's');
		
		$(this.__wrapper).append(shadow);

		$(shadow).css('width', '0px');

		$(this.__post).css('cursor', 'default');

		let cldwn = setInterval(() => {

			duration -= 100;

			if(duration <= 0) {
				clearInterval(cldwn);

				$(shadow).remove();
				$(self.__post).css('cursor', 'pointer');
				self.__app.__player.onCld = false;
			}
		}, 100);

		this.enable(this.work);
	}

	/**
	 * @function toNewScreen
	 * Hide one screen and display another one, as grid
	 * @param {HTMLElement} toHide wrapper to hide
	 * @param {HTMLElement} toShow wrapper to show
	 * @param {function} callback with Application as default param, for context
	 */
	toNewScreen(toHide, toShow, callback) {

		let self = this;

		try {	
			$(toHide).css('display', 'none');

			setTimeout(() => {

				$(toShow).css('display', 'grid');

				if(typeof callback === 'function')
					callback(self.__app);
			}, 300);
		}
		catch(err) {
			return err.message;
		}
	}

	/**
	 * @function endGame
	 * Called at game over, launches game over UI controller
	 */
	endGame() {
		this.__app.__endController.init();
	}

	printDamage(dmg) {
		dmg = Math.round(dmg);
		let damage = document.createElement('div');

		$(damage).addClass('damagePointInstance');

		this.__dmgElts++;

		if(dmg >= 0)
			$(damage).text('+' + dmg);
		else
			$(damage).text(dmg);

		$(damage).css('z-index', this.__dmgElts);

		$(this.__wrapper).append(damage);
		
		$(damage).fadeOut(3000, () => $(damage).remove());
	}

	updateTimeline() {

		this.__timelineElt.innerHTML = '';

		this.__app.__timeline.onScreen.map(line => $(this.__timelineElt).append('<p>' + line + '</p>'));
	}
	
	updateAttention() {

		this.__attentionPtsElt.innerHTML = (this.__app.__player.attention).toFixed(0);
	}

	/**
	 * @function updateEnergy
	 * Updates Convert button and energy amount
	 * Whenever a Convert action is executed, prints current lv goal in Convert button 
	 */
	updateEnergy() {

		this.__energyPtsElt.innerHTML = this.__app.__player.energy;

		if(this.__app.__player.hasConverted)
			this.__convertPtsElt.innerHTML = this.__app.__eventController.levels[0];

		if(this.__app.__player.attention >= this.__convertPtsElt.innerHTML)
			this.enable(this.__convert);
		else
			this.disable(this.__convert);
	}

	updateWork() {

		this.__workStr.innerHTML = (this.__app.__player.workStr).toFixed(0);
		this.__workMax.innerHTML = this.__app.__player.workMax;
	}

	/**
	 * @function updateHealth
	 * Turns the whole health bar white, then as much hit points as Player's health gray
	 * ES6 syntax uneffective here because __hitPoints is a jQuery elts collection
	 */
	updateHealth() {

		for(let i = 0; i < this.__hitPoints.length; i++) {
			
			this.enable(this.__hitPoints[i]);
		}

		for(let i = Math.round(this.__app.__player.health); i >= 0; i--) {

			this.disable(this.__hitPoints[i]);
		}
	}

	updateShop() {

		this.__researchElt.innerHTML = this.__app.__player.srch;
		this.__formatElt.innerHTML = this.__app.__player.frmt;
		this.__interactionElt.innerHTML = this.__app.player.intcn;

		this.__researchDesc.innerHTML = this.__app.__player.srch * this.__app.__itemController.getActive('srch').amount;
		this.__formatDesc.innerHTML = 1 + this.__app.__player.frmt;
		this.__interactionDesc.innerHTML = (this.__app.__config.postCld - this.__app.__player.postCld).toFixed(1);

		if(this.__app.__player.energy > 0) {

			this.enable(this.__researchBtn);
			this.enable(this.__formatBtn);
			this.enable(this.__interactionBtn);
		}
	}

	updateTimer() {

		let sec = this.__app.__timer.sec;
		let min = this.__app.__timer.min;

		this.__secElt.innerHTML = (sec < 10 ? '0' : '') + sec;
		this.__minElt.innerHTML = min;
	}
	
	setListeners() {
		var self = this;

		$(this.__post).on('click', function() {
			self.__app.__gameController.post();
		});
		$(this.__work).on('click', function() {
			self.__app.__gameController.work();
		});

		$(this.__convert).on('click', function() {
			self.__app.__gameController.convert();
		});

		$(this.__researchBtn).on('click', function() {
			self.__app.__gameController.buy('srch');
		});
		$(this.__formatBtn).on('click', function() {
			self.__app.__gameController.buy('frmt');
		});
		$(this.__interactionBtn).on('click', function() {
			self.__app.__gameController.buy('intcn');
		});
	}

	deleteListeners() {

		this.__buttons.forEach(btn => $(btn).off('click'));

		this.__buttons = [];
	}

	setEffects() {

		$('.hitPoints').remove();

		let barWidth = Math.round($(this.__health).width());
		let barHeight = Math.round($(this.__health).height());

		for(var i = 1; i <= 100; i++) {

			$(this.__health).append("<div class='hitPoints'></div>");

			this.__hitPoints = $('.hitPoints');
		}

		$('.hitPoints').width(barWidth/100).height(barHeight);
	}

	disable(elt) {
		if(elt instanceof Element && !$(elt).hasClass('onCooldown')) {

			$(elt).addClass("onCooldown");
		}
	}

	enable(elt) {
		if(elt instanceof Element && $(elt).hasClass('onCooldown')) {

			$(elt).removeClass("onCooldown");
		}
	}

	// GETTERS
	get attentionPtsElt() {
		return this.__attentionPtsElt;
	}

	get energyPtsElt() {
		return this.__energyPtsElt;
	}

	get convertPtsElt() {
		return this.__convertPts;
	}

	get timelineElt() {
		return this.__timelineElt;
	}

	get shopElt() {
		return this.__shopElt;
	}

	get post() {
		return this.__post;
	}

	get postShadow() {
		return this.__postShadow;
	}

	get work() {
		return this.__work;
	}

	get researchBtn() {
		return this.__researchBtn;
	}

	get formatBtn() {
		return this.__formatBtn;
	}

	get interactionBtn() {
		return this.__interactionBtn;
	}
}