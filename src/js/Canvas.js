import Ball from './Ball';
import GameState from './GameState';

export default class {
    constructor (id) {
        this.id = id;
        this.el.addEventListener('mousemove', this.changeLeftPaddleWithMouse.bind(this))
        setInterval(this.run.bind(this), 1000/GameState.settings.fps);
    }

    run () {
        this.draw();
        this.move();
    }

    draw () {
        this.drawCanvas();
        this.drawBall();
        this.drawPaddle('left');
        this.drawPaddle('right');
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

    drawScores () {
        this.color('#ffffff');
        this.font('15px BlinkMacSystemFont,-apple-system,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",Helvetica,Arial,sans-serif');
        this.context.fillText(GameState.scores.user, 50, 50);
        this.context.fillText(GameState.scores.computer, this.fromRight(70), 50);
    }

    drawBall () {
        this.ball = new Ball(this);
    }

    drawPaddle (paddle) {
        paddle = `${paddle}Paddle`;

        this.color(GameState.colors.paddle)
            .fillRect(GameState[paddle].x, GameState[paddle].y, GameState[paddle].width, GameState[paddle].height);
    }

    fromRight (from) {
        return this.el.width - from;
    }

    move () {
        this.ball.move();
        this.movePaddle();
    }

    movePaddle () {
        let paddleMiddle = GameState.rightPaddle.y + (GameState.rightPaddle.height / 2);

        if (paddleMiddle < (GameState.ball.y - GameState.rightPaddle.detectionPadding)) {
            GameState.rightPaddle.y += GameState.rightPaddle.speed;
        } else if (paddleMiddle < (GameState.ball.y + GameState.rightPaddle.detectionPadding)) {
            GameState.rightPaddle.y -= GameState.rightPaddle.speed;
        }

        if(GameState.rightPaddle.y < GameState.settings.boundaries.top) {
            GameState.rightPaddle.y = GameState.settings.boundaries.top;
        }

        if(GameState.rightPaddle.y > (this.el.height - GameState.settings.boundaries.bottom) - GameState.leftPaddle.height) {
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

    get context () {
        return this.el.getContext('2d');
    }

    get el () {
        return document.getElementById(this.id);
    }
}
