
var url = "	https://api.funtranslations.com/translate/morse.json";

var input = document.querySelector(".input-box")
var output = document.querySelector(".output");
var btn = document.querySelector("#submit");

function getURL(text) {
    return url + "?" + "text=" + text;
}

function errorHandler(error) {
    console.log("some error has occured!!", error);
    alert("Something went wrong, please try again later");
}

function convertToMorse() {
    var a = input.value;
    fetch(getURL(a))
        .then(response => response.json())
        .then(json => {
            var translation = json.contents.translated;
            output.innerText = translation;
        })
        .catch(errorhanlder);
}

btn.addEventListener("click", convertToMorse);