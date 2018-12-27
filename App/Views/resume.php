<!-- Main script -->
<script>
    var app = new Game();
    
    var userSave = <?php echo (isset($_COOKIE['gobgame']) ? $_COOKIE['gobgame'] : 'null'); ?>;
    // json Player object if user has a cookie, null if not

    if(isset(userSave)) {
    // if resuming a game, hydrate {Player} data
        app.player = new Player(app, 
                    workInit = userSave.workInit,
                    workStr = userSave.workStr,
                    workMult = userSave.workMult,
                    workMax = userSave.workMax,
                    workCount = userSave.workCount,
                    postCld = userSave.postCld,
                    attention = userSave.attention,
                    energy = userSave.energy,
                    energySpent = userSave.energySpent,
                    energyEarned = userSave.energyEarned,
                    srch = userSave.srch,
                    frmt = userSave.frmt,
                    intctn = userSave.intctn);
    }

    app.init();
</script>