import Canvas from './Canvas';

let gameCanvas;

window.onload = function () {
    gameCanvas = new Canvas('gameCanvas');
};

// 
// window.onbeforeunload = function () {
//    return "Are you sure?";
// };
//
// window.unload = function () {
//     alert('closed');
// };
