/* importar o módulo do framework express */
const express = require('express')

/* importar o módulo consign */
const consign = require('consign')

/* importar o módulo do body-parser */
const bodyParser = require('body-parser')

/* importar o módulo do express-validator */
const expressValidador = require('express-validator')

/* iniciar o objeto do express */
const App = express()

App.get('/', () => {
    console.log('oi')
})
App.listen(3001, () => {
    console.log('conectado')
})

// module.exports = index