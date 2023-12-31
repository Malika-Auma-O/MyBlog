require("express-async-errors");
const express = require("express");
const app = express();
require("./connection")
require("dotenv").config();
const port = process.env.PORT || 8080;
hostName = "0.0.0.0";
const cors = require("cors");

// add middleware
app.use(express.json());

const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000/";
// when testing in development, change to "*"

app.use(
  cors({
    origin: FRONTEND_URL,
  })
)

  const userAuthRouter = require("./routers/userAuthRouter");
  const blogRouter = require("./routers/blogRouter");
  const projectRouter = require("./routers/projectRouter");
  const contactRouter = require("./routers/contactRouter");

  app.use("/api/auth", userAuthRouter);
  app.use("/api", blogRouter);
  app.use("/api", projectRouter);
  app.use("/api", contactRouter);

  app.use((error, req, res, next) => {
    res.status(500).json({ error: error.message });
  });

  app.listen(port, hostName, err => {
    if(err) {
      console.log(err)
    } else {
      console.log(`Server is running at http://${hostName}:${port}`)
    }
  })
  
  module.exports = app;
