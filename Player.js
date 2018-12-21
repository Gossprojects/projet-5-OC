class Player extends ApplicationComponent {

	constructor(app) {

		super(app);

		this.__money = 50;
		this.__attention = 0;
		this.__reputation = 0;

		this.__copywriters = 0;
		this.__adagents = 0;
	}

	// Operations on attention points
	increaseAttention(amount) {
		if(Number.isInteger(amount)) {
			this.__attention = (this.__attention + amount);
		}
	}
	decreaseAttention(amount) {
		if(Number.isInteger(amount)) {
			this.__attention = (this.__attention - amount);
		}
	}

	// Operations on money points
	increaseMoney(amount) {
		if(Number.isInteger(amount)) {
			this.__money = (this.__money + amount);
		}
	}
	decreaseMoney(amount) {
		if(Number.isInteger(amount)) {
			this.__money = (this.__money - amount);
		}
	}

	// Operations on reputation points
	increaseReputation(amount) {
		if(Number.isInteger(amount)) {
			this.__reputation = (this.__reputation + amount);
		}
	}
	decreaseReputation(amount) {
		if(Number.isInteger(amount)) {
			this.__reputation = (this.__reputation - amount);
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
	set money(amount) {
		if(Number.isInteger(amount))
			this.__money = amount;
	}
	set attention(amount) {
		if(Number.isInteger(amount))
			this.__attention = amount;
	}
	set reputation(amount) {
		if(Number.isInteger(amount))
			this.__reputation = amount;
	}
	set copywriters(amount) {
		if(Number.isInteger(amount))
			this.__copywriters = amount;
	}

	// Getters
	get money() {
		return this.__money;
	}
	get attention() {
		return this.__attention;
	}
	get reputation() {
		return this.__reputation;
	}
	get copywriters() {
		return this.__copywriters;
	}
	get adagents() {
		return this.__adagents;
	}
}