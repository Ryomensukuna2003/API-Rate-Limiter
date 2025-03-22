import express from "express";
import route1 from "./routes/routes.js";

const app = express();

app.use(route1);

app.listen(3000, () => console.log("Server running on port 3000"));