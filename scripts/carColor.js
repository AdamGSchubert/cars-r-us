import { getPaint } from "./database.js";

let carColor = getPaint()



export const paintHtml = () => {
    let choosePaint = `<select id="resource">`
    choosePaint+= `<option value=0">select your Car Color</option>`
    for (let paint of carColor) {
        choosePaint += `<option value="${paint.id}">${paint.color}</option>`
    }
    choosePaint += "</select>"
    return choosePaint
}