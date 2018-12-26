class ShopController extends ApplicationComponent {

	constructor(app) {

		super(app);

		this.__inShop = []; // items shown in game {js object}. Pushed here, spliced by GameController
	}

	init() {

	}

	activateModif(modif) {
		// deduces price, gives value, activates timer
		var self = this;
		//if there's a price, deduce it from corresponding {Player} prop
		if(modif.priceType && modif.price > 0) { 
			console.log('price');
			this.__app.__player[modif.priceType] = this.__app.__player[modif.priceType] - modif.price;
		}

		// if there's a value, add or multiply it to corresponding {Player} prop
		if(modif.valType && modif.value > 0) { 

			if(modif.isMult) { // that multiplies
				console.log('mult');
				this.__app.__player[modif.valType] = this.__app.__player[modif.valType] * modif.value;
			}
			else { // that adds to
				console.log('incr');
				this.__app.__player[modif.valType] = this.__app.__player[modif.valType] + modif.value;
			} 
		}

		// if there's a timer, value is restored after timer duration
		if(modif.timer) {

			if(modif.isMult) { // divide
				modif.timerItv = setTimeout(function() {
					console.log('timer');
					self.__app.__player[modif.valType] = self.__app.__player[modif.valType] / modif.value;
				}, timer * 1000);
			}
			else { // substract
				modif.timerItv = setTimeout(function() {
					console.log('timer');
					self.__app.__player[modif.valType] = self.__app.__player[modif.valType] - modif.value;
				}, timer * 1000);
			}
		}
	}

	activateEmployee(empl) {
		// deduces price, activates earning & consumption
		var self = this;
		// if there's a price
		if(empl.priceType && empl.price > 0) {
			// deduce price from {Player} regarding price type
			this.__app.__player[empl.priceType] = this.__app.__player[empl.priceType] - empl.price;
		}

		// if there's earnings (type, frequency, amount)
		if(empl.valType && empl.valFreq && empl.valTick > 0) {
			// add valTick to valType of {Player} each valFreq ms
			empl.valItv = setInterval(function() {
				self.__app.__player[empl.valType] = self.__app.__player[empl.valType] + empl.valTick;
			}, empl.valFreq * 1000);
		}

		// if there's consumption (type, frequency, amount)
		if(empl.costType && empl.costFreq && empl.costTick > 0) {
			// add valTick to valType of {Player} each valFreq ms
			empl.costItv = setInterval(function() {
				self.__app.__player[empl.costType] = self.__app.__player[empl.costType] - empl.costTick;
			}, empl.costFreq * 1000);
		}
	}

	activateItemLines(item) {
		// post one line each (rdm between low & high) secs
		if(item.hasLines) {
			var self = this;

			// generate random freq
			var freq = Math.floor(Math.random() * item.highFreq) + item.lowFreq;

			// throw line
			this.__app.__timeline.newLine(this.__app.__linesManager.getItemLineOf(item));

			item.__lineItv = setTimeout(function() {
				// set next timeout
				self.activateItemLines(item);
			}, freq * 1000);
		}
	}

	show(item) {
		this.__inShop.push(item);
	}

	get inShop() {
		return this.__inShop;
	}
}