<!-- LEADERBOARD SCREEN -->
<div class="ldbWrapper contentWrapper">

	<!-- Content is generated in JS from data sent by PHP -->	

	<div class="ldbButtons">
		<a id="menu" href="<?php echo $config->get('root') . '/entryPoint.php'; ?>">Menu</a>
	</div>

	<script>
		var players = <?php echo json_encode($players); ?>;

		for(var i = 0; i < players.length; i ++) {
			var username = document.createElement('div');
			var userscore = document.createElement('div');
			var usertime = document.createElement('div');

			username.innerHTML = players[i].name;
			userscore.innerHTML = players[i].score;
			usertime.innerHTML = players[i].time;

			$('.ldbWrapper').append(username);
			$('.ldbWrapper').append(userscore);
			$('.ldbWrapper').append(usertime);
		}
	</script>
</div>
