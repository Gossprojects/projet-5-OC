class Player {

	constructor() {
		
		// STATS
		this.__workInit = 0; // work value after each Post action
		this.__workStr = 0; // work value before each Post action
		this.__workMult = 1; // power multiplier
		this.__workMax = 1; // max Work actions Player can do between two Post actions
		this.__workCount = 0; // work nb between each Post

		this.__currentLv = 1;

		this.__hasConverted = true; // toggles after converting lv up points so next lv goal is update in UI
		this.__onCld = false;

		// RESSOURCES
		this.__attention = 0; // earned by posting, reseted each level
		this.__totalAttention = 0; // w/o level reset
		this.__energy = 0; // earned by converting attention
		this.__energySpent = 0; // increases by 1 w/ each item bought
		this.__energyEarned = 0; // helps GameController tell price of energy Player converts

		// INVENTORY
		this.__srch = 0;
		this.__frmt = 0;
		this.__intcn = 0;
	}

	/**
	 * @function init
	 * Sets up properties w/ data from Config
	 */
	init(config) {
		this.__health = config.initHealth;
		this.__postCld = config.postCld; // in secs
		this.__currentDmg = config.initDmg;
		this.__speed = config.initSpeed;
	}

	/**
	 * @function reset
	 * Sets up properties to default
	 */
	reset() {
		this.__workInit = 
		this.__workStr = 
		this.__workCount = 
		this.__attention = 
		this.__totalAttention = 
		this.__energy = 
		this.__energySpent = 
		this.__energyEarned = 
		this.__srch = 
		this.__frmt = 
		this.__intcn = 0;

		this.__hasConverted = true;
		this.__onCld = false;

		this.__workMult =
		this.__workMax = 
		this.__currentLv = 1;
	}

	// STATS SETTERS

	set health(nb) {
		if($.isNumeric(nb))
			this.__health = nb;
	}
	set workInit(nb) {
		if($.isNumeric(nb))
			this.__workInit = nb;
	}
	set workStr(nb) {
		if($.isNumeric(nb))
			this.__workStr = nb;
	}
	set workMult(nb) {
		if($.isNumeric(nb))
			this.__workMult = nb;
	}
	set workMax(nb) {
		if($.isNumeric(nb))
			this.__workMax = nb;
	}
	set workCount(nb) {
		if($.isNumeric(nb))
			this.__workCount = nb;
	}

	set postCld(nb) {
		if($.isNumeric(nb))
			this.__postCld = nb;
	}

	set currentLv(nb) {
		if($.isNumeric(nb))
			this.__currentLv = nb;
	}

	set currentDmg(nb) {
		if($.isNumeric(nb))
			this.__currentDmg = nb;
	}

	set hasConverted(state) {
		this.__hasConverted = state;
	}

	set onCld(state) {
		this.__onCld = state;
	}

	set speed(nb) {
		if($.isNumeric(nb))
			this.__speed = nb;
	}

	// RESSOURCES SETTERS

	set energy(nb) {
		if($.isNumeric(nb))
			this.__energy = nb;
	}
	set energySpent(nb) {
		if($.isNumeric(nb))
			this.__energySpent = nb;
	}
	set energyEarned(nb) {
		if($.isNumeric(nb))
			this.__energyEarned = nb;
	}
	set attention(nb) {
		if($.isNumeric(nb))
			this.__attention = nb;
	}
	set totalAttention(nb) {
		if($.isNumeric(nb))
			this.__totalAttention = nb;
	}

	// INVENTORY SETTERS

	set srch(nb) {
		if($.isNumeric(nb))
			this.__srch = nb;
	}
	set frmt(nb) {
		if($.isNumeric(nb))
			this.__frmt = nb;
	}
	set intcn(nb) {
		if($.isNumeric(nb))
			this.__intcn = nb;
	}

	// STATS GETTERS

	get health() {
		return this.__health;
	}

	get currentLv() {
		return this.__currentLv;
	}
	get currentDmg() {
		return this.__currentDmg;
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
	get workMax() {
		return this.__workMax;
	}
	get workCount() {
		return this.__workCount;
	}

	get min() {
		return this.__min;
	}
	get sec() {
		return this.__sec;
	}

	get postCld() {
		return this.__postCld;
	}

	get hasConverted() {
		return this.__hasConverted;
	}

	get onCld() {
		return this.__onCld;
	}

	get speed() {
		return this.__speed;
	}

	// RESSOURCES GETTERS

	get energy() {
		return this.__energy;
	}
	get energySpent() {
		return this.__energySpent;
	}
	get energyEarned() {
		return this.__energyEarned;
	}

	get attention() {
		return this.__attention;
	}
	get totalAttention() {
		return this.__totalAttention;
	}

	// INVENTORY GETTERS

	get srch() {
		return this.__srch;
	}
	get frmt() {
		return this.__frmt;
	}
	get intcn() {
		return this.__intcn;
	}
}