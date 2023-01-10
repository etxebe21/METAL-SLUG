//Inicialización: La función init() se encargará de inicializar todos los elementos: variables, objetos, arrays, carga de imágenes y sonidos, etc. Se llamará cuando nuestro sitio web haya terminado de cargar todos sus elementos (evento window.onload)

//Ejecución: La función gameLoop() contiene el bucle principal de ejecución de nuestro juego.

import globals from "./globals.js";

//Importamos loadAssets
import { initHTMLelements, loadAssets,initSprites, initVars, initLevel, initTimers } from "./initialize.js";
import update from "./gameLogic.js";
import render from "./gameRender.js";

/////////////////////////////////////////////////////////
/// GAME INIT
////////////////////////////////////////////////////////

window.onload = init;

function init()
{
    //Inicicializamos los elementos HTML: Canvas, Context, Caja de texto de pruebas
    initHTMLelements();

    //Cargamos todos los archvivos; TILEMAPS, IMAGES, SOUNDS
    loadAssets();

    //Inicializamos los sprites
    initSprites();

    //Inicializacion de variables del juego
    initVars();

    //Iniciamos el mapa del juego
    initLevel();

    //Iniciamos contador
    initTimers();

    //Start the first frame request
    window.requestAnimationFrame(gameLoop);
}


//////GAME EXECUTE/////////
///////////////////////////

//Bucle principal de ejecución
function gameLoop(timeStamp)
{
//Kepp requesting new frames
window.requestAnimationFrame(gameLoop, globals.canvas);


//Tiempo real de ciclo ejecucion
const elapsedCycleSeconds = (timeStamp - globals.previousCycleMilliseconds) / 1000; //seconds

//Tiempo anterior de ciclo de ejecución
globals.previousCycleMilliseconds = timeStamp;

//Variable que corrige el tiempo de frame debido a retrasos con respecto al tiempo objetivo(frameTimeObj)
globals.deltaTime += elapsedCycleSeconds;


if (globals.deltaTime >= globals.frameTimeObj)
{
 //Update the game logic.gameLogic.js
 update();

 //Pèrform the drawing operation.gameRender.js
 render();

 //Corregimos los excesos de tiempo
 globals.deltaTime -= globals.frameTimeObj;

}
}

