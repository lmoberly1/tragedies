
function finalText() {

    $(function () {
        document.getElementById("text-wrapper").classList.remove("hidden");
        document.getElementById("text-wrapper").style.marginTop = "0";
        document.getElementById("text-wrapper").style.display = "inline";

        document.getElementById("word").classList.remove("hidden");

        $("#grid-div").css({
            "padding-bottom": "0",
            "margin-bottom": "0",
        });
        $("#word").css({
            "position": "relative",
            "display": "inline",
        })



        count = 0;
        $("#word").text("");
        setTimeout(function() {
            $("#word").text("America is greater than this.");
            // setTimeout(function() {
            //     $("#word").fadeOut(400, function () {
            //         $(this).text("Biden/Harris. November 3rd.").fadeIn(400, function() {
            //             setTimeout(function() {
            //                 $("#word").fadeOut(1000);
            //             }, 5000)
            //         });
            //     });  
            // }, 3500)
        }, 2000)




        // wordsArray = ["", "Biden/Harris. November 3rd."];
        // var intervalID = setInterval(function () {
        //     console.log(count);
        //     $("#word").fadeOut(400, function () {
        //         $(this).text(wordsArray[count % wordsArray.length]).fadeIn(400);
        //     });
        //     if(count >= wordsArray.length - 1) {
        //         clearInterval(intervalID);
        //         setTimeout(function () {
        //             // Hide initial beginning text
        //             $("#word").fadeOut(1000);
        //         }, 0);
        //     }
        //     count++;

        // }, 3000);
    })
}

