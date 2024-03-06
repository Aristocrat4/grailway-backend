const express = require("express");
const app = express();
const PORT = 3000;

const stations = [
  { id: 1, name: "Tbilisi" },
  { id: 2, name: "Poti" },
  { id: 3, name: "Batumi" },
  { id: 4, name: "Zugdidi" },
  { id: 5, name: "Erevani" },
];

const routes = [
  {
    id: 1,
    from: 1,
    to: 2,
    departure: "09:00",
    arrival: "13:00",
    train: "355",
    price: 50,
  },
  {
    id: 2,
    from: 1,
    to: 3,
    departure: "10:00",
    arrival: "14:00",
    train: "455",
    price: 60,
  },
  {
    id: 3,
    from: 1,
    to: 4,
    departure: "11:00",
    arrival: "15:00",
    train: "555",
    price: 50,
  },
  {
    id: 4,
    from: 1,
    to: 5,
    departure: "12:00",
    arrival: "20:00",
    train: "655",
    price: 80,
  },
  {
    id: 5,
    from: 2,
    to: 1,
    departure: "09:00",
    arrival: "13:00",
    train: "755",
    price: 50,
  },
  {
    id: 6,
    from: 2,
    to: 5,
    departure: "10:00",
    arrival: "19:00",
    train: "855",
    price: 80,
  },
  {
    id: 7,
    from: 3,
    to: 1,
    departure: "09:00",
    arrival: "13:00",
    train: "955",
    price: 60,
  },
  {
    id: 8,
    from: 3,
    to: 5,
    departure: "12:00",
    arrival: "22:00",
    train: "1055",
    price: 100,
  },
  {
    id: 9,
    from: 4,
    to: 1,
    departure: "09:00",
    arrival: "13:00",
    train: "1155",
    price: 50,
  },
  {
    id: 10,
    from: 4,
    to: 5,
    departure: "15:00",
    arrival: "23:00",
    train: "1255",
    price: 80,
  },
  {
    id: 11,
    from: 5,
    to: 1,
    departure: "10:00",
    arrival: "20:00",
    train: "1355",
    price: 80,
  },
  {
    id: 11,
    from: 5,
    to: 2,
    departure: "12:00",
    arrival: "22:00",
    train: "1455",
    price: 100,
  },
  {
    id: 11,
    from: 5,
    to: 3,
    departure: "14:00",
    arrival: "21:00",
    train: "1555",
    price: 150,
  },
  {
    id: 11,
    from: 5,
    to: 4,
    departure: "17:00",
    arrival: "01:00",
    train: "1655",
    price: 80,
  },
];

app.use(express.json());

app.get("/api/stations", (req, res) => {
  res.json(stations);
});

app.get("/api/routes", (req, res) => {
  res.json(routes);
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
