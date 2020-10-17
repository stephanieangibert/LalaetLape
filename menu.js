let hamburger=document.getElementById("toggleBar");
let icon=document.querySelectorAll("i")[0];
let toggleLi=document.getElementById("toggleLi");
hamburger.addEventListener("click",function(){
    console.log("coucou");
    icon.classList.toggle("fa-times");
    toggleLi.classList.toggle("displayMenu");
})