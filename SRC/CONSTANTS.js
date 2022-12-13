
//En el fichero constants.js definiremos los FPS y los  estados de juego a 
//través del objeto constante Game. De momento sólo utilizaremos los estados 
//LOADING y PLAYING.

//Estados del juego

export const Game = {

INAVLID: -1,
LOADING: 0,
PLAYING: 1,
OVER: 2

};

//Velocidad del juego
export const FPS = 30;

//Identificador de estado de sprite (dirección)

export const State = {

//Estados PLAYER
UP:          0,
LEFT:        1,
DOWN:        2,
RIGHT:       3,
STILL_UP:    4,
STILL_LEFT:  5,
STILL_DOWN:  6,
STILL_RIGHT: 7,
OFF:         -1

}