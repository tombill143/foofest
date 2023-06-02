// pages/api/payment.js

export default function handler(req, res) {
  if (req.method === "POST") {
    // Process the payment data
    // ...

    // Respond with a success message
    res.status(200).json({ message: "Payment data received successfully" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
