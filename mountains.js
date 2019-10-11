

//  ScrollReveal


const sr = ScrollReveal();

sr.reveal('.about-me', {

    origin: 'top',
    distance: '50px',
    duration: 4000,
    scale: 0.5

});

sr.reveal('.about-me-1', {

    origin: 'left',
    distance: '50px',
    duration: 4000,
    scale: 0.5

});


sr.reveal('.about-me-2', {

    origin: 'left',
    distance: '100px',
    duration: 5000,
    scale: 0.5

});


sr.reveal('.about-me-3', {

    origin: 'left',
    distance: '150px',
    duration: 6000,
    scale: 0.5

});




//  Hide Navigation Non Scroll

var prevScrollpos = window.pageYOffset;

window.onscroll = function () {

    var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {

        document.querySelector(".navbar").style.top = "0";

    } else {

        document.querySelector(".navbar").style.top = "-60px";
    }

    prevScrollpos = currentScrollPos;
}



//  Image Gallery


let bigImg = document.getElementById('big');
let subImg = document.getElementById('sub').getElementsByTagName('img');

for(let i = 0; i < subImg.length; i++){

    subImg[i].addEventListener('click', full_image);

}

function full_image(){

    let imgSrc = this.getAttribute('src');

    bigImg.innerHTML = "<img src = " +imgSrc+">";
}
