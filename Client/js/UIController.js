class UIController extends GameComponent {
	// Uses jQuery a lot
	constructor(app) {
		
		super(app);

		// STATS
		this.__attentionPtsElt = $('#attPts')[0];

		this.__workStr = $('#workStr')[0];
		this.__workMax = $('#workMax')[0];

		this.__convertPtsElt = $('#convertPts')[0];
		this.__energyPtsElt = $('#nrjPts')[0];

		this.__health = $('#health')[0];

		this.__researchElt = $('#srchPts')[0];
		this.__formatElt = $('#frmtPts')[0];
		this.__interactionElt = $('#intcnPts')[0];

		// BUTTONS
		this.__post = $('#post')[0];
		this.__work = $('#work')[0];
		this.__convert = $('#convert')[0];
		this.__researchBtn = $('#srch')[0];
		this.__formatBtn = $('#frmt')[0];
		this.__interactionBtn = $('#intcn')[0];

		this.__buttons = []; // all buttons

		// TIMELINE
		this.__timelineElt = $('.timeline')[0];

		// TIMER
		this.__minElt = $('#min')[0];
		this.__secElt = $('#sec')[0];
	}

	init() {
		// get all buttons elt in one array
		this.__buttons.push(this.__post, this.__work, this.__convert, this.__researchBtn, this.__formatBtn, this.__interactionBtn);
		this.setListeners();

		// Custom default layout
		this.disable(this.__work);
		this.disable(this.__researchElt);
		this.disable(this.__formatElt);
		this.disable(this.__interactionElt);

		// Convert goal
		this.__convertPtsElt.innerHTML = this.__app.__eventController.levels[0];
	}

	setListeners() {
		var self = this;

		// Set up main btns actions
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
		var self = this;

		this.__buttons.forEach(function(btn) {
			$(btn).off('click');
		});
	}

	endGame() {
		this.__app.__endController.init();
	}

	// POST/WORK
	setCooldown(elt, duration) {
		var self = this;
		if(elt instanceof Element) {
			// If elt is a DOM element

			duration = duration * 1000; // ms to secs

			// give it CSS class Cooldown
			this.disable(elt);

			if(elt === this.post) {
				// If setting cooldown on post, enable work
				this.enable(this.work);
			}

			var cldwn = setInterval(function() {
				// Keep track of time
				duration = duration - 1000;
				// When over, enable elt
				if(duration <= 0) {
					clearInterval(cldwn);
					self.enable(elt);

					if(elt === this.post) {
						// Disable work
						self.disable(this.work);
					}
				}
			}, 1000);
		}
	}

	disable(elt) {
		if(elt instanceof Element) {
		// If elt is a DOM element
			$(elt).addClass("onCooldown");
		}
	}

	enable(elt) {
		if(elt instanceof Element) {
		// If elt is a DOM element
			$(elt).removeClass("onCooldown");
		}
	}

	// TIMELINE
	updateTimeline() {
		self = this;
		self.__timelineElt.innerHTML = '';

		// Get currently active lines array
		var lines = this.__app.__timeline.onScreen;

		// Put them in p and show them
		lines.forEach(function(line) {
			var elt = '<p>' + line + '</p>';
			$(self.timelineElt).append(elt);
		});
	}
	
	// POINTS
	updateAttention() {
		this.__attentionPtsElt.innerHTML = (this.__app.__player.attention).toFixed(0);
	}

	updateEnergy() {
		this.__energyPtsElt.innerHTML = this.__app.__player.energy;

		if(this.__app.__player.hasConverted) {

			this.__convertPtsElt.innerHTML = this.__app.__eventController.levels[0];
			this.__app.__player.hasConverted = false;
		}
		// we want to print point goal for current lv
		// levels[] elts are sliced as the game goes
		// therefore levels[0] is always the currentLv
	}

	updateWork() {
		this.__workStr.innerHTML = (this.__app.__player.workStr).toFixed(0);
		this.__workMax.innerHTML = this.__app.__player.workMax;
	}

	updateHealth() {
		this.__health.innerHTML = this.__app.__player.health;
	}

	updateShop() {
		this.__researchElt.innerHTML = this.__app.__player.srch;
		this.__formatElt.innerHTML = this.__app.__player.frmt;
		this.__interactionElt.innerHTML = this.__app.player.intcn;

		if(this.__app.__player.energy > 0) {

			this.enable(this.__researchElt);
			this.enable(this.__formatElt);
			this.enable(this.__interactionElt);
		}
	}

	updateTimer() {
		var sec = this.__app.__timer.sec;
		var min = this.__app.__timer.min;
		this.__secElt.innerHTML = (sec < 10 ? '0' : '') + sec;
		this.__minElt.innerHTML = min; // we don't print 0X min but just X min to suggest you won't hold 10 min
	}
	
	// UPDATE
	update() {
		this.updateAttention();
		this.updateWork();
		this.updateHealth();
		this.updateShop();
		this.updateEnergy();
		this.updateTimer();
		this.updateTimeline();
	}

	// SHOW/HIDE ANY ELT
	show(elt) {
		if(typeof elt === 'string') {
			var id = "#" + elt;
			$(id).show();
		}
	}
	
	hide(elt) {
		if(typeof elt === 'string') {
			var id = "#" + elt;
			$(id).hide();
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

	get work() {
		return this.__work;
	}

	get researchElt() {
		return this.__researchElt;
	}

	get formatElt() {
		return this.__formatElt;
	}

	get interactionElt() {
		return this.__interactionElt;
	}
}