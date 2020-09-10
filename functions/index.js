const functions = require('firebase-functions');

const express = require("express");
const cors = require("cors");

const stripe = require("stripe")('sk_test_51HPwxaLozDy7Ej3RCZyfLovGRGPJ8wLS6k4vPsaTuyztr5B5bUdyhdLHnE1NAxGm7l7BXSYOXBRDVlaE6VS4Lgcm001wg9DxpY');


//APi


// App config
const app = express();

//MiddleWares
app.use(cors({ origin: true }));
app.use(express.json());


// API routes
app.get('/', (request, response) => response.status(200).send(
    'Hello World'))


// Listen command
exports.api = functions.https.onRequest(app);