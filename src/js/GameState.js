import settings from './vars/settings';
import colors from './vars/colors';

window.GameState = {
    scores : {
        user: 0,
        computer: 0,
    },

    ball: {
        xDirection: 'right',
        yDirection: 'down',

        x: 20,

        y: 200
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
        speed  : 5,
        detectionPadding: 35
    },

    settings,

    colors
};

export default window.GameState;
