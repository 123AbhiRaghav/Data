const express = require("express");
const parser = require("body-parser");
const app = express();
app.use(parser.json());


require("dotenv").config()
const PORT = process.env.PORT
const HOSTNAME = process.env.HOSTNAME

app.listen(PORT, HOSTNAME, () => {
  console.log(`Server started at http://${HOSTNAME}:${PORT}`);
});

app.post("/booking", (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: "File Created" });
});

app.post("/create", (req, res) => {
  console.log(req.body);
});

app.get("/list", (req, res) => {
  res.send({
    Room_name: "Akshaya",
    status: "booked",
    customer_name: "Dinesh",
    date: "12-12-2021",
    start_time: "12:00",
    end_time: "13:00",
  });
});

app.get("/customers", (req, res) => {
  res.send({
    customer_name: "Dinesh",
    romm_name: "Akshaya",
    date: "12-12-2021",
    start_time: "12:00",
    end_time: "13:00",
  });
});

app.get("/customer/booked", (req, res) => {
  res.send({
    customer_name: "Dinesh",
    room_name: "Akshaya",
    date: "12-12-2021",
    start_time: "12:00",
    end_time: "13:00",
    booking_id: "R124",
    booking_date: "12-12-2021",
    status: "booked",
  });
});
