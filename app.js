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
        multiplier: 1,
        turns: 0,
        applied: false,
    },
    rover: {
        price: 20,
        quantity: 0,
        multiplier: 1,
        turns: 0,
        applied: false,
    },
    moonBase: {
        price: 30,
        quantity: 0,
        multiplier: 1,
        turns: 0,
        applied: false,
    }
};

let automaticUpgrades = {
    aliens: {
        price: 100,
        quantity: 0,
        multiplier: 1,
        applied: false,
    }
};


function mine() {
    if (inventory.pickaxe >= 1 && inventory.rover >= 1 && inventory.moonBase >= 1) {
        inventory.gold += 62
    } else if (inventory.pickaxe >= 1 && inventory.rover >= 1 && inventory.moonBase === 0) {
        inventory.gold += 12
    } else if (inventory.pickaxe >= 1 && inventory.moonBase >= 1 && inventory.rover === 0) {
        inventory.gold += 52
    } else if (inventory.rover >= 1 && inventory.moonBase >= 1 && inventory.pickaxe === 0) {
        inventory.gold += 60
    } else if (inventory.rover >= 1 && inventory.moonBase === 0 && inventory.pickaxe === 0) {
        inventory.gold += 10
    } else if (inventory.moonBase >= 1 && inventory.rover === 0 && inventory.pickaxe === 0) {
        inventory.gold += 50
    } else if (inventory.pickaxe >= 1 && inventory.rover === 0 && inventory.moonBase === 0) {
        inventory.gold += 2
    }
    inventory.gold += 1


    update()
}

//TODO -Make decrement work
function addPickaxe() {
    if (inventory.gold >= clickUpgrades.pickaxe.price) {
        inventory.pickaxe += 1
        inventory.gold -= 10
        clickUpgrades.pickaxe.turns = 3
        clickUpgrades.pickaxe.price * 2
    } else {
        console.log("You don't have enough gold bud.")
    }
    update()
}


function addRover() {
    if (inventory.gold >= 20) {
        inventory.rover += 1
        inventory.gold -= 20
    }
    update()
}


function addMoonHome() {
    if (inventory.gold >= 30) {
        inventory.moonBase += 1
        inventory.gold -= 30
    }
    update()
}


function addAliens() {
    if (inventory.gold >= 50) {
        inventory.gold -= 50

    }
    update()
}

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

function setInterval() {
    let collectionInterval = 0
    collectionInterval = setInterval(collectAutoUpgrades, 3000)
}


function collectAutoUpgrades() {
    for (const key in collectAutoUpgrades) {
        if (collectAutoUpgrades.hasOwnProperty(key)) {
            const element = collectAutoUpgrades[key];
            console.log(element)

        }
    }
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