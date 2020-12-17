const express = require("express")
const app = express();
const PORT = process.env.PORT || 4444
const routes = require("./routes/html-routes")
const sequelize = require("sequelize");
app.use(express.urlencoded({ extended: true}))
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

  app.use(routes)
  app.listen(PORT, () => console.log("Server listening on port: " + PORT))
