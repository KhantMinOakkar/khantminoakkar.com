const currentPlace = document.querySelector(".currentPlace");
const allPath = document.querySelectorAll(".mapContainer svg path");

allPath.forEach(x=>{
    x.addEventListener("mouseover",_=>{
        currentPlace.innerText = x.getAttribute("title");
    })
})