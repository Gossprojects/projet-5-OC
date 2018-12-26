class Employee {
	// Increases one {Player} property on a timely basis
	// Can cost something on a timely basis
	// Can cost something initially
	// Can be deleted (fired)

	constructor(name, id, desc, level, prev, valType, valFreq, valTick, costType, costFreq, costTick, priceType, price, hasLines, lowFreq, highFreq) {

		this.__name = name;
		this.__id = id;
		this.__desc = desc;
		this.__level = level;
		this.__prev = prev; // name of item (modif/empl) needed to unlock {this}
		this.__valType = valType; // attention or money
		this.__valFreq = valFreq; // interval (ms)
		this.__valTick = valTick; // amount
		this.__costType = costType;
		this.__costFreq = costFreq;
		this.__costTick = costTick;
		this.__priceType = priceType;
		this.__price = price;
		this.__hasLines = hasLines; // true if there's dialog linked to item
		this.__lowFreq = lowFreq; // low end of dialog line setInterval freq
		this.__highFreq = highFreq;
		this.__className = "empl";

		// hydrated at activation
		this.__valItv = ''; // if item has val
		this.__costItv = ''; // if item has cost
		this.__linesItv = ''; // if item has lines
	}

	get name() {
		return this.__name;
	}
	get id() {
		return this.__id;
	}
	get desc() {
		return this.__desc;
	}
	get level() {
		return this.__level;
	}
	get prev() {
		return this.__prev;
	}
	get valType() {
		return this.__valType;
	}
	get valFreq() {
		return this.__valFreq;
	}
	get valTick() {
		return this.__valTick;
	}
	get costType() {
		return this.__costType;
	}
	get costFreq() {
		return this.__costFreq;
	}
	get costTick() {
		return this.__costTick;
	}
	get priceType() {
		return this.__priceType;
	}
	get price() {
		return this.__price;
	}
	get hasLines() {
		return this.__hasLines;
	}
	get lowFreq() {
		return this.__lowFreq;
	}
	get highFreq() {
		return this.__highFreq;
	}
	get className() {
		return this.__className;
	}
}