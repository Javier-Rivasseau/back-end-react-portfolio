const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect(
    "mongodb+srv://Javispawn:Javispawn2024@javispawn.gcmiq0y.mongodb.net/"
  )
  .then(() => console.log("Connected to mongo db"))
  .catch((e) => console.log(e));
