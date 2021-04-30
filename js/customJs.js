
function myFunction() {
    var x = document.getElementById("nav-logo");
    if (x.className === "nav-logo") {
      x.className += " responsive";
    } else {
      x.className = "nav-logo";
    }
  }