const express = require("express");
const router = express.router;
const controller = require("../controllers/journalControllers");

const auth = require("../middlewares/authMiddleware");

router.get("/:journalId",auth, controller.getJournalById)
router.post("/createJournal", auth, controller.createNewJournal);
router.delete("/deleteJournal/:journalId", auth, controller.deleteJournalById);

module.exports = router;