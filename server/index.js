require("dotenv").config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

const app = express();

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
