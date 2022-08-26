import "./lib/db";
import express from "express";
import gameRoutes from "./routes/games";

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(express.raw({ type: "application/vnd.custom-type" }));
app.use(express.text({ type: "text/html" }));

app.get("/", async (req, res) => {
  res.json({ message: "Please visit /games to view all the games" });
});

app.use("/games", gameRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});