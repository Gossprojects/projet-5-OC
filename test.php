<?php
$playerz = (object) array('str' => 1, 'int' => 5);
$ck = setcookie('ck', json_encode($playerz), time()+3600);
?>

<script>

var ck = <?php echo (isset($player) ? $_COOKIE['ck'] : 'null'); ?>;
// outputs null var
</script>