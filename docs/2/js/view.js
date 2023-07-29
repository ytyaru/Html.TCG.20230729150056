class View {
    constructor(humans) { this.humans = humans }
    static entry() {

        <textarea id="log" rows="13"></textarea>

    }
    static make(humans) {
        document.querySelector('#game').innerHTML = ''
        document.querySelector('#game').add(this.#makeStatus(humans), this.#makeLog())
    }
    static #makeStatus() { return `<table id="status">
    <tr id="h1"><td id="h1-name"></td><td id="h1-life"></td></tr>
    <tr id="h2"><td id="h2-name"></td><td id="h2-life"></td></tr>
</table>` }
    static #makeLog() { return '<textarea id="log" rows="13"></textarea>' }
    static update(humans) {
        
    }
}
