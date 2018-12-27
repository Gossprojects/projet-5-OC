<?php
// namespace?

class ApplicationController extends Application {

    public function __construct() {
        
        parent::__construct();
    }

    public function launch() {

        if(isset($_COOKIE['gobgame'])) {
        // if user has previous locally saved game

            $userPlayer = $_COOKIE['gobgame'];
            // will serve as hydrate obj in resume.php

            ob_start();
                include 'resume.php';
            $resume = ob_get_clean();
        }
        else {
        // if user has no previous saved game, set cookie & run Menu
            $cookieExp = time() + $this->getConfig()->get('saveExpire');
            $userSave = setcookie('gobgame', '', $cookieExp);
            
            ob_start();
                include 'menu.php';
            $menu = ob_get_clean();   
        }

        ob_start();
            include 'game.php';
        return ob_get_clean();
    }

    public function leaderboard() {

        $ldbData = $this->getManager()->getLeaderboard();

        include 'leaderboard.php';

        // get leaderboard data from Manager

        // generate leaderboard
    }

    public function save() {

        // 
    }

}