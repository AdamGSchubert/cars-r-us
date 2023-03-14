import { getInterior, setInterior } from "./database.js"

let interiors = getInterior()


export const interiorHtml = () => {
    let chooseInt = `<select id="interiorpackage">`
    chooseInt+= `<option value=0">select your Interior</option>`
    for (let interior of interiors) {
        chooseInt += `<option value="${interior.id}">${interior.fabric}</option>`
    }
    chooseInt += "</select>"
    return chooseInt
}

document.addEventListener("change",(changeEvent)=>{
    if (changeEvent.target.id === "interiorpackage") {
        const chosenOption = changeEvent.target.value
        console.log(chosenOption)
        setInterior(parseInt(changeEvent.target.value))
    }
    })