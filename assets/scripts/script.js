/*Toggle between open and closed versions of the mobile menu by adding open class */
function navToggle() {
    var x = document.getElementById("menu");
    if (x.className === "topnav") {
      x.className += " open";
    } else {
      x.className = "topnav";
    }
  }