let submitButton = document.getElementById("submit_button");
let title = document.getElementById("title_input");
let noun = document.getElementById("noun");
let verb = document.getElementById("verb");
let adj = document.getElementById("adjective");
let main = document.getElementById("main_title");
let story = document.getElementById("story_result");

submitButton.onclick = function(event) {
    event.preventDefault();
    if (title.value == "") {
        alert("Fill out title")
    }
    else if (noun.value == "") (
        alert("Fill out noun")
    )
    else if (verb.value == "") {
        alert("Fill out verb")
    }
    else if (adj.value == "") {
        alert("Fill out adjectives")
    }
    else {
        main.innerText = title.value;
        story.innerText = "Last night I ate a " + noun.value + ", and today I just had to " + verb.value + ". What a " + adj.value + " day.";
    }
}