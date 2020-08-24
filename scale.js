
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

	$('html, body').animate({ scrollTop: $('#start').offset().top }, 15000);


    // var count = 0;
    // var scrollTransform = setInterval(function() {
    //     count++;
    //     window.scrollBy(0, -currentHeight/3500);
    //     if(count >= 3500) {
    //         clearInterval(scrollTransform);
    //     }
    // }, 10);
}

const graphDiv = document.querySelector(".grid-parent");
graphDiv.addEventListener('transitionend', function() {

    // setTimeout(function() {
    //     hideGraph();
    // }, 3000)
})

function hideGraph() {
    $('#grid-div').fadeOut(10, function() {
        var x = document.getElementsByClassName("graph");
        for (i=0; i<x.length; i++) {
            x[i].className += " hidden"
        };
        finalText();
    });

}



  
