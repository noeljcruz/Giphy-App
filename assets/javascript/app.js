
var sportsArray = ["baseball", "soccer", "football", "dodgeball", "karate", "yoga", "hockey", "running", "dance", "swimming", "golf", "tennis", "nascar", "boxing", "basketball", "rugby", "cycling", "diving", "wrestling", "gymnastics"];
var newsport = "";

function createButtons() {
    $("#button-area").empty();
    for (var i = 0; i < sportsArray.length; i++) {
        var sportButton = $("<button>");
        sportButton.addClass("sport");
        sportButton.attr("data-name", sportsArray[i]);
        sportButton.text(sportsArray[i]);
        $("#button-area").append(sportButton);
    }
}

createButtons();

$("#add-sport").on("click", function (event) {
    event.preventDefault();
    newsport = $("#new-sport").val().trim();
    sportsArray.push(newsport);
    createButtons();
});
