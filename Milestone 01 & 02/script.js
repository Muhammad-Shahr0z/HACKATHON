var languageDiv = document.querySelector('#language-div');
var toggleButton = document.querySelector("button");
var printButton = document.querySelector("#print-button");
toggleButton.addEventListener("click", function () {
    if (toggleButton.innerText == "Hide Languages") {
        toggleButton.innerText = "Show Languages";
        languageDiv.style.display = "none";
    }
    else {
        toggleButton.innerText = "Hide Languages";
        languageDiv.style.display = "unset";
    }
});
printButton.addEventListener("click", function () {
    window.print();
});
