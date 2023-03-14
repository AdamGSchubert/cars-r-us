import { getInterior, getOrders, getPaint, getTech, getWheels } from "./database.js";





export const orderHtml = () => {
    let orders = getOrders()// must recall the get orders after the data has been entered otherwise the array will still be empty 
    let paintColor = getPaint()
    let interior = getInterior()
    let wheels = getWheels()
    let tech = getTech()
    
    let text ="<ul>"
//need to loop through orders array.
for (let order of orders){
    const chosenPaint = paintColor.find(paintColor =>{
        return paintColor.id === order.paintId
    })
    const chosenTech = tech.find(tech =>{
        return tech.id === order.techId
    })
    const chosenWheel = wheels.find(wheels =>{
        return wheels.id === order.wheelId
    })
    const chosenInt = interior.find(interior =>{
       return interior.id === order.interiorId
    })

    let totalCost = chosenPaint.price + chosenInt.price +chosenTech.price+chosenWheel.price
    
    let orderTotal = totalCost.toLocaleString("en-US", {
        style:"currency",
        currency: "USD"
    })
    text += `<li> Order #${order.id} cost is quoted at ${orderTotal}</li>`
} 
text += "</ul>"
return text
}

