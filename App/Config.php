<?php

class Config {

    protected $vars;

    public function __construct() {

        $this->vars = [
            (object) array('var' => 'saveExpire', 'value' => 2592000),
            (object) array('var' => 'root', 'value' => 'http://localhost/php/projet5')
        ];
    }

    public function getVars() {

        // get vars from JSON file
    }

    public function get($var) {

        foreach($this->$vars as $data) {
        // loop through $this vars to get asked value
            if($data->var == $var) {

                return $data->value;
            }
        }
    }
}