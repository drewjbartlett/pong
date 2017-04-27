import colors from './vars/colors';
import settings from './vars/settings';
import GameState from './GameState';

export default class {
    constructor (canvas, x, y) {
        this.canvas = canvas;
        this.y = y;

        this.run();
    }

    run () {
        this.draw();
    }

    draw () {
        this.canvas.context.fillStyle = colors.ball;

        this.canvas.context.beginPath();
        this.canvas.context.arc(GameState.ball.x, 200, 10, 0, Math.PI*2, true);
        this.canvas.context.closePath();
        this.canvas.context.fill();
    }

    move () {
        if(GameState.ball.direction == 'right') {
            if(GameState.ball.x < (this.canvas.el.width - 50)) {
                GameState.ball.x += settings.ball.speed.x;
                GameState.ball.direction = 'right';
            } else {
                GameState.ball.x -= settings.ball.speed.x;
                GameState.ball.direction = 'left';
            }
        } else {
            if(GameState.ball.x <= 50) {
                GameState.ball.x += settings.ball.speed.x;
                GameState.ball.direction = 'right';
            } else {
                GameState.ball.x -= settings.ball.speed.x;
                GameState.ball.direction = 'left';
            }
        }
    }
}
