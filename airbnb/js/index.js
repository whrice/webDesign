
  
  laydate.render({
  elem: '#text1'
  ,range:true,
  format: 'M月d日',
  position: 'absolute'
});


var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },    
  })  
  //体验按钮实现下拉菜单
  var search=document.getElementById('search')
  console.log(search); 
  search.addEventListener('click',function(){
    console.log("11111");
    //document.getElementsByClassName()得到的是一个dom集合，无法直接addEventListener
   /*正确的访问方式应该是：
    document.getElementsByClassName(...)[0].addEventListener...
    */
  })  
 