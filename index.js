
var timesRun = 0;
var divNumber = 1;

// var titles = document.getElementsByClassName("name");
// for(var i = 0; i < 6; i++) {
//     console.log(titles);
//     titles[i].className += " opaque";
// };

function start(casualties, divID, nameID, speed) {

    var interval = setInterval(function() {

        // Animation timing
        timesRun += 1;
        if(timesRun == casualties) {
            clearInterval(interval);
            timesRun = 0;
            divNumber += 1;

            switch(divNumber) {
                case 2:
                    start(100, "katrina-div", "katrina-name", 10);
                    break;
                case 3:
                    start(100, "harbor-div", "harbor-name", 10);
                    break;
                case 4:
                    start(100, "towers-div", "towers-name", 10);
                    break;
                case 5:
                    start(100, "iraq-div", "iraq-name", 10);
                    break;
                case 6:
                    start(100, "covid-div", "covid-name", 10);
                    break;
                case 7:
                    // text();
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

};

function text() {
    setTimeout(function() {
        var x = document.getElementsByClassName("graph");
        for (i=0; i<x.length; i++) {
            x[i].className += " hidden"
        };
    }, 3000)

}

start(16, "okc-div", "okc-name", 250);
