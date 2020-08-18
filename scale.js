
function scaleDiv(div, proportional) {
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
  
    // var translationX = Math.round((availableWidth - (currentWidth * scaleX)) / 2);
    // var translationY = Math.round((availableHeight - (currentHeight * scaleY)) / 2);

    div.css({
        "-webkit-transform": "scale(" + scaleX + ", " + scaleY + ")",
        "-moz-transform": "scale(" + scaleX + ", " + scaleY + ")",
        "-o-transform": "scale(" + scaleX + ", " + scaleY + ")",
        "-ms-transform": "scale(" + scaleX + ", " + scaleY + ")",
        "transform": "scale(" + scaleX + ", " + scaleY + ")",
    });

    // $('#body').css({
    //     'width': '100%',
    //     'height': '100%',
    // });

    var count = 0;
    var scrollTransform = setInterval(function() {
        count++;
        window.scrollBy(0, -currentHeight/1000);
        if(count >= 1000) {
            clearInterval(scrollTransform);
        }
    }, 10);

  }
