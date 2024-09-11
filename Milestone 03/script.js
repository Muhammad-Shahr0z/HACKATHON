//PERSONAL INFORMATION VARIABLES  
var downloadbtn = document.getElementById('download-btn');
var shareBtn = document.getElementById('share-btn');
var uploadedImage = document.getElementById('uploaded-image');
var imageContainer = document.getElementById('uploaded-image');
// Image Input 
// Function to handle image upload and display
function handleImageUpload() {
    var imageInput = document.getElementById('image-input');
    if (imageInput && uploadedImage) {
        imageInput.addEventListener('change', function (event) {
            var input = event.target;
            if (input.files && input.files[0]) {
                var file = input.files[0];
                var reader = new FileReader();
                reader.onload = function (e) {
                    var _a;
                    if ((_a = e.target) === null || _a === void 0 ? void 0 : _a.result) {
                        uploadedImage.src = e.target.result;
                    }
                };
                reader.readAsDataURL(file);
            }
        });
    }
}
// Initialize the image upload handler
document.addEventListener('DOMContentLoaded', handleImageUpload);
//// PERSONAL INFORMATION VARIABLES 
var fullName = document.getElementById("fname");
var emailAddress = document.getElementById("email");
var mobileNumber = document.getElementById("mobileNumber");
var fullAddress = document.getElementById("fullAddress");
//EDUCATION SECTION////
// Add MORE BUTTON
var addMoreButton = document.getElementById("addMoreButton");
// Text Area Access
var textArea_2 = document.getElementById("educationAreaTwo");
var textArea_1 = document.getElementById("educationAreaOne");
//ADD MORE BUTTON
addMoreButton.addEventListener("click", function (event) {
    event.preventDefault();
    if (addMoreButton.innerHTML === "Add More") {
        addMoreButton.innerHTML = "Remove";
        textArea_2.style.display = "block";
    }
    else {
        textArea_2.style.display = "none";
        addMoreButton.innerHTML = "Add More";
        textArea_2.value = "";
    }
});
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
// SKILLS SECTION
// Add MORE BUTTON
var skillAddMoreButton = document.getElementById("skillAddMoreButton");
// Text Area Access
var skillAreaOne = document.getElementById("skillAreaOne");
var skillAreaTwo = document.getElementById("skillAreaTwo");
skillAddMoreButton.addEventListener("click", function (event) {
    event.preventDefault();
    if (skillAddMoreButton.innerHTML === "Add More") {
        skillAddMoreButton.innerHTML = "Remove";
        skillAreaTwo.style.display = "block";
    }
    else {
        skillAreaTwo.style.display = "none";
        skillAreaTwo.innerText;
        skillAddMoreButton.innerHTML = "Add More";
        skillAreaTwo.value = "";
    }
});
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
// Work Experience SECTION
// Add MORE BUTTON
var workAddMoreButton = document.getElementById("workAddMoreButton");
// Text Area Access
var workAreaTwo = document.getElementById("workAreaTwo");
var workAreaOne = document.getElementById("workAreaOne");
workAddMoreButton.addEventListener("click", function (event) {
    event.preventDefault();
    if (workAddMoreButton.innerHTML === "Add More") {
        workAddMoreButton.innerHTML = "Remove";
        workAreaTwo.style.display = "block";
    }
    else {
        workAreaTwo.style.display = "none";
        workAreaTwo.innerText;
        workAddMoreButton.innerHTML = "Add More";
        workAreaTwo.value = "";
    }
});
// GENERATE RESUME SECTION
var ResumeForm = document.getElementById("resumeForm");
var showResume = document.getElementById("output");
var GenerateResume = function (event) {
    event.preventDefault();
    //This Changes Only For  Milestone 03 to Stop Editable Functionality  because Editable Resume Feature Will Be In Next Milestone
    emailAddress.disabled = true;
    fullName.disabled = true;
    mobileNumber.disabled = true;
    fullAddress.disabled = true;
    textArea_1.disabled = true;
    textArea_2.disabled = true;
    workAreaOne.disabled = true;
    workAreaTwo.disabled = true;
    skillAreaOne.disabled = true;
    skillAreaTwo.disabled = true;
    //////////////////////////////////////////////////////////////////////////////
    //image container visibility
    imageContainer.style.display = "block";
    // Variables
    //personal Information
    fullName;
    emailAddress;
    mobileNumber;
    fullAddress;
    //education
    textArea_1;
    textArea_2;
    //Skills
    skillAreaOne;
    skillAreaTwo;
    // Work Experience
    workAreaOne;
    workAreaTwo;
    // This Variable Assign A New Content To My Empty Div  & This Is Generated Resume Section
    showResume.innerHTML = "<div class=\"container\">\n  \n  <h1 class=\"mainHeading\">".concat(fullName.value, "</h1>\n\n  <!-- Personal Information Section -->\n\n  <section> \n  \n  <h2>Personal Information</h2>\n  <p>\n  <i class=\"fa-regular fa-user infoIcon\"></i>\n  <strong>Full Name :</strong> <span id=\"name\">").concat(fullName.value, "</span>\n  </p>\n  \n  <p>\n  <i class=\"fa-regular fa-envelope infoIcon\"></i>\n  <strong>Email Address :</strong>\n  <span id=\"contact\"> ").concat(emailAddress.value, "</span>\n  </p>\n  \n  <p>\n  <i class=\"fa-solid fa-square-phone-flip infoIcon\"></i>\n  <strong>Mobile Number :</strong><span id=\"contact\">").concat(mobileNumber.value, "</span>\n  </p>\n  \n  <p>\n  <i class=\"fa-regular fa-address-book infoIcon\"></i>\n  <strong>Address :</strong> <span id=\"contact\">").concat(fullAddress.value, "</span>\n  </p>\n  \n  </section>\n  \n  \n  \n  <!-- Education Section -->\n  \n  <section>\n  <i class=\"fa-solid fa-graduation-cap secIcon\"></i>\n  \n  <h2>Education</h2>\n  \n  <pre><i class=\"fa-solid fa-circle-dot\"></i> ").concat(textArea_1.value, "</pre>\n  \n  <pre></i> ").concat(textArea_2.value != "" ? textArea_2.value : "", "</pre>\n  \n  </section>\n  \n  \n  \n  \n  <!-- Skills Section -->\n  \n  <section>\n  <i class=\"fa-solid fa-rocket secIcon\"></i>\n  <h2>Skills</h2>\n  <pre><i class=\"fa-solid fa-circle-dot\"></i> ").concat(skillAreaOne.value, "</pre>\n  <pre></i> ").concat(skillAreaTwo.value != "" ? skillAreaTwo.value : "", "</pre>\n  \n  </section>\n  \n  \n  \n  \n  <!-- Work Experience Section -->\n  \n  <section>\n  <i class=\"fa-solid fa-briefcase secIcon\"></i>\n  <h2>Work Experience</h2>\n  <pre><i class=\"fa-solid fa-circle-dot\"></i> ").concat(workAreaOne.value, "</pre>\n  <pre></i> ").concat(workAreaTwo.value != "" ? workAreaTwo.value : "", "</pre>\n  \n  </section>\n  \n  \n  ");
    // Hidden Button Visibility Show
    downloadbtn.style.display = 'inline-block';
    shareBtn.style.display = 'inline-block';
};
ResumeForm.addEventListener("submit", GenerateResume);
// Unlock In Next Milestone
// Download Resume Button 
// --Reason commented For Milestone 03   This Feature Use to Next Milestone
// downloadbtn.addEventListener('click', () => {
//   window.print()
// })
// Share Resume Button 
// shareBtn.addEventListener('click', () => {
//   // Get the content of the desired div
//   const outputDiv = document.getElementById('output') as HTMLElement;
//   if (outputDiv) {
//       const content = outputDiv.innerText || outputDiv.textContent; // Get text content of the div
//       if (navigator.share) {
//           // Use the Web Share API
//           navigator.share({
//               title: 'Content to Share',
//               text: content || 'No content to share', // Default text if content is empty
//               url: window.location.href  // Optional: Include the page URL
//           })
//           .then(() => {
//               console.log('Content shared successfully');
//           })
//           .catch(error => {
//               console.error('Error sharing content:', error);
//           });
//       } else {
//           alert('Web Share API is not supported in this browser.');
//       }
//   }
// });
