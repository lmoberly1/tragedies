$(document).ready(function() {

    setTimeout(function() {
        var width = document.getElementsByClassName("grid-div").offsetWidth;
        var height = document.getElementsByClassName("grid-div").offsetHeight;
        var windowWidth = $(document).outerWidth();
        var windowHeight = $(document).outerHeight();
        var r = 1;
        r = Math.min(windowWidth / width, windowHeight / height)

            
        $('#grid-div').css({
            '-webkit-transform': 'scale(' + r + ')',
            '-moz-transform': 'scale(' + r + ')',
            '-ms-transform': 'scale(' + r + ')',
            '-o-transform': 'scale(' + r + ')',
            'transform': 'scale(' + r + ')',
        });
    }, 10)



});