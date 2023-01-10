//initHTMLelements(): Se encargará de inicializar todos los elementos HTML de nuestra ventana principal.

//initVars(): Se encargará de inicializar diversas variables. Las de control del timing y el estado del juego inicial.

import globals from "./globals.js";
import {Game, SpriteID, State, FPS} from "./constants.js";
import Sprite from "./sprite.js";
import ImageSet from "./imageSet.js";
import Frames from "./frames.js";
import {Level, level1} from "./Level.js";


function initSprites()
{
    initPlayer();
    initPirate(); 
}

function initPlayer()
{
    //Creamos las propiedades de las imagenes: initFil, initCol, xSize, ySize, gridSize, xOffset, yOffset
    const imageSet = new ImageSet( 0, 0, 44,57, 64, 10,6);

    //Creamos los datos de la animacion. 8 frames / state
    const frames = new Frames(8);

    //Creamos nuestro sprite
    const player = new Sprite(SpriteID, PLAYER, State.UP, 100, 70, imageSet, frames);

    //Añadimos el player al array de sprites
    globals.sprites.push(player);
}

function initPirate()
{
    //Creamos las propiedades de las imagenes : initFil, initCol, xSize, ySize, gridSize, xOffset, yOffset
    const imageSet = new ImageSet (5, 0 , 32, 47, 64, 17, 16);

    //Creamos los datos de la animación. 8 frames / state y velocidad animación
    const frames = new Frames(8, 5);

    //Creamos nuestro objeto physics con vLimit = 40 pixels/second
    const physics = new Physics(40);

    //Creamos nuestrp sprite
    const pirate = new Sprite(SpriteID.PIRATE, State.RIGHT_2, 100, 100, imageSet, frames);

    //Añadimos el pirate al array de sprites
    globals.sprites.push(pirate);

}

//Funcion que inizializa los elementos HTML
function initHTMLelements()
{
//Canvas, context screen
globalThis.canvas = document.getElementById('gameScreen');
globals.ctx = globals,canvas.getContext('2d');

//Cnavas , Context HUD
globalThis.canvasHUD = document.getElementById('gameHUD');
globalThis.ctxHUD = global.canvasHUD.getContext('2d');

//Eliminación del Anti-Aliasing
globalThis.ctx.imageSmoothingEnabled = false;

//Caja de texto para pruebas
globals.txtPruebas = document.getElementById('txtPruebas');

}

//Funcion que inicializa las variables del juego

function initVars()
{
globals.previousCycleMilliseconds = 0;
globals.deltaTime = 0;
globals.frameTimeObj = 1 / FPS; //Frame time in seconds.

//Inicializamos el estado del juego
globals.gameState = Game.LOADING;
}

//Carga de activos: TILEMAPS, IMAGES, SOUNDS
function loadAssets()
{
    //Load the sprisheet image
    tileSet = new Image();
    tileSet.addEventListener("load", loadHandler, false);
    tileSet.src = "./images/spritesheet.png"; //Ojo que la ruta es relativa al HTML no al JS
    globals.tileSets.push(tileSet);
    globals.assetsToLoad.push(tileSet);


     //Load the bricks image
     tileSet = new Image();
     tileSet.addEventListener("load", loadHandler, false);
     tileSet.src = "./images/bricks.png"; //Ojo que la ruta es relativa al HTML no al JS
     globals.tileSets.push(tileSet);
     globals.assetsToLoad.push(tileSet);
}

//Funcion que se llama cada vez que se carga un activo
function loadHandler()
{
globals.assetsLoaded++;

    //Una vez se han cargado todos los archivos pasamos
    if(globals.assetsLoaded === globals.assetsToLoad.length)
    {
        //Remove the load event listener
        for (let i = 0; i < globals.tileSets.length; i++)
        {
        globals.tileSets[i].removeEventListener("load", loadHandler, fasle);
        }
        console.log("Assets finished loading");

        //Start the game
        globals.gameState = Game.PLAYING;
    }

}

function initLevel()
{
    //Creamos las propiedades de las imagenes del mapa: initFil, initCol, xSize, ySize, gridSize, xOffset, yOffset
    const imageSet = new ImageSet(0, 0, 32, 32, 32, 0, 0);

    //Creamos y guardamos nuestro nivel
    globals.level = new Level (level1, imageSet);
}

function initTimers()
{
//Creamos timer de valor 200, con vambios cada 0,5 segundos
globals.levelTime = new Timer(200, 0,5);

}

//Exportamos las funciones
export {
initHTMLelements,
initVars,
loadAssets,
initSprites,
initLevel,
initTimers
}