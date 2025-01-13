let btn = document.querySelector("#btn");
let sideber = document.querySelector(".sidebar");
let searchbtn = document.querySelector(".fa-magnifying-glass");

// for active or deactive sideber.
btn.onclick = function () {
    sideber.classList.toggle("active");
}
searchbtn.onclick = function () {
    sideber.classList.toggle("active");
}