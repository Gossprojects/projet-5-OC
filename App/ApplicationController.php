<?php
// namespace?

class ApplicationController {

    public function __construct() {

    }

    public function launch() {

        ob_start();
            include __DIR__.'/Views/game.php';
        $content = ob_get_clean();

        ob_start();
            include __DIR__.'/Views/layout.php';
        return ob_get_clean();
    }

    public function leaderboard($manager, $config) {

        $rawLdb = $manager->getLeaderboard();
        $players = [];

        foreach($rawLdb as $rawPlayer => $scores) {

            $player = array('name' => $scores['username'],
                            'score' => $scores['userscore'],
                            'time' => $scores['usertime'],
                            'rawtime' => $scores['userrawtime']);

            array_push($players, $player);
        }

        usort($players, array($this, "timeSort"));

        $config = $config;

        ob_start();
            include __DIR__.'/Views/leaderboard.php';
        $content = ob_get_clean();

        ob_start();        
            include __DIR__.'/Views/layout.php';
        return ob_get_clean();
    }
    
    public function submitScore($manager) {

        if(isset($_POST['userName']) && isset($_POST['userTime']) && isset($_POST['userScore']) && isset($_POST['userIntTime'])) {
        // If game data exists...
            $username = htmlspecialchars($_POST['userName']);
        // ...and is not harmful, upload it to DB
            $manager->submitScore($username, $_POST['userTime'], $_POST['userScore'], $_POST['userIntTime']);
        }
        // Then redirect to leaderboard page
        header('Location: http://localhost/php/projet5_prod3/Client/leaderboard.php');
        exit;
    }

    public function timeSort($a, $b) {
    // comparison function used in usort() to sort player scores in leaderboard (DESCENDING ORDER)
        return strcmp($b['rawtime'], $a['rawtime']);
    }
}