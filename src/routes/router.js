const router = require("express").Router();
const userController = require("../controllers/UserController.js");
const authController = require("../controllers/AuthController.js");
const authRouter = require("./authRouter.js");

router.use("/auth", authRouter);

router.get("/users", userController.getUsers);
router.post("/users", userController.createUser);
router.delete("/users/:id", userController.deleteUser);


module.exports = router; 