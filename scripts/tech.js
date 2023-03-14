import { getTech, setTech } from "./database.js";

let techno = getTech()



export const techHtml = () => {
    let chooseTech = `<select id="tech">`//sets up a select box for options, with the id of resource
    chooseTech+= `<option value=0">select your Technology Package</option>`//sets default displayed option to prompt for user imput
    for (let tech of techno) {
        chooseTech += `<option value="${tech.id}">${tech.techPack}</option>`//uses the id from the tech db for later use
    }
    chooseTech += "</select>"
    return chooseTech//returns the string inturp 
}

document.addEventListener("change",(changeEvent)=>{
if (changeEvent.target.id === "tech") {
    const chosenOption = changeEvent.target.value
    console.log(chosenOption)
    setTech(parseInt(changeEvent.target.value))
}
})