var tabs=document.getElementById('tabs').getElementsByTagName('li');
//var lists=document.getElementById('lists').getElementsByTagName('li');
var lists=document.getElementById('lists').children;
//console.log(li);
//console.log(tabs);
for(var i=0;i<tabs.length;i++){
    tabs[i].addEventListener('click',function(){
        for(var i=0;i<tabs.length;i++){
            if(tabs[i]===this){
               
                tabs[i].firstChild.className='active';
                lists[i].className='selected';
            }
            else{
                tabs[i].firstChild.className='';
                lists[i].className='';
            }
        }
    })
}