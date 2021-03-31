require("dotenv").config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const cors = require('cors');
const authCtrl = require('./controllers/authController');
const productsCtrl = require('./controllers/productsController');
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

const app = express();

/* CORS stands for Cross Origin Resource Sharing. 
*  Basically one domain like "facebook" vs 
*  another origin like "google" talking to each other.
*  Don't use '*' on a production environment
*/
app.use(cors('*'));
app.use(express.json());

app.use(
    session({
        resave: false,
        saveUninitialized: true,
        rejectUnauthorized: false,
        cookie: { maxAge: 1000 * 60 * 60 * 24 * 365 },
        secret: SESSION_SECRET
    })
);

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then( dbInstance => {
    console.log("Database connected");
    app.set('db', dbInstance);

    app.listen( SERVER_PORT, () => console.log(`Server is listening on ${SERVER_PORT}`));
});


// Auth Endpoints
app.post('/api/register', authCtrl.register);
app.post('/api/login', authCtrl.login);
app.delete('/api/logout', authCtrl.logout);
app.post('/api/delete', authCtrl.delete);

// Product Endpoints
app.get('/api/products', productsCtrl.getAllProducts);
// app.post('/api/products', productsCtrl.getSpecificProducts);
// app.get('/api/products/:id', productsCtrl.getProduct);




/* HTTP REQUEST: 
axios is a special function that makes these requests for us
    {
        line: {
            URI: devmountain.com
            method: GET,
            ...
        }
        headers: {
            cookies: {...},
            ...
        }
        body (optional [req.body stuff in JSON]): {
            ...
        }
    }
*/
