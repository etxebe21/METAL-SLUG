export class Level
{
    constructor(data, imageSet)
    {
        this.data          = data;      //Array bidimensional de datos del mapa 
        this.imageset      = imageSet;  //Datos de las imagenes del mapa
    }
}


//Datos del nivel 1 
export const level1 = 
[
    [1,2,2,2,2,5,5,5],
    [1,2,3,2,2,3,3,5],
    [5,5,6,3,3,5,5,5],
    [5,5,5,5,5,5,7,7],
    [5,5,5,5,5,6,7,7],
    [5,5,5,5,6,7,7,7]

];