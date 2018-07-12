<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $cnt = $_POST['cnt'];
    $myfile = fopen("js/query.txt", "a") or die("Unable to open file!".$error_message);
    $ret = fwrite($myfile, $name."------------------------------------".$email."------------------------------------".$cnt."-----------------------------------------------------------------------------------------------------------------------------------------------------------");
    fclose($myfile);
    echo  "Success"
?>
