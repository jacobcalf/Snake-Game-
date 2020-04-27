<?php
  // Code by Jacob Calfee & Peter Hart //
  $servername = "localhost:3308";
  $username = "root";
  $password = "";
  $dbname = "snake_scores";

  $conn = new mysqli($servername, $username, $password, $dbname) or die ("Connect failed: %d\n" . $conn->error);

  // Generate base query //
  $sql = "SELECT * FROM `TABLE 1` ORDER BY `TABLE 1`.`Score` DESC ";

  $result = $conn->query($sql);

  if (!$result) {
    trigger_error('Invalid query: ' . $conn->error);
  }

  $place = 1;

  // Generate the table to be sent to index.html //
  if ($result->num_rows > 0) {
    // output data of each row
    $str  = "<table>";
    $str .= "<tr>";
    $str .= "<th></th>";
    $str .= "<th>HIGH SCORES</th>";
    $str .= "<th></th>";
    $str .= "</tr>";
    $str .= "<tr>";
    $str .= "<th>Place</th>";
    $str .= "<th>Username</th>";
    $str .= "<th>Score</th>";
    $str .= "</tr>";
    while($row = $result->fetch_assoc()) {
      $str .= "<tr>";
      $str .= "<td>" . $place    . "</td>";
      $str .= "<td>" . $row['Username']   . "</td>";
      $str .= "<td>" . $row['Score']      . "</td>";
      $str .= "</tr>";
      $place += 1;
    }
    $str .= "</table>";
    echo $str;
    } else {
        echo "0 results";
    }

  $conn->close();
?>
