function fun1(t) {
  window.scroll(0, 0);
  t.style.display = "none";
}
function fun2(eve) {
  document.getElementById("links").setAttribute("style", "display:block");
  document.getElementById("sp").setAttribute("style", "width: 100%;");
  eve.stopPropagation();
}
document.onclick = function () {
  if (document.getElementById("links").hasAttribute("style")) {
    document.getElementById("links").removeAttribute("style");
    document.getElementById("sp").removeAttribute("style");
  }
};
document.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
    document.getElementById("scrbtn").style.display = "flex";
  else
    document.getElementById("scrbtn").style.display = "none";
};
