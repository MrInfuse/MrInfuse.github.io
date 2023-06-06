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