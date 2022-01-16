/**
 * Required External Modules
 */

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const { clientOrigins, serverPort } = require("./config/env.dev");
const connectDB = require("../Db/db");

/**
 * App Variables
 */
connectDB();
const app = express();
const apiRouter = express.Router();

const transactions = require("./routes/transactions");

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors({ origin: clientOrigins }));
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.unsubscribe(morgan("dev"));
}

app.use("/api", apiRouter);

app.use("/api/v1/transactions", transactions);

app.use(function (err, req, res, next) {
  console.log(err);
  res.status(500).send(err.message);
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "../frontend", "build", "index.html"))
  );
}

/**
 * Server Activation
 */
const PORT = process.env.PORT || process.env.SERVER_PORT || 6060;
app.listen(PORT, () =>
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
);
