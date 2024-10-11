import express from "express";

const app = express();
const port = 3000;

app.use("/", (req, res) => {
  res.json({
    message: "Welcome to the simple Express Server",
  });
});

app.listen(port, () => {
  console.log(`Server Running at http://localhost:${port}`);
});
