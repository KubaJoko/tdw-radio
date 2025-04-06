<?php
$playlist = json_decode(file_get_contents("playlist.json"));
$startTime = time() - 10;
$index = floor(($startTime % (count($playlist) * 30)) / 30);
$file = "music/" . $playlist[$index];
echo json_encode(["file" => $file, "start" => $startTime]);
?>
