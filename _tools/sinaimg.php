<?php
function ranger($url){
  $headers = array(
  "Range: bytes=0-32768"
  );

  $curl = curl_init($url);
  curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
  $data = curl_exec($curl);
  curl_close($curl);
  return $data;
}

$start = microtime(true);

$urls = array("9a79eae3gy1feju9ytwq6j22c02c01kz",
"9a79eae3gy1feju9vs5wuj21d71d7qkn");

foreach ($urls as $hash) {
  $url = "http://ww1.sinaimg.cn/large/".$hash.".jpg";
  $raw = ranger($url);
  $im = imagecreatefromstring($raw);
  $width = imagesx($im);
  $height = imagesy($im);

  echo "[".$hash.", serverxxx, ".$width."x".$height."]<br>";
}

$stop = round(microtime(true) - $start, 5);

echo "<br>({$stop}s)";

?>
