
function finalText() {

    $(function () {
        document.getElementById("text-wrapper").classList.remove("hidden");
        document.getElementById("text-wrapper").style.marginTop = "0";
        document.getElementById("word").classList.remove("hidden");
        document.getElementById("text-wrapper").style.display = "inline-block";
        document.getElementById("word").style.display = "inline-block";


        count = 0;
        $("#word").text("");
        wordsArray = ["He failed us.", "He failed you.", "He failed America.", "Biden/Harris. November 3rd."];
        var intervalID = setInterval(function () {
            count++;
            $("#word").fadeOut(400, function () {
                $(this).text(wordsArray[count % wordsArray.length]).fadeIn(400);
            });
            if(count >= wordsArray.length - 1) {
                clearInterval(intervalID);
                setTimeout(function () {
                    // Hide initial beginning text
                    $("#word").fadeOut(1000);
                }, 3500);
            }
        }, 2000);
    })
}

