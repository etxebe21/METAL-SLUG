//En el fichero globals.js definiremos diversos objetos, arrays y variables que serán utilizados en otros ficheros. De momento definiremos:
//Objetos canvas y context
//Estado de juego (gameState)
//Variables de control de timing (previousCycleMilliseconds, deltaTime, frameTimeObj)
//Caja de texto para pruebas (txtPruebas)

//Variables globales
import {Game} from "./constants.js"

export default {
//Acceso al canvas y context
canvas: {},
ctx: {},
canvasHUD: {},
ctxHUD:{},


//Estado de juego. Inicializamos a INVALIDO
gameState: Gamepad.INVALID,

//Tiempo de ciclo anterior (miliseconds)
previousCycleMilliseconds: -1,

//Tiempo de ciclo de juego real (seconds)
deltaTime: 0,

//Tiempo de ciclo objetivo (seconds,constante)
frameTimeObj: 0,

//Caja de texto para mostrar datos de depuracion
txtPruebas: {},

//Datos de imagen(tileSet)
tileSets:[],

//Variables para gestionar la carpeta de archivos
assetsToLoad: [],
assetsLoaded: 0,

//Array con datos de los sprites
sprites: [],

//Temporizador nivel
levelTime: {}


};

