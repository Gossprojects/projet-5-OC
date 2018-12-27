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
		<script src="Game.js"></script>
		<script src="GameComponent.js"></script>
		<script src="Item.js"></script>
		<script src="Player.js"></script>
		<script src="GameController.js"></script>
		<script src="EventController.js"></script>
		<script src="EnergyManager.js"></script>
		<script src="LinesManager.js"></script>
		<script src="LinesController.js"></script>
		<script src="ItemManager.js"></script>
		<script src="ItemController.js"></script>
		<script src="Timeline.js"></script>
		<script src="UIController.js"></script>

		<title>A game</title>
	</head>
	<body>
		<div class="container-fluid">
		
			<div class="row">
				<div class="col-sm-2">
					<div id="ptsWrap">
						<div>Attention : <span id="attPts"></span></div>
						<div>Energy : <span id="nrjPts"></span></div>
						
						<div id="convert" class="actionBtn">Convert</div>
					</div>
					
					<div id="btnsWrap">
						<div id="post" class="actionBtn">Post : <span id="workStr"></span></div>
						<div id="work" class="actionBtn">Work</div>
					</div>
				</div> <!-- col -->

				<div class="col-sm-4">
					<div id="timeline"></div>	
				</div> <!-- col -->

			</div> <!-- row -->

			<div class="row">
				<div class="col-sm-2">
					<div id="shopWrap">
						<div id="srch" class="actionBtn">Research <span id="srchPts"></span></div>
						<div id="frmt" class="actionBtn">Format <span id="frmtPts"></span></div>
						<div id="intcn" class="actionBtn">Interaction <span id="intcnPts"></span></div>
					</div>
				</div>
			</div> <!-- row -->

			<!-- SAVE WIP -->
			<div class="row">
				<div id="saveBtn" onclick="<?php  ?>">Save</div>
			</div>

		</div> <!-- container-fluid -->

		<!-- jQuery for simplified AJAX & GET requests -->
		<script
			src="https://code.jquery.com/jquery-3.3.1.js"
			integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
			crossorigin="anonymous">
		</script>

		<?php
			// php routing output :
			if(isset($resume) {
				// game init with cookie save
				echo $resume;
			})
			else if(isset($menu) {
				// start menu
				echo $menu;
			})
		?>
	</body>
</html>