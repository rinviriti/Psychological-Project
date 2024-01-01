let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
document.getElementById("account-btn").addEventListener("click", function () {
    var accountSection = document.querySelector(".account");
    if (accountSection.style.right === "0px" || accountSection.style.right === "") {
        accountSection.style.right = "-350px";
    } else {
        accountSection.style.right = "0px";
    }
});
$(document).ready(function(){ 
    $('.post-wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow:$('.next'),
        prevArrow:$('.prev'),
    });
});
