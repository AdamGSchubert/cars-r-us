import { getWheels, setWheel } from "./database.js";

let wheels= getWheels()

export const wheelHtml = () => {
    let chooseWheel = `<select id="rims">`
    chooseWheel+= `<option value=0">select your wheels</option>`
    for (let wheel of wheels) {
        chooseWheel += `<option value="${wheel.id}">${wheel.wheelStyle}</option>`
    }
    chooseWheel += "</select>"
    return chooseWheel
}

document.addEventListener("change",(changeEvent)=>{
    if (changeEvent.target.id === "rims") {
        const chosenOption = changeEvent.target.value
        console.log(chosenOption)
        setWheel(parseInt(changeEvent.target.value))
    }
    })