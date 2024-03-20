const createVehicle = function (type, numWheels, color) {
    const vehicle = {
        type: type,
        numWheels: numWheels,
        color: color
    };
    return vehicle;
};

const car = createVehicle("mazda", "4", "white");
const bike = createVehicle("bike", "2", "green");
const skateboard = createVehicle("skateboard", "4", "multi color");

const myVehicles = [
    car,
    bike,
    skateboard
];

for (let vehicle of myVehicles) {
    for (let key in vehicle) {
        console.log(key, vehicle[key]);
    }
};