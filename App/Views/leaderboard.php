<!-- LEADERBOARD SCREEN -->
<div class="ldbWrapper contentWrapper">

	<div class="playerCol">
		<span id=playerCol>Player</span>
	</div>
	<div class="scoreCol">
		<span id="scoreCol">Score</span>
	</div>
	<div class="timeCol">
		<span id="timeCol">Time</span>
	</div>

	<a id="menu" href="<?php echo $config->get('root') . 'game.php'; ?>">Menu</a>
</div>

<script>
	var players = <?php echo json_encode($players); ?>;
	var game = new Game;

	game.leaderboard(players);
</script>
