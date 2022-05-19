const mongoose = require("mongoose");
require('dotenv').config()
mongoose.connect(`mongodb://${process.env.DB_URL}/${process.env.DB_NAME}`);
const db = mongoose.connection;
db.on(
  "Error",
  console.error.bind(
    console,
    "Connection error: Não foi possivel conectar ao servidor"
  )
);
db.once("open", () => {
  console.log("Conectado a mongodb");
});
