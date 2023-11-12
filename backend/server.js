require("express-async-errors");
const express = require("express");
const app = express();
require("./connection")
require("dotenv").config();
const port = process.env.PORT || 8080;
hostName = "localhost";
const cors = require("cors");

// add middleware
app.use(express.json());

app.use(
    cors({
      origin: "*",
    })
  )

  const userAuthRouter = require("./routers/userAuthRouter");
  const blogRouter = require("./routers/blogRouter");
  const projectRouter = require("./routers/projectRouter");

  app.use("/api/auth", userAuthRouter);
  app.use("/api", blogRouter);
  app.use("/api", projectRouter);

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
