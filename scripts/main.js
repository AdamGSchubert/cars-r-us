import { paintHtml } from "./carColor.js";
import { interiorHtml } from "./interior.js";
import { techHtml } from "./tech.js";
import { wheelHtml } from "./wheels.js";

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

    </section>
    `
return text
}


const addHtml = document.querySelector("#carMaker")

addHtml.innerHTML = pageHtml()