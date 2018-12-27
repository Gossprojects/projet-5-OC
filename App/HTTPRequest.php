<?php

class HTTPRequest {
    
	public function cookieData($cookie) {
		return isset($_COOKIE[$cookie]) ? $_COOKIE[$key] : null;
	}
	public function cookieExists($cookie) {
		return isset($_COOKIE[$cookie]) ? true : false;
	}
	public function requestURI() { // Renvoie l'URL de la requête
		return $_SERVER["REQUEST_URI"];
	}
}