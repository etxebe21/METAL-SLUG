
export default class Physics
{
    constructor(vLimit)
    {
        this.vx               = 0;     //Velocidad actual en el eje X (pixels/second)
        this.vy               = 0;     //Velocidad actual en el eje Y (pixels/second)
        this.vLimit     = vLimit;      //Velocidad maxima a la que puede ir el sprite
    }
}