// Scroll to top on page reload
window.onload = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  // window.scrollTo(0, 0); => instant scrolling
}

// Progress bar
function runProgressBar(maxPercent, barID, spanID) {
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
// Test tính năng chạy animation progress bar khi scrool đến vị trí (fail)
var doFunction = true;
window.addEventListener("scroll", function () {
  var topScreen = window.pageYOffset;
  var bottomScreen = topScreen + window.innerHeight;
  var topDIV = document.getElementById("progress__bar").offsetTop;
  var bottomDIV = topDIV + document.getElementById("progress__bar").scrollHeight;
  if (doFunction && topDIV <= bottomScreen <= bottomDIV) {
    runProgressBar(73, "progressBar1", "span1");
    runProgressBar(48, "progressBar2", "span2");
    runProgressBar(65, "progressBar3", "span3");
    doFunction = false;
  }
  console.log(doFunction);
  console.log(topDIV, bottomScreen ,bottomDIV);
  console.log(topDIV <= bottomScreen <= bottomDIV); //?
});

// Header on scroll
window.onscroll = function () {
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
}