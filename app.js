const express = require('express');
//const path = require('path');
const exphbs = require('express-handlebars');
//const logger = require('./middleware/logger');

const states = require('./states');
//const elBayadh = require('./elBayadh');



const port = /*process.env.port ||  */ 5000;

const app = express();


// Members API Routes 

app.use('/api/states', require('./routes/api/states'));

// Handlebars Middlewares

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Body Perser Middleware

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));



app.get('/', (req, res) =>
    res.render('index', {
        title: 'Algeria States'
        //members
    })
);


/*
app.get('/algeria', (req, res) => {
    res.render('algeria', {
        title: 'Algeria States',
        states
    })
    
});*/

// Set static folder

//app.use(express.static(path.join(__dirname, 'public')));

app.get('/states', (req, res) => {
    res.render('states', {
        title: 'States',
        states
        //elBayadh
    });
});

/*
app.get('/substates', (req, res) => {
    res.render('substates', {
        title: 'substates'
    })
});

app.get('/daira', (req, res) => {
    res.render('daira', {
        title: 'daira'
    })
});

app.get('/baladiyat', (req, res) => {
    res.render('baladiyat', {
        title: 'baladiyat'
    })
});
*/


//console.log(elBayadh.length);

//console.log(state);

/*
app.get('/test', (req, res) =>
    res.render('test')

    //res.render('test')
);*/





app.listen(process.env.PORT || 5000);
























/*

const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

*/