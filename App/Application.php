<?php
// namespace?

class Application {

    public function __construct() {

        $this->controller = new ApplicationController($this); 
        $this->manager = new ApplicationManager($this);
        $this->httpRequest = new HTTPRequest($this);
        $this->config = new Config($this);
        $this->router = new Router($this);
    }

    public function run() {

        // Connect application to DB
        $this->manager->init($this->config->get('host'), $this->config->get('db_name'), $this->config->get('db_user'), $this->config->get('db_pwd'));

        // Set Router with routes & root URL
        $routes = [            
            (object) array('url' => '', 'action' => 'launch'),
            (object) array('url' => '/leaderboard.php', 'action' => 'leaderboard'),
            (object) array('url' => '/entryPoint.php', 'action' => 'launch'),
            (object) array('url' => '/send_score.php', 'action' => 'submitScore')
        ]; // WIP get from file

        foreach($routes as $route) {

                $route->url = $this->getConfig()->get('root').$route->url;

                $this->router->routes[] = $route;
            }

        // Call route action from Controller
        // Pass ApplicationManager onto Controller so they can communicate
        $action = $this->router->getActionOf($this->httpRequest->requestURI());
        var_dump($action);

        exit($this->controller->$action($this->getManager(), $this->getConfig()));
    }

    public function getController() {
        return $this->controller;
    }

    public function getManager() {
        return $this->manager;
    }

    public function getHttpRequest() {
        return $this->httpRequest;
    }

    public function getConfig() {
        return $this->config;
    }
}