
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

//Identificador de tipo de Sprite (ID)
export const SpriteID = {
    PLAYER: 0,
    PIRATE: 1,
    JOKER: 2,
    KNIGHT: 3
}

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
OFF:         -1,

//Estados PIRATE
LEFT_2:   0,
RIGHT_2:  1,

//Estados JOKER, KNIGHT
STILL:   0

}

//Diferentes TleSets
export const Tile = {
    SIZE_64: 0,   //Sprites 64 x 64
    Size_32: 1    //Tiles de mapa 32 x 32
}

export const Block = {
EMPTY:       0,
VINES:       1,
BROWN_1:     2,
BROWN_2:     3,
DARK_1:      4,
GRAY:        5,
CRYSTAL_1:   6,
CRYSTAL_2:    7

}