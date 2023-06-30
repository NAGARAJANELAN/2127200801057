import fetch from 'node-fetch';
import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/trains", async function (req, res) {
  try {
    const data = await fetch("http://104.211.219.98/train/trains", {
      method: "GET"
    });
    const trainDetails = await data.json();
    res.send(trainDetails);
  } catch (error) {
    console.log(error);
  }
});

app.listen(3500, () => {
  console.log("server running on 3500");
});