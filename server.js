//importar módulos
const express = require('express');
const app = express();
//creo un objeto app
//express es un constructor
const hbs = require('hbs');
//No USO EXPORT EN HELPER
//aquí modifico el comportamiento de hbs
require('./hbs/helpers')

//HEROKU
//definir puerto
//process me representa el proceso en ejecución, obtengo mediante el entorno el puerto respectivo
const puerto = process.env.PORT || 3000 //puerto disponible dado por Heroku

app.use(express.static(__dirname + '/public'));
// el slash me sirve solo para el index
/*
//index
app.get('/', function(req, res) {
    let content = {
        nombre: "Santiago",
        edad: "22",
        url: req.url
    }
    res.send(content)
})
//redireccionar a about
app.get('/about', function(req, res) {
        res.send("Este es mi primer sitio web con Express+Nodejs")
    })*/
//__dirname hacer referencia a la carpeta raíz
hbs.registerPartials(__dirname + '/views/parciales')
    //indicar a express que va a usar hbs como motor de templates
app.set('view engine', 'hbs');
//descomentamos esto
//cuando un usuario entre a mi directorio raiz (/)
//ojo poner siempre VIEWS ---> Notación obligatoria de Handlebars
//HELPERS
hbs.registerHelper('getAnio', () => {
        return new Date().getFullYear()
    })
    /*
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
    */

app.get('/', (req, res) => {
    //proceso de renderizado 
    res.render('home', {
        nombre: "SanTIAgo",
        pagina: 'home'
            //(extension . hbs no es necesario )
    });
})
app.get('/about', (req, res) => {
        res.render('about', {
            pagina: 'about'
        })
    })
    /*
    app.get('/about', function(req, res) {
        res.send('Este es mi primer sitio web con Express + Node.js');
    })
    */
    //escucha en el puerto 3000
    ///Heroku, ahora se usa el puerto disponible
app.listen(puerto, () => {
    console.log(`Escuchando en el puerto ${puerto}`);
})