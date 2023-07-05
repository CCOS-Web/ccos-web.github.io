<?php

function handle($url)
{
	// url: /path/file
	// to:  https://ccos-web.github.io/path/file
	return "https://ccos-web.github.io".$url;
}

$fh = file_get_contents(handle($_SERVER["REQUEST_URI"]));
echo $fh;

?>