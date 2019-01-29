<?php
namespace App\Lib;

use \App\ApplicationController;
use \App\Models\ApplicationManager;

class Application {

    public function __construct() {

        $this->controller = new ApplicationController($this); 
        $this->manager = new ApplicationManager($this);
        $this->httpRequest = new HTTPRequest($this);
        $this->config = new Config($this);
        $this->router = new Router($this);

        $this->routesFileName = 'routes';
    }

    /**
     * Sets up {Config} vars from json data
     * Sets up {Manager} with database log in from {Config}
     * Sets up {Router} routes from json data
     * Get request URL and corresponding route action
     * Call matching {Controller} method & pass {Manager} and {Config} on to it
     * End script
     */
    public function run() {

        try {
            $this->config->getVars();
        }
        catch(\Exception $e) {
            exit($this->controller->redirect($e->getMessage()));
        }

        try {
            $this->manager->init($this->config->get('host'), $this->config->get('db_name'), $this->config->get('db_user'), $this->config->get('db_pwd'));
        } 
        catch(\Exception $e) {
            exit($this->controller->redirect($e->getMessage()));
        }

        $jsonRoutes = file_get_contents('json/'. $this->routesFileName .'.json', FILE_USE_INCLUDE_PATH);

        $routes = json_decode($jsonRoutes)->routes; 

        foreach($routes as $route) {

                $route->url = $this->getConfig()->get('root').$route->url;

                $this->router->routes[] = $route;
            }

        try {
            $action = $this->router->getActionOf($this->httpRequest->requestURI());
		}
		catch(\Exception $e) {
			exit($this->controller->redirect($e->getMessage() . ' (' . $this->httpRequest->requestURI() . ')'));
		}

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