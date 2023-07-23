const express = require("express");

const app = express();
const port = 3000;
const cors = require("cors");
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(express.static("public"));
app.use(cors());
app.use(express.json());
// Home page route
app.get("/", (req, res) => {
  res.send("Welcome to the homepage!");
});

// Contacts page route
app.get("/contacts", (req, res) => {
  res.send("This is the contacts page.");
});

app.post("/", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "111") {
    console.log("i am here");
    res.cookie("getin", "1", {
      expires: new Date(Date.now() + 30000),
      httpOnly: false,
      path: ".localhost:5173",
      sameSite: "none",
    });
    res.status(200).send("cookie sent");
  } else {
    res.status(401).send("cookie not sent");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
