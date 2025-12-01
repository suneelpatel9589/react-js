
import React, { useState } from "react";

function OrderReceipt() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    amount: "",
  });

  // Form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form submit → save to localStorage
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("orderData", JSON.stringify(formData));
    alert("Order saved!");
  };

  // Download receipt
  const downloadReceipt = () => {
    const data = JSON.parse(localStorage.getItem("orderData"));
    if (!data) return alert("No order found!");

    const content = `
Order Receipt
------------------------
Name: ${data.username}
Email: ${data.email}
Amount: ₹${data.amount}
Payment: Successful
Date: ${new Date().toLocaleString()}
    `;

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "order_receipt.txt";
    a.click();
  };

  return (
    <div>
      <h2>Order Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Place Order</button>
      </form>

      <hr />

      <button onClick={downloadReceipt}>Download Receipt</button>
    </div>
  );
}

export default OrderReceipt;

