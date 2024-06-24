const express = require("express");
const path = require("path");
require("dotenv").config();
require("./db/mongoose");
const cors = require("cors");
const userRouter = require("./routers/user");
const bulletinRouter = require("./routers/bulletin");
const { mapRouter } = require("./routers/world-map");

const app = express();

if (!process.env.MONGO_URI) {
  throw new Error("Environmet Variables are not configured.");
}

const port = 5174;

app.use(cors({ origin: "*" }));

app.use(express.json());
app.use("/bulletins", bulletinRouter);
app.use(userRouter);
app.use(mapRouter);

if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "frontend", "dist")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send(
      "Bulletin Analytics API: Database api for Bulletin Analytics app."
    );
  });
}

app.use("*", (req, res) => {
  res.sendStatus(200).send("Up and Running..");
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
