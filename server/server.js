const express = require("express");
const cors = require("cors");
const { mongoose } = require("mongoose");
const { urlencoded } = require("express");
require("dotenv").config();
const app = express();
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

app.use(express.json({ limit: "5mb" }));
app.use(urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  })
);
app.use("/api/users", require("./routes/auth"));
app.use("/post", require("./routes/post"));
app.listen(process.env.PORT, () => console.log("server running on port 5000"));
