const express = require("express");
const UsersController = require("../controllers/users_controller");
const router = express.Router();
const UsersValidator = require("../validators/users_validator");
const authMiddleware = require("../middleware/auth_middleware");

/* GET users listing. "/users/"*/
// router.get("/", function (req, res, next) {
//   const message = process.env.MSG;
//   //res.send("respond with a resource");
//   res.send(message);
// });
router.get("/", UsersController.getAllUsers);
router.get("/verify", authMiddleware, UsersController.verify);
router.get("/:id", UsersValidator.idValidator, UsersController.getUserById);
router.post("/", UsersValidator.createValidator, UsersController.createUser);
router.patch(
  "/:id",
  [...UsersValidator.idValidator, UsersValidator.updateValidator],
  UsersController.updateUser
);
router.delete("/:id", UsersValidator.idValidator, UsersController.deleteUser);

router.post("/login", UsersController.login);

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
