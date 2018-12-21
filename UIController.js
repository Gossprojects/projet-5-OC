class UIController extends ApplicationComponent {
	// USES JQUERY A LOT
	constructor(app) {
		
		super(app);

		// LAYOUT
		this.__attentionPtsElt = $('#attPts')[0];
		this.__moneyPtsElt = $('#moneyPts')[0];
		this.__reputationPtsElt = $('#repuPts')[0];
		
		this.__hireBlock = $('#hireBlock')[0];

		this.__copywriterNb = $('#copywriterBlock').find('.nb')[0];
		this.__adagentNb = $('#adagentBlock').find('.nb')[0];

		// ACTION BUTTONS
		// PLACES BTNS ARE NAMED __unlockName & CALLED IN init() so events are set
		this.__unlockNewsroom = $('#newsroom')[0];

		// HIRE/FIRE UNLOCK BTNS ARE NAMED __hireEmployee/__fireEmployee & CALLED IN init() so events are set
		this.__hireCopywriter = $('#copywriterBlock').find('.hire')[0];
		this.__hireAdagent = $('#adagentBlock').find('.hire')[0];

		this.__fireCopywriter = $('#copywriterBlock').find('.fire')[0];
		this.__fireAdagent = $('#adagentBlock').find('.fire')[0];

		// POST & WORK
		this.__actionPost = $('#actionPost')[0];
		this.__actionWork = $('#actionWork')[0];
	}

	init() {
		var self = this;

		this.__actionPost.addEventListener('click', function() {
			self.__app.__gameController.post();
		});
		this.__actionWork.addEventListener('click', function() {
			self.__app.__gameController.work();
		});

		// should be a loop
		this.setUnlock('__unlockNewsroom');

		this.setHire('__hireCopywriter');
		this.setHire('__hireAdagent');

		this.setFire('__fireCopywriter');
		this.setFire('__fireAdagent');

		// should also be a loop
		this.hide('newsroomBlock');
	}

	popupShow() {
		$('#popupBlock').html($('<div>', {
			class: 'popup'
		}));
		$('.popup').html($('<p>', {
			id: 'popupTxt'
		}));
		$('#popupTxt').append('Text');
	}

	popupDestroy() {
		$('#popupBlock').html('');
	}

	// Links actions to DOM elts 
	setHire(property) {
		var self = this;
		var empl = property.charAt(6).toLowerCase() + property.substr(7);
		
		if(this[property]) {
			this[property].addEventListener('click', function() {
				self.__app.__gameController.hire(empl);
			});
		}
	}

	setFire(property) {
		var self = this;
		var empl = property.charAt(6).toLowerCase() + property.substr(7);

		if(this[property]) {
			this[property].addEventListener('click', function() {
				self.__app.__gameController.fire(empl);
			});
		}
	}
	
	setUnlock(property) {
		var self = this;
		var place = property.charAt(8).toLowerCase() + property.substr(9);
		
		if(this[property]) {
			this[property].addEventListener('click', function() {
				self.__app.__gameController.sell(place);
			});
		}
	}

	// Show and hide based on ID of element as string
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

	// Values update (freq in EventController.init)
	refresh() {
		this.updateCopywriters();
		this.updateAdagents();

		this.updateAttention();
		this.updateMoney();
		this.updateReputation();
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

	updateCopywriters() {
		this.__copywriterNb.innerHTML = this.__app.__player.copywriters;
	}
	updateAdagents() {
		this.__adagentNb.innerHTML = this.__app.__player.adagents;
	}
}