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


// Hide Header on Scroll Down Show on Scroll Up.

const nav = document.querySelector('.home-content');
let lastScrollTop = 36;


window.addEventListener('scroll', () => {

    let scrollTop = document.documentElement.scrollTop;
    // console.log(scrollTop)

    if (lastScrollTop < scrollTop && lastScrollTop>36) {
        nav.classList.add('nav-hide');
    }
    else {
        nav.classList.remove('nav-hide');
    }
        lastScrollTop = scrollTop;
});


// getting animation text for a particular scroll.

const xx = document.querySelector(".demo-section").querySelector(".animated-text");
let scrollpos = 0;

window.addEventListener('scroll' , ()=>{

    let scrollpos = document.documentElement.scrollTop;
    console.log(scrollpos); 

    if(scrollpos >= 126){
        xx.classList.add('showing-animation');
    }
});

// click to go to automatic scroll to top.
const top_scroll = document.querySelector("#scroll-top");
console.log(top_scroll)

top_scroll.addEventListener("click",()=>{

    window.scrollTo({
        top:0,
        behavior:'smooth'
    });
});

// after load window preloder gif disappear.

let body = document.querySelector("body");
let pre_loader = document.querySelector(".pre-loader");

window.addEventListener("load" , ()=>{
    pre_loader.style.display = "none";
    body.style.overflow = "auto";
});