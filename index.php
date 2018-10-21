<html>
	<head>
		<meta charset="utf-8" />
		<title>A game</title>

		<!-- Application Classes -->
		<script src="Application.js"></script>
		<script src="ApplicationComponent.js"></script>
		<script src="Employee.js"></script>
		<script src="Player.js"></script>
		<script src="UIController.js"></script>
		<script src="GameController.js"></script>
		<script src="EventController.js"></script>
		<script src="Shopkeeper.js"></script>
		<script src="Ledger.js"></script>
		<script src="GameManager.js"></script>
	</head>

	<body>
		<div>
			<div>Attention : <span id="attPts"></span></div>
			<div>Money : $<span id="moneyPts"></span></div>
			<div>Reputation : <span id="repuPts"></span></div>

			<br />
			<div id="actionPost">Post</div>
			<div id="actionWork">Work</div>

			<div id="hireBlock" class="block">
				<p>For hire</p>
				<div id="hireCopywriter">Copywriter</div>
			</div>

			<div id="teamBlock" class="block">
				<p>Your Team</p>
			</div>
		</div>

		<!-- jQuery for simplified AJAX & GET requests -->
		<script
		src="https://code.jquery.com/jquery-3.3.1.js"
		integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
		crossorigin="anonymous"></script>

		<!-- Main script -->
		<script id="mainScript">
			var app = new Application();
			app.init();
		</script>
	</body>
</html>