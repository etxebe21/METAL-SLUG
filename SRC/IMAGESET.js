//Clase que gestiona el tileSet de un sprite
export default class imageSet
{
    constructor (initFil, initCol, xSize, ySize, gridSize, xOffset, yOffset)
    {
        this.initFil      = initFil; //Fila de inicio de nuestro Imageset
        this.initCol      = initCol; //Columna de inicio de nuestro ImageSet
        this.xSize        = xSize;  //Tamañp en pixeles de la imagen (X)
        this.ySize        = ySize;  //Tamaño en pixeles de la imagen (Y)
        this.xOffset      = xOffset; //Offset en X de comienzo del dibujo del personaje respecto a la rejilla
        this.yOffset      = yOffset; //Offset en Y de comienzo del dibujo del personaje respecto a la rejilla
        this.gridSize     = gridSize; //Tamaño en pixeles de la rejilla contenedora de la imagen (X e Y)
    }
}