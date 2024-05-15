const express = require("express");
const cors = require("cors");
const blogRouter = require('./route/index');
require('./db');

const app = express();
const PORT = process.env.PORT || 5000; // Usar variable de entorno o puerto predeterminado

app.use(cors());
app.use(express.json());
app.use('/api/blogs', blogRouter);

app.use("/api", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => console.log(`App is running at ${PORT}`));