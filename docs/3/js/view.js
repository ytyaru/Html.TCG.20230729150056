class View {
    constructor(humans) { this.humans = humans }
    make() { document.querySelector('#game').innerHTML = this.#makeStatus() + this.#makeLog() }
    #makeStatus() { return `<table id="status">
    <tr id="h1"><td id="h1-name"></td><td id="h1-life"></td></tr>
    <tr id="h2"><td id="h2-name"></td><td id="h2-life"></td></tr>
</table>` }
    #makeLog() { return '<textarea id="log" rows="13"></textarea>' }
    update() {
        for (let h=0; h<this.humans.length; h++) {
            for (let p of ['name', 'life']) {
                let id = `#h${h+1}-${p}`
                console.log(id)
                console.log(document.querySelector(id))
                document.querySelector(id).textContent = this.humans[h][p]
            }
        }
    }
    logging(log) {
        console.log(log)
        document.querySelector(`#log`).value = log + '\n' + document.querySelector(`#log`).value
    }
    judge() { // 勝者：黄、敗者：青

    }
}
