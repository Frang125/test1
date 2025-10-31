var url= 'https://wubook.net/nneb/bk?f=today&n=1&ep=ede5c73f&o=1.0.0.0';
  var target= '#the_place_where_iframe_will_be_installed';
  var Neb= new ZakNebIframe(target, url);
  Neb.render();

var userLang = navigator.language || navigator.userLanguage;
console.log(userLang);
if(userLang == "it-IT" || userLang=="it"){

}else{

document.getElementById("buttone").innerHTML="book and save";
document.getElementById("room").innerHTML="Rooms";
document.getElementById("service").innerHTML="Service";
document.getElementById("risto").innerHTML="Restaurant";
document.getElementById("eve").innerHTML="Events";
document.getElementById("where").innerHTML="Find us";
document.getElementById("visit").innerHTML="Places to visit";
document.getElementById("deal").innerHTML="Deals";
document.getElementById("buttone2").innerHTML="book";

/* Traduzione menu a tendina*/
document.getElementById("room2").innerHTML="Rooms";
document.getElementById("service2").innerHTML="Service";
document.getElementById("risto2").innerHTML="Restaurant";
document.getElementById("eve2").innerHTML="Events";
document.getElementById("where2").innerHTML="Find us";
document.getElementById("visit2").innerHTML="Places to visit";
document.getElementById("deal2").innerHTML="Deals";


/*  traduzione corpo sito */

document.getElementById("event").innerHTML="Events and Special Occasions";
document.getElementById("desc").innerHTML="Antica marina is the ideal location for organizing <b>Birthday Parties</b>, <b>Anniversaries</b>,<b>Baptisms</b>, <b>First Communions</b>, <b>Confirmations</b>, and <b>Weddings</b>. We will be delighted to help you make your special moments unforgettable, offering you our extensive experience and the enthusiasm of our tireless staff.";
document.getElementById("reser").innerHTML="book it";
document.getElementById("promo").innerHTML="If you book directly with us, you will receive a discount on the final price. In case of cancellation, you will be issued a voucher valid until next year.";

/* fine corpo sito */

document.getElementById("contatti").innerHTML="Contacts";
document.getElementById("info").innerHTML="Company info";
document.getElementById("acce").innerHTML="Accessibility";







}




  function go1(){

document.getElementById("gothere").scrollIntoView({behavior: 'smooth'});

}

  /* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
  window.addEventListener('resize', () => {
  console.log(window.innerWidth);
});

let slideIndex = 0;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
  
}

showSlides2();

function showSlides2() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  let dots = document.getElementsByClassName("dot");

  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides2, 10000); // Change image every 2 seconds
}
 
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
   
}

