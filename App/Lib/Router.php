<?php
namespace App\Lib;

class Router {

    public function __construct() {

        $this->routes = [];
    }

    public function getActionOf($url) {

        foreach($this->routes as $route) {

            if($this->match($url, $route->url)) {
                
                return $route->action;
            }        
        }
        throw new \Exception('Impossible de trouver la page demandée dans le Router');
    }

    private function match($url, $routeURL) {

		if (preg_match('`'.$url.'`', $routeURL, $matches)) {
			return $matches;
		}
		else
			return false;
	}
}