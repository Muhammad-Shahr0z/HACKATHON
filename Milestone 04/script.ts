function toTitleCase(text: string): string {
  return text
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function addExperience(): void {
  const experienceList = document.getElementById("experience-list");
  if (experienceList) {
    const experienceItem = document.createElement("div");
    experienceItem.className = "experience-item";
    experienceItem.innerHTML = `
            <input type="text" placeholder="Job Title" class="job-title" required>
            <input type="text" placeholder="Company Name" class="company-name" required>
            <textarea placeholder="Job Description" class="job-description" rows="3" required></textarea>
            <button type="button" onclick="removeExperience(this)">Remove</button>
        `;
    experienceList.appendChild(experienceItem);
  }
}

function removeExperience(button: HTMLElement): void {
  const experienceItem = button.parentElement;
  if (experienceItem) {
    experienceItem.remove();
  }
}

function downloadResume(fileName: string, content: string): void {
  const blob = new Blob([content], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${fileName.replace(/\s+/g, "_")}_resume.html`;
  a.click();
  URL.revokeObjectURL(url);
}

function generateResume(): void {
  const name = (
    document.getElementById("name") as HTMLInputElement
  ).value.trim();
  const email = (
    document.getElementById("email") as HTMLInputElement
  ).value.trim();
  const phone = (
    document.getElementById("phone") as HTMLInputElement
  ).value.trim();
  const education = (
    document.getElementById("education") as HTMLTextAreaElement
  ).value.trim();
  const skills = (
    document.getElementById("skills") as HTMLInputElement
  ).value.trim();
  const profilePicture = (
    document.getElementById("profile-picture-img") as HTMLImageElement
  ).src;

  if (!name || !email || !phone || !education) {
    alert("Please fill out all required fields.");
    return;
  }

  const experiences = Array.from(document.querySelectorAll(".experience-item"))
    .map((item) => {
      const jobTitle = (
        item.querySelector(".job-title") as HTMLInputElement
      ).value.trim();
      const companyName = (
        item.querySelector(".company-name") as HTMLInputElement
      ).value.trim();
      const jobDescription = (
        item.querySelector(".job-description") as HTMLTextAreaElement
      ).value.trim();

      if (!jobTitle || !companyName || !jobDescription) {
        alert("Please fill out all experience fields.");
        throw new Error("Experience fields are incomplete.");
      }

      return `
            <div style="margin-bottom: 1rem;">
                <h3 style="font-size: 1.5rem; color: #007bff;">${toTitleCase(
                  jobTitle
                )}</h3>
                <p style="font-size: 1.2rem; color: #333;">
                    <strong>Company:</strong> ${toTitleCase(companyName)}
                </p>
                <p style="font-size: 1.1rem; color: #555; line-height: 1.6;">${jobDescription}</p>
            </div>`;
    })
    .join("");

  const resumeContent = `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 800px; margin: auto;">
            ${
              profilePicture
                ? `<img src="${profilePicture}" style="border-radius: 50%; width: 150px; height: 150px; display: block; margin: 0 auto;">`
                : ""
            }
            <h1 style="font-size: 2.5rem; color: #007bff; text-align: center; margin-bottom: 1rem;">
                ${toTitleCase(name)}
            </h1>
            <p style="font-size: 1.2rem; color: #333; margin: 0.5rem 0;">
                <strong>Email:</strong> <span style="color: #555;">${toTitleCase(
                  email
                )}</span>
            </p>
            <p style="font-size: 1.2rem; color: #333; margin: 0.5rem 0;">
                <strong>Phone:</strong> <span style="color: #555;">${phone}</span>
            </p>
            <p style="font-size: 1.2rem; color: #333; margin: 0.5rem 0;">
                <strong>Skills:</strong> <span style="color: #555;">${skills}</span>
            </p>
            <h2 style="font-size: 2rem; color: #007bff; margin-top: 2rem; margin-bottom: 1rem;">
                Experience
            </h2>
            ${experiences}
            <h2 style="font-size: 2rem; color: #007bff; margin-top: 2rem; margin-bottom: 1rem;">
                Education
            </h2>
            <p style="font-size: 1.2rem; color: #555; line-height: 1.6;">${education}</p>
        </div>
    `;

  const resumeOutput = document.getElementById("resume-output");
  const resumeContentDiv = document.getElementById("resume-content");
  const downloadButton = document.getElementById("download-button");

  if (resumeOutput && resumeContentDiv && downloadButton) {
    resumeContentDiv.innerHTML = resumeContent;
    resumeOutput.style.display = "block";
    downloadButton.style.display = "block";
    downloadButton.onclick = () =>
      downloadResume(toTitleCase(name), resumeContent);
  }
}

function handleProfilePictureChange(event: Event): void {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = () => {
      const img = document.getElementById(
        "profile-picture-img"
      ) as HTMLImageElement;
      const preview = document.getElementById(
        "profile-picture-preview"
      ) as HTMLDivElement;
      if (img && preview) {
        img.src = reader.result as string;
        preview.style.display = "block"; 
      }
    };
    reader.readAsDataURL(input.files[0]);
  }
}

// Attach event listener for profile picture input
const profilePictureInput = document.getElementById(
  "profile-picture"
) as HTMLInputElement;
if (profilePictureInput) {
  profilePictureInput.addEventListener("change", handleProfilePictureChange);
}
