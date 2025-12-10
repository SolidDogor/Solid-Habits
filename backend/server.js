import express from "express";
import habitsRoutes from "./routes/habitsRoutes.js";

const app = express();

app.use("/api/habits", habitsRoutes);

app.listen(5001, () => {
  console.log("Server started on port 5001");
});
