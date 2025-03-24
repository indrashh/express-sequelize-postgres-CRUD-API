const express = require("express");
const app = express();
const port = 3000;
const myRoutes = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(myRoutes);

app.listen(port, () => {
  console.log(`ini akan dijalankan di port ${port}`);
});
