const topCover = document.querySelector(".topCover");
const bottomCover = document.querySelector(".bottomCover");
const textDiv = document.querySelector(".text");
const hbdDiv = document.querySelector(".hbd");
const btn = document.querySelector(".btn");


btn.addEventListener("click",_=>{
  
  btn.style.display = "none";
  
  topCover.style.height = "0%";
  bottomCover.style.height = "0%";
  
  textDiv.style.width = "80%";
  textDiv.style.height = "10%";
  
  hbdDiv.style.opacity = "1";
  
 
});