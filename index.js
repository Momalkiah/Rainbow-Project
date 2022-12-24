window.onscroll = hideFunction;
document.getElementById("menu").onmouseover = mouseOver;
document.getElementById("menu").onmouseout = mouseOut;

function hideFunction() {
  if (document.documentElement.scrollTop > 70) {
    document.getElementById("menu").className = "retract";
  } else {
    document.getElementById("menu").className = "big";
  }
}
function mouseOver() {
  if (document.documentElement.scrollTop > 70){
  document.getElementById("menu").className = "big";
  }
}

function mouseOut() {
  if (document.documentElement.scrollTop > 70){
  document.getElementById("menu").className = "retract";
  }
}