import colors from './vars/colors';
import settings from './vars/settings';
import Ball from './Ball';
import GameState from './GameState';

export default class {
    constructor (id) {
        this.id = id;
        this.el = document.getElementById(id);

        setInterval(this.run.bind(this), 1000/settings.fps);
    }

    run () {
        this.draw();
        this.move();
    }

    draw () {
        this.drawCanvas();
        this.drawBall();
        this.drawLeftPaddle();
    }

    drawCanvas () {
        if (!this.el) {
            throw new Error ('No canvas element found');
        }

        this.context = this.el.getContext('2d');
        this.context.fillStyle = colors.canvasBg;
        this.context.fillRect(0, 0, this.el.width, this.el.height);
    }

    drawBall () {
        this.ball = new Ball(this, GameState.ball.x, 200);
    }

    drawLeftPaddle () {
        this.context.fillStyle = colors.paddle;
        this.context.fillRect(50, 200, 10, 100);
    }

    move () {
        this.ball.move();
    }
}
