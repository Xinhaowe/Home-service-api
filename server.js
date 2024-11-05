const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());

// Serve the JSON data at the `/services` endpoint
app.get("/services", (req, res) => {
  res.sendFile(path.join(__dirname, "services.json"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});