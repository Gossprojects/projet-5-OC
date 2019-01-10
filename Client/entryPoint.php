<?php
spl_autoload_register('register_library');
spl_autoload_register('register_model');

function register_library($class_name) {

    $file_name = __DIR__.'/../App/' . $class_name . '.php';

    if(file_exists($file_name)) {
        
        require $file_name;
    }
}

function register_model($class_name) {

    $file_name = __DIR__.'/../App/Models/' . $class_name . '.php';

    if(file_exists($file_name)) {
        
        require $file_name;
    }
}

$app = new Application;
$app->run();
?>