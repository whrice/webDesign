//input
var input=document.querySelector('.search-text');
function hide(){
   var text=input.previousSibling.previousSibling;
   text.style.display='none';
}
function show(){
    var text=input.previousSibling.previousSibling;
    text.style.display='block';
}
//导航样式
var tabs = document.getElementById('tabs').getElementsByTagName('li');
//console.log(tabs);
var list = document.getElementById('lists').getElementsByTagName('ul');
//console.log(list);
for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function () {
        for (var i = 0; i < tabs.length; i++) {
            if (tabs[i] === this) {
                tabs[i].className = 'active';
                list[i].className = 'selected';
            }
            else {
                tabs[i].className = '';
                list[i].className = '';
            }
        }
    })
}

//轮播图样式
var btnLeft=$(".prev");
var btnRight=$(".next");
var controlItem=$(".slider-control li a");
//console.log(controlItem);
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
  

//导航栏显示下拉新品
var navItem = $('.nav-item');

for (var i = 0; i < navItem.length; i++) {
    navItem[i].addEventListener('mouseover', function () {
        for (var i = 0; i < navItem.length; i++) {
            if (navItem[i] === this) {
                var children = navItem[i].querySelector('.item-children');
            
                if(children!=null){
                //    console.log(children);
                children.className = 'item-children';
                }
            }
            else {
                var other = navItem[i].querySelector('.item-children');
                if (other != null) {
                    //console.log(other);
                    other.classList.add('none');
                }



            }

        }
    })
    navItem[i].addEventListener('mouseout', function () {
        for (var i = 0; i < navItem.length; i++) {
            if (navItem[i] === this) {
                var children = navItem[i].querySelector('.item-children');
                if (children != null) {
                    children.classList.add('none');
                }
            }
        }
    })
}

 //固定侧边框JS实现

 var barSort=document.getElementsByClassName('bar-sort');
 console.log(barSort);
 for(var i=0;i<barSort.length;i++){
     var barImg=barSort[i].querySelector('.bar-img'); 
     barImg.addEventListener('mouseover',function(){
        // console.log(this.nextSibling.nextSibling); 
         //移入移出颜色变化
         var orign=this.getElementsByClassName('orign');
         var hover=this.getElementsByClassName('hover');
         orign[0].classList.remove('block');
         hover[0].classList.add('block');
         //隐藏出现
         var barPop=this.nextSibling.nextSibling;
         barPop.classList.remove('pop');
     })
     barImg.addEventListener('mouseout',function(){
           //移入移出颜色变化
         var orign=this.getElementsByClassName('orign');
         var hover=this.getElementsByClassName('hover');
         hover[0].classList.remove('block');
         orign[0].classList.add('block');
           //隐藏出现
           var barPop=this.nextSibling.nextSibling;
           barPop.classList.add('pop');
     })
 }
 //内容区tab切换
 var hdTab = document.getElementById('hd-tab').getElementsByTagName('li');
 console.log(hdTab);
 var hdList = document.getElementById('row16').getElementsByTagName('ul');
 console.log(hdList);
 for (var i = 0; i < hdTab.length; i++) {
     hdTab[i].addEventListener('mouseover', function () {
         
         for (var i = 0; i < hdTab.length; i++) {
             if (hdTab[i] === this) {
                 hdTab[i].className = 'tab-active';
                 hdList[i].className = 'brick-item sel';
             }
             else {
                 hdTab[i].className = '';
                 hdList[i].className = 'brick-item';
             }
         }
     })
 }
 //回顶部
 function back(){
    window.scrollTo(0,0);  
 }

 //内容区tab切换

 function toggle(hdTab,hdList){
    for(var i=0;i<hdTab.length;i++){
        hdTab[i].addEventListener('mouseover',function(){
         for(var i=0;i<hdTab.length;i++){
             if(hdTab[i]===this){
                hdTab[i].className='tab-active';
                hdList[i].className='brick-item sel';
                console.log("1111");
             }
             else{
                hdTab[i].className='';
                hdList[i].className='brick-item';
             }
         }
    })
}

}

var hdTab1=document.getElementById('hd-tab-zhineng').getElementsByTagName('li');
var hdList1=document.getElementById('row16-zhineng').getElementsByTagName('ul');

var hdTab2=document.getElementById('hd-tab-dapei').getElementsByTagName('li');
var hdList2=document.getElementById('row16-dapei').getElementsByTagName('ul');