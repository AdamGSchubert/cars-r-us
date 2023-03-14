import { getPaint, setColor } from "./database.js";

let carColor = getPaint()



export const paintHtml = () => {
    let choosePaint = `<select id="carPaint">`
    choosePaint+= `<option value=0">select your Car Color</option>`
    for (let paint of carColor) {
        choosePaint += `<option value="${paint.id}">${paint.color}</option>`
    }
    choosePaint += "</select>"
    return choosePaint
}
document.addEventListener("change",(changeEvent)=>{
    if (changeEvent.target.id === "carPaint") {
        const chosenOption = changeEvent.target.value
        console.log(chosenOption)
        setColor(parseInt(changeEvent.target.value))
    }
    })