
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


/* inizio corpo sito */
document.getElementById("serv").innerHTML="Service";
document.getElementById("b1t").innerHTML="Tourist tax €3.00 per day per person";
document.getElementById("b2t").innerHTML="Free wi-fi";
document.getElementById("b3t").innerHTML="FREE guarded parking subject to availability";
document.getElementById("b4t").innerHTML="Beach card €15.00 for a beach umbrella and two sun loungers per day (maximum 4 people)";
document.getElementById("b5t").innerHTML="Possibility of canceling the reservation within 5 days before arrival";
document.getElementById("b6t").innerHTML="Restaurant";
document.getElementById("b7t").innerHTML="Room service";
document.getElementById("l1").innerHTML="Available free of charge throughout the property";
document.getElementById("b8t").innerHTML="Business services";
document.getElementById("l2").innerHTML="Meeting rooms";
document.getElementById("b9t").innerHTML="Food and Drink";
document.getElementById("l3").innerHTML="A complimentary buffet breakfast is served daily.";
document.getElementById("l4").innerHTML="Restaurant";
document.getElementById("l5").innerHTML="Room service is available";
document.getElementById("l6").innerHTML="Continental buffet breakfast €6.00";
document.getElementById("b10t").innerHTML="Reception services";
document.getElementById("l7").innerHTML="24-hour reception";
document.getElementById("l8").innerHTML="Luggage storage";
document.getElementById("l9").innerHTML="Tour and ticket booking support"
document.getElementById("l10").innerHTML="Non-smoking facility";
document.getElementById("l11").innerHTML="Laundry service";
document.getElementById("b11t").innerHTML="Breakfast included";
document.getElementById("b12t").innerHTML="Air conditioning";
document.getElementById("b13t").innerHTML="Business services";
document.getElementById("b14t").innerHTML="Laundry";
document.getElementById("b15t").innerHTML="24-hour reception";
document.getElementById("b16t").innerHTML="Parking and transfers";
document.getElementById("l12").innerHTML="Free self parking is available on site.";
document.getElementById("l13").innerHTML="Train shuttle to and from Rosarno, Lamezia or Nicotera stations";
document.getElementById("l14").innerHTML="Airport shuttle to and from Lamezia Terme or Reggio Calabria for a fee: €90.00 for 1 person per trip;<br> €120.00 for 2 or 3 people per trip"
document.getElementById("b17t").innerHTML="Outside";
document.getElementById("l16").innerHTML="Terrace";
document.getElementById("b18t").innerHTML="Accessibility";
document.getElementById("l17").innerHTML="To specify any accessibility needs, please contact the property using the information on the booking confirmation.";
document.getElementById("l18").innerHTML="Bathroom for people with disabilities (in some rooms)";
document.getElementById("l19").innerHTML="Elevator";
document.getElementById("l20").innerHTML="Wheelchair accessible rooms";

document.getElementById("promo").innerHTML="If you book directly with us, you will receive a discount on the final price. In case of cancellation, you will be issued a voucher valid until next year.";
/* fine corpo sito */

document.getElementById("contatti").innerHTML="Contacts";
document.getElementById("info").innerHTML="Company info";
document.getElementById("acce").innerHTML="Accessibility";


}

