const router = require("express").Router();
const userController = require("../controllers/UserController.js");

router.get("/users", userController.getUsers);
router.get("/", (req, res) => {
        
        res.send("fares")
});

module.exports = router; 