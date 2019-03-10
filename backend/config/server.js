/* importar o módulo do framework express */
const express = require('express')

/* importar o módulo consign */
const consign = require('consign')

/* importar o módulo do body-parser */
const bodyParser = require('body-parser')

/* importar o módulo do express-validator */
const expressValidador = require('express-validator')

/* iniciar o objeto do express */
const app = express()

/* setar as variáveis 'view engine' e 'views' do express */
app.set('view engine', 'ejs')
app.set('views', './backend/views')

/* configurar o middleware express.static */
app.use(express.static('./backend/public'))

/* configurar o middleware body-parser */
app.use(bodyParser.urlencoded({extended: true}))

/* configurar o middleware express-validator */
app.use(expressValidador())

/* efetua o autoload das rotas, dos models e dos controllers para o objeto app */
consign()
    .include('backend/routes')
    .then('backend/models')
    .then('backend/controllers')
    .into(app)

/* exportar o objeto app */
module.exports = app