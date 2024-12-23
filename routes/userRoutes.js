const express = require("express");
const router = express.router;
const controller = require("../controllers/userController");

const auth = require("../middlewares/authMiddleware");

router.get("/getUser/:userId",auth, controller.getUserById)
router.post("/editUser", auth, controller.createNewJournal);
router.delete("/deleteUser/:userId", auth, controller.deleteUserById);

module.exports = router;