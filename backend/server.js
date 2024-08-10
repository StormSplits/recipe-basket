const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => {
  console.log("DB connect succesful");
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App is runing on port: 127.0.0.1:${port}`);
});
