const express = require("express");
const cors = require("cors");

const schedulerRoutes = require("./routes/schedulerRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", schedulerRoutes);

const PORT = 3000;

app.listen(PORT);