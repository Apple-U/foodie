let li = document.querySelector('.nav').querySelectorAll('li');
let div=document.querySelector('.details').querySelectorAll('div');
let box=document.querySelector('.box');
let banner=document.querySelector('.banner');
let gap=3000;
let img=document.querySelectorAll('.bg');
let dotLi=document.querySelectorAll('.dot li');
let i=0;let move=0;
var run=function(){
    i++;
    i=i%6; 
    if(i==0){
        i=1;//从第二张图开始显示
        $('.banner').css("left","0");
    }
    console.log(i);
    move=-1250*i;
    $('.banner').animate({left:move+'px'},500);
    for(let j=0;j<5;j++){
        dotLi[j].className='';
    }
    dotLi[i%5].className='active';
};
banner.timer=setInterval(run,gap);

$('.prev').click(function(){
    clearInterval(banner.timer);
    if(i==0) {
        i=5;
        $('.banner').css("left","-6250px");
    }
    i--;
    move=-1250*i;
    for(let j=0;j<5;j++){
        dotLi[j].className='';
    }
    dotLi[i].className='active';
    $('.banner').animate({left:move+'px'},500);
    console.log(i);
   // banner.timer=setInterval(run,gap);
})

$('.next').click(function(){
    clearInterval(banner.timer);
    run();
    
  //  banner.timer=setInterval(run,gap);
});



box.onmouseleave=function(){
    for (let j = 0; j < li.length; j++) {
        div[j].style.display="none";
    }
    banner.timer=setInterval(run,gap);
    $('.prev').hide();
    $('.next').hide();
}
box.onmouseenter=function(){
    clearInterval(banner.timer);
    $('.prev').show();
    $('.next').show();

}
for(let j=0;j<5;j++){
    dotLi[j].onmouseenter=function(){
        for(let k=0;k<5;k++){
            dotLi[k].className='';
            }
        
        this.className='active';
        i=j;
        move=-1250*i;
        $('.banner').animate({left:move+'px'},500);
    }
}


for (let i = 0; i < li.length; i++) {
    li[i].onmouseenter = function(){
        for (let j = 0; j < li.length; j++) {
            div[j].style.display="none";
        }
        div[i].style.display="block";
        let p=div[i].querySelectorAll('p');
        for(let k=0;k<p.length;k++){
            p[k].onmousemove=function(){
                
                p[k].style.backgroundColor='rgb(222,110,152,0.5)';
                p[k].style.fontWeight='600';
            };
            p[k].onmouseleave=function(){
                for(let q=0;q<p.length;q++){
                    p[q].style.backgroundColor='rgb(222,110,152,0)';
                    p[q].style.fontWeight='400';

                }
            };
        }
    }; 
}

