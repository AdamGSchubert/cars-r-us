import { getTech } from "./database.js";

let techno = getTech()



export const techHtml = () => {
    let chooseTech = `<select id="resource">`
    chooseTech+= `<option value=0">select your Technology Package</option>`
    for (let tech of techno) {
        chooseTech += `<option value="${tech.id}">${tech.techPack}</option>`
    }
    chooseTech += "</select>"
    return chooseTech
}