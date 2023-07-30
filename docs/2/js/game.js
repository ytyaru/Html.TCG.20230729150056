class Game {
    static start(humans) { // 対戦者
        const view = new View(humans)
        View.make()
        console.log(humans)
        humans.sort((a,b)=>a.agility - b.agility)
        const TURN_LIMIT = 10 * 2
        for (let t=0; t<TURN_LIMIT; t++) {
            let turn = Math.floor(t/2) + 1
            let attaker = humans[(0 === t % 2) ? 0 : 1]
            let defender = humans[(0 === t % 2) ? 1 : 0]
            let damage = Math.abs(attaker.power - defender.toughness)
            view.logging(`${turn}週目 ${attaker.name}は${defender.name}に攻撃し${damage}のダメージを与えた！`)
            defender.life -= damage
            this.draw(humans)
            view.update()
            if (defender.life <= 0) {
                view.logging(`戦闘終了 勝者 ${attaker.name}！`)
                return [attaker, turn]
            }
        }
        view.logging(`戦闘終了 引き分け ${TURN_LIMIT}以内に勝敗つかず…`)
        for (let h=0; h<humans.length; h++) {
            this.logging(`${humans[h].name} ${humans[h].life}`)
        }
    }
    static turn(humans, t) {
        let turn = Math.floor(t/2) + 1
        let attaker = humans[(0 === t % 2) ? 0 : 1]
        let defender = humans[(0 === t % 2) ? 1 : 0]
        return [turn, attaker, defender]
    }
}

