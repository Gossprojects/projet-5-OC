class Modifier {
	// Changes one {Player} property
	// If * instead of +, isMult = true
	// Can go back to normal after __timer secs
	// Can cost something
	// valType & priceType must match {Player} props

	constructor(name, id, desc, level, prev, valType, val, priceType, price, timer, mult, hasLines, lowFreq, highFreq) {

		this.__name = name;
		this.__id = id;
		this.__desc = desc;
		this.__level = level; // required att lv
		this.__prev = prev; // name of item (modif/empl) needed to unlock {this}
		this.__valType = valType;
		this.__value = val;
		this.__priceType = priceType;
		this.__price = price;
		this.__timer = timer;
		this.__isMult = mult; // true if object multiplies Player.valType by value
		this.__hasLines = hasLines; // true if there's dialog linked to item
		this.__lowFreq = lowFreq; // low end of dialog line setInterval freq
		this.__highFreq = highFreq;
		this.__className = 'modif'; // .prototype.name equivalent (older browser comp)

		this.__timerItv = ''; // hydrated at activation
		this.__lineItv = ''; // hydrated at activation if item has lines
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
	get value() {
		return this.__value;
	}
	get priceType() {
		return this.__priceType;
	}
	get price() {
		return this.__price;
	}
	get timer() {
		return this.__timer;
	}
	get isMult() {
		return this.__isMult;
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