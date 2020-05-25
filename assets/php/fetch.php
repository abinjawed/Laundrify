<?php
//create connection to customers database
$conn = mysqli_connect('localhost', 'root', '', 'customers');

//fetch data from information table
$sql = mysqli_query($conn, "SELECT * FROM information");

//store data in result VARIABLE
$result = mysqli_fetch_all($sql, MYSQLI_ASSOC);

exit(json_encode($result));
