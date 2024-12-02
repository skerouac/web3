//Lokale module - Node.js
const express = require("express");
const router = express.Router();

//CRUD

// "/products/"
router.get("/", (req, res) => {
  //http://localhost:3000/products?lang=nl&color=blue
  const qs = req.query;
  console.log(qs);
  res.send("<h1>Products page</h1>");
});

router.post("/", (req, res) => {
  res.sendStatus(201);
});

router.put("/:id", (req, res) => {
  //PUT -> Update van al uw data
  //PATCH -> Lokale update van de data -> dus niet alles overschrijven

  //http://localhost:3000/products/24
  const { id } = req.params;
  const data = req.body;

  console.log(id);
  res.send("Product updated");
});

//volgorde hier is heel belangrijk - zet dit niet helemaal vanboven
router.all("/*name", (req, res) => {
  res.send("Fallback");
});

module.exports = router;
