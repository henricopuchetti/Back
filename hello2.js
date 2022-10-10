/**
 * Exemplo de uso de um modulo nativo
 * @author Henrico Boschiero Puchetti
 */

const http = require('http')
http.createServer((req,res)=>{
    res.write("Bem vindo ao Node")
    res.end()
}).listen(4040)