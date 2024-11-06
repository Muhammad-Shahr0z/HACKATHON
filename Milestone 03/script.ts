// Resume Variables;



// COntact information Variable resume

let firstUserName   :HTMLElement = document.getElementById("firstUserName") as HTMLElement;
let lastUserName    :HTMLElement = document.getElementById("lastUserName")  as HTMLElement;
let profession      :HTMLElement = document.getElementById("profession")    as HTMLElement;
let userPhone       :HTMLElement = document.getElementById("userPhone")     as HTMLElement;
let userEmail       :HTMLElement = document.getElementById("userEmail")     as HTMLElement;
let userAddress     :HTMLElement = document.getElementById("userAddress")   as HTMLElement;
let userID          :HTMLElement = document.getElementById("userID")        as HTMLElement;







// INput fieled Variables 

let inputfName      :HTMLInputElement = document.getElementById('inputfName')  as HTMLInputElement 
let inputlName      :HTMLInputElement = document.getElementById('inputlName')  as HTMLInputElement 
let inputProfession :HTMLInputElement = document.getElementById('inputProfession')  as HTMLInputElement
let inputNumber     :HTMLInputElement = document.getElementById('inputNumber')  as HTMLInputElement
let inputEmail      :HTMLInputElement = document.getElementById('inputEmail')  as HTMLInputElement
let inputCnic       :HTMLInputElement = document.getElementById('inputCnic')  as HTMLInputElement
let inputAddress    :HTMLInputElement = document.getElementById('inputAddress')  as HTMLInputElement




let jobField        :HTMLElement = document.getElementById("jobField")      as HTMLElement;
let Educationclass = document.getElementsByClassName('Education-class') as HTMLCollectionOf<HTMLInputElement>;











// AddMoreEducations Function
const AddMoreEducations=()=>{

    const AddMoreEdu = document.getElementsByClassName('Education-Section')[0];


    let WrapperDiv = document.createElement('div');
    WrapperDiv.classList.add('inputWrape')

    let inputOne = document.createElement('input');
    inputOne.classList.add('Education-class')
    inputOne.setAttribute("placeholder","Field of study (e.g.,Computer Science)")
    inputOne.setAttribute("type","text")

    let inputTwo = document.createElement('input');
    inputTwo.classList.add('Education-class')
    inputTwo.setAttribute("placeholder","Degree, institution,and year")
    inputTwo.setAttribute("type","text")

    WrapperDiv.appendChild(inputOne)
    WrapperDiv.appendChild(inputTwo)
    AddMoreEdu.appendChild(WrapperDiv)
 
    }


// AddMoreExperience Function
const AddMoreExperience=()=>{
    const AddMoreExp = document.getElementsByClassName('Experience-Section')[0];


    let WrapperDiv = document.createElement('div');
    WrapperDiv.classList.add('inputWrape')

    let inputOne = document.createElement('input');
    inputOne.classList.add('Experience-class')
    inputOne.setAttribute("placeholder","Job Title (e.g., Software Engineer)")
    inputOne.setAttribute("type","text")

    let inputTwo = document.createElement('input');
    inputTwo.classList.add('Experience-class')
    inputTwo.setAttribute("placeholder","Company, years, key responsibilities")
    inputTwo.setAttribute("type","text")

    WrapperDiv.appendChild(inputOne)
    WrapperDiv.appendChild(inputTwo)
    AddMoreExp.appendChild(WrapperDiv)
 
    }
 
// AddMoreSkill Function
const AddMoreSkills=()=>{



    const AddMoreSkill = document.getElementsByClassName('Skills-Section')[0];


    let WrapperDiv = document.createElement('div');
    WrapperDiv.classList.add('inputWrape')

    let inputOne = document.createElement('input');
    inputOne.classList.add('Skills-class')
    inputOne.setAttribute("placeholder","Skill/Expertise (e.g.,HTML,CSS)")
    inputOne.setAttribute("type","text")

    let inputTwo = document.createElement('input');
    inputTwo.classList.add('Skills-class')
    inputTwo.setAttribute("placeholder","Skill Level (%) 0 to 100 ?")
    inputTwo.type ="number"
    inputTwo.min = "1";
    inputTwo.max = "100";

    inputTwo.oninput = function () {
        let inputElement = this as HTMLInputElement;
        let value = inputElement.value;
    
  
        inputElement.value = value.replace(/^0+/, '');
    
 
        if (parseInt(inputElement.value) > 100) {
            inputElement.value = "100";
        }
    
    };

    WrapperDiv.appendChild(inputOne)
    WrapperDiv.appendChild(inputTwo)
    AddMoreSkill.appendChild(WrapperDiv)
 
    }
    



// GenerateResume Function

const GenerateResume=(event:Event) =>{
event.preventDefault()



// Veriables Injecting 
firstUserName.innerText = inputfName.value;
lastUserName.innerText = inputlName.value;
profession.innerText=inputProfession.value;
userPhone.innerText=inputNumber.value;
userEmail.innerText=inputEmail.value;
userID.innerText=inputCnic.value;
userAddress.innerText=inputAddress.value;















    





















}
       


    
    
    
    // Print resume Functions
    const PrintResume = ()=>{
     window.print()

    }








