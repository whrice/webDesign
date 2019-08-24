var more=document.getElementById("more");
console.log(more);
more.onmouseenter=function(){
$('.selc').stop(true).slideDown("fast");
}

more.onmouseleave=function(){
     $('.selc').stop(true).slideUp("fast");
}

$('#input').focus(function(){
    $('.selc2').stop(true).slideDown('fast');
})
$('#input').blur(function(){
     $('.selc2').stop(true).slideUp("fast");
})