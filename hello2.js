/**
*Node - exemplo de uso de um módulo nativo
*@autor Lucas Catroppa Piratininga Dias
*/

const http = require('http')
http.createServer((req,res)=>{
    res.write("Bem vindo ao Node")
    res.end()
}).listen(4040)