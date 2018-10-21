class UIController extends ApplicationComponent {

	constructor(app) {
		
		super(app);

		// Layout
		this.__attentionPtsElt = document.getElementById('attPts');
		this.__moneyPtsElt = document.getElementById('moneyPts');
		this.__reputationPtsElt = document.getElementById('repuPts');
		
		this.__hireBlock = document.getElementById('hireBlock');

		// Action buttons 
		// HIRE BTNS MUST BE NAME AS SUCH __hireName & BE SET IN init()
		this.__hireCopywriter = document.getElementById('hireCopywriter');
		
		this.__actionPost = document.getElementById('actionPost');
		this.__actionWork = document.getElementById('actionWork');
	}

	init() {
		var self = this;

		this.__actionPost.addEventListener('click', function() {
			self.__app.__gameController.post();
		});
		this.__actionWork.addEventListener('click', function() {
			self.__app.__gameController.work();
		});

		// will prob be a loop
		this.setHire('__hireCopywriter');
		// will also be a loop
		this.hide('teamBlock');
	}

	setHire(property) {
		var self = this;
		var empl = property.charAt(6).toLowerCase() + property.substr(7);

		this[property].addEventListener('click', function() {
			self.__app.__gameController.hire(empl);
		});
	}

	setTeam() {
		var ledgerNames = [];
		var catalogNames = [];
		for (var i = 0; i < this.__app.__ledger.activeItems.length; i++) {

		}
		/*
		for(var i = 0; i < this.__app.__shopkeeper.items.length; i++) {
			// If a type of employee is currently active, show it as DOM elt
			this.__app.__ledger.activeItems.find(

			) if(this.__app.__shopkeeper.items[i].name)
		}
		if(this.__app.__ledger.activeItems) */
	}

	refresh() {
		this.updateAttention();
		this.updateMoney();
		this.updateReputation();
	}

	// Show and hide based on ID of element as string. REQUIRES JQUERY
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

	updateAttention() {
		this.__attentionPtsElt.innerHTML = this.__app.__player.attention;
	}
	updateMoney() {
		this.__moneyPtsElt.innerHTML = this.__app.__player.money;
	}
	updateReputation() {
		this.__reputationPtsElt.innerHTML = this.__app.__player.reputation;
	}
}