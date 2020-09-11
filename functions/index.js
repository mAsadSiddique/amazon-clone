const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51HPwxaLozDy7Ej3RCZyfLovGRGPJ8wLS6k4vPsaTuyztr5B5bUdyhdLHnE1NAxGm7l7BXSYOXBRDVlaE6VS4Lgcm001wg9DxpY");


/// API



/// App Config
const app = express();

/// MiddleWares
app.use(cors({ origin: true }))
app.use(express.json());

///Api Route
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log("BOOOOOM here is Total Payment Request >>>", total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd'
    });
    ////Ok
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })

})
// Listener Command

exports.api = functions.https.onRequest(app)




////      http://localhost:5001/amzone-challenge/us-central1/api