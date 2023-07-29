class Game {
    static start(humans) { // 対戦者
        console.log(humans)
        humans.sort((a,b)=>a.agility - b.agility)
        const TURN_LIMIT = 10 * 2
        for (let t=0; t<TURN_LIMIT; t++) {
            let turn = Math.floor(t/2) + 1
            let attaker = humans[(0 === t % 2) ? 0 : 1]
            let defender = humans[(0 === t % 2) ? 1 : 0]
            let damage = Math.abs(attaker.power - defender.toughness)
            this.logging(`${turn}週目 ${attaker.name}は${defender.name}に攻撃し${damage}のダメージを与えた！`)
            defender.life -= damage
            this.draw(humans)
            if (defender.life <= 0) {
                this.logging(`戦闘終了 勝者 ${attaker.name}！`)
                return [attaker, turn]
            }
        }
        this.logging(`戦闘終了 引き分け ${TURN_LIMIT}以内に勝敗つかず…`)
        for (let h=0; h<humans.length; h++) {
            this.logging(`${humans[h].name} ${humans[h].life}`)
        }
    }
    static draw(humans) {
        const attrs = ['name', 'life']
        for (let h=0; h<humans.length; h++) {
            document.querySelector(`#h${h+1}-name`).textContent = humans[h].name
            document.querySelector(`#h${h+1}-life`).textContent = humans[h].life
        }
    }
    static logging(log) {
        console.log(log)
        document.querySelector(`#log`).value = log + '\n' + document.querySelector(`#log`).value
    }
}

