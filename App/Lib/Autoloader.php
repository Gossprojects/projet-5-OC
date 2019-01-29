<?php

class Autoloader {

    public function __construct($include_path = null) {

        $this->include_path = $include_path;
    }

    public function register() {

            spl_autoload_register(array($this, 'load'));
    }

    public function load($class_name) {

        $file_name = $this->include_path . str_replace('\\', '/', $class_name) . '.php';

        if(file_exists($file_name)) {
            
            require $file_name;
        }
        else
            throw new \Exception('Impossible de trouver le fichier ' . $file_name);
    }
}
