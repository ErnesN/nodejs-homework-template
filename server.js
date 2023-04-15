const mongoose = require("mongoose");

const app = require("./app");

const DB_HOST =
  "mongodb+srv://Ernes:ernes2107@cluster0.zabgin5.mongodb.net/Contacts_base?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => app.listen(3000))
  .catch((error) => console.log(error.message));
