const ronds=document.querySelectorAll('.rond');
const boites=document.querySelectorAll('.box');
const controller=new ScrollMagic.Controller();

boites.forEach(boite => {
    for(i=0;i<ronds.length;i++){
        if(ronds[i].getAttribute("data-anim")===boite.getAttribute("data-anim")){
            let tween=gsap.from(boite,{y: -50,opacity: 0,duration:0.5})
            let scene=new ScrollMagic.Scene({
                triggerElement:ronds[i],
                reverse:false

            })
            .setTween(tween)
            .addIndicators()
            .addTo(controller)
        }
    }
});