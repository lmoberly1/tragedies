
function fillDiv(div, proportional) {
    var currentWidth = div.outerWidth();
    var currentHeight = div.outerHeight();
  
    var availableHeight = window.innerHeight;
    var availableWidth = window.innerWidth;
  
    var scaleX = availableWidth / currentWidth;
    var scaleY = availableHeight / currentHeight;
  
    if (proportional) {
      scaleX = Math.min(scaleX, scaleY);
      scaleY = scaleX;
    }
  
    var translationX = Math.round((availableWidth - (currentWidth * scaleX)) / 2);
    var translationY = Math.round((availableHeight - (currentHeight * scaleY)) / 2);
  
    div.css({
      "position": "fixed",
      "left": "0px",
      "top": "0px",
      "-webkit-transform": "translate(" + translationX + "px, "
                                        + translationY + "px) scale3d("
                                        + scaleX + ", " + scaleY + ", 1)",
      "-webkit-transform-origin": "0 0"
    });
  }