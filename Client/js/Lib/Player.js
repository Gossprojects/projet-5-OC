class Player extends GameComponent {
// Stores every variable information about the current game
// When game is saved, {Player} is parsed to JSON and stored in a cookie

	constructor(app,
		health = 50,

		workInit = 0,
		workStr = 0,
		workMult = 1,
		workMax = 1,
		workCount = 0,

		postCld = 7,
		currentLv = 1,

		attention = 0,

		energy = 0,
		energySpent = 0,
		energyEarned = 0,

		srch = 0,
		frmt = 0,
		intcn = 0,

		hasConverted = false
		) {

		super(app);
		
		// STATS
		this.__health = health;

		this.__workInit = workInit; // work value after each Post
		this.__workStr = workStr; // work value between each Post
		this.__workMult = workMult; // work incrementer
		this.__workMax = workMax; // max Work Player can do between two Post
		this.__workCount = workCount; // Work nb between each Post

		this.__postCld = postCld; // in secs

		this.__currentLv = currentLv;

		this.__hasConverted = hasConverted; // UI switch (see UIController.updateEnergy())

		// RESSOURCES
		this.__attention = attention; // earned by posting
		this.__energy = energy; // earned by converting attention
		this.__energySpent = energySpent;
		this.__energyEarned = energyEarned; // helps GameController tell price of energy Player converts

		// INVENTORY
		this.__srch = srch; // research/format/interaction bought with energy
		this.__frmt = frmt;
		this.__intcn = intcn;
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
	set hasConverted(state) {
		this.__hasConverted = state;
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