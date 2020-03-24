let gold = 0;

let inventory = {
    gold: 0,
    pickaxe: 0,
    rover: 0,
    moonBase: 0,
}

let clickUpgrades = {
    pickaxe: {
        price: 10,
        quantity: 0,
        multiplier: 2,
        turns: 0,
        applied: true
    },
    rover: {
        price: 20,
        quantity: 0,
        multiplier: 3,
        turns: 0,
        applied: true
    },
    moonBase: {
        price: 30,
        quantity: 0,
        multiplier: 4,
        turns: 0,
        applied: true
    }
};

let automaticUpgrades = {
    aliens: {
        price: 50,
        quantity: 0,
        multiplier: 5,
        applied: true
    }
};



function mine() {
    inventory.gold += 1;
    inventory.gold += (clickUpgrades.pickaxe.quantity * clickUpgrades.pickaxe.multiplier);
    inventory.gold += (clickUpgrades.rover.quantity * clickUpgrades.rover.multiplier);
    inventory.gold += (clickUpgrades.moonBase.quantity * clickUpgrades.moonBase.multiplier);


    update()
}

//TODO -Make decrement work
function addPickaxe() {
    if (inventory.gold >= clickUpgrades.pickaxe.price) {
        inventory.pickaxe += 1
        inventory.gold -= clickUpgrades.pickaxe.price
        clickUpgrades.pickaxe.quantity += 1
        clickUpgrades.pickaxe.applied == true
        clickUpgrades.pickaxe.price *= 2
        clickUpgrades.pickaxe.turns = 3
    } else {
        console.log("You don't have enough gold bro.")
    }
    update()
}


function addRover() {
    if (inventory.gold >= clickUpgrades.rover.price) {
        inventory.rover += 1
        inventory.gold -= clickUpgrades.rover.price
        clickUpgrades.rover.quantity += 1
        clickUpgrades.rover.applied === true
        clickUpgrades.rover.price *= 2
    }
    update()
}


function addMoonHome() {
    if (inventory.gold >= clickUpgrades.moonBase.price) {
        inventory.moonBase += 1
        inventory.gold -= clickUpgrades.moonBase.price
        clickUpgrades.moonBase.quantity += 1
        clickUpgrades.moonBase.applied === true
        clickUpgrades.moonBase.price *= 2
    }
    update()
}


function addAliens() {
    if (inventory.gold >= automaticUpgrades.aliens.price) {
        inventory.gold -= automaticUpgrades.aliens.price
        automaticUpgrades.aliens.quantity += 1
        automaticUpgrades.aliens.applied === true
        automaticUpgrades.aliens.price *= 2
    }
    update()
}

let collectionInterval = 0

function startInterval() {
    collectionInterval = setInterval(collectAutoUpgrades, 3000)
}




function collectAutoUpgrades() {
    for (const quantity in automaticUpgrades) {
        if (automaticUpgrades.hasOwnProperty(quantity)) {
            inventory.gold += (automaticUpgrades[quantity].quantity * automaticUpgrades[quantity].multiplier)
        }
    }
    update()
}




function update() {
    let template = ""

    template += /*html*/ `
    <div class="col-4" id="update">
    <h3 class="font-weight-bold"><span>Inventory</span></h3>
    <h5>Gold: ${inventory.gold} </h5>
    <h5>Pick Axe: ${inventory.pickaxe} </h5>
    <h5>Rover: ${inventory.rover}</h5>
    <h5>Moon Bases: ${inventory.moonBase}</h5>
    </div>
    `
    let mytemplate = document.getElementById("update").innerHTML = template
}

//Pricing
let pickaxeCost = document.getElementById("pickaxe-cost")
pickaxeCost.innerText = clickUpgrades.pickaxe.price.toString()

let roverCost = document.getElementById("rover-cost")
roverCost.innerText = clickUpgrades.rover.price.toString()

let moonBaseCost = document.getElementById("moonBase-cost")
moonBaseCost.innerText = clickUpgrades.moonBase.price.toString()

let aliensCost = document.getElementById("alien-cost")
aliensCost.innerText = automaticUpgrades.aliens.price.toString()

startInterval()


//TODO get this function to work when applied
/*function decrementClickUpgrades() {
    if (clickUpgrades.pickaxe.turns > 1) {
        clickUpgrades.pickaxe.turns--
    } else {
        inventory.gold += 1
    }

    if (clickUpgrades.rover.turns > 1) {
        clickUpgrades.rover.turns--
    } else {
        inventory.gold += 1
    }
} */