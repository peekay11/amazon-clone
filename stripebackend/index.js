require('dotenv').config();
const cors = require("cors");
const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Add your Stripe secret key in `require('stripe')`.");
});

app.post("/checkout", async (req, res) => {
    console.log("Request:", req.body);
    let error;
    let status;

    try {
        const { total, token } = req.body;

        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        });

        const idempotencyKey = uuidv4();

        const charge = await stripe.charges.create({
            amount: total * 100, // Convert to cents
            currency: "usd",
            customer: customer.id,
            receipt_email: token.email,
            description: "Purchased the product"
        }, { idempotency_key: idempotencyKey });

        console.log("Charge:", charge);
        status = "success";
    } catch (error) {
        console.error("Error:", error);
        status = "failure";
    }

    res.json({ error, status });
});

const PORT =8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
