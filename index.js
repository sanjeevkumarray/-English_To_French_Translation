const express = require("express");
const bodyParser = require("body-parser");
const { translate } = require("@vitalets/google-translate-api");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post("/translate", async (req, res) => {
  try {
    if (!req.body || !req.body.text) {
      return res
        .status(400)
        .json({ error: "Missing 'text' key in request body" });
    }

    const textToTranslate = req.body.text;

    // Translate text from English to French
    const translation = await translate(textToTranslate, { to: "fr" });

    res.json({ translation: translation.text });
  } catch (error) {
    console.error("Error during translation:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
