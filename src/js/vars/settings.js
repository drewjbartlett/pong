export default {
    fps: 30,

    ball: {
        speed: {
            x: 10,
            y: 4
        },

        size: 7.5,

        start: {
            x: 20,
            y: 200
        }
    },

    boundaries: {
        top: 5,
        right: 5,
        bottom: 5,
        left: 5
    },

    errors: {
        canvas: 'No canvas element found.'
    },

    fontFamily: 'BlinkMacSystemFont,-apple-system,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",Helvetica,Arial,sans-serif',

    fontSize: '18px',

    get font () {
        return `${this.fontSize} ${this.fontFamily}`;
    },

    winningScore: 5
}
