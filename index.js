
$(document).ready(function() {

var timesRun = 0;
var divNumber = 1;

// PART 1 - Text Animation
function beginningText() {

    $(function () {        
        
        count = 0;
        wordsArray = ["Test", "Test", "Test"];
        // wordsArray = ["Family", "Moms", "Dads", "Sons", "Daughters", "Grandsons", "Granddaughters", "Uncles", "Aunts", "Friends", "Teachers", "Nurses", "Paramedics", "Mechanics", "Farmers", "Neighbors", "Americans"];
        // Rotate through wordsArray
        var intervalID = setInterval(function () {
            count++;
            $("#word").fadeOut(100, function () {
                $(this).text(wordsArray[count % wordsArray.length]).fadeIn(100);
            });
            if(count >= wordsArray.length - 1) {
                clearInterval(intervalID);
                // Fade out text, start scale animation
                setTimeout(function () {
                    // Hide initial beginning text
                    $("#word").fadeOut(500);
                    $("#number").fadeOut(500);

                    // Start scale animation
                    setTimeout(function() {
                        showScale();
                    }, 1000)

                }, 3000);

            }
        }, 500);
    });
}

// PART 2 - Scale Animation

var numberDivs = "<i class='fas fa-male person-image' id='covid-image'></i><i class='fas fa-male person-image' id='covid-image'></i><i class='fas fa-male person-image' id='covid-image'></i><i class='fas fa-male person-image' id='covid-image'></i><i class='fas fa-male person-image' id='covid-image'></i>" 

function showScale() {
    setTimeout(function() {
        document.getElementById("text-wrapper").classList.add("hidden");
        document.getElementById("scale-icons").classList.remove("hidden");
    }, 10)
    setTimeout(function() {
        // Hide Scale Animation
        $("#scale-icons").fadeOut(500);
        setTimeout(function() {
            document.getElementById("scale-icons").classList.add("hidden");
        }, 500);
        // Call Graph Animation
        setTimeout(function() {
            start();
            setTimeout(function() {
                x = document.getElementsByClassName("graph");
                for (i = 0; i < x.length; i++) {
                    x[i].style.display = "block";
                }
                animation(6, "okc-div", "okc-name", "<i class='fas fa-male' id='individual-image'></i>", 250);
                covidAnimation((170000/25)/5, "covid-div", "covid-name", numberDivs, 10);
            }, 500)
        }, 1000)
    }, 3500);
}

// PART 3 - Graph Labels Animation
function start() {
    setTimeout(function() {
        var x = document.getElementsByClassName("name");
        for (i=0; i<x.length; i++) {
            x[i].className += " opaque"
        };
    }, 0)
}

// PART 3 - Graph Animation
function animation(casualties, divID, nameID, innerHTML, speed) {

    var x = document.getElementsByClassName("name");
    for (i=0; i<x.length; i++) {
        if (x[i].id == nameID) {
            x[i].style.color = "White";
            x[i].classList.remove("opaque");
        }
    }

    var interval = setInterval(function() {
        // Animation timing
        timesRun += 1;
        if(timesRun == casualties) {
            clearInterval(interval);
            timesRun = 0;
            divNumber += 1;

            // Switches to each individual animation div
            switch(divNumber) {
                case 2:
                    animation(73, "katrina-div", "katrina-name", "<i class='fas fa-male' id='individual-image'></i>", 125);
                    break;
                case 3:
                    animation(96, "harbor-div", "harbor-name", "<i class='fas fa-male' id='individual-image'></i>", 75);
                    break;
                case 4:
                    animation(119, "towers-div", "towers-name", "<i class='fas fa-male' id='individual-image'></i>", 50);
                    break;
                case 5:
                    animation(177, "iraq-div", "iraq-name", "<i class='fas fa-male' id='individual-image'></i>", 25);
                    break;
                case 6:
                    setTimeout(function() {
                        turnVis();
                    }, 1500);
                    break;
                default:
                    break;
            }
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

// PART 4 - Zoom Out (covidAnimation.js)

// PART 5 - Hides Graph
function hideGraph() {
    setTimeout(function() {
        var x = document.getElementsByClassName("graph");
        for (i=0; i<x.length; i++) {
            x[i].className += " hidden"
        };
    }, 3000)
}


setTimeout(function () {
    beginningText();
}, 10)


});


