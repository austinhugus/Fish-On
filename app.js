let fish = 0
let autoMod = 0
let total = 0
//Catch Fish

function fishing() {
    let total = 1

    // For each of your click upgrades increase the total
    total += (clickUpgrades.newRod.multiplier * clickUpgrades.newRod.quantity);
    total += (clickUpgrades.luck.multiplier * clickUpgrades.luck.quantity)

    fish += total
    update()
}

function autoCollect() {
    let total = 1

    autoMod += (automaticUpgrades.boat.multiplier * automaticUpgrades.boat.quantity);
    autoMod += (automaticUpgrades.hatch.multiplier * automaticUpgrades.hatch.quantity)

    fish += autoMod

    update()
}

function newRodTotal() {

    fish -= clickUpgrades.newRod.price;
    clickUpgrades.newRod.quantity++;
    clickUpgrades.newRod.price *= 2;


    update()
}

function luckTotal() {

    fish -= clickUpgrades.luck.price;
    clickUpgrades.luck.quantity++;
    clickUpgrades.luck.price *= 2;
    update()
}

function boatTotal() {

    fish -= automaticUpgrades.boat.price;
    automaticUpgrades.boat.quantity++;
    automaticUpgrades.boat.price *= 2;

    update()

}

function hatchTotal() {

    fish -= automaticUpgrades.hatch.price;
    automaticUpgrades.hatch.quantity++;
    automaticUpgrades.hatch.price *= 2;
    update()

}


//Upgrades to make catching quicker

let clickUpgrades = {
    newRod: {
        price: 50,
        quantity: 0,
        multiplier: 2
    },
    luck: {
        price: 250,
        quantity: 0,
        multiplier: 5
    }
}

//automatic upgrades
let automaticUpgrades = {
    boat: {
        price: 1250,
        quantity: 0,
        multiplier: 25
    },
    hatch: {
        price: 5000,
        quantity: 0,
        multiplier: 50
    }
}


function update() {
    document.getElementById("fish-caught").innerText = fish.toString();
    document.getElementById("newRodCount").innerText = total.toString();
    document.getElementById("luckCount").innerText = total.toString();
    document.getElementById("boatCount").innerText = total.toString();
    document.getElementById("hatchCount").innerText = total.toString();
    document.getElementById("newRodCount").innerText = clickUpgrades.newRod.price.toString();
    document.getElementById("luckCount").innerText = clickUpgrades.luck.price.toString();
    document.getElementById("boatCount").innerText = automaticUpgrades.boat.price.toString();
    document.getElementById("hatchCount").innerText = automaticUpgrades.hatch.price.toString();
    document.getElementById("rodPrice").innerText = clickUpgrades.newRod.quantity * clickUpgrades.newRod.multiplier;
    document.getElementById("luckPrice").innerText = clickUpgrades.luck.quantity * clickUpgrades.luck.multiplier;
    document.getElementById("boatPrice").innerText = automaticUpgrades.boat.quantity * automaticUpgrades.boat.multiplier;
    document.getElementById("hatchPrice").innerText = automaticUpgrades.hatch.quantity * automaticUpgrades.hatch.multiplier;
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


setInterval(autoCollect, 3000)

update()