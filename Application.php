<?php
if(isset($_POST['navBtn'])) {
	if($_POST['navBtn'] === '1') {
		require 'conversations.php';
	}
	else if($_POST['navBtn'] === '2') {
		require 'dashboard.php';
	}
}

if(isset($_POST['talk'])) {
	if($_POST['talk'] == 1) {
		echo json_encode('bonjour');
	}
	else if($_POST['talk'] == 2) {
		echo json_encode('aurevoir');
	}
}