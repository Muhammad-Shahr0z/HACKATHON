var skillsDisplay = document.getElementById('skills');
var skillsButton = document.getElementById('toggle-skills');
skillsButton.addEventListener("click", function () {
    if (skillsButton.innerHTML == "Show Skills") {
        skillsDisplay.style.display = "block";
        skillsButton.innerHTML = "Hide Skills";
    }
    else {
        skillsButton.innerHTML = "Show Skills";
        skillsDisplay.style.display = "none";
    }
});
