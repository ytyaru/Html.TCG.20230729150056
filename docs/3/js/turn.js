class Turn {
    constructor(humans) {
        this.humans = humans
        this._tick = 0
        this._tick_limit = 10 * humans.length
    }
    get Count() { return Math.floor(this._tick / this.humans.length) }
    set onTurn(fn) { this.onturn = fn }
    loop() {
        this._tick = 0
        while(this._tick < this._tick_limit) {
            this._tick++
            onturn(this.Count, this._tick)
        }
        return ResultTypes.TurnLimit
    }
    #isLoop() { 
        this._tick++
        this._tick<this.TURN_LIMIT
    }
    loop() {
        for (let t=0; t<this.TURN_LIMIT; t++) {
            let [attaker, defender] = this.#turn(t)
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
    #turn(humans) {
        this.count = Math.floor(t/2) + 1
        let attaker = humans[(0 === t % 2) ? 0 : 1]
        let defender = humans[(0 === t % 2) ? 1 : 0]
        return [attaker, defender]
    }

}
