import { getWheels } from "./database.js";

let wheels= getWheels()

export const wheelHtml = () => {
    let chooseWheel = `<select id="resource">`
    chooseWheel+= `<option value=0">select your wheels</option>`
    for (let wheel of wheels) {
        chooseWheel += `<option value="${wheel.id}">${wheel.wheelStyle}</option>`
    }
    chooseWheel += "</select>"
    return chooseWheel
}