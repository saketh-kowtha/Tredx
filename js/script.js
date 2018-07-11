let home = document.getElementById('explore')
home.addEventListener('click',function(){
    scroll_to_div('main')
})

function scroll_to_div(div_id)
{
 $('html,body').animate(
 {
  scrollTop: $("#"+div_id).offset().top
 },
 'slow');
}