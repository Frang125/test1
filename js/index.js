var url= 'https://wubook.net/nneb/bk?f=today&n=1&ep=ede5c73f&o=1.0.0.0';
  var target= '#the_place_where_iframe_will_be_installed';
  var Neb= new ZakNebIframe(target, url);
  Neb.render();



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
var userLang = navigator.language || navigator.userLanguage;
console.log(userLang);
if(userLang == "it-IT" || userLang=="it"){
document.getElementById("buttone").innerHTML="Prenota & risparmia"
document.getElementById("Hotel").innerHTML="hotel"
document.getElementById("Camere").innerHTML="Camere"
document.getElementById("servizi").innerHTML="Servizi"
document.getElementById("ristorante").innerHTML="Ristorante"
document.getElementById("eventi").innerHTML="Eventi"
document.getElementById("dovesiamo").innerHTML="Dov'è siamo"
document.getElementById("davisitare").innerHTML="Da visitare"
document.getElementById("offerte").innerHTML="Offerte"
document.getElementById("promo").innerHTML="Se prenoti direttamente con noi, riceverai uno sconto sul prezzo finale. In caso di cancellazione, ti verrà rilasciato un voucher valido fino al prossimo anno."
document.getElementById("sea").innerHTML="A meno di 200 metri dal mare"
document.getElementById("sea2").innerHTML="Raggiungibile a piedi, percorrendo il Corso principale del paese."

document.getElementById("rooms").innerHTML="Camere"
document.getElementById("where").innerHTML="Dov'è siamo"
document.getElementById("deals").innerHTML="Offerte"


document.getElementById("contatti").innerHTML="Contatti"
document.getElementById("info").innerHTML="Dati societari"
document.getElementById("acce").innerHTML="Accessibilità"

}
else{
document.getElementById("buttone").innerHTML="book and save"
document.getElementById("Hotel").innerHTML="hotel"
document.getElementById("Camere").innerHTML="Room"
document.getElementById("servizi").innerHTML="Service"
document.getElementById("ristorante").innerHTML="Restaurant"
document.getElementById("eventi").innerHTML="Events"
document.getElementById("dovesiamo").innerHTML="Where we are"
document.getElementById("davisitare").innerHTML="Worth visiting"
document.getElementById("offerte").innerHTML="Deals"
document.getElementById("promo").innerHTML="If you book directly with us, you will receive a discount on the final price. In case of cancellation, you will be issued a voucher valid until next year."
document.getElementById("sea").innerHTML="Less than 200 meters from the sea"
document.getElementById("sea2").innerHTML="Reachable on foot, along the main street of the town."

document.getElementById("rooms").innerHTML="Rooms"
document.getElementById("where").innerHTML="Where we are"
document.getElementById("deals").innerHTML="Deals"

document.getElementById("contatti").innerHTML="Contacts"
document.getElementById("info").innerHTML="Company info"
document.getElementById("acce").innerHTML="Accessibility"
}
   
