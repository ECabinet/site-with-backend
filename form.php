<?php

define('DB_SERVER', 'ecabinet.cy1urir3p2pw.us-east-1.rds.amazonaws.com');
define('DB_USERNAME', 'ecabinetAdmin');
define('DB_PASSWORD', 'ecabinetAdmin');
define('DB_DATABASE', 'ecabinet');

$link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_DATABASE);

if(!$link) {
    die('Could not connect: ' . mysql_error());
}

$db_selected = mysqli_select_db($link, DB_DATABASE);

if(!$db_selected) {
    die('Cannot use ' . DB_DATABASE . ': ' . mysql_error());
}

$fvalue="";
$lvalue="";
$pvalue="";
$evalue="";


if(isset($_POST['fname'])){
  $fvalue = $_POST['fname'];
}

if(isset($_POST['lname'])){
  $lvalue = $_POST['lname'];
}

if(isset($_POST['phone'])){
  $pvalue = $_POST['phone'];
}

if(isset($_POST['email'])){
  $evalue = $_POST['email'];
}

$sql = "INSERT INTO ecabinetinfo (fname, lname, phone, email) VALUES ('$fvalue', '$lvalue', '$pvalue', '$evalue')";

if(!mysqli_query($link, $sql)){
  die("Error: " . mysql_error());
}

header("Location:thanks.html");
?>
