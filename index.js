const express = require('express'),
cors = require('cors'),
morgan = require('morgan'),
session = require('express-session'),
bodyParser = require('body-parser');

// Preparação
const app = express(); // Inicia o servidor
app.use(cors());  // Possibilita acesso externo
app.use(bodyParser.json()); // habilita receber json
app.use(bodyParser.urlencoded({extended: false})); // habilita receber forms
app.use(session({
    secret: 'FIEC-FINAL',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  })); // habilita o controle de sessão

app.use(morgan('combined'));  // usa o morgan para logar o acesso
app.use('/fuscas', require('./routes/fusca')); // rota para o fusca


app.listen(38000, '0.0.0.0', () => {
    console.log("Servidor Ligado");
})
