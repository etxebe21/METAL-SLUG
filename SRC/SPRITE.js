//Load the tileSet image
//----------------------

import { SpriteID } from "./constants.js";

//Creamos nuestro objeto imagen
globalThis.tileSet = new Image();

//Añadimos el nuevo load
//Cuando la imagen se haya cargado se llamará a la función loadHandler
globalThis.tileSet.src = "./IMAGES/tileset.png";


//Dibujo del fotograma del sprite en el Canvas
globalThis.ActiveXObject.drawImage(
    globals.tileSet,    //The imagee file
    192, 128,           //The source x and y position
    64, 64,             //The source heigth and weigth
    96, 96,            //The destination x and y position
    64,64,             //The destination height and weigth
);

export default class Sprite
{
    constructor(id, state, xPos, yPos, imageSet, frames)
    {
        this.id       = id;           //Tipo de Sprite
        this.state    = state;       //Estado de animacion del sprite
        this.xPos     = xPos;        //Posicion en X en Canvas
        this.yPos     = yPos;        //Posicion den Y en Canvas
        this.imageSet = imageSet;    //Datos de las imagenes del sprite
        this.frames   = frames;      //Datos de los frames de animacion
        this.physics  = physics;     //Datos de las físicas
    }
}

export class Pirate extends Sprite
{
    constructor (id, state, xPos, yPos, imageSet, frames, physics, maxTimeToChangeDirection)
    {
        //LLamamos al constructor de la clase Sprite
        super (id, state, xPos, yPos, imageSet, frames, physics);

        this.directionChangeCounter            = 0;         //Contador para cambio de direccion (seconds)
        this.maxTimeToChangeDirection         = maxTimeToChangeDirection; // Maximo tiempo para cambio de direccion (seconds)
    }

}