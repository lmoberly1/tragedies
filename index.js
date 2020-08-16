
var timesRun = 0;
var divNumber = 1;

// PART 1 - Text Animation
function beginningText() {

    document.getElementsByClassName("grid-div").className += " hidden";
    document.getElementsByClassName("title").className += " opaque";
    document.getElementsByClassName("begText").className = "begText";

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
                animation(16, "okc-div", "okc-name", 250);
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
function animation(casualties, divID, nameID, speed) {

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
                    animation(100, "katrina-div", "katrina-name", 10);
                    break;
                case 3:
                    animation(100, "harbor-div", "harbor-name", 10);
                    break;
                case 4:
                    animation(100, "towers-div", "towers-name", 10);
                    break;
                case 5:
                    animation(100, "iraq-div", "iraq-name", 10);
                    break;
                case 6:
                    setTimeout(function() {
                        animation(17000, "covid-div", "covid-name", 10);
                    }, 1500);
                    break;
                case 7:
                    hideGraph();
                    break;
                default:
                    break;
            }
        }

        // Animation
        var userDiv = document.getElementById(divID);
        var newcontent = document.createElement("newDiv");
        newcontent.innerHTML = "<i class='fas fa-male' id='individual-image'></i>";
    
        while (newcontent.firstChild) {
            userDiv.appendChild(newcontent.firstChild);
        }
    }, speed)
}

// PART 4 - Hides Graph
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


