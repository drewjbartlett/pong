import GameState from './GameState';

export default class {
    constructor (canvas) {
        this.canvas = canvas;

        this.run();
    }

    run () {
        this.draw();
    }

    draw () {
        this.canvas.color(GameState.colors.ball).beginPath();
        this.canvas.context.arc(GameState.ball.x, GameState.ball.y, GameState.settings.ball.size, 0, Math.PI*2, true);
        this.canvas.context.closePath();
        this.canvas.context.fill();
    }

    reset () {
        this.reverseBallSpeed();
        GameState.ball.x = this.canvas.el.width / 2;
        GameState.ball.y = this.canvas.el.height / 2;
    }

    reverseBallSpeed () {
        GameState.settings.ball.speed.x = -GameState.settings.ball.speed.x;
    }

    collisionWithPaddle (paddle) {
        paddle = `${paddle}Paddle`;

        if (!GameState[paddle]) return;

        let paddleConditions = {
            leftPaddle: GameState.ball.x <= (GameState[paddle].x + GameState[paddle].width),
            rightPaddle: GameState.ball.x >= (GameState[paddle].x - GameState[paddle].width)
        };

        if (paddleConditions[paddle] &&
            GameState.ball.y > GameState[paddle].y &&
            GameState.ball.y <  (GameState[paddle].y + GameState[paddle].height)) {

            return true;
        }

        return false;
    }

    move () {
        GameState.ball.x = GameState.ball.x + GameState.settings.ball.speed.x;
        GameState.ball.y = GameState.ball.y + GameState.settings.ball.speed.y;

        if(this.collisionWithPaddle('left')) {
            this.reverseBallSpeed();
        }

        if(this.collisionWithPaddle('right')) {
            this.reverseBallSpeed();
        }

        if(GameState.ball.x < GameState.settings.boundaries.left) {
            this.reset();

            GameState.scores.computer++;
        }

        if(GameState.ball.x > this.canvas.el.width - GameState.settings.boundaries.right) {
            // GameState.settings.ball.speed.x = -GameState.settings.ball.speed.x;

            this.reset();


            GameState.scores.user++;
        }

        if(GameState.ball.y < GameState.settings.boundaries.top) {
            GameState.settings.ball.speed.y = -GameState.settings.ball.speed.y;

        }

        if(GameState.ball.y > this.canvas.el.height - GameState.settings.boundaries.bottom) {
            GameState.settings.ball.speed.y = -GameState.settings.ball.speed.y;
        }
    }
}
