<?php

$conversations = [];

$convers1 = "John";
$convers2 = "Mary";
$convers3 = "Julia";

array_push($conversations, $convers1);
array_push($conversations, $convers2);
array_push($conversations, $convers3);

echo json_encode($conversations);