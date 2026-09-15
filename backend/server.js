import express from "express";

const app = express();

app.get("/api/notes", (req, res) => {
  res.status(200).send("You got 5 notess");
});

app.listen(5001, () => {
  console.log("Server started on PORT: 5001");
});
