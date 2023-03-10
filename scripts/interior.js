import { getInterior } from "./database.js"

let interiors = getInterior()


export const interiorHtml = () => {
    let chooseInt = `<select id="resource">`
    chooseInt+= `<option value=0">select your Interior</option>`
    for (let interior of interiors) {
        chooseInt += `<option value="${interior.id}">${interior.fabric}</option>`
    }
    chooseInt += "</select>"
    return chooseInt
}