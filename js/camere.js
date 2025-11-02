var url= 'https://wubook.net/nneb/bk?f=today&n=1&ep=ede5c73f&o=1.0.0.0';
var target= '#the_place_where_iframe_will_be_installed';
var Neb= new ZakNebIframe(target, url);
Neb.render();







function go1(){

document.getElementById("gothere").scrollIntoView({behavior: 'smooth'});

}


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


    

}else{
    document.getElementById("buttone").innerHTML="book";
    document.getElementById("hotel").innerHTML="hotel";
    document.getElementById("room").innerHTML="rooms";
    
    document.getElementById("service").innerHTML="service";
    
    document.getElementById("rest").innerHTML="restaurant";
    document.getElementById("eve").innerHTML="events";
    document.getElementById("dove").innerHTML="find us";
    document.getElementById("visit").innerHTML="places to visit";
    document.getElementById("deal").innerHTML="deals";


    /* traduzione in inglese dei buttoni presenti nel menu a tendina */
    document.getElementById("room2").innerHTML="Rooms";
    document.getElementById("service2").innerHTML="Service";
    document.getElementById("rest2").innerHTML="Restaurant";
     document.getElementById("eve2").innerHTML="Events";
      document.getElementById("dove2").innerHTML="Find us";
      document.getElementById("visit2").innerHTML="Places to visit";
      document.getElementById("deal2").innerHTML="Deals";





    /* Traduzione in inglese del corpo sito    */

    document.getElementById("div1t").innerHTML="our rooms";
    document.getElementById("p1t").innerHTML="Bright and comfortable to make you feel at home.";
    document.getElementById("p2t").innerHTML="<b>Cozy</b> and <b>bright</b>, our rooms are equipped with every comfort to make you feel at home and ensure a pleasant and relaxing stay";
    
    
       /* inizio elenco dei vantaggi delle camere */
        document.getElementById("div2t").innerHTML="air conditioning";
        document.getElementById("div3t").innerHTML="heating";
        document.getElementById("div4t").innerHTML="private bathroom";
        document.getElementById("div5t").innerHTML="hair dryer";
        document.getElementById("div6t").innerHTML="safe";
        document.getElementById("div7t").innerHTML="courtesy line";
        document.getElementById("div8t").innerHTML="daily cleaning";
        document.getElementById("div9t").innerHTML="wi-fi area";


    /* presentazioni camere */
        /* camera singola */
        document.getElementById("div10t").innerHTML="single room";
        document.getElementById("div11t").innerHTML="for 1 person";
        document.getElementById("div12t").innerHTML="single bed";
        document.getElementById("div13t").innerHTML="book it";
        /* camera matrimoniale */
        document.getElementById("div14t").innerHTML="master bedroom";
        document.getElementById("div15t").innerHTML="for 2 person";
        document.getElementById("div16t").innerHTML="Queen bed or alternatively two single beds";
        document.getElementById("div17t").innerHTML="book it";

        /* camera tripla */
        document.getElementById("div18t").innerHTML="triple room";
        document.getElementById("div19t").innerHTML="for 3 person"
        document.getElementById("div20t").innerHTML="Queen bed and a single bed";
        document.getElementById("div21t").innerHTML="book it";

        /* camera quadrupla */
        document.getElementById("div22t").innerHTML="Quadruple room";
        document.getElementById("div23t").innerHTML="for 4 person";
        document.getElementById("div24t").innerHTML="Queen bed and bunk bed";
        document.getElementById("div25t").innerHTML="book it";
    
    document.getElementById("promo").innerHTML="If you book directly with us, you will receive a discount on the final price. In case of cancellation, you will be issued a voucher valid until next year."
    document.getElementById("contatti").innerHTML="Contacts"
    document.getElementById("info").innerHTML="Company info"
    document.getElementById("acce").innerHTML="Accessibility"
    
}




