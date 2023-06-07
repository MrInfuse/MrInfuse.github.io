/*Navigation menu button*/
var navButton = document.querySelector(".navigation-menu-button img");
if (navButton.addEventListener) {
   navButton.addEventListener("click", function() {
      var nav = document.querySelector(".sitenavigation ul");
      if (nav.style.display === "block") {
         nav.style.display = "";
      } else {
         nav.style.display = "block";
      }
   }, false);
} else if (navButton.attachEvent) {
   navButton.attachEvent("onclick", function() {
      var nav = document.querySelector(".sitenavigation ul");
      if (nav.style.display === "block") {
         nav.style.display = "";
      } else {
         nav.style.display = "block";
      }
   });
}
function abc(name){
	 var div = document.getElementById(name);
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
}
function calculateCost() {
   var checkboxes = document.querySelectorAll('input[type="checkbox"]');
   var quantity = document.getElementById('m2').value;
   var totalCost = 0;
   
   checkboxes.forEach(function(checkbox) {
     if (checkbox.checked) {
       totalCost += parseInt(checkbox.value);
     }
   });
   
   totalCost *= quantity;
   
   document.getElementById('total-cost').textContent = '₱' + totalCost;
 }