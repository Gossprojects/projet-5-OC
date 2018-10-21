class Contract {

	// Properties must match contracts.json
	constructor(name, priceType, price, outcomeType, outcome, unlockId) {

		this.__name = name;
		this.__priceType = priceType;
		this.__price = price;
		this.__outcomeType = outcomeType;
		this.__outcome = outcome;
		this.__unlockId = unlockId;
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
	get outcomeType() {
		return this.__outcomeType;
	}
	get outcome() {
		return this.__outcome;
	}
	get unlockId() {
		return this.__unlockId;
	}
}