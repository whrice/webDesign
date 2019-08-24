var btnLeft=$(".prev");
var btnRight=$(".next");
var controlItem=$(".slider-control li a");
var pagerItem=$('.pager-item');
//console.log(pagerItem);
var index=0;//选择正在播放的图片
btnLeft.click(function(){
    if(pagerItem.is(':animated')){
        return;
    }
    pagerItem.eq(index).fadeOut(1000);
    controlItem.eq(index).removeClass('selected-item');
    index--;
    if(index==-1){
        index=4;
    }
    pagerItem.eq(index).fadeIn(1000);
    controlItem.eq(index).addClass('selected-item');
})
btnRight.click(function(){
    pagerItem.eq(index).stop(true).fadeOut(1000);
    controlItem.eq(index).removeClass('selected-item');
    index++;
    if(index==5){
        index=0;    
    }
    pagerItem.eq(index).stop().fadeIn(1000);
    controlItem.eq(index).addClass('selected-item');

})
controlItem.click(function(){
   // console.log("111111");
    //console.log(index);
    console.log(pagerItem.eq(index));
    pagerItem.eq(index).fadeOut(1000);
    controlItem.eq(index).removeClass('selected-item');
    index=parseInt(this.id);
    controlItem.eq(index).addClass('selected-item');
    console.log(pagerItem.eq(index));
    pagerItem.eq(index).fadeIn(1000);
   // console.log(index);
})
var categoryItem=$('.category li');
categoryItem.mouseover(function(){
    $(this).children("a").addClass('category-item-active');
    $(this).children("div").css('display','flex');

    //console.log($(this).next());
})
categoryItem.mouseout(function(){
    $(this).children("a").removeClass('category-item-active');
    $(this).children("div").css('display','none');
})
  