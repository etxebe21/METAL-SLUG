//update(): Función que se encargará de actualizar en cada estado de juego y ciclo de ejecución cualquier atributo de cualquier objeto, además de estados o variables. Será llamada desde nuestro bucle principal de ejecución (gameLoop)

//playGame(): Función que se encargará de actualizar toda la funcionalidad de nuestro juego en el estado PLAYING. 

import globals from "./globals.js";
import {Game, State, SpriteID,  FPS} from "./constants.js";

export default function update()
{
    //Change what the game is doing based on the game state
    switch(globals.gameState)
    {
        case Game.LOADING:
            console.log("Loading assets...");
            break;

        case Game.PLAYING:
            playGame();
            break;

        default:
            console.error("Error: Game State invalid");
    }
}

//Funcion que  actualiza el personaje
function updatePlayer(sprite)
{
    //Aqui actualizaremos el estado de las variables del pplayer

    sprite.xPos = 10;
    sprite.yPos = 50;

    sprite.frames.frameCounter = 2;

    sprite.state = State.LEFT;
}

//Funcion que actualiza el pirata
function updatePirate(sprite)
{
    //Maquina de estados del pirata
    switch (sprite.state)
    {
        case State.RIGHT_2:
            //Si se mueve a la derecha asignamos velocidad en X positiva
            sprite.physics.vx = sprite.physics.vLimit;
            break;

        case State.LEFT_2:
        //Si se mueve a la izquierda asignamos velocidad en X negativa
        sprite.physics.vx = - sprite.physics.vLimit;
        break;

        default:
            console.error("Error: state invalid");
    }

    //Calculamos distancia que se muve (X = X + Vt)
    sprite.xPos += sprite.physics.vx * globals.deltaTime;

    updateAnimationFrame(sprite);
}

function updateSprites()
{
    for (let i=0; i < globals.sprites.length; ++i)
    {
        const sprite = globals.sprites[i];
        updateSprite(sprite);
    }
}

function updateSprite(sprite)
{
    const type = sprite.id;
    switch (type)
    {
        //Caso del jugador
        case SpriteID.PLAYER:
            updatePlayer(sprite);
            break;

        //Caso del pirata
        case SpriteID.PIRATE:
            updatePirate(sprite);
            break;

        //caso enemigo
        default:
            break;
    }
}


function updateLevelTime()
{
    //Incrementamos el contador de cambio de valor
    globals.levelTime.timeChangeCounter += globals.deltaTime;

    //Si ha pasado el tiempo necesario, cambiamos el valor del timer
    if (globals.levelTime.timeChangerCounter < globals.levelTime.timeChangeValue)
    {
        globals.levelTime.value--;

        //Reseteamos timeChangerCounter 
        globals.levelTime.timeChangeCounter = 0;

    }
}

function updateAnimationFrame(sprite)
{
    //Aumentamos el contador de tiempo entre frames
    sprite.frames.frameChangeCounter++;

    //Cambiamos de frame cuando el lag de animación alcanza animSpeed
    if (sprite.frames.frameChangeCounter === sprite.frames.speed)
    {
        sprite.frames.frameChangeCounter++;
        sprite.frames.frameChangeCounter = 0;
    }

    //Si hemos llegado al maáximo de frames reiniciamos el contador (animación cíclica)
    if (sprite.frames.frameCounter === sprite.frames.framesPerState)
    {
        sprite.frames.frameCounter = 0;

    }
}

function playGame()
{
    updateSprites();
    updateLevelTime();

}
