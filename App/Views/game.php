<!-- ALL GAME SCREENS ARE NAVIGATED THROUGH IN JS -->
<!-- START SCREEN -->
<div class="menuWrapper contentWrapper">
    <h1 class="gameTitle">SAUVER LA VERITE</h1>
    <div class="menuBtn startBtn">Start</div>
    <a class="menuBtn ldbBtn" href="leaderboard.php">Leaderboard</a>
</div>

<!-- INTRO / TUTORIAL -->
<div class="introWrapper contentWrapper">
    <div class="introText"></div>
    <div class="nextBtn"></div>
</div>

<!-- GAME SCREEN -->
<div class="gameWrapper contentWrapper">
    <div id="health">
        <div class="healthDesc"><span id="healthDescTxt">Vérité</span><span id="heart">&hearts;</span></div><div class="healthBar"></div>
    </div>
    <div class="timer">
    T. <span id="min"></span> : <span id="sec"></span>
    </div>

    <div class="timelineTitle">Les fake news</div>
    <div class="timeline"></div>

    <div class="damagePoint"></div>

    <div class="playerTitle">Vous</div>

    <div id="post" class="actionBtn">Poster</div>
    <div id="work" class="actionBtn">Bosser <span id="workStr"></span>/<span id="workMax"></span></div>

    <div id="convert" class="actionBtn">Offrir <span id="attPts"></span>/<span id="convertPts"></span></div>
    <div id="nrj"><span id="nrjPts"></span><span> Energie</span></div>
    <div id="srch" class="actionBtn">
        <span id="srchPts"></span> Recherche
        <br>
        +<span id="srchDesc"></span> travail
    </div>
    <div id="frmt" class="actionBtn">
        <span id="frmtPts"></span> Format
        <br>
        x<span id="frmtDesc"></span> impact
    </div>
    <div id="intcn" class="actionBtn">
        <span id="intcnPts"></span> Loquacité
        <br>
        -<span id="intcnDesc"></span>s cooldown
    </div>
</div>

<!-- GAME OVER SCREEN -->
<div class="endWrapper contentWrapper">
    <div class="gameOver">Game Over</div>

    <span id="playerTimeText">Temps</span><span id="playerTime"></span>

    <span id="playerAttText">Attention</span><span id="playerAtt"></span>

    <span id="playerScoreText">Score</span><span id="playerScore"></span>

    <div id="retry">Renaitre</div>
    <div id="send">Publier</div>
</div>

<!-- SEND SCORE SCREEN -->
<div class="submitWrapper contentWrapper">
    <span class="scoreFinalText">Score</span>
    <span id="scoreFinal"></span>
    <form id="sendScore" method="POST" action="send_score.php">Pseudo : <input id="userName" type="text" name="userName" size="15"></form>
    <div id="back">Retour</div>
    <div id="submit">Publier</div>

    <!-- Player scores (hidden, linked to <form>) -->
    <input id="scoreTimeHidden" type="hidden" name="userTime" form="sendScore"> 
    <input id="scoreAttHidden" type="hidden" name="userAtt" form="sendScore">
    <input id="scoreFinalHidden" type="hidden" name="userScore" form="sendScore">
</div>

<!-- GAME INSTANCE -->
<script>
    var game = new Game;
    game.init();
</script>