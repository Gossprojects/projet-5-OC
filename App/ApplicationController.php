<?php
namespace App;

class ApplicationController {

    /**
     * Includes game view, which runs client side JS game application
     * Declare $config as global var so JS has access to root URL
     * @param manager 
     * @return false if output buffering isn't active
     */
    public function launch($manager, $config) {

        $config = $config;

        ob_start();
            include __DIR__.'/Views/game.php';
        $content = ob_get_clean();

        ob_start();
            include __DIR__.'/Views/layout.php';
        return ob_get_clean();
    }

    /**
     * Fetches leaderboard data from DB
     * Delete all but the [ldbSize] first entries
     * Declare data and config to enable JS access
     * @return false if output buffering isn't active
     */
    public function leaderboard($manager, $config) {

        $rawLdb = $manager->getLeaderboard();
        $players = [];

        foreach($rawLdb as $rawPlayer => $scores) {

            $player = array('name' => $scores['username'],
                            'att' => $scores['useratt'],
                            'time' => $scores['usertime'],
                            'score' => $scores['userscore']);

            array_push($players, $player);
        }

        $players = array_slice($players, 0, $config->get('ldbSize'));

        $config = $config;

        ob_start();
            include __DIR__.'/Views/leaderboard.php';
        $content = ob_get_clean();

        ob_start();        
            include __DIR__.'/Views/layout.php';
        return ob_get_clean();
    }
    
    /**
     * Checks user form and submit data to DB
     * Redirect to leaderboard
     */
    public function submitScore($manager, $config) {

        if(isset($_POST['userName']) && isset($_POST['userTime']) && isset($_POST['userAtt']) && isset($_POST['userScore'])) {

            $username = htmlspecialchars($_POST['userName']);

            $manager->submitScore($username, $_POST['userTime'], $_POST['userAtt'], $_POST['userScore']);
        }

        header('Location: '.$config->get('root').'leaderboard.php');
        exit;
    }

    public function redirect($error) {

        $error = $error;

        ob_start();
            include __DIR__.'/Views/error.php';
        $content = ob_get_clean();

        ob_start();        
            include __DIR__.'/Views/layout.php';
        return ob_get_clean();       
    }
}