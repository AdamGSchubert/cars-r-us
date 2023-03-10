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
    carOrders:[

    ]
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