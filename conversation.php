<!DOCTYPE html>
<head>
	<title>Une conversation</title>

	<meta charset='utf-8'>

	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
	<link rel="stylesheet" href="layout.css">
</head>
<body>
	<div class="container-fluid">
		<div class="container content">
			<div class="row">
				<div class="col-sm-12" id="conversation">
					<!-- conversation goes here -->
				</div>
			</div>
		</div>
		<div class="container action">
			<div class="row">
				<div class="col-sm-4 offset-sm-4">
					<button id="1">Bonjour</button>
					<button id="2">Aurevoir</button>
				</div>
			</div>
		</div>
	</div>
	
	<script
		src="https://code.jquery.com/jquery-3.3.1.js"
		integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
		crossorigin="anonymous">
	</script>

	<script src="conversation.js"></script>
</body>