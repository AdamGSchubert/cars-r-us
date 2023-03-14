import { paintHtml } from "./carColor.js";
import { interiorHtml } from "./interior.js";
import { techHtml } from "./tech.js";
import { wheelHtml } from "./wheels.js";
import { addCustomOrder } from "./database.js";
import { orderHtml } from "./orders.js";

const pageHtml = () => {
    let text = `<section class="car">
        <div id="color">
            <h3>select a color</h3>
            ${paintHtml()}
            </div>
        <div id="interior">
            <h3>select an Interior style</h3>
            ${interiorHtml()}
        </div>    
        <div id="techpackage">
            <h3>select a infotainment Package</h3>
            ${techHtml()}
        </div>
        <div id="wheel">
            <h3>select your Wheels</h3>
            ${wheelHtml()}
        </div>
        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>
        <div>
        <article>
            ${orderHtml()}
        </article>
        </div>

    </section>
    `
return text
}


const addHtml = document.querySelector("#carMaker")

const reloadHtml =()=>{
    addHtml.innerHTML = pageHtml()
}

reloadHtml()

document.addEventListener(
    "click",
    (event) => {

        const addToOrder = event.target
        if(addToOrder.id.startsWith("orderButton")){
            addCustomOrder()
        }
    }
)



document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    reloadHtml()
})