let vidImg1 = document.getElementById('vidImg1'), 
    vidImg2 = document.getElementById('vidImg2'),
    vidImg3 = document.getElementById('vidImg3'),
    vidImg4 = document.getElementById('vidImg4'),
    vidImg5 = document.getElementById('vidImg5'),
    vidImg6 = document.getElementById('vidImg6'),
    vidImg7 = document.getElementById('vidImg7'),
    vidImg8 = document.getElementById('vidImg8'),
    vidImg9 = document.getElementById('vidImg9'),
    vid1 = document.getElementById('vid1'),
    vid2 = document.getElementById('vid2'),
    vid3 = document.getElementById('vid3'),
    vid4 = document.getElementById('vid4'),
    vid5 = document.getElementById('vid5'),
    vid6 = document.getElementById('vid6'),
    vid7 = document.getElementById('vid7'),
    vid8 = document.getElementById('vid8'),
    vid9 = document.getElementById('vid9');

    function imgvideo1(){
        vid1.style.display="flex";
        vid2.style.display="none";
        vid3.style.display="none";
        vid4.style.display="none";
        vid5.style.display="none";
        vid6.style.display="none";
        vid7.style.display="none";
        vid8.style.display="none";
        vid9.style.display="none";
    }
    function imgvideo2(){
        vid1.style.display="none";
        vid2.style.display="flex";
        vid3.style.display="none";
        vid4.style.display="none";
        vid5.style.display="none";
        vid6.style.display="none";
        vid7.style.display="none";
        vid8.style.display="none";
        vid9.style.display="none";
    }
    function imgvideo3(){
        vid1.style.display="none";
        vid2.style.display="none";
        vid3.style.display="flex";
        vid4.style.display="none";
        vid5.style.display="none";
        vid6.style.display="none";
        vid7.style.display="none";
        vid8.style.display="none";
        vid9.style.display="none";
    }
    function imgvideo4(){
        vid1.style.display="none";
        vid2.style.display="none";
        vid3.style.display="none";
        vid4.style.display="flex";
        vid5.style.display="none";
        vid6.style.display="none";
        vid7.style.display="none";
        vid8.style.display="none";
        vid9.style.display="none";
    }
    function imgvideo5(){
        vid1.style.display="none";
        vid2.style.display="none";
        vid3.style.display="none";
        vid4.style.display="none";
        vid5.style.display="flex";
        vid6.style.display="none";
        vid7.style.display="none";
        vid8.style.display="none";
        vid9.style.display="none";
    }
    function imgvideo6(){
        vid1.style.display="none";
        vid2.style.display="none";
        vid3.style.display="none";
        vid4.style.display="none";
        vid5.style.display="none";
        vid6.style.display="flex";
        vid7.style.display="none";
        vid8.style.display="none";
        vid9.style.display="none";
    }
    function imgvideo7(){
        vid1.style.display="none";
        vid2.style.display="none";
        vid3.style.display="none";
        vid4.style.display="none";
        vid5.style.display="none";
        vid6.style.display="none";
        vid7.style.display="flex";
        vid8.style.display="none";
        vid9.style.display="none";
    }
    function imgvideo8(){
        vid1.style.display="none";
        vid2.style.display="none";
        vid3.style.display="none";
        vid4.style.display="none";
        vid5.style.display="none";
        vid6.style.display="none";
        vid7.style.display="none";
        vid8.style.display="flex";
        vid9.style.display="none";
    }
    function imgvideo9(){
        vid1.style.display="none";
        vid2.style.display="none";
        vid3.style.display="none";
        vid4.style.display="none";
        vid5.style.display="none";
        vid6.style.display="none";
        vid7.style.display="none";
        vid8.style.display="none";
        vid9.style.display="flex";
    }
//responsive navBar
const hamburger = document.getElementById("hamburgerLabel");
const container = document.getElementById("container");
const navBG = document.getElementById('navBG');

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    container.classList.toggle("active");
    navBG.classList.toggle('active');
}

const navItems = document.querySelectorAll(".navItems");
navItems.forEach(n => n.addEventListener("click", closeMenu));
navBG.addEventListener('click', closeMenu);

function closeMenu() {
    hamburger.classList.remove("active");
    container.classList.remove("active");
    navBG.classList.remove('active');

}
//darkMode
let body=document.getElementById('body');
let customMode = document.getElementById("customMode");
let section1 = document.getElementById('section1');
let darkMode = document.getElementById('darkMode');
let lightMode = document.getElementById('lightMode');
let v=0;
customMode.onclick = function () {
    if (v==0) {
        v=1;
        body.classList.add("lightTheme");
        body.classList.remove("darkTheme"); 
        if(window.matchMedia('(min-width: 400px)').matches){
            section1.style.backgroundImage="url('images/light-01.jpg')"
        }else{
            section1.style.backgroundImage="none"
        }
        darkMode.style.display="none";
        lightMode.style.display="block";
        section1.style.transition="0.3s ease";
    }else{
        body.classList.add("darkTheme");
        body.classList.remove("lightTheme");
        if(window.matchMedia('(min-width: 400px)').matches){
            section1.style.backgroundImage="url('images/night1-01.png')";
        }else{
            section1.style.backgroundImage="remove";
        }
        section1.style.transition="0.3s ease";
        darkMode.style.display="block";
        lightMode.style.display="none";
        v=0;
    }

};

// contact
let zhmara=0;
function InvalidForm() {
    if(!document.querySelectorAll(".contactForm input:invalid")){
        if(zhmara==0){
        document.getElementById('submit').style.transform="translateX(-100px)";
        zhmara=1;
    }else{
        document.getElementById('submit').style.transform="translateX(0px)";
        zhmara=0;
    }}
}

