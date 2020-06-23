const hbs = require('hbs');

//helpers
//Función 
hbs.registerHelper('capitalizar', (texto) => {
    //separar en palabras
    let palabras = texto.split(' ')
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
    });
    //unir
    return palabras.join(' ')
})

///IMPORTANTE: No se coloca el exports, porque sobre el objeto hbs estoy registrando un helper