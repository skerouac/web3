const express = require("express");
const router = express.Router();

/* GET users listing. "/users/"*/
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  //DB call => bestaat user? geldig wachtwoord?
  const isLoggedIn = true;
  if (isLoggedIn) {
    return res.send({ id: 11, email });
  }

  //200 - OK
  //201 - Created (bij POST)
  //204 - No Content
  //400 - Bad Request
  //401 - Unauthorized -> niet ingelogd
  //403 - Forbidden -> ingelogd maar niet de juiste permissies
  //404 - Not Found
  //500 - Internal Server Error
  res.sendStatus(401);
});

module.exports = router;

const obj = {
  first: function () {
    return this; //indien je this gebruikt met een arrow functie, verwijst hij naar de parent. In een gewone functie, kun je wel gewoon this gebruiken zoals normaal.
  },
  second: function () {
    return undefined;
  },
};

obj.first().second();
