<html>
    <head>
        
    </head>
    <body>
        <div id='wrapper'>
            <?php if(isset($_POST['userName'])) {
                echo $_POST['userName'];
            } ?>
            <br>
            <?php
            if(isset($_POST['userTime'])) {
                echo $_POST['userTime'];
            } ?>
            <br>
            <?php
            if(isset($_POST['userScore'])) {
                echo $_POST['userScore'];
            } ?>
        </div>
        
    </body>
    <script>
        
    </script>
</html>