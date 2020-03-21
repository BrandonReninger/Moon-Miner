let gold = 0;

let inventory = {
    gold: 0,
    pickaxe: 0,
    rover: 0,
    moonBase: 0,
    automaticUpgrades: 0
}

let clickUpgrades = {
    pickaxe: {
        price: 10,
        quantity: 0,
        multiplier: 1,
        turns: 0,
        applied: false
    },
    rover: {
        price: 100,
        quantity: 0,
        multiplier: 1,
        turns: 0,
        applied: false
    },
    moonBase: {
        price: 500,
        quantity: 0,
        multiplier: 1,
        turns: 0,
        applied: false
    }
};

let automaticUpgrades = {
    aliens: {
        price: 1000,
        quantity: 0,
        multiplier: 1,
        applied: false,
    }
};


function mine() {
    if (inventory.pickaxe > 1) {
        inventory.gold += 3
    } else if (inventory.rover > 1) {
        inventory.gold *= 2
    } else if (inventory.moonBase > 1) {
        inventory.gold *= 5
    } else if (inventory.aliens > 1) {
        inventory.gold *= 50
    } else {
        inventory.gold += 1;
    }
    update()
}


function addPickaxe() {
    if (inventory.gold >= 10) {
        inventory.pickaxe += 1
        inventory.gold -= 10
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
    setInterval(() => {

    }, interval);
    if (inventory.gold >= 50) {
        inventory.automaticUpgrades += 1
        inventory.gold -= 50
    }
    update()
}




//FIXME
function increasePrice() {
    if (inventory.pickaxe > 1) {
        clickUpgrades.pickaxe.price * 2
    } else {
        clickUpgrades.pickaxe.price
    }
}
FIXME

function update() {
    let template = ""

    template += /*html*/ `
   <div class="col-4" id="update">
                <h3 class="font-weight-bold"><span>Inventory</span></h3>
                <h5>Gold: ${inventory.gold} </h5>
                <h5>Pick Axe: ${inventory.pickaxe} </h5>
                <h5>Rover: ${inventory.rover}</h5>
                <h5>Moon Bases: ${inventory.moonBase}</h5>
                <h5>Aliens: ${inventory.automaticUpgrades}</h5>
            </div>
    `
    let mytemplate = document.getElementById("update").innerHTML = template
}