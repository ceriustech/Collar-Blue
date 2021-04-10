const express = require("express");
const connectDB = require("./config/db");
const app = express();

// Connect Database
connectDB();

app.get("/", (req, res) => res.send("API RUNNING!"));

// Define routes
// User route
app.use("/api/users", require("./routes/api/users"));

// Auth route
app.use("/api/auth", require("./routes/api/auth"));

// Profile route
app.use("/api/profile", require("./routes/api/profile"));

// Posts route
app.use("/api/posts", require("./routes/api/posts"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(
    `%cServer started on port %c${PORT}`,
    "font-size: 1.5em; color: red",
    "color: #fff; font-size: 1.5em"
  )
);
