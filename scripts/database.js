let database = {
    paintColor:[
        {
            id: 1,
            color: "silver",
            price: 500
        },
        {
            id: 2,
            color: "midnight blue",
            price: 1500
        },
        {
            id: 3,
            color: "firebrick red",
            price: 1200
        },
        {
            id: 4,
            color: "spring green",
            price: 1800
        },
    ],
    interior:[
        {
            id: 1,
            fabric: "beige fabric",
            price: 100
        },
        {
            id: 2,
            fabric: "charcoal fabric",
            price: 500
        },
        {
            id: 3,
            fabric: "white leather",
            price: 900
        },
        {
            id: 4,
            fabric: "black leather",
            price: 1000
        }
    ],
    tech:[
        {
            id: 1,
            techPack: "basic package",
            price: 200
        },
        {
            id: 2,
            techPack: "navigation package",
            price: 600
        },
        {
            id: 3,
            techPack: "visibility package",
            price: 800
        },
        {
            id: 4,
            techPack: "ultra package",
            price: 1000
        }
    ],
    wheels:[
        {
            id: 1,
            wheelStyle: "17-inch Pair Radial",
            price: 250
        },
        {
            id: 2,
            wheelStyle: "17-inch Pair Radial Black",
            price: 300
        },
        {
            id: 3,
            wheelStyle: "18-inch Pair Spoke Silver",
            price: 400
        },
        {
            id: 4,
            wheelStyle: "18-inch Pair Spoke Black",
            price: 600
        }
    ],
    carMaker:{},
    carOrders:[

    ]
}

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.carMaker}

    // Add a new primary key to the object
    //const lastIndex = database.carOrders.length
    
    const lastIndex = database.carOrders.length - 1
    newOrder.id = (database.carOrders[lastIndex]?.id || 0) + 1
    // if (lastIndex === 0){
    //     // database.carOrders.id = 0
    //     newOrder.id = database.carOrders.[lastIndex].id + 1
    // } 
    // else{
    // newOrder.id = database.carOrders[lastIndex].id + 1
    // }
    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.carOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.carMaker = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}


export const getPaint = () => {
    return database.paintColor.map(paintColor => ({ ...paintColor}))
}
export const getInterior = () => {
    return database.interior.map(interior => ({ ...interior }))
}
export const getTech = () => {
    return database.tech.map(tech => ({ ...tech }))
}
export const getWheels = () => {
    return database.wheels.map(wheels => ({ ...wheels }))
}

export const getOrders =()=>{
    return database.carOrders.map(carOrders=>({...carOrders}))
}

export const setColor = (id)=>{
    database.carMaker.paintId = id
}
export const setTech = (id)=>{
    database.carMaker.techId = id
}
export const setInterior = (id)=>{
    database.carMaker.interiorId = id
}
export const setWheel = (id)=>{
    database.carMaker.wheelId = id
}
