let btn=document.querySelector("#btn");
let sideber=document.querySelector(".sidebar");
let searchbtn=document.querySelector(".fa-magnifying-glass");


btn.onclick=function(){
    sideber.classList.toggle("active");
}
searchbtn.onclick=function(){
    sideber.classList.toggle("active");
}
