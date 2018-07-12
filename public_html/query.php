<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $cnt = $_POST['cnt'];
    $myfile = fopen("js/query.txt", "a") or die("Unable to open file!".$error_message);
    $ret = fwrite($myfile, "Name => ".$name."\nEMail => ".$email."\nContent => ".$cnt."\n\n\n");
    fclose($myfile);
    echo  "Success"
?>
