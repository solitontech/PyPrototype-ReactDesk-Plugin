const express = require("express");
const os = require("os");

const app = express();

// Serve webpages statically
app.use("/", express.static("dist"));

// API routes
app.get("/api/getUsername", (req, res) =>
  res.send({ username: os.userInfo().username })
);

// Setup server
app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
);
