class ShopManager extends ApplicationComponent {

	constructor(app) {

		super(app);

		this.__modifiers = [];
		this.__employees = [];
		this.__items = []; // every buyable item specification. MODIFIERS AND EMPLOYEES
		/* {name: "pen", level: 1}, 
						{name: "camera", level: 2}, 
						{name: "informant", level: 3} */
	}

	init() {
		this.getAll();
		// WORKING TEST
		// Modifier(name, id, desc, level, prev, valType, val, priceType, price, timer, mult, hasLines, lowFreq, highFreq)
		// Employee(name, id, desc, level, prev, valType, valFreq, valTick, costType, costFreq, costTick, priceType, price, hasLines, lowFreq, highFreq)
		var titles = new Modifier('titles', 1, 'better titles (25$, doubles work effect)', 1, false, 'workMult', 2, 'money', 25, false, true, false, false, false); // workMult*2 money-50 no timer
		var comments = new Modifier('comments', 2, 'comments on your posts (25$)', 1, false, false, false, 'money', 25, false, false, true, 5, 15); // money-50 no timer
		var angles = new Modifier('angles', 3, 'edgier angles (25$, doubles work effect)', 2, 1, 'workMult', 2, 'money', 25, false, true, false, false, false); // workMult*2 money-25 no timer
		var moderator = new Employee('moderator', 4, 'someone to handle comments (1$/sec)', 2, 2, false, false, false, 'money', 5, 1, false, false, false, false, false);
		
		this.__items.push(titles, comments, angles, moderator);
	}

	getAll() {
		var jsonModifs = this.getModifsFromJson();
		var jsonEmpls = this.getEmplsFromJson();
		// turns jsonElts into js array
		// fills in __modifiers & __employees
		// merges both into __items
	}
	
	getModifsFromJson() {
		// ajax call
		// returns json array
	}

	getEmplsFromJson() {
		// ajax call
		// returns json array 
	}

	createModif(modif) {
		// creates JS Modifier from JSON Modifier
		// wip
		var item = new Modifier(spec.att, spec.val, spec.priceType, spec.price, spec.timer);
		
		return item;
	}

	createEmploy(emp) {

	}

	get items() {
		return this.__items;
	}
}