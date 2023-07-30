class Human {
    constructor(name, life, power, toughness, agility) {
        this.name = name || ''
        this.life = life || 0
        this.power = power || 0
        this.toughness = toughness || 0
        this.agility = agility || 0
    }
    calcDamage(enemy) { return Math.abs(enemy.power - this.toughness) }
    receiveDamage(enemy) { this.life -= this.calcDamage(enemy) }
}

