function scroll_to_div(div_id)
{
    $('html,body').animate(
    {
    scrollTop: $("#"+div_id).offset().top
    },
    'slow');
}


function getContent(){
    let send = document.getElementById('send')
    send.addEventListener('click',function(){
        console.log("Wrked")
        query()
    })
    let xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           // Typical action to be performed when the document is ready:
           document.getElementById("main").innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", "js/update.txt", true);
    xhttp.send();
}
 

function query(){
    let xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           // Typical action to be performed when the document is ready:
            toastr.info(xhttp.responseText);
        }
    };
    xhttp.open("POST", "query.php", true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    let pst = "name="+document.getElementById('name').value+"&email="+document.getElementById('email').value+"&cnt="+document.getElementById('cnt').value
    console.log(pst)
    xhttp.send(pst);
}