/*

1. Call Timer.init() to set up your Timer with 4 mandatory parameters :
- days
- hours
- minutes
- seconds

You can also set up 3 optional parameters :
- the time unit you want to decrement : "days", "hours", "minutes" or "seconds"
- by which amount
- at what pace, in milliseconds

[abandonné pour pb de compatibilté iOS]

Default values for these optional parameters are 
"seconds", 1, 1000 
Wich is the classic behavior of time. 1 second passes every 1000 milliseconds.
But you may want a Timer day to pass every hour, or 30 Timer minutes every 120 seconds, etc.

2. Call Timer.start() to start Timer

3. Call Timer.stop() to stop Timer

4. Call Timer.start() to start Timer again

5. Call Timer.reset() to give the Timer its initial values. Also it stops it. You'll need to call Timer.start() again

Timer will stop automatically at 0 and change its Timer.status from "running" to "over"
Timer.init() and Timer.reset() will change Timer.status back to "running"

*/

var running, timerSelf;
InitialValues = {days:"", hours:"", minutes:"", seconds:"", type:"", interval:"", time:""};

Timer = {
	days: "Nombre de jours non défini",
	hours: "Nombre d'heures non défini",
	minutes: "Nombre de minutes non défini",
	seconds: "Nombre de secondes non défini",
	type: "seconds",
	interval: 0,
	time: 1000,
	status: "running",
	
	init: function(userDays, userHours, userMinutes, userSeconds) {
		
		this.days = userDays;
		this.hours = userHours;
		this.minutes = userMinutes;
		this.seconds = userSeconds;
		//this.type = userType;
		//this.interval = userInterval;
		//this.time = userTime;

		if (this.interval != 0) {
			this.interval -= 1;
		}

		InitialValues.days = userDays;
		InitialValues.hours = userHours;
		InitialValues.minutes = userMinutes;
		InitialValues.seconds = userSeconds;
		//InitialValues.type = userType;
		//InitialValues.interval = userInterval;
		//InitialValues.time = userTime;

		this.status = "running";
		
	},
	update: function() {
		var modulo;
		if (timerSelf.seconds < 0) {
			modulo = Math.abs(timerSelf.seconds);
			timerSelf.minutes --;
			timerSelf.seconds = 60 - modulo;
		}
		if (timerSelf.minutes < 0) {
			modulo = Math.abs(timerSelf.minutes);
			timerSelf.hours --;
			timerSelf.minutes = 60 - modulo;
		}
		if (timerSelf.hours < 0) {
			modulo = Math.abs(timerSelf.hours);
			timerSelf.days --;
			timerSelf.hours = 24 - modulo;
		}
	},
	run: function() {
		switch(timerSelf.type) {
			case "days":
				timerSelf.days -= (1 + timerSelf.interval);
				timerSelf.update();
				break;
			case "hours":
				timerSelf.hours -= (1 + timerSelf.interval);
				timerSelf.update();
				break;
			case "minutes":
				timerSelf.minutes -= (1 + timerSelf.interval);
				timerSelf.update();
				break;
			case "seconds":
				timerSelf.seconds -= (1 + timerSelf.interval);
				timerSelf.update();
				break;
			default:
				return "config error";
		}
		if (timerSelf.days === 0 && timerSelf.hours === 0 && timerSelf.minutes === 0 && timerSelf.seconds === 0) {
			timerSelf.stop();
			timerSelf.status = "over";
		}
	},
	stop: function() {
		clearInterval(running);
	},
	start: function() {
		timerSelf = this;
		running = setInterval(this.run, this.time);
	},
	reset: function() {
		this.days = InitialValues.days;
		this.hours = InitialValues.hours;
		this.minutes = InitialValues.minutes;
		this.seconds = InitialValues.seconds;
		//this.type = InitialValues.type;
		//this.interval = InitialValues.interval;
		//this.time = InitialValues.time;
		this.status = "running";
		this.stop();
	}
};
