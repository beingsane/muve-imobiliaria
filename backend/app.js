/* importar as configurações do servidor */
var app = require('./config/server')

app.listen(3001, function() {
    console.log('Servidor Express')
})