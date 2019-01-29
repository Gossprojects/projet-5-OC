<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<!-- mobile rendering & zooming --> 
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<!-- CSS -->
		<link rel="stylesheet" href="css/styles.css">

		<!-- Javascript Application Classes -->
		<!-- RELATIVE PATHS GO FROM ENTRYPOINT -->
		<!-- Library -->
		<script src="js/Lib/Game.js"></script>
		<script src="js/Lib/GameComponent.js"></script>
		<script src="js/Lib/Config.js"></script>
		<script src="js/Lib/Item.js"></script>
		<script src="js/Lib/Player.js"></script>
		<script src="js/Lib/Timeline.js"></script>
		<script src="js/Lib/Timer.js"></script>
		<!-- jQuery -->
		<script src="js/Lib/jQuery.js"></script>

		<!-- Controlers -->
		<script src="js/UIController.js"></script>
		<script src="js/GameController.js"></script>
		<script src="js/EventController.js"></script>
		<script src="js/LinesController.js"></script>
		<script src="js/ItemController.js"></script>
		<script src="js/EndController.js"></script>
		<script src="js/MenuController.js"></script>
		<script src="js/LeaderboardController.js"></script>

		<!-- Managers -->
		<script src="js/Model/LevelsManager.js"></script>
		<script src="js/Model/LinesManager.js"></script>
		<script src="js/Model/ItemManager.js"></script>
		<script src="js/Model/MenuManager.js"></script>

		<title>Sauver la vérité</title>
	</head>
	<body>
		<div class="pageWrapper">

			<?php echo $content ?>

		</div>
	</body>
</html>