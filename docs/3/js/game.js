class Game {
    constructor() { this.turn = 0; this.TURN_LIMIT = 10 * 2; }
    start(humans) { // 対戦者
        console.log(humans)
        const view = new View(humans)
        view.make()
        humans.sort((a,b)=>a.agility - b.agility)
        for (let t=0; t<this.TURN_LIMIT; t++) {
            let [attaker, defender] = this.#turn(humans, t)
            let damage = Math.abs(attaker.power - defender.toughness)
            view.logging(`${this.turn}週目 ${attaker.name}は${defender.name}に攻撃し${damage}のダメージを与えた！`)
            defender.life -= damage
            view.update()
            if (defender.life <= 0) {
                view.logging(`戦闘終了 勝者 ${attaker.name}！`)
                return [attaker, this.turn]
            }
        }
        view.logging(`戦闘終了 引き分け ${TURN_LIMIT}以内に勝敗つかず…`)
        for (let h=0; h<humans.length; h++) {
            this.logging(`${humans[h].name} ${humans[h].life}`)
        }
    }
    #loog() {
        for (let t=0; t<this.TURN_LIMIT; t++) {
            let [attaker, defender] = this.#turn(humans, t)
            let damage = Math.abs(attaker.power - defender.toughness)
            view.logging(`${this.turn}週目 ${attaker.name}は${defender.name}に攻撃し${damage}のダメージを与えた！`)
            defender.life -= damage
            view.update()
            if (defender.life <= 0) {
                view.logging(`戦闘終了 勝者 ${attaker.name}！`)
                return [attaker, this.turn]
            }
        }

    }
    #turn(humans, t) {
        this.turn = Math.floor(t/2) + 1
        let attaker = humans[(0 === t % 2) ? 0 : 1]
        let defender = humans[(0 === t % 2) ? 1 : 0]
        return [attaker, defender]
    }
    #turnJudge() { // 続行,終了(A勝,B勝,引分)

    }
}

