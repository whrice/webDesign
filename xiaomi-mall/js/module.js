/*
网页中多次用到tab切换模式 
原理：
1 css切换 相对于的元素需要满足一定关系（父子级 兄弟）不分离
li：hover div{

}
 <ul class='tab'>
   <li>
    1
    <div>a</div>
   </li>
   <li>
   2
   <div>b</div>
   </li>
   <li>
   3
  <div>c</div>
   </li>
</ul>
2 
1）js切换 关系绑定元素分离
<ul class='tab'>
   <li>1</li>
   <li>2</li>
   <li>3</li>
</ul>
<ul class='list'>
   <li>a</li>
   <li>b</li>
   <li>c</li>
</ul>
tab[i]---list[i]
//添加隐藏类
.none{
display:block;
}
//点击样式
.show{

}
tab list
*/
function toggle(tab,list,event){
   for(var i=0;i<tab.length;i++){
   tab[i].addEventListener('event',function(){
       for(var i=o;i<tab.length;i++){
           if(tab[i]===this){
               tab[i].classList.add('show');
               list[i].classList.remove('none');
           }
           else{
            tab[i].classList.remove('show');
            list[i].classList.add('none');
           }
       }
   })
   }
}
