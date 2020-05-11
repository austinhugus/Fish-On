let fish = 0
let newRod = 0
let luck = 0
let boat = 0
let hatch = 0
let multiplier = 0
//Catch Fish

function fishing() {
    fish++
    update()
}

function newRodTotal() {
    newRod++;
    fish -= clickUpgrades.newRod.price;
    clickUpgrades.newRod.price *= 2;

    update()
}

function luckTotal() {
    luck++
    fish -= clickUpgrades.luck.price;
    fish *= (clickUpgrades.luck.multiplier)
    clickUpgrades.luck.price *= 2
    update()
}

function boatTotal() {
    boat++
    fish -= automaticUpgrades.boat.price;
    fish *= (clickUpgrades.boat.price);
    automaticUpgrades.boat.price *= 2

    update()
}

function hatchTotal() {
    hatch++
    fish -= automaticUpgrades.hatch.price;
    fish *= (automaticUpgrades.hatch.price);
    automaticUpgrades.hatch.price * 2
    update()
}


//Upgrades to make catching quicker

let clickUpgrades = {
    newRod: {
        price: 5,
        quantity: 0,
        multiplier: 2
    },
    luck: {
        price: 100,
        quantity: 0,
        multiplier: 5
    }
}

//automatic upgrades
let automaticUpgrades = {
    boat: {
        price: 250,
        quantity: 0,
        multiplier: 25
    },
    hatch: {
        price: 500,
        quantity: 0,
        multiplier: 50
    }
}

function update() {
    document.getElementById("fish-caught").innerText = fish.toString();
    document.getElementById("newRodCount").innerText = newRod.toString();
    document.getElementById("luckCount").innerText = luck.toString();
    document.getElementById("boatCount").innerText = boat.toString();
    document.getElementById("hatchCount").innerText = hatch.toString();



    //Disable Buttons
    let noNewRod = document.getElementById("newRod")
    let noLuck = document.getElementById("luck")
    let noBoat = document.getElementById("boat")
    let noHatch = document.getElementById("hatch")

    noNewRod.setAttribute("disabled", "true")
    noLuck.setAttribute("disabled", "true")
    noBoat.setAttribute("disabled", "true")
    noHatch.setAttribute("disabled", "true")

    if (fish >= clickUpgrades.newRod.price) {
        noNewRod.removeAttribute("disabled")
    }
    if (fish >= clickUpgrades.luck.price) {
        noLuck.removeAttribute("disabled")
    }
    if (fish >= automaticUpgrades.boat.price) {
        noBoat.removeAttribute("disabled")
    }
    if (fish >= automaticUpgrades.hatch.price) {
        noHatch.removeAttribute("disabled")
    }
}


// How buying these updates will affext your gold






update()