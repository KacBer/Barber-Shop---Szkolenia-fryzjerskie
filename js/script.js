window.onscroll = function() {scrollFunction()};

let mybutton = document.getElementById("btn-back-to-top");
let scbutton = document.getElementById("social-buttons");
let navbar = document.getElementById("navbar");
let logo = document.getElementById("logo");

//show social and back to top button after scroll
function scrollFunction() {
  if (document.body.scrollTop > 160 || document.documentElement.scrollTop > 160) {
    mybutton.style.bottom = "20px";
    scbutton.style.right = "20px";
  } 
  else {
    mybutton.style.bottom = "-220px";
    scbutton.style.right = "-200px";
  }

  if ($(window).width() < 992){
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
      navbar.style.backgroundColor = "rgb(27, 27, 27)";
      navbar.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px";
      logo.style.opacity = "1";
    } 
    else {
      navbar.style.backgroundColor = "transparent";
      navbar.style.boxShadow = "none";
      logo.style.opacity = "0";
    }
  }

  else{
    if (document.body.scrollTop > 480 || document.documentElement.scrollTop > 480) {
      navbar.style.backgroundColor = "rgb(27, 27, 27)";
      navbar.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px";
      logo.style.opacity = "1";
    } 
    else {
      navbar.style.backgroundColor = "transparent";
      navbar.style.boxShadow = "none";
      logo.style.opacity = "0";
    }
  }
  
}

//back to top button
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//aos refresh
window.addEventListener('load', AOS.refresh);

//used photos panel 
var used_photos = document.getElementById("used-photos")
function showPanel(){
  used_photos.style.display = "block";
  setTimeout(() => {
    used_photos.style.opacity = "1";
  }, 10);
}

function closePanel(){
  used_photos.style.opacity = "0";
  setTimeout(() => {
    used_photos.style.display = "none";
  }, 500);
}