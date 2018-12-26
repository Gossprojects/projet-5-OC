class Player extends ApplicationComponent {

	constructor(app) {

		super(app);
		
		// STATS
		this.__workInit = 1;
		this.__workStr = 1;
		this.__workMult = 0.1;
		this.__postCld = 7; // secs

		// RESSOURCES
		this.__money = 50;
		this.__attention = 0;

		// INVENTORY
		this.__inventory = []; // every item bought
	}

	// Operations on attention points
	increaseAttention(nb) {
		if($.isNumeric(nb)) {
			this.__attention = (this.__attention + nb);
		}
	}
	decreaseAttention(nb) {
		if($.isNumeric(nb)) {
			this.__attention = (this.__attention - nb);
		}
	}

	// Operations on money points
	increaseMoney(nb) {
		if($.isNumeric(nb)) {
			this.__money = (this.__money + nb);
		}
	}
	decreaseMoney(nb) {
		if($.isNumeric(nb)) {
			this.__money = (this.__money - nb);
		}
	}

	// Hire/fire copywriter
	plusCopywriter() {
		this.__copywriters++;
	}
	minusCopywriter() {
		this.__copywriters--;
	}

	// Hire/fire adagent
	plusAdagent() {
		this.__adagents++;
	}
	minusAdagent() {
		this.__adagents--;
	}

	// Setters
	set money(nb) {
		if($.isNumeric(nb))
			this.__money = nb;
	}
	set attention(nb) {
		if($.isNumeric(nb))
			this.__attention = nb;
	}
	set copywriters(nb) {
		if($.isNumeric(nb))
			this.__copywriters = nb;
	}

	set workInit(nb) {
		if($.isNumeric(nb)) {
			this.__workInit = nb;
		}
	}
	set workStr(nb) {
		if($.isNumeric(nb))
			this.__workStr = nb;
	}
	set workMult(nb) {
		if($.isNumeric(nb))
			this.__workMult = nb;
	}
	set postCld(nb) {
		if($.isNumeric(nb)) {
			this.__postCld = nb;
		}
	}

	// Getters
	get money() {
		return this.__money;
	}
	get attention() {
		return this.__attention;
	}

	get inventory() {
		return this.__inventory;
	}

	get workInit() {
		return this.__workInit;
	}
	get workStr() {
		return this.__workStr;
	}
	get workMult() {
		return this.__workMult;
	}
	get postCld() {
		return this.__postCld;
	}
}