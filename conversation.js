(function($) {

	function printMsg(emit, receive) {

		$('div#conversation').append('<p class="playerTalk">'+ emit +'</p>');
		$('div#conversation').append('<p class="npcTalk">'+ receive +'</p>');
	}

	$('button').on('click', function(elt) {

		var answer;

		$.ajax({
			method: 'POST',
			url: 'Application.php',
			data: 'talk='+ elt.target.id,
			async: false
		})
			.done(function(result, status) {
				answer = JSON.parse(result);
				console.log(answer);
			});
		
		if(elt.target.id == 1) {
			printMsg('bonjour', answer);
		}
		else if(elt.target.id == 2) {
			printMsg('aurevoir', answer);
		}

	});

})(jQuery);