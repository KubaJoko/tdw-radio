<?php
$musicDir = __DIR__ . '/music';
$files = array_values(array_filter(scandir($musicDir), function($file) use ($musicDir) {
    return preg_match('/\.mp3$/i', $file);
}));

file_put_contents('playlist.json', json_encode($files));
echo "Playlist generated.";
?>
