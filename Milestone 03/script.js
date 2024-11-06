// Resume Variables;
// COntact information Variable resume
var firstUserName = document.getElementById("firstUserName");
var lastUserName = document.getElementById("lastUserName");
var profession = document.getElementById("profession");
var userPhone = document.getElementById("userPhone");
var userEmail = document.getElementById("userEmail");
var userAddress = document.getElementById("userAddress");
var userID = document.getElementById("userID");
// INput fieled Variables 
var inputfName = document.getElementById('inputfName');
var inputlName = document.getElementById('inputlName');
var inputProfession = document.getElementById('inputProfession');
var inputNumber = document.getElementById('inputNumber');
var inputEmail = document.getElementById('inputEmail');
var inputCnic = document.getElementById('inputCnic');
var inputAddress = document.getElementById('inputAddress');
var jobField = document.getElementById("jobField");
var Educationclass = document.getElementsByClassName('Education-class');
// AddMoreEducations Function
var AddMoreEducations = function () {
    var AddMoreEdu = document.getElementsByClassName('Education-Section')[0];
    var WrapperDiv = document.createElement('div');
    WrapperDiv.classList.add('inputWrape');
    var inputOne = document.createElement('input');
    inputOne.classList.add('Education-class');
    inputOne.setAttribute("placeholder", "Field of study (e.g.,Computer Science)");
    inputOne.setAttribute("type", "text");
    var inputTwo = document.createElement('input');
    inputTwo.classList.add('Education-class');
    inputTwo.setAttribute("placeholder", "Degree, institution,and year");
    inputTwo.setAttribute("type", "text");
    WrapperDiv.appendChild(inputOne);
    WrapperDiv.appendChild(inputTwo);
    AddMoreEdu.appendChild(WrapperDiv);
};
// AddMoreExperience Function
var AddMoreExperience = function () {
    var AddMoreExp = document.getElementsByClassName('Experience-Section')[0];
    var WrapperDiv = document.createElement('div');
    WrapperDiv.classList.add('inputWrape');
    var inputOne = document.createElement('input');
    inputOne.classList.add('Experience-class');
    inputOne.setAttribute("placeholder", "Job Title (e.g., Software Engineer)");
    inputOne.setAttribute("type", "text");
    var inputTwo = document.createElement('input');
    inputTwo.classList.add('Experience-class');
    inputTwo.setAttribute("placeholder", "Company, years, key responsibilities");
    inputTwo.setAttribute("type", "text");
    WrapperDiv.appendChild(inputOne);
    WrapperDiv.appendChild(inputTwo);
    AddMoreExp.appendChild(WrapperDiv);
};
// AddMoreSkill Function
var AddMoreSkills = function () {
    var AddMoreSkill = document.getElementsByClassName('Skills-Section')[0];
    var WrapperDiv = document.createElement('div');
    WrapperDiv.classList.add('inputWrape');
    var inputOne = document.createElement('input');
    inputOne.classList.add('Skills-class');
    inputOne.setAttribute("placeholder", "Skill/Expertise (e.g.,HTML,CSS)");
    inputOne.setAttribute("type", "text");
    var inputTwo = document.createElement('input');
    inputTwo.classList.add('Skills-class');
    inputTwo.setAttribute("placeholder", "Skill Level (%) 0 to 100 ?");
    inputTwo.type = "number";
    inputTwo.min = "1";
    inputTwo.max = "100";
    inputTwo.oninput = function () {
        var inputElement = this;
        var value = inputElement.value;
        inputElement.value = value.replace(/^0+/, '');
        if (parseInt(inputElement.value) > 100) {
            inputElement.value = "100";
        }
    };
    WrapperDiv.appendChild(inputOne);
    WrapperDiv.appendChild(inputTwo);
    AddMoreSkill.appendChild(WrapperDiv);
};
// GenerateResume Function
var GenerateResume = function (event) {
    event.preventDefault();
    // Veriables Injecting 
    firstUserName.innerText = inputfName.value;
    lastUserName.innerText = inputlName.value;
    profession.innerText = inputProfession.value;
    userPhone.innerText = inputNumber.value;
    userEmail.innerText = inputEmail.value;
    userID.innerText = inputCnic.value;
    userAddress.innerText = inputAddress.value;
};
// Print resume Functions
var PrintResume = function () {
    window.print();
};
