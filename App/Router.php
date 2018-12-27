<?php
class Router extends Application {

    protected $routes;

    public function __construct() {

        parent::__construct();

        $this->routes = [
            (object) array('url' => '/', 'action' => 'launch'),
            (object) array('url' => '/leaderboard.html', 'action' => 'leaderboard')
        ];
    }

    public function getRoutes() {
        
        // get all routes in JSON

        foreach($this->routes as $route) {
        // prepend config root URL to each URL
            $route->url = $this->getConfig()->get('root').$route->url;
        }
    }

    public function getActionOf($url) {

        foreach($routes as $route) {

            if($route->url == $url) {
                
                return $route->action;
            }
        }
    }

    public function getRoutes() {
        return $this->routes;
    }
}