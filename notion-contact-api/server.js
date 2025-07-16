// server.js
const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  try {
    const response = await axios.post(
      "https://api.notion.com/v1/pages",
      {
        parent: { database_id: process.env.NOTION_DATABASE_ID },
        properties: {
          Name: {
            title: [
              {
                text: {
                  content: `${firstName} ${lastName}`,
                },
              },
            ],
          },
          Email: {
            email,
          },
          Phone: {
            phone_number: phone,
          },
          Message: {
            rich_text: [
              {
                text: {
                  content: message,
                },
              },
            ],
          },
            "Date Received": {
    date: {
      start: new Date().toISOString(),
    },
  },

        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
          "Content-Type": "application/json",
          "Notion-Version": "2022-06-28",
        },
      }
    );

    res.status(200).json({ success: true, data: response.data });
  } catch (error) {
    console.error("Notion API Error:", error?.response?.data || error.message);
    res.status(500).json({ success: false, error: "Failed to save data to Notion." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
