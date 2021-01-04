const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_deRdDC3u4MBryPS7PZX9MyHq");

// API

// App config
const app = express();
//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
//API Routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment received for this amount >>>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });
  // Ok - created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//List command
exports.api = functions.https.onRequest(app);

//Example endpoint

//http://localhost:5001/challenge-31759/us-central1/api
