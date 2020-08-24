// Load COVID-Div figures
function covidAnimation(casualties, divID, nameID, innerHTML, speed) {

    var timesRun = 0;
    var x = document.getElementsByClassName("name");


    var interval = setInterval(function() {
        // Animation timing
        timesRun += 1;
        if(timesRun == casualties) {
            clearInterval(interval);
            timesRun = 0;
        }

        // Animation
        var userDiv = document.getElementById(divID);
        var newcontent = document.createElement("newDiv");
        newcontent.innerHTML = innerHTML;
    
        while (newcontent.firstChild) {
            userDiv.appendChild(newcontent.firstChild);
        }
    }, speed)
}

// Turn COVID-Div figure visible
function turnVis() {
    x = document.getElementsByClassName("person-image");
    for (i = 0; i < x.length; i++) {
        x[i].style.color = "white";
    };
    document.getElementById("covid-name").classList.remove("opaque");
    document.getElementById("covid-name").style.color = "white";

    setTimeout(function() {
        down();
    }, 1500);

}

function down() {
    $('html, body').animate({ scrollTop: $('#end').offset().top }, 35000, function() {
        zoomOut();
    });
}
    

// function up() {
// 	$('html, body').animate({ scrollTop: $('#start').offset().top }, 20000);
// 	down();
// };

function zoomOut() {
    setTimeout(function() {
        var div = $("#grid-div");
        scaleDiv(div, true)
    }, 10);
};
