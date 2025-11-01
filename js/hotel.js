
  var url= 'https://wubook.net/nneb/bk?f=today&n=1&ep=ede5c73f&o=1.0.0.0';
  var target= '#the_place_where_iframe_will_be_installed';
  var Neb= new ZakNebIframe(target, url);
  Neb.render();


var userLang = navigator.language || navigator.userLanguage;
console.log(userLang);
if(userLang == "it-IT" || userLang=="it"){
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
/* inizio corpo sito */
document.getElementById("d1t").innerHTML="The charm of an ancient noble residence";
document.getElementById("d2t").innerHTML="Ancient noble residence just a few meters from the sea, transformed into a hotel equipped with all comforts to satisfy even the most demanding guests.";
document.getElementById("d3t").innerHTML="Each guest is <b>unique</b> and <b>special</b>, and our daily commitment is aimed at anticipating every desire and fulfilling it for a completely relaxing stay.S"
document.getElementById("d4t").innerHTML="Our goal? To move you by offering a unique and unforgettable experience."
document.getElementById("d5t").innerHTML="Rooms"
document.getElementById("d6t").innerHTML="Cozy and bright, our rooms are equipped with every comfort to make you feel at home and ensure a relaxing stay."
document.getElementById("a1t").innerHTML="Find out more"
document.getElementById("p1t").innerHTML="Restaurant"
document.getElementById("p2t").innerHTML="A welcoming and refined yet familiar atmosphere, where nothing is left to chance. The warm and genuine hospitality of our staff makes you feel at home, while the authentic aromas and flavors of our Mediterranean cuisine are sure to delight even the most discerning palates."
document.getElementById("a2t").innerHTML="Find out more"
document.getElementById("promo").innerHTML="If you book directly with us, you will receive a discount on the final price. In case of cancellation, you will be issued a voucher valid until next year.";
/* fine corpo sito */

document.getElementById("contatti").innerHTML="Contacts";
document.getElementById("info").innerHTML="Company info";
document.getElementById("acce").innerHTML="Accessibility";


}





    function go1(){

document.getElementById("gothere").scrollIntoView({behavior: 'smooth'});

}


window.addEventListener('resize', () => {
  console.log(window.innerWidth);
});
  
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}




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
