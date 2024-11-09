// // const express = require("express");
// // const path = require("path");
// // const cors = require("cors");

// // const app = express();
// // const PORT = process.env.PORT || 5001;

// // app.use(cors());

// // // Serve the JSON data at the `/services` endpoint
// // app.get("/services", (req, res) => {
// //   res.sendFile(path.join(__dirname, "services.json"));
// // });

// // // Start the server
// // app.listen(PORT, () => {
// //   console.log(`Server is running on port ${PORT}`);
// // });
// const express = require("express");
// const path = require("path");
// const cors = require("cors");
// const fs = require("fs");

// const app = express();
// const PORT = process.env.PORT || 5001;

// app.use(cors());

// // Serve the JSON data at the `/services` endpoint
// app.get("/services", (req, res) => {
//   res.sendFile(path.join(__dirname, "services.json"));
// });

// // Serve individual service by ID
// app.get("/services/:serviceId", (req, res) => {
//   const serviceId = req.params.serviceId;
//   fs.readFile(path.join(__dirname, "services.json"), "utf8", (err, data) => {
//     if (err) {
//       res.status(500).send("Error reading data");
//       return;
//     }
//     const services = JSON.parse(data);
//     const service = services.find((s) => s._id === serviceId);
//     if (service) {
//       res.json(service);
//     } else {
//       res.status(404).send("Service not found");
//     }
//   });
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

const express = require("express");
const path = require("path");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());

// Serve the JSON data at the `/services` endpoint
app.get("/services", (req, res) => {
  res.sendFile(path.join(__dirname, "services.json"));
});

// Serve individual service by ID
app.get("/services/:serviceId", (req, res) => {
  const serviceId = req.params.serviceId;
  fs.readFile(path.join(__dirname, "services.json"), "utf8", (err, data) => {
    if (err) {
      res.status(500).send("Error reading data");
      return;
    }
    const services = JSON.parse(data);
    const service = services.find((s) => s._id === serviceId);
    if (service) {
      res.json(service);
    } else {
      res.status(404).send("Service not found");
    }
  });
});

// Serve the JSON data at the `/reviews` endpoint
app.get("/reviews", (req, res) => {
  res.sendFile(path.join(__dirname, "review.json"));
});

// Serve individual review by ID
app.get("/reviews/:reviewId", (req, res) => {
  const reviewId = req.params.reviewId;
  fs.readFile(path.join(__dirname, "review.json"), "utf8", (err, data) => {
    if (err) {
      res.status(500).send("Error reading data");
      return;
    }
    const reviews = JSON.parse(data);
    const review = reviews.find((r) => r._id === reviewId);
    if (review) {
      res.json(review);
    } else {
      res.status(404).send("Review not found");
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});