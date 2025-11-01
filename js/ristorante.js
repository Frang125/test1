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


  var url= 'https://wubook.net/nneb/bk?f=today&n=1&ep=ede5c73f&o=1.0.0.0';
  var target= '#the_place_where_iframe_will_be_installed';
  var Neb= new ZakNebIframe(target, url);
  Neb.render();
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


/* traduzione  corpo sito */
document.getElementById("d1t").innerHTML="Restaurant";
document.getElementById("p1t").innerHTML="The authentic taste of true Mediterranean cuisine"
document.getElementById("p2t").innerHTML="A welcoming and refined yet familiar atmosphere, where nothing is left to chance. The warm and genuine hospitality of our staff makes you feel right at home, while the authentic aromas and flavors of our <b>MEDITERRANEAN CUISINE</b>  are sure to delight even the most discerning palates. Antica Marina is the ideal location for a <b>romantic dinner</b> or <b>an evening with friends</b>, but it is equally perfect for <b>business lunches</b> or <b>dinners</b>, as well as for <b>celebrating special occasions</b>."
document.getElementById("p3t").innerHTML="SPECIALTIES OF OUR MEDITERRANEAN CUISINE"
document.getElementById("p4t").innerHTML="Fish takes center stage in our cuisine, with specialties featuring <b>fresh fish</b> and <b>seafood</b>.<br>A must-try is the <b>Stocco di Cittanova</b>, prepared in countless ways by the skilled hands of our chef.All our dishes are accompanied by local vegetables and produce from our region — strictly zero-kilometer, farm-to-table freshness."
document.getElementById("a1t").innerHTML="SPECIAL EVENTS AND OCCASIONS"
document.getElementById("promo").innerHTML="If you book directly with us, you will receive a discount on the final price. In case of cancellation, you will be issued a voucher valid until next year.";


/* fine corpo sito */

document.getElementById("contatti").innerHTML="Contacts";
document.getElementById("info").innerHTML="Company info";
document.getElementById("acce").innerHTML="Accessibility";




}