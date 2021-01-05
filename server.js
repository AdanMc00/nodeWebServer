const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers')
app.use(express.static(__dirname + '/public'));
//Express hbs engine
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs')
const port = process.env.PORT || 3000
app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'AdanMC',

    });
})
app.get('/about', (req, res) => {

    res.render('about')
})

app.listen(port, () => {
    console.log(`Escuchando el puerto ${port}`)
})