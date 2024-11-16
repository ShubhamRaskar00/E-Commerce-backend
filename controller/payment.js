const express = require("express");
const router = express.Router();
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

router.post(
  "/process",
  catchAsyncErrors(async (req, res, next) => {
    const { amount, customerName, customerAddress } = req.body;
    console.log(customerName, customerAddress);
    const myPayment = await stripe.paymentIntents.create({
      amount,
      currency: "inr",
      description: "Software development services",
      metadata: {
        company: "shubhamraskar.in",
      },
      shipping: {
        name: customerName,
        address: {
          line1: customerAddress[0].address1,
          postal_code: customerAddress[0].zipCode,
          city: customerAddress[0].city,
          state: customerAddress[0].city,
          country: customerAddress[0].country,
          // Add more address details as needed: city, state, postal_code, country, etc.
        },
      },
    });
    res.status(200).json({
      success: true,
      client_secret: myPayment.client_secret,
    });
  })
);

router.get(
  "/stripeapikey",
  catchAsyncErrors(async (req, res, next) => {
    res.status(200).json({ stripeApikey: process.env.STRIPE_API_KEY });
  })
);

module.exports = router;
