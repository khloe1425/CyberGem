// Progress bar
function move(maxPercent,barID,spanID) {
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
move(73,"progressBar1","span1");
move(48,"progressBar2","span2");
move(65,"progressBar3","span3");