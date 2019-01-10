class Item {
	// Changes one Player property on activate()

	constructor(name, target, operator, amount) {

		this.__name = name;
		this.__level = 1;
		this.__target = target;
		this.__operator = operator;
		this.__amount = amount;
	}

	get name() {
		return this.__name;
	}
	get level() {
		return this.__level;
	}
	get target() {
		return this.__target;
	}
	get operator() {
		return this.__operator;
	}
	get amount() {
		return this.__amount;
	}
}