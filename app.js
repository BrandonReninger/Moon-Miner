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
    let total = 1
    let quantity = 0

    for (const key in clickUpgrades) {
        if (clickUpgrades["applied"] === true) {
            quantity += quantity;
            total = clickUpgrades["multiplier"] * quantity
        }
    }
    /*if (inventory.pickaxe >= 1 && inventory.rover >= 1 && inventory.moonBase >= 1) {
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
    }*/


    // FIXME iterate through clickupgrades and build a sum

    inventory.gold += total


    update()
}

//TODO -Make decrement work
function addPickaxe() {
    if (inventory.gold >= clickUpgrades.pickaxe.price) {
        inventory.pickaxe += 1
        inventory.gold -= 10
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
    if (inventory.gold >= clickUpgrades.addRover.price) {
        inventory.rover += 1
        inventory.gold -= 20
        clickUpgrades.rover.quantity += 1
        clickUpgrades.rover.applied === true
        clickUpgrades.rover.price *= 2
    }
    update()
}


function addMoonHome() {
    if (inventory.gold >= clickUpgrades.moonBase.price) {
        inventory.moonBase += 1
        inventory.gold -= 30
        clickUpgrades.moonBase.quantity += 1
        clickUpgrades.moonBase.applied === true
        clickUpgrades.moonBase.price *= 2
    }
    update()
}


function addAliens() {
    if (inventory.gold >= automaticUpgrades.aliens.price) {
        inventory.gold -= 50
        automaticUpgrades.aliens.applied === true
        automaticUpgrades.aliens.price *= 2
        // FIXME increment quantity 
    }
    startInterval()
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

let collectionInterval = 0

function startInterval() {
    collectionInterval = setInterval(collectAutoUpgrades, 3000)
}
// START Interval 


function collectAutoUpgrades() {
    for (const key in automaticUpgrades) {
        if (automaticUpgrades.hasOwnProperty(key)) {
            const element = automaticUpgrades[key];
            console.log(automaticUpgrades.quantity)
            //FIXME collect based on the quantity 

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