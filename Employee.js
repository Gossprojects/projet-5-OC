class Employee {

	// Properties must match items.json
	constructor(name, priceType, price, earnType, earnTick, earnFreq, consType, consTick, consFreq) {

		this.__name = name,
		this.__priceType = priceType,
		this.__price = price,
		this.__earnType = earnType,
		this.__earnTick = earnTick,
		this.__earnFreq = earnFreq,
		this.__consType = consType,
		this.__consTick = consTick,
		this.__consFreq = consFreq

		this.__earnInterval = null;
		this.__consInterval = null;
		this.__hasResources = null;
	}

	get name() {
		return this.__name;
	}
	get priceType() {
		return this.__priceType;
	}
	get price() {
		return this.__price;
	}
	get earnType() {
		return this.__earnType;
	}
	get earnTick() {
		return this.__earnTick;
	}
	get earnFreq() {
		return this.__earnFreq;
	}
	get consType() {
		return this.__consType;
	}
	get consTick() {
		return this.__consTick;
	}
	get consFreq() {
		return this.__consFreq;
	}
}