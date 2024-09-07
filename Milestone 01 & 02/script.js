"use strict";
// Function to toggle visibility of the Skills section
function toggleSkillsVisibility() {
    var skillsSection = document.getElementById('skills');
    var toggleSkillsButton = document.getElementById('toggle-skills');
    if (skillsSection && toggleSkillsButton) {
        if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
            skillsSection.style.display = 'block';
            toggleSkillsButton.textContent = 'Hide Skills';
        }
        else {
            skillsSection.style.display = 'none';
            toggleSkillsButton.textContent = 'Show Skills';
        }
    }
}
// Add event listener to the button after the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    var toggleSkillsButton = document.getElementById('toggle-skills');
    if (toggleSkillsButton) {
        toggleSkillsButton.addEventListener('click', toggleSkillsVisibility);
    }
});
