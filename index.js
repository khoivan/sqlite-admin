require("dotenv").config();

const express = require("express");
const app = express();

const adminModule = require("./src/admin.module")({
  database: process.env.DB_PATH,
  secret: process.env.SECRET,
  adminPass: process.env.ADMIN_PASS
});

app.use("/db", adminModule.adminRouter);

app.listen(3000, () => {
  console.log("server started on http://localhost:3000");
});
