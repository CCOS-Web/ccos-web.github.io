<?php 
header('Access-Control-Allow-Origin:*');
$md=$_GET['o'];
$file=$_GET['n'];
$message=$_GET['m'];
$re=$_GET['re'];
$res="";
if($md=="c")
{
	$res="true";
}
if($md=="w")
{
	$res="true";
	file_put_contents($file, $message, FILE_APPEND | LOCK_EX);
}
if($md=="d")
{
	$res="true";
	file_put_contents($file, "", LOCK_EX);
}
if($md=="r")
{
	$f=fopen($file,"r") or exit("Error: Can's open the file!");
	$res="'";
	while(!feof($f))
	{
	    $res+=fgets($f);
	}
	$res+="'";
	fclose($f);
}
if($re)
{
	echo $re.'('.$res.')';
}
?>
