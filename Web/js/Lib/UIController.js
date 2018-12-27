class UIController extends GameComponent {
	// Uses jQuery a lot
	constructor(app) {
		
		super(app);

		// NUMBERS
		this.__attentionPtsElt = $('#attPts')[0];
		this.__energyPtsElt = $('#nrjPts')[0];
		this.__workStr = $('#workStr')[0];
		this.__researchElt = $('#srchPts')[0];
		this.__formatElt = $('#frmtElt')[0];
		this.__interactionElt = $('#intcnElt')[0];

		// BUTTONS
		this.__post = $('#post')[0];
		this.__work = $('#work')[0];
		this.__convert = $('#convert')[0];
		this.__researchBtn = $('#srch')[0];
		this.__formatBtn = $('#frmt')[0];
		this.__interactionBtn = $('#intcn')[0];

		// TIMELINE
		this.__timelineElt = $('#timeline')[0];
	}

	init() {
		var self = this;

		// Set up main btns actions
		this.__post.addEventListener('click', function() {
			self.__app.__gameController.post();
		});
		this.__work.addEventListener('click', function() {
			self.__app.__gameController.work();
		});
		this.__convert.addEventListener('click', function() {
			self.__app.__gameController.convert();
		});

		this.__researchBtn.addEventListener('click', function() {
			self.__app.__gameController.buy('srch');
		});
		this.__formatBtn.addEventListener('click', function() {
			self.__app.__gameController.buy('frmt');
		});
		this.__interactionBtn.addEventListener('click', function() {
			self.__app.__gameController.buy('intcn');
		});

		// Custom default layout
		$(this.work).addClass("onCooldown");
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
	}

	updateWorkStr() {
		this.__workStr.innerHTML = (this.__app.__player.workStr).toFixed(0);
	}
	
	// UPDATE
	update() {
		this.updateAttention();
		this.updateEnergy();
		this.updateWorkStr();

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
}