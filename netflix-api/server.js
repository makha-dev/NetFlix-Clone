const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://0.0.0.0:27017/netflix", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log("Err",err.message);
  });

app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}...`);
});
