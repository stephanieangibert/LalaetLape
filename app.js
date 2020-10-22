let video=document.getElementById("video1");
console.log(video);
let play =document.querySelector(".play");
let i=document.querySelectorAll("i")[1];
let tousLesI=document.querySelectorAll("i");
console.log(i);
let panneauDeux=document.getElementById("planDeux");
let playing=true;
let pp=document.querySelector(".playPause");
pp.innerHTML="Play ";
let yeuxVert=document.getElementById("yeuxVert");
let lampe=document.getElementById("lampe");
lampe.addEventListener("click",()=> {
    panneauDeux.classList.toggle("couleur");
    console.log("coucou");
})


console.log(play);
play.addEventListener("click",function(){
    video.classList.toggle("centrale");
   playpause();  

})

function playpause() {
 
    if (playing) {     
        i.classList.remove("fa-play");
       i.classList.add("fa-pause-circle");
       pp.innerHTML="Pause  ";
       yeuxVert.classList.add("yeuxVertrond");
      
    } else {
      
       i.classList.add("fa-play");
       pp.innerHTML="Play";
       yeuxVert.classList.remove("yeuxVertrond");
      
    }
    playing = !playing;  
}