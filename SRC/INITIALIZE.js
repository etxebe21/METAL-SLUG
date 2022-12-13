//initHTMLelements(): Se encargará de inicializar todos los elementos HTML de nuestra ventana principal.

//initVars(): Se encargará de inicializar diversas variables. Las de control del timing y el estado del juego inicial.

//Funcion que inizializa los elementos HTML

function initHTMLelements()
{
//Canvas
globalThis.canvas = document.getElementById('gamScreen');

//Context
globalThis.ctx = global.canvas.getContext('2d');

//Eliminación del Anti-Aliasing
globalThis,ctx.imageSmoothingEnabled = false;

//...Resto codigo


}