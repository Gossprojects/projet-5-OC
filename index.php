<!DOCTYPE html>
<html>
	<head>
		<title>Projet lib'</title>

		<meta charset="utf-8">

		<!-- Bootstrap CDN -->
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
		<link rel="stylesheet" href="layout.css">
	</head>
	<body>
		<div class="container-fluid">
			<div class="container menu">
				<div class="row title">
					<div class="col-sm-10">Titre</div>
					<div class="col-sm-2">Icon</div>
				</div>
				<div class="row nav">
					<div class="col-sm-6 navBtn" id="btn1">Messages</div>
					<div class="col-sm-6 navBtn" id="btn2">Dashboard</div>
				</div>
			</div>
			
			<div class="container content">
				<div class="row">
					<div class="col-sm-12" id="content"></div>
				</div>
			</div>

		</div>
		</div>
	</body>

	<script src='jquery-3.3.1-uncompressed.js'></script>

	<script src="main.js"></script>
	<script src="dashboard.js"></script>
</html>