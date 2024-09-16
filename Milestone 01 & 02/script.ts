const skillsDisplay:HTMLDivElement = document.getElementById('skills') as HTMLDivElement
const skillsButton:HTMLButtonElement = document.getElementById('toggle-skills') as HTMLButtonElement
skillsButton.addEventListener("click" , ()=>{

  if (skillsButton.innerHTML == "Show Skills") {

    skillsDisplay.style.display = "block"
    skillsButton.innerHTML = "Hide Skills"
    
  }else{

     skillsButton.innerHTML = "Show Skills"
       skillsDisplay.style.display = "none"
  }
    
})




