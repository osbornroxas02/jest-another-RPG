const Character = require('./Character');
const Potion = require('../lib/Potion');//keep the ./lib it wont work without it 

class Enemy extends Character {
    constructor(name, weapon) {
        // call parent constructor here:
        super(name);

        this.weapon = weapon;
        this.potion = new Potion();
    }

    getDescription() {
        return `A ${this.name} holding a ${this.weapon} has appeared!`;
    }
};


module.exports = Enemy;


