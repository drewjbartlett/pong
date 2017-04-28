import GameState from './GameState';

export default class {
    constructor (canvas) {
        this.canvas = canvas;

        this.draw();
    }

    draw () {
        this.canvas.color(GameState.colors.ball).beginPath();
        this.canvas.context.arc(GameState.ball.x, GameState.ball.y, GameState.settings.ball.size, 0, Math.PI*2, true);
        this.canvas.context.closePath();
        this.canvas.context.fill();
    }

    reset () {
        if (GameState.leader && GameState.leader.score >= GameState.settings.winningScore) {
            GameState.showingWinScreen = true;
            this.canvas.clearCanvas();
        }

        this.reverseBallSpeed();
        GameState.ball.x = this.canvas.el.width / 2;
        GameState.ball.y = this.canvas.el.height / 2;
    }

    reverseBallSpeed (position = 'x') {
        GameState.settings.ball.speed[position] = -GameState.settings.ball.speed[position];

        return this;
    }

    setDeltaSpeedForPaddle (paddle) {
        paddle = `${paddle}Paddle`;
        GameState.settings.ball.speed.y = GameState.ball.delta.ySpeed;
    }

    collisionWithPaddle (paddle) {
        paddle = `${paddle}Paddle`;

        if (!GameState[paddle]) return;

        let paddleConditions = {
            leftPaddle: GameState.ball.x <= (GameState[paddle].x + GameState[paddle].width),
            rightPaddle: GameState.ball.x >= (GameState[paddle].x - GameState[paddle].width)
        };

        GameState.ball.delta.y = GameState.ball.y - (GameState[paddle].y + GameState[paddle].height / 2);

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
            this.reverseBallSpeed().setDeltaSpeedForPaddle('left');
        }

        if(this.collisionWithPaddle('right')) {
            this.reverseBallSpeed().setDeltaSpeedForPaddle('right');
        }

        if(GameState.ball.x < GameState.settings.boundaries.left) {
            this.reset();

            GameState.players.computer.incrementScore();
        }

        if(GameState.ball.x > this.canvas.el.width - GameState.settings.boundaries.right) {
            this.reset();

            GameState.players.user.incrementScore();
        }

        if(GameState.ball.y < GameState.settings.boundaries.top) {
            // GameState.settings.ball.speed.y = -GameState.settings.ball.speed.y;
            this.reverseBallSpeed('y');

        }

        if(GameState.ball.y > this.canvas.el.height - GameState.settings.boundaries.bottom) {
            // GameState.settings.ball.speed.y = -GameState.settings.ball.speed.y;
            this.reverseBallSpeed('y');

        }
    }
}
