import settings from './vars/settings';
import colors from './vars/colors';
import Player from './Player';

window.GameState = {
    showingWinScreen: false,

    players : {
        user: new Player('user'),
        computer: new Player('computer')
    },

    get leader () {
        // tie
        if(this.players.user.score == this.players.computer.score) {
            return null;
        }

        return (this.players.user.score > this.players.computer.score) ? this.players.user : this.players.computer;
    },

    get winningText () {
        if(!this.leader) return null;

        return this.leader.name == 'user' ? 'You won!' : 'You lost!';
    },

    resetScores () {
        this.players.user.resetScore();
        this.players.computer.resetScore();
    },

    ball: {
        xDirection: 'right',
        yDirection: 'down',

        x: 20,

        y: 200,

        delta: {
            x: 0,
            y: 0,
            speed: .35,

            get xSpeed () {
                return (this.x * this.speed);
            },

            get ySpeed () {
                return (this.y * this.speed);
            }
        },

    },

    leftPaddle: {
        x      : 10,
        y      : 200,
        height : 100,
        width  : 10
    },

    rightPaddle: {
        x      : 780,
        y      : 200,
        height : 100,
        width  : 10,
        speed  : 20,
        detectionPadding: 35
    },

    settings,

    colors
};

export default window.GameState;
