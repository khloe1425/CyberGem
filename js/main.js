// Plus conditions to run function
function didWeMet(id) {
  var topScreen = window.pageYOffset;
  var bottomScreen = topScreen + window.innerHeight;
  var topDIV = document.getElementById(id).offsetTop;
  var bottomDIV = topDIV + document.getElementById(id).scrollHeight;
  return topDIV <= bottomScreen && bottomScreen <= bottomDIV;
}

// Scroll to top when page reload
window.onload = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  // window.scrollTo(0, 0); => instant scrolling
}

// Dropdown menu
function hideAndShowMenu(){
  document.querySelector("#menu").classList.toggle("show__menu");
  document.querySelector("#menu").classList.toggle("hide__menu");
  document.querySelector(".header__dropdown").classList.toggle("display__bg");
}

// Product item
function slideUp(id) {
    document.getElementById(id).classList.add("showUp");
}

// Progress bar
function progressBar(maxPercent, barID, spanID) {
  var percent = 0;
  if (percent == 0) {
    percent = 1;
    var width = 0;
    var id = setInterval(frame, 20);
    function frame() {
      if (width >= maxPercent) {
        clearInterval(id);
      } else {
        width++;
        document.getElementById(barID).style.width = width + "%";
        document.getElementById(spanID).innerHTML = width + "%";
      }
    }
  }
}
var doFunctionProgressBar = true;
function runProgressBar() {
  progressBar(73, "progressBar1", "span1");
  progressBar(48, "progressBar2", "span2");
  progressBar(65, "progressBar3", "span3");
  doFunctionProgressBar = false;
};

// WINDOW(SCREEN) ON SCROLL
window.onscroll = function () {
  // Header
  if (
    document.body.scrollTop > 50 ||
    document.documentElement.scrollTop > 50
  ) {
    document.getElementById("header").style.cssText =
      "height:60px; box-shadow: 0 0 2px 0 #38455433; opacity: 0.95;";
    document.getElementById("header__img").style.cssText = "width: 132px";
  } else {
    document.getElementById("header").style.cssText =
      "height: 100px; box-shadow: none; opacity: 1";
    document.getElementById("header__img").style.cssText = "width: 164px";
  }

  // Progress bar
  if (doFunctionProgressBar && didWeMet("progress__bar")) {
    runProgressBar();
  }
}