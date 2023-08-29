const parallax = document.getElementById("section1");
let first = true;
if(first)
{
parallax.style.backgroundPositionY = 1 * 0.7 + "px";
 first = false
}


window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + "px";

});