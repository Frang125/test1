  var url= 'https://wubook.net/nneb/bk?f=today&n=1&ep=ede5c73f&o=1.0.0.0';
  var target= '#the_place_where_iframe_will_be_installed';
  var Neb= new ZakNebIframe(target, url);
  Neb.render();
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

function go1(){

document.getElementById("gothere").scrollIntoView({behavior: 'smooth'});

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
document.getElementById("room1").innerHTML="Rooms";
document.getElementById("service2").innerHTML="Service";
document.getElementById("risto2").innerHTML="Restaurant";
document.getElementById("eve2").innerHTML="Events";
document.getElementById("where2").innerHTML="Find us";
document.getElementById("visit2").innerHTML="Places to visit";
document.getElementById("deal2").innerHTML="Deals";



/* inizio corpo sito */
document.getElementById("deal3").innerHTML="Deals"
document.getElementById("promo").innerHTML="If you book directly with us, you will receive a discount on the final price. In case of cancellation, you will be issued a voucher valid until next year.";
/* fine corpo sito */


document.getElementById("contatti").innerHTML="Contacts";
document.getElementById("info").innerHTML="Company info";
document.getElementById("acce").innerHTML="Accessibility";





}