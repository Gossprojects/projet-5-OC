<?php
namespace App\Lib;

class Config {

    public function __construct() {

        $this->fileName = 'server_config';

        $this->vars = [];
    }

    public function getVars() {

        $jsonVars = file_get_contents('json/'. $this->fileName . '.json', FILE_USE_INCLUDE_PATH);

        if(!$jsonVars)
            throw new \Exception('Le fichier de configuration du serveur n\'a pas pu être chargé');
        
        $vars = json_decode($jsonVars)->vars;

        foreach($vars as $var) {

            array_push($this->vars, $var);
        }
    }

    public function get($var) {

        foreach($this->vars as $data) {

            if($data->var == $var) {

                return $data->value;
            }
        }

        throw new \Exception('Le paramètre de configuration ' . $var . ' n\'existe pas');
    }
}