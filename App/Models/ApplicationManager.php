<?php
// namespace?

class ApplicationManager {

    public function __construct() {

        $this->pdo = '';
    }

    public function init($servername, $dbname, $user, $pwd) {

        try {
            $this->pdo = new PDO("mysql:host=$servername;dbname=$dbname", $user, $pwd);
            $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }
        catch(PDOException $e) {
            echo "Connection to database failed. " . $e->getMessage();
        }
    }

    public function submitScore($name, $time, $score, $rawtime) {

        $req = $this->pdo->prepare('INSERT INTO leaderboard SET username = :username, usertime = :usertime, userscore = :userscore, userrawtime = :userrawtime');

        $req->bindValue(':username', $name);
        $req->bindValue(':usertime', $time);
        $req->bindValue(':userscore', $score);
        $req->bindValue(':userrawtime', $rawtime);

        $req->execute();
    }

    public function getLeaderboard() {

        $req = $this->pdo->prepare('SELECT username, usertime, userscore, userrawtime FROM leaderboard ORDER BY usertime DESC');
        $req->execute();

        $leaderboard = $req->fetchAll();
        
        return $leaderboard;
    }
}