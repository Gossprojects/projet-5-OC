<?php
namespace App\Lib;

class HTTPRequest {
    
	public function requestURI() {
		return $_SERVER["REQUEST_URI"];
	}
}