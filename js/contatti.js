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


window.addEventListener('resize', () => {
  console.log(window.innerWidth);
});
  window.addEventListener('resize', () => {
  console.log(window.innerWidth);
});


var userLang = navigator.language || navigator.userLanguage;
console.log(userLang);
if(userLang == "it-IT" || userLang=="it"){
  


}else{
  document.getElementById("buttone").innerHTML="book";
  document.getElementById("room").innerHTML="rooms";
  document.getElementById("service").innerHTML="services";
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


/*  Corpo testo */

document.getElementById("p1t").innerHTML="Contacts"

document.getElementById("promo").innerHTML="If you book directly with us, you will receive a discount on the final price. In case of cancellation, you will be issued a voucher valid until next year.";
    document.getElementById("contatti").innerHTML="Contacts";
    document.getElementById("info").innerHTML="Company info";
    document.getElementById("acce").innerHTML="Accessibility";



}







