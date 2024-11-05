const languageDiv = document.querySelector('#language-div') as HTMLDivElement;
const toggleButton = document.querySelector("button") as HTMLButtonElement;
const printButton = document.querySelector("#print-button") as HTMLButtonElement



toggleButton.addEventListener("click" , ()=>{
    if(toggleButton.innerText == "Hide Languages"){
        toggleButton.innerText = "Show Languages"
        languageDiv.style.display = "none"
    }else{
    toggleButton.innerText = "Hide Languages"
         languageDiv.style.display = "unset"
    }
})


printButton.addEventListener("click" , ()=>{
        window.print()
})











