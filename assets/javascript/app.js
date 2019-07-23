
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

function displayGifs() {
    var sport = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        sport + "&api_key=sMem5S8j5UGqlpr1gWf3ySnwoqJZXMmt&limit=10";
        $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function (response) {
            var results = response.data;
            for (var i = 0; i < results.length; i++) {
                var sportDiv = $("<div>");
                var p = $("<p>").text("Rating: " + results[i].rating);
                var sportImage = $("<img>");
                sportImage.attr("src", results[i].images.fixed_height.url);
                sportDiv.append(p);
                sportDiv.append(sportImage);
                $("#gif-area").prepend(sportDiv);
            }
        });
    }

    $("#add-sport").on("click", function (event) {
        event.preventDefault();
        newsport = $("#new-sport").val().trim();
        sportsArray.push(newsport);
        createButtons();
    });
    
    createButtons();
    
    $(document).on("click", ".sport", displayGifs);