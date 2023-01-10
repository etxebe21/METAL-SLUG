//render(): Función que se encargará de dibujar en cada estado de juego y ciclo de ejecución cualquier objeto.

//drawGame(): Función que se encargará de dibujar todos los elementos de nuestra pantalla en el estado PLAYING

import globals from "./globals.js";
import {Game, FPS} from "./constants.js";
import {Tile } from "./constants.js";

//Funcion wque renderiza los gráficos
export default function render()
{
    switch(globals.gameState)
    {
        case Game.LOADING:
            //Draw loading spinner
            break;

        case Game.PLAYING:
            drawGame();
            break;

        default:
            console.error("Error: Gsme State onvalid");

    }
}

function renderHUD()
{
        //TEST: Datos metidos en bruto
        const score = 1500;
        const highScore = 130000;
        const life = 40;
        const time = globlas.levelTime.value;

        //Draw score
        globals.ctxHUD.font = '8px emulogic';
        globals.ctxHUD.fillStyle = 'lightblue';
        globals.ctxHUD.fillText("SCORE", 8, 8);
        globals.ctxHUD.fillStyle =  'lightgray';
        globals.ctxHUD.fillText = ( " " + score, 8, 16);

        //Draw High Score 
        globals.ctxHUD.fillStyle = 'lightblue';
        globals.ctxHUD.fillText("HIGH SCORE", 72, 8);
        globals.ctxHUD.fillStyle =  'lightgray';
        globals.ctxHUD.fillText(" " + highscore, 72, 16);

        //Draw life 
        globals.ctxHUD.fillStyle = 'lightblue';
        globals.ctxHUD.fillText("LIFE", 168, 8);
        globals.ctxHUD.fillStyle =  'lightgray';
        globals.ctxHUD.fillRect(168, 9, life, 8);

        //Round corners. ( Remove 1 pixel per corner)
        globals.ctxHUD.fillStyle = 'black';
        globals.ctxHUD.fillRect(168, 9, 1, 1);
        globals.ctxHUD.fillRect(168, 15, 1, 1); 
        globals.ctxHUD.fillRect(168 + life - 1, 9, 1, 1);
        globals.ctxHUD.fillRect(168, + life - 1, 15, 1, 1);

        //Draw time
        globals.ctxHUD.fillStyle = 'lightblue';
        globals.ctxHUD.fillText("TIME", 224, 8);
        globals.ctxHUD.fillStyle =  'lightgray';
        globals.ctxHUD.fillText(time, 224, 16);


}

function drawGame()
{
//Boraamos la pantalla entera y HUD
globals.ctx.clearRect(0, 0, globals.canvas.width, globals.canvas.height);
globals.ctxHUD.clearRect(0, 0, globals.canvasHUD.width, globals.canvasHUD.height);

//Dibujamos el mapa (nivel1)
renderMap();

//Dibujamos los elementos
drawSprites();

//Dibujamos el HUD
renderHUD();
}

//Funcion que dibuja el mapa
function renderMap()
{
    const brickSize = globals.level.imageSet.gridSize;
    const levelData = globals.level.data;

    //Dibujamos el mapa
    const num_fil = levelData.length;
    const num_col = levelData[0].length;

    for ( let i = 0; i < num_fil; i++)
    {
        for (let j = 0; j < num_col; i++)
        {
            const xTile = (levelData[i][j] - 1)  * brickSize;
            const yTile = 0;
            const xPos = j * brickSize;
            const yPos = i * brickSize;

            //Dibujamos el nuevo fotograma del sprite en la posicion adecuada
            globals.ctx.drawImage(
                globals.tileSerts(Tile.SIZE_32),   //tHE IMAGE FILE
                xTile, yTile,                    //The source x and y position
                brickSize, brickSize,        //The source height and width
                xPos, yPos,                   //The destination x and y position
                brickSize,brickSize            //The destination height and width
            );

        }
    }
}


function renderSprite(Sprite)
{
    //Calculamos la posicion del tile de inicio
    const xPosInit = sprite.imageSet.initCol * sprite.imageSet.gridSize;
    const yPosInit = sprite.imageSet.initFil * sprite.imageSet.gridSize;


    //Calculamos la posicion en el tilemap a dibujar
    const xTile = xPosInit + sprite.frames.frameCounter * sprite.imageSet.gridSize + sprite.imageSet.xOffset;
    const yTile = yPosInit + sprite.state * sprite.imageSet.gridSize + sprite.imageSet.yOffset;

    const xPos = Math.floor(sprite.xPos);
    const yPos = Math.floor(sprite.yPos);

    //Dibujamos el nuevo fotograma del sprite en la possicion adecuada
    globals.ctx.drawImage(
        globals.tileSets[Tile.SIZE_64],                                //The image file
        xTile, yTile,                                       //The source x and y position
        sprite.imageset.xSize, sprite.imageSet.ySize,   //The  source heigth and width
        xPos, yPos,                                     //The destination x and y position
        sprite.imageSet.xSize, sprite.imageSet.ySize      //The desrtination heigth and width

    );
}

function drawSprites()
{
    for (let i = 0; i < globals.sprites.length; ++i)
    {
        const sprite = globals.sprites[i];

        //TEST; Dibuja un rectangulo alrededor del sprite
        drawSpriteRectangle(sprite);

        renderSprite(sprite);
    }
}

function drawSpriteRectangle(sprite)
{
    //Datos del sprite
    const x1 = Math.floor(sprite.xPos);
    const y1 = Math.floor(sprite.yPos);
    const w1 = sprite.imageSet.xSize;
    const h1 = sprite.imageSet.ySize;

    globals.ctx.fillStyle = "green";
    globals.ctx.fillRect(x1, y1, w1 ,h1);
}