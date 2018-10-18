<p id="attentionWrap">Attention : <span id="attPts"></span></p>
<p id="moneyWrap">Money : <span id="moneyPts"></span></p>
<div onClick="addAttention()" id="newsBtn" class="button">News</div>
<div onClick="sellAttention()" id="sellBtn" class="button">Sell attention</div>
<div onClick="journosHire()" id="journosBtn" class="hidden">Hire journalist</div>
<div onClick="addforceHire()" id="addforceBtn" class="hidden">Hire addmen</div>
<p id="journosWrap" class="hidden">Journalists : <span id="journosPts"></span></p>
<p id="addforceWrap" class="hidden">Addforce : <span id="addforcePts"></span></p>

<script>
	// DOM INIT
	var attentionElt = document.getElementById('attPts');
	var moneyElt = document.getElementById('moneyPts');
	var journosElt = document.getElementById('journosPts');
	var journosBtn = document.getElementById('journosBtn');
	var addforceElt = document.getElementById('addforcePts');
	var addforceBtn = document.getElementById('addforceBtn');
	var pointsElts = [];

	pointsElts.push(attentionElt, moneyElt, journosElt, addforceElt);

	attentionElt.value = 0;
	moneyElt.value = 10;
	journosElt.value = 0;
	addforceElt.value = 0;

	// CONFIG
	var attentionPrice = 50;
	var attentionMoney = 10;

	var journosActivate = 20; // money pts
	var journosPrice = 15;
	var journoSpeed = 10000; // millisecs
	var journoStr = 10;

	var addforceActivate = 50; // money pts
	var addforcePrice = 10;
	var addforceSpeed = 5000; // millisecs
	var addforceStr = 10;

	var refreshRate = 10; // millisecs

	// PLAYER ACTIONS
	function addAttention() {
		attentionElt.textContent = attentionElt.value++;
		// add cooldown
	}

	function sellAttention() {
		if(attentionElt.value >= attentionPrice) {
			attentionElt.value = attentionElt.value - attentionPrice;

			moneyElt.value += attentionMoney;
		}
	}

	function journosHire() {
		if(moneyElt.value >= journosPrice) {
			journosElt.textContent = journosElt.value++;
		
			moneyElt.value -= journosPrice;
		
			journoToWork();
		}
	}

	function addforceHire() {
		if(moneyElt.value >= addforcePrice) {
			addforceElt.textContent = addforceElt.value++;

			moneyElt.value -= addforcePrice;

			addforceToWork();}
	}

	// GAME
	var gameUpdate = setInterval(gameUpdate, refreshRate);
	
	function gameUpdate() {
		pointsElts.forEach(function(elt) {
			elt.textContent = elt.value;
		});

		if(moneyElt.value >= journosActivate) {
			$('#journosBtn').removeClass('hidden');
			$('#journosWrap').removeClass('hidden');
		}

		if(moneyElt.value >= addforceActivate) {
			$('#addforceBtn').removeClass('hidden');
			$('#addforceWrap').removeClass('hidden');
		}
	}
	
	function journoToWork() {
		var isWorking = setInterval(function() {
				attentionElt.value += journoStr;
			}, journoSpeed);
	}

	function addforceToWork() {
		var isWorking = setInterval(function() {
				attentionElt.value -= addforceStr;
				moneyElt.value += addforceStr;
			}, addforceSpeed);
	}
	
</script>