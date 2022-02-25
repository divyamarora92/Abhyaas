///* Uncomment this to make it work for real!
//*

function preloader() {
  var preloader = document.getElementById("preloader");
  preloader.style.opacity = "0";
  preloader.setAttribute("aria-busy", "false");
  document.getElementById("site").style.opacity = "1";
}
window.onload = preloader;



