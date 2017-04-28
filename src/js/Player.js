export default class {
    constructor (name) {
        this.name = name;
        this.score = 0;
    }

    incrementScore () {
        this.score++;
    }

    resetScore () {
        this.score = 0;
    }
}
