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
    console.log(scrollTop)

    if (lastScrollTop < scrollTop && lastScrollTop>36) {
        nav.classList.add('nav-hide');
    }
    else {
        nav.classList.remove('nav-hide');
    }
        lastScrollTop = scrollTop;
})
