let home = document.getElementById('explore')
home.addEventListener('click',function(){
    toastr.warning('My name is Inigo Montoya. You killed my father, prepare to die!')

    // scroll_to_div('main')

})

function scroll_to_div(div_id)
{
 $('html,body').animate(
 {
  scrollTop: $("#"+div_id).offset().top
 },
 'slow');
}

let send = document.getElementById('send')
send.addEventListener('click',function(){
    let user = document.getElementById('name')
    let email = document.getElementById('email')
    let cnt = document.getElementById('cnt')

})

function getContent(){
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
 
let send = document.getElementById('send')
send.addEventListener('click',function(){
    query()
})
function query(){
    let xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           // Typical action to be performed when the document is ready:
            toastr.info(xhttp.responseText);
        }
    };
    xhttp.open("POST", "query.php", true);
    xhttp.send("name="+document.getElementById('name')+"&email="+document.getElementById('email')+"&cnt="+document.getElementById('cnt'));
}