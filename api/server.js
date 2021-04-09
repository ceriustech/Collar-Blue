const express = require("express");
const connectDB = require("./config/db");
const app = express();

// Connect Database
connectDB();

app.get("/", (req, res) => res.send("API RUNNING!"));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(
    `%cServer started on port %c${PORT}`,
    "font-size: 1.5em; color: red",
    "color: #fff; font-size: 1.5em"
  )
);
