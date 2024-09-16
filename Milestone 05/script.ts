//buttons & image  VARIABLES
const downloadbtn: HTMLButtonElement = document.getElementById(
  "download-btn"
) as HTMLButtonElement;
const shareBtn: HTMLButtonElement = document.getElementById(
  "share-btn"
) as HTMLButtonElement;
const uploadedImage = document.getElementById(
  "uploaded-image"
) as HTMLImageElement;
const imageContainer = document.getElementById(
  "uploaded-image"
) as HTMLDivElement;

//// PERSONAL INFORMATION VARIABLES
const fullName: HTMLInputElement = document.getElementById(
  "fname"
) as HTMLInputElement;
const emailAddress: HTMLInputElement = document.getElementById(
  "email"
) as HTMLInputElement;
const mobileNumber: HTMLInputElement = document.getElementById(
  "mobileNumber"
) as HTMLInputElement;
const fullAddress: HTMLInputElement = document.getElementById(
  "fullAddress"
) as HTMLInputElement;

// Image Input
// Function to handle image upload and display
function handleImageUpload(): void {
  const imageInput = document.getElementById("image-input") as HTMLInputElement;

  if (imageInput && uploadedImage) {
    imageInput.addEventListener("change", (event: Event) => {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files[0]) {
        const file = input.files[0];
        const reader = new FileReader();

        reader.onload = (e: ProgressEvent<FileReader>) => {
          if (e.target?.result) {
            uploadedImage.src = e.target.result as string;
          }
        };

        reader.readAsDataURL(file);
      }
    });
  }
}

// Initialize the image upload handler
document.addEventListener("DOMContentLoaded", handleImageUpload);

//EDUCATION SECTION////
// Add MORE BUTTON
const addMoreButton: HTMLButtonElement = document.getElementById(
  "addMoreButton"
) as HTMLButtonElement;

// Text Area Access

const textArea_2: HTMLTextAreaElement = document.getElementById(
  "educationAreaTwo"
) as HTMLTextAreaElement;
const textArea_1: HTMLTextAreaElement = document.getElementById(
  "educationAreaOne"
) as HTMLTextAreaElement;

//ADD MORE BUTTON

addMoreButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (addMoreButton.innerHTML === "Add More") {
    addMoreButton.innerHTML = "Remove";

    textArea_2.style.display = "block";
  } else {
    textArea_2.style.display = "none";
    addMoreButton.innerHTML = "Add More";
    textArea_2.value = "";
  }
});

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

// SKILLS SECTION
// Add MORE BUTTON
const skillAddMoreButton: HTMLButtonElement = document.getElementById(
  "skillAddMoreButton"
) as HTMLButtonElement;

// Text Area Access
const skillAreaOne: HTMLTextAreaElement = document.getElementById(
  "skillAreaOne"
) as HTMLTextAreaElement;
const skillAreaTwo: HTMLTextAreaElement = document.getElementById(
  "skillAreaTwo"
) as HTMLTextAreaElement;

skillAddMoreButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (skillAddMoreButton.innerHTML === "Add More") {
    skillAddMoreButton.innerHTML = "Remove";
    skillAreaTwo.style.display = "block";
  } else {
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
const workAddMoreButton: HTMLButtonElement = document.getElementById(
  "workAddMoreButton"
) as HTMLButtonElement;
// Text Area Access
const workAreaTwo: HTMLTextAreaElement = document.getElementById(
  "workAreaTwo"
) as HTMLTextAreaElement;
const workAreaOne: HTMLTextAreaElement = document.getElementById(
  "workAreaOne"
) as HTMLTextAreaElement;

workAddMoreButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (workAddMoreButton.innerHTML === "Add More") {
    workAddMoreButton.innerHTML = "Remove";
    workAreaTwo.style.display = "block";
  } else {
    workAreaTwo.style.display = "none";
    workAreaTwo.innerText;
    workAddMoreButton.innerHTML = "Add More";
    workAreaTwo.value = "";
  }
});

// GENERATE RESUME SECTION
const ResumeForm: HTMLElement = document.getElementById(
  "resumeForm"
) as HTMLFormElement;

const showResume = document.getElementById("output") as HTMLDivElement;

const GenerateResume = (event: Event): void => {
  event.preventDefault();

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

  showResume.innerHTML = `<div class="container">
  
  <h1 class="mainHeading">${fullName.value}</h1>

  <!-- Personal Information Section -->

  <section> 
  
  <h2>Personal Information</h2>
  <p>
  <i class="fa-regular fa-user infoIcon"></i>
  <strong>Full Name :</strong> <span id="name">${fullName.value}</span>
  </p>
  
  <p>
  <i class="fa-regular fa-envelope infoIcon"></i>
  <strong>Email Address :</strong>
  <span id="contact"> ${emailAddress.value}</span>
  </p>
  
  <p>
  <i class="fa-solid fa-square-phone-flip infoIcon"></i>
  <strong>Mobile Number :</strong><span id="contact">${
    mobileNumber.value
  }</span>
  </p>
  
  <p>
  <i class="fa-regular fa-address-book infoIcon"></i>
  <strong>Address :</strong> <span id="contact">${fullAddress.value}</span>
  </p>
  
  </section>
  
  
  
  <!-- Education Section -->
  
  <section>
  <i class="fa-solid fa-graduation-cap secIcon"></i>
  
  <h2>Education</h2>
  
  <pre><i class="fa-solid fa-circle-dot"></i> ${textArea_1.value}</pre>
  
  <pre></i> ${textArea_2.value != "" ? textArea_2.value : ""}</pre>
  
  </section>
  
  
  
  
  <!-- Skills Section -->
  
  <section>
  <i class="fa-solid fa-rocket secIcon"></i>
  <h2>Skills</h2>
  <pre><i class="fa-solid fa-circle-dot"></i> ${skillAreaOne.value}</pre>
  <pre></i> ${skillAreaTwo.value != "" ? skillAreaTwo.value : ""}</pre>
  
  </section>
  
  
  
  
  <!-- Work Experience Section -->
  
  <section>
  <i class="fa-solid fa-briefcase secIcon"></i>
  <h2>Work Experience</h2>
  <pre><i class="fa-solid fa-circle-dot"></i> ${workAreaOne.value}</pre>
  <pre></i> ${workAreaTwo.value != "" ? workAreaTwo.value : ""}</pre>
  
  </section>
  
  
  `;

  // Hidden Button Visibility Show

  downloadbtn.style.display = "inline-block";
  shareBtn.style.display = "inline-block";

};

ResumeForm.addEventListener("submit", GenerateResume);


// Download Resume Button
downloadbtn.addEventListener("click", () => {
  window.print();
});

// Shareable Link 

const generateBtn = document.getElementById("genrate-resume-btn") as HTMLButtonElement;
shareBtn
const usernameInput = document.getElementById("fname") as HTMLInputElement;
const shareableLinkDiv = document.getElementById("shareableLink") as HTMLDivElement;

// Function to generate shareable link
function generateLink(): void {
  const username = usernameInput.value.trim();
  
  if (username) {
    const shareableLink = `${window.location.origin}/${username}/resume`;
    shareBtn.style.display = 'inline-block';
    shareBtn.onclick = () => {
      if (navigator.share) {
        navigator.share({
          title: 'My Resume',
          url: shareableLink,
        })
      }
    };
  } 
}


generateBtn.addEventListener("click", generateLink);

