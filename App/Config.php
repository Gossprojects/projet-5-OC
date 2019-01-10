<?php

class Config {

    protected $vars;

    public function __construct() {

        $this->vars = [
            (object) array('var' => 'root', 'value' => 'http://localhost/php/projet5_prod3/Client'),
            (object) array('var' => 'host', 'value' => 'localhost'),
            (object) array('var' => 'db_name', 'value' => 'projet5_oc'),
            (object) array('var' => 'db_user', 'value' => 'root'),
            (object) array('var' => 'db_pwd', 'value' => '')
        ];
    }

    public function getVars() {

        // get vars from JSON file
    }

    public function get($var) {

        foreach($this->vars as $data) {
        // loop through $this vars to get asked value
            if($data->var == $var) {

                return $data->value;
            }
        }
    }
}