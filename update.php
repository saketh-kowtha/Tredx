<?php
    echo "Key -> ".$_POST["key"] . "<br><br>Data ->" . $_POST['data'];
    if($_POST['key'] != "Abc123")
        echo "UnAuthorized Person";
    $txt = $_POST['data'];
    $myfile = fopen("js/update.txt", "w") or die("Unable to open file!".$error_message);
    $ret = fwrite($myfile, $txt);
    fclose($myfile);
    echo  $ret;
?>
