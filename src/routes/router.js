const router = require("express").Router();
const userController = require("../controllers/UserController.js");

router.get("/users", userController.getUsers);
router.post("/users", userController.createUser);
router.delete("/users/:id", userController.deleteUser);


module.exports = router; 