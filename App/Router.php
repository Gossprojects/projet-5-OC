<?php
class Router extends Application {

    public function __construct() {

        $this->routes = [];
    }

    public function getRoutes() {
        
        // get all routes in JSON

        return $this->routes;
    }

    public function getActionOf($url) {

        foreach($this->routes as $route) {

            if($this->match($url, $route->url)) {
                
                return $route->action;
            }
        }
    }

    public function match($url, $routeURL) {

		if (preg_match('`'.$url.'`', $routeURL, $matches)) {
			return $matches;
		}
		else
			return false;
	}
}