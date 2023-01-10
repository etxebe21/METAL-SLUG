export default class frames
{
    constructor(framesPerState)
    {
        this.framesPerState     = framePerState; //Numero de frames por estado de animacion
        this.frameCounter       = 0;             //Contador de frames
        this.speed              = speed;        //Velocidad de cambio de frame (mínimo:1, a mayor número, mas lento)
        this.frameChangeCounter = 0;           //Contador de velocidad de cambio de frame

    }
}