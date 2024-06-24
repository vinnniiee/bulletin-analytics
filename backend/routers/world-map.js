const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

router.get("/map", async (req, res) => {
  const map = fs.readFileSync(
    path.join(__dirname, "..", "data", "world-geo.json")
  );

  res.send(map);
});

module.exports = {
  mapRouter: router,
};
