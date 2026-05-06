const express = require("express");

const router = express.Router();

const schedulerController = require("../controllers/schedulerController");

router.get(
  "/schedule/:depotId",
  schedulerController.getSchedule
);

module.exports = router;