import Ball from './Ball';
import GameState from './GameState';

export default class {
    constructor (id) {
        this.id = id;
        this.el.addEventListener('mousemove', this.changeLeftPaddleWithMouse.bind(this))
        this.el.addEventListener('click', this.restart.bind(this))
        setInterval(this.run.bind(this), 1000/GameState.settings.fps);
    }

    run () {
        if(!GameState.showingWinScreen) {
            this.draw();
            this.move();
        }
    }

    restart () {
        if(GameState.showingWinScreen) {
            GameState.resetScores();
            GameState.showingWinScreen = false;
        }
    }

    draw () {
        this.drawCanvas();
        this.drawBall();
        this.drawPaddle('left');
        this.drawPaddle('right');
    }

    clearCanvas () {
        this.color(GameState.colors.canvasBg).fillRect(0, 0, this.el.width, this.el.height);
        this.drawScores();
        this.drawWinner();
    }

    drawCanvas () {
        if (!this.el) {
            throw new Error (GameState.settings.errors.canvas);
        }

        this.color(GameState.colors.canvasBg).fillRect(0, 0, this.el.width, this.el.height);
        this.drawNet();
        this.drawScores();
    }

    drawNet () {
        for (var i = 10; i < this.el.height; i+=40) {
            this.color(GameState.colors.net).fillRect((this.el.width / 2) - 1, i, 2, 20);
        }
    }

    drawWinner () {
        this.color('#ffffff');
        this.textAlign('center');
        this.font(`45px ${GameState.settings.fontFamily}`);
        this.context.fillText(`${GameState.winningText}`, 400, 300);

        this.font(`15px ${GameState.settings.fontFamily}`);
        this.context.fillText(`[click to play again]`, 400, 320);
    }

    drawScores () {
        this.color('#ffffff');
        this.font(GameState.settings.font);
        this.context.fillText(GameState.players.user.score, 50, 50);
        this.context.fillText(GameState.players.computer.score, this.fromRight(70), 50);
    }

    drawBall () {
        this.ball = new Ball(this);
    }

    drawPaddle (paddle) {
        paddle = `${paddle}Paddle`;

        this.color(GameState.colors.paddle)
            .fillRect(GameState[paddle].x, GameState[paddle].y, GameState[paddle].width, GameState[paddle].height);
    }

    move () {
        this.ball.move();
        this.movePaddle();
    }

    movePaddle () {
        let paddleCenter = GameState.rightPaddle.y + (GameState.rightPaddle.height / 2);

        if (paddleCenter < (GameState.ball.y - GameState.rightPaddle.detectionPadding)) { // down

            let distance = (GameState.ball.y - GameState.rightPaddle.detectionPadding) - paddleCenter,
                speed = GameState.rightPaddle.speed;

            if(distance < 20) {
                speed = speed - distance;
            }

            GameState.rightPaddle.y = GameState.rightPaddle.y + speed;
        } else if (paddleCenter > (GameState.ball.y + GameState.rightPaddle.detectionPadding)) { // up

            let distance = (GameState.ball.y + GameState.rightPaddle.detectionPadding) + paddleCenter,
                speed = GameState.rightPaddle.speed;

            if(distance < 20) {
                speed = speed - distance;
            }

            GameState.rightPaddle.y = GameState.rightPaddle.y - GameState.rightPaddle.speed;
        }

        if(GameState.rightPaddle.y < GameState.settings.boundaries.top) {
            GameState.rightPaddle.y = GameState.settings.boundaries.top;
        } else if(GameState.rightPaddle.y > (this.el.height - GameState.settings.boundaries.bottom) - GameState.leftPaddle.height) {
            GameState.rightPaddle.y = this.el.height - GameState.settings.boundaries.bottom - GameState.leftPaddle.height;
        }
    }

    changeLeftPaddleWithMouse (evt) {
        let mouse            = this.mouse(evt),
            halfPaddleHeight = (GameState.leftPaddle.height / 2),
            y                = mouse.y - halfPaddleHeight;

        if(y < GameState.settings.boundaries.top) {
            y = GameState.settings.boundaries.top;
        } else if (y > (this.el.height - GameState.settings.boundaries.bottom) - GameState.leftPaddle.height) {
            y = this.el.height - GameState.settings.boundaries.bottom - GameState.leftPaddle.height;
        }

        GameState.leftPaddle.y = y;
    }

    mouse (evt) {
        let rect = this.el.getBoundingClientRect(),
            root = document.documentElement,
            x = evt.clientX - rect.left - root.scrollLeft,
            y = evt.clientY - rect.top - root.scrollTop;

            return { x, y };
    }

    fromRight (from) {
        return this.el.width - from;
    }

    /**
     * Set the fill style and return context
     */
    color (color) {
        this.context.fillStyle = color;

        return this.context;
    }

    font (font) {
        this.context.font = font;

        return this.context;
    }

    textAlign (textAlign) {
        this.context.textAlign = textAlign;

        return this.context;
    }

    get context () {
        return this.el.getContext('2d');
    }

    get el () {
        return document.getElementById(this.id);
    }
}
