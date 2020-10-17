const attente=function(){
   
    TweenMax.to('video',1,{left:'0%'})
    TweenMax.to('.yeux',2,{left:'0%'})
    TweenMax.to('h1',3,{ left:'60%',opacity:1,ease:Bounce.easeOut,delay:1.5})
    TweenMax.to('li',3,{opacity:1,delay:4})
    TweenMax.to('.play',1,{scale:"1.5",delay:5})
    
}

setTimeout(attente,2000);