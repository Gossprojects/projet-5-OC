class UIController extends ApplicationComponent {
	// Uses jQuery a lot
	constructor(app) {
		
		super(app);

		// NUMBERS
		this.__attentionPtsElt = $('#attPts')[0];
		this.__moneyPtsElt = $('#moneyPts')[0];
		this.__workStr = $('#workStr')[0];

		// BUTTONS
		this.__post = $('#post')[0];
		this.__work = $('#work')[0];

		// TIMELINE
		this.__timelineElt = $('#timeline')[0];

		// SHOP
		this.__shopElt = $('#shop')[0];
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

		// Custom default layout
		$(this.work).addClass("onCooldown");
	}

	setCooldown(elt, duration) {

		if(elt instanceof Element) {
			// If elt is a DOM element

			duration = duration * 1000; // ms to secs

			$(elt).addClass("onCooldown");

			if(elt === this.post) {
				// If setting cooldown on post, enable work
				$(this.work).removeClass("onCooldown");
			}

			var cldwn = setInterval(function() {

				duration = duration - 1000;

				if(duration <= 0) {
					clearInterval(cldwn);
					$(elt).removeClass("onCooldown");

					if(elt === this.post) {
						// If cooldown over on post, disable work
						$(this.work).addClass("onCooldown");
					}
				}
			}, 1000);
		}
	}

	// SHOP
	updateShop() {
		self = this;
		self.__shopElt.innerHTML = '';

		var items = this.__app.__shopController.inShop; // array of available items
		items.forEach(function(item) {
			// create item in DOM & activate buy button
			var elt = document.createElement('div');
			elt.id = item.name;
			elt.textContent = item.name;
			elt.classList.add('item');

			// binds its description
			var descElt = document.createElement('div');
			descElt.textContent = item.desc;
			descElt.classList.add('desc');


			elt.addEventListener('click', function() {
				self.__app.__gameController.buy(item);
			});

			// place item in shop div and its desc in item div
			$(self.shopElt).append(elt);
			$(elt).append(descElt);
		});
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
		this.__attentionPtsElt.innerHTML = (this.__app.__player.attention).toFixed(1);
	}
	updateMoney() {
		this.__moneyPtsElt.innerHTML = this.__app.__player.money;
	}
	updateWorkStr() {
		this.__workStr.innerHTML = (this.__app.__player.workStr).toFixed(1);
	}
	
	// UPDATE
	update() {
		this.updateAttention();
		this.updateMoney();
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

	get moneyPtsElt() {
		return this.__moneyPtsElt;
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