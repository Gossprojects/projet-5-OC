class Shopkeeper extends ApplicationComponent {

	constructor(app) {
		super(app);
		
		// Storing items.json data in __items
		var items = [];
		$.getJSON('items.json')
			.done(function(data) {
				$.each(data.item, function(item, val) {
					items.push(val);
				});
			})
			.fail(function(jqxhr, textStatus, error) {
				var err = textStatus + ", " + error;
				console.log("Request failed: " + err);
			});
		
		this.__items = items;
		// outsource JSON file url in some config file

		// Storing contracts.json data in __contracts
		var contracts = [];
		$.getJSON('contracts.json')
			.done(function(data) {
				$.each(data.item, function(item, val) {
					contracts.push(val);
				});
			})
			.fail(function(jqxhr, textStatus, error) {
				var err = textStatus + ", " + error;
				console.log("Request failed: " + err);
			});	
		this.__contracts = contracts;	
	}

	// Creates chosen Employee, activates its earning & consuming intervals, stores it in Ledger
	activate(item) {
		var self = this;

		// JS object from JSON array
		var employee = this.createEmployee(this.getItem(item, "employee"));

		// DYNAMIC ACTIVATION : two intervals stored in {employee}
		// Earning interval
		if(employee.earnType != "") {
			var earnMethod = "increase" + employee.earnType.charAt(0).toUpperCase() + employee.earnType.substr(1);

			employee.__earnInterval = setInterval(function() {
				self.__app.__player[earnMethod](employee.earnTick);
			}, employee.earnFreq);	
		}

		// Consuming interval
		if(employee.consType != "") {
			var consMethod = "decrease" + employee.consType.charAt(0).toUpperCase() + employee.consType.substr(1);

			employee.__consInterval = setInterval(function() {
				self.__app.__player[consMethod](employee.consTick);
			}, employee.consFreq);	
		}

		// Storing {employee} in {ledger}
		this.__app.__ledger.activeItems.push(employee);

		return employee;
	}

	// Deletes first occurrence of item in {ledger} array & clears its intervals
	deactivate(item) {
		var activeEmps = this.__app.__ledger.activeItems;

		for(var i = 0; i < activeEmps.length; i++) {
			if(activeEmps[i].name === item) {
				clearInterval(activeEmps[i].__earnInterval);
				clearInterval(activeEmps[i].__consInterval);

				activeEmps.splice(i, 1);

				break;
			}
		}
	}

	// Creates chosen Contract, takes price from player, gives outcome and returns UnlockID
	sell(item) {
		var contract = this.createContract(this.getItem(item), "contract");
		var priceMethod = "decrease" + contract.priceType.charAt(0).toUpperCase() + contract.substr(1);
		var outcomeMethod = "increase" + contract.outcomeType.charAt(0).toUpperCase() + contract.substr(1);

		this.__app.__player[priceMethod](contract.price);
		this.__app.__player[outcomeMethod](contract.price);

		return contract.unlockId;
	}

	// Get JSON item from __items or __contracts array : type is either 'employee' or 'contract'
	getItem(item, type) {
		if(type == "employee") {
			for(var i = 0; i < this.__items.length; i++) {
				if(this.__items[i].name == item) {
					return this.__items[i];
				}
			}
		}
		else if(type == "contract") {
			for(var i = 0; i < this.__contracts.length; i++) {
				if(this.__contracts[i].name == item) {
					return this.__contracts[i];
				}
			}
		}
		else
			return "Error: type unspecified";
	}

	// Get JS employee from JSON object
	createEmployee(item) {
		if(typeof item == 'object') {
			var employee = new Employee(item.name, 
										item.priceType, 
										item.price, 
										item.earnType, 
										item.earnTick, 
										item.earnFreq, 
										item.consType, 
										item.consTick, 
										item.consFreq);
			
			return employee;
		}
	}

	// Get JS contract from JSON object
	createContract(item) {
		if(typeof item == 'object') {
			var contract = new Contract(item.name,
										item.priceType,
										item.price,
										item.outcomeType,
										item.outcome,
										item.unlockId);
			
			return contract;
		}
	}

	get items() {
		return this.__items;
	}
	get contracts() {
		return this.__contracts;
	}
}