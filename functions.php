<?php

    if(isset($_REQUEST['send'])){
        $to = "kosolapov-r@bk.ru";
$from = $_REQUEST['from'];
$author = 'Письмо от ' . $_REQUEST['author'];
$msg = $_REQUEST['message'];

function cite($ourText, $max_lenght = 40, $prefix = "> ")
    {
    $st = chunk_split($ourText, $max_lenght-strlen($prefix), "\n");
    $st = $prefix . str_replace("\n", "\n$prefix", $st);
    
    return $st;
}       
function mbWordwrap($str, $width = 40, $break = "\n", $cut = false) 
    { 
       return preg_replace('#([\S\s]{'. $width .'}'. ($cut ? '' : '\s') .')#u', '$1'. $break , $str); 
    } 

        
$msg = mbWordwrap($msg);

$headers = [
    'From' => $from,
    'Reply-to' => $from,
    
    'X-Mailer' => 'PHP/' . phpversion()
];
mail($to, $author, $msg, $headers);
       
        
    }
?>