//importar módulo
const http = require('http');
//crea servidor
http.createServer((req, res) => {
    //requese ese la petisión que viene del cliente
    //el response es lo que envía el servidor
    //simple
    //res.write("Hola mundo desde la Web");
    //retorna un json
    //tipo json en la cabecera
    res.writeHead(200, { 'Content-Type': 'application/json' });
    let content = {
            nombre: "Santiago",
            edad: "22",
            url: req.url
        }
        //envia un json al cliente
    res.write(JSON.stringify(content))
    res.end();
}).listen(8000);
console.log("Esuchando el puerto 8000");