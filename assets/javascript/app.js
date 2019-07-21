
var sportsArray = ["baseball", "soccer", "football", "dodgeball", "karate", "yoga", "hockey", "running", "dance", "swimming", "golf", "tennis", "nascar", "boxing", "basketball", "rugby", "cycling", "diving", "wrestling", "gymnastics"];

for (var i = 0; i < sportsArray.length; i++) {
    var sport = sportsArray[i];
    var sportButton = $("<button>");
    sportButton.text(sport);
    $("#button-area").append(sportButton);
}