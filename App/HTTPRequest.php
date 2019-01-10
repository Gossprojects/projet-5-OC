<?php

class HTTPRequest {
    
	public function requestURI() { // Renvoie l'URL de la requête
		return $_SERVER["REQUEST_URI"];
	}
}