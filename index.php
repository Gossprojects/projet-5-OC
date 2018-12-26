<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<!-- mobile rendering & zooming --> 
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<!-- CSS -->
		<link rel="stylesheet" href="styles.css">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

		<!-- Application Classes -->
		<script src="Application.js"></script>
		<script src="ApplicationComponent.js"></script>
		<script src="Modifier.js"></script>
		<script src="Employee.js"></script>
		<script src="Player.js"></script>
		<script src="GameController.js"></script>
		<script src="Timeline.js"></script>
		<script src="ShopController.js"></script>
		<script src="ShopManager.js"></script>
		<script src="UIController.js"></script>
		<script src="EventController.js"></script>
		<script src="LinesManager.js"></script>

		<title>A game</title>
	</head>
	<body>
		<div class="container-fluid">
		
			<div class="row">
				<div class="col-sm-2">
					<div id="ptsWrap">
						<div>Attention : <span id="attPts"></span></div>
						<div>Money : $<span id="moneyPts"></span></div>
					</div>

					<div id="btnsWrap">
						<div id="post" class="actionBtn">Post</span></div>
						<div id="work" class="actionBtn">Work : <span id="workStr"></div>
					</div>
				</div> <!-- col -->

				<div class="col-sm-4">
					<div id="timeline"></div>	
				</div> <!-- col -->

			</div> <!-- row -->

			<div class="row">
				<div id="shop"></div>
			</div> <!-- row -->

		</div> <!-- container-fluid -->

		<!-- jQuery for simplified AJAX & GET requests -->
		<script
			src="https://code.jquery.com/jquery-3.3.1.js"
			integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
			crossorigin="anonymous">
		</script>

		<!-- Main script -->
		<script id="mainScript">
			var app = new Application();
			app.init();
			// modifier name, id, level, prev, valType, val, priceType, price, timer, mult, hasLines, lowFreq, highFreq
			var test = new Modifier('test', 1, 1, false, false, false, false, false, false, false, true, 1, 5);
		</script>
	</body>
</html>