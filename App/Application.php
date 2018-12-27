<?php
// namespace?

class Application {

    protected $controller, $manager;

    public function __construct() {

        $this->controller = new ApplicationController($this); 
        $this->manager = new ApplicationManager($this);
        $this->httpRequest = new HTTPRequest($this);
        $this->config = new Config($this);
    }

    public function run() {

        $this->router->getRoutes();

        $action = $this->router->getActionOf($this->httpRequest->requestURI());

        $this->controller->$action();
    }

    public function getController() {
        return $this->controller;
    }

    public function getManager() {
        return $this->maanger;
    }

    public function getHttpRequest() {
        return $this->httpRequest;
    }

    public function getConfig() {
        return $this->config;
    }
}