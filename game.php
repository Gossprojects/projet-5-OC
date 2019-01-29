<?php
ini_set('display_errors',1);
require __DIR__.'/App/Lib/Autoloader.php';

$libLoader = new Autoloader(__DIR__.'/');
$libLoader->register();

$appName = '\\App\\Lib\\Application';

$app = new $appName;

$app->run();
?>