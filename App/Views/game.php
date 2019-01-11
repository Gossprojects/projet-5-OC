<!-- ALL GAME SCREENS ARE NAVIGATED THROUGH IN JS -->
<!-- START SCREEN -->
<div class="menuWrapper contentWrapper">
    <div class="gameTitle">The Game</div>
    <div class="menuBtn startBtn">Start</div>
    <a class="menuBtn ldbBtn" href="leaderboard.php">Leaderboard</a>
</div>

<!-- GAME SCREEN -->
<div class="gameWrapper contentWrapper">
    <div class="healthBar">Truth health : <span id="health"></span></div>
    <div class="timer">
        <span id="min"></span> : <span id="sec"></span>
    </div>

    <div id="post" class="actionBtn">Post</span></div>
    <div id="work" class="actionBtn">Work : <span id="workStr"></span>/<span id="workMax"></span></div>

    
    <div class="timeline"></div>	

    <div id="convert" class="actionBtn">Convert : <span id="attPts"></span>/<span id="convertPts"></span></div>
    <div id="nrj"><span id="nrjPts"></span><span> Energy</span></div>
    <div id="srch" class="actionBtn">
        Research : <span id="srchPts"></span>
        <br>
        +<span id="srchDesc"></span> work
    </div>
    <div id="frmt" class="actionBtn">
        Format : <span id="frmtPts"></span>
        <br>
        <span id="frmtDesc"></span>
    </div>
    <div id="intcn" class="actionBtn">
        Interaction : <span id="intcnPts"></span>
        <br>
        -<span id="intcnDesc"></span> cooldown
    </div>
</div>

<!-- GAME OVER SCREEN -->
<div class="endWrapper contentWrapper">
    <div class="gameOver">Game Over</div>
    <div class="scoreWrapper">
        <div class="playerTime">
            <span>Time</span><span id="playerTime"></span>
        </div>
        <div class="playerAtt">
            <span>Life healed</span><span id="playerAtt"></span>
        </div>
    </div>
    <div class="endBtnsWrapper">
        <div id="retry">Retry</div>
        <div id="send">Send</div>
    </div>
</div>

<!-- SEND SCORE SCREEN -->
<div class="submitWrapper contentWrapper">
    <span class="scoreTimeText">Time</span> 
    <span id="scoreTime"></span>
    <span class="scoreAttText">Life healed</span>
    <span id="scoreAtt"></span>
    <form id="sendScore" method="POST" action="send_score.php">Enter username : <input type="text" name="userName" size="15"></form>
    <div id="back">Back</div>
    <div id="submit">Submit</div>

    <!-- Player scores (hidden, linked to <form>) -->
    <input id="scoreTimeHidden" type="hidden" name="userTime" form="sendScore"> 
    <input id="scoreAttHidden" type="hidden" name="userScore" form="sendScore">
    <input id="scoreIntTimeHidden" type="hidden" name="userIntTime" form="sendScore">
</div>

<!-- GAME INSTANCE -->
<script>
    var game = new Game;
    game.init();
</script>