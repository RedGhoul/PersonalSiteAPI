const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
require("dotenv").load();
const cors = require("cors");
const authRoutes = require("./routes/auth");
const workexperienceRoutes = require("./routes/workexperience");
const projectsRoutes = require("./routes/projects");

mongoose.Promise = global.Promise;

const databaseUri = process.env.MONGODB_URI;

mongoose
  .connect(databaseUri, { useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`Database connected`))
  .catch((err) => console.log(`Database connection error: ${err.message}`));

app.use(bodyParser.json());

app.use(methodOverride("_method"));

app.locals.moment = require("moment");

app.use(cors());
app.use("/auth", authRoutes);
app.use("/workexperience", workexperienceRoutes);
app.use("/project", projectsRoutes);

app.listen(process.env.PORT, process.env.IP, function () {
  console.log(
    "Site Started " +
    "On Port: = " +
    process.env.PORT +
    " IP: = " +
    process.env.IP
  );
});
