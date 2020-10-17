let video=document.getElementById("video");
console.log(video);
let play =document.querySelector(".play");
let i=document.querySelectorAll("i")[1];
console.log(i);
let playing=true;
let pp=document.querySelector(".playPause");
pp.innerHTML="Play ";
let yeuxVert=document.getElementById("yeuxVert");


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