<?php
  // Code by Jacob Calfee & Peter Hart //
  $servername = "localhost:3308";
  $username = "root";
  $password = "";
  $dbname = "project5";

  $conn = new mysqli($servername, $username, $password, $dbname) or die ("Connect failed: %d\n" . $conn->error);

  // Generate base query //
  $sql = "";

  // Recieve data from index.html //
  $usr = $_GET["username"];
  $rad = $_GET["userscore"];

  // Add user's score to table, then remove the lowest score //
  if($usr != null){
    $sql .= "INSERT INTO `snake_scores`.`TABLE 1` (`Username`, `Score`) VALUES ('" . $usr . "', " . $rad . "); ";
    $sql .= "ALTER TABLE `snake_scores`.`TABLE 1` ORDER BY `TABLE 1`.`Score` ASC; ";
    $sql .= "DELETE FROM `snake_scores`.`TABLE 1` WHERE 1 LIMIT 1; ";
    $sql .= "ALTER TABLE `snake_scores`.`TABLE 1` ORDER BY `TABLE 1`.`Score` DESC; ";
  }
  else{
    die ("Nothing selected!");
  }

  $result = $conn->multi_query($sql);

  if (!$result) {
    trigger_error('Invalid query: ' . $conn->error);
  }

  $conn->close();
?>
