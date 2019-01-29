<?php
namespace App\Models;

use PDO;

class ApplicationManager {

    /**
     * @var PDO
     */
    private $pdo;

    public function init($servername, $dbname, $user, $pwd) {

        try {
            $this->pdo = new PDO("mysql:host=".$servername.";dbname=".$dbname, $user, $pwd);
            $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }
        catch(\PDOException $e) {
            throw new \Exception("Connection to database failed.");
        }
    }

    /**
     * Submits time, attention, score and user name to DB
     * @return boolean : false if SQL request failed
     */
    public function submitScore($name, $time, $att, $score) {

        $req = $this->pdo->prepare('INSERT INTO leaderboard SET username = :username, usertime = :usertime, useratt = :useratt, userscore = :userscore');

        $req->bindValue(':username', $name);
        $req->bindValue(':usertime', $time);
        $req->bindValue(':useratt', $att);
        $req->bindValue(':userscore', $score);

        return $req->execute();
    }

    /**
     * Gets all time, attention, score and names from DB
     * @return array : length = DB entries - 1
     */
    public function getLeaderboard() {

        $req = $this->pdo->prepare('SELECT username, usertime, useratt, userscore FROM leaderboard ORDER BY userscore DESC');
        $req->execute();

        $leaderboard = $req->fetchAll();
        
        return $leaderboard;
    }
}