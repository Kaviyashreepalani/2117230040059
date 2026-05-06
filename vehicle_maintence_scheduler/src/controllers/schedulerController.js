const schedulerService = require("../services/schedulerService");

const Log = require("../middlewares/logger");

const getSchedule = async (req, res) => {

  try {

    const depotId = req.params.depotId;

    await Log(
      "backend",
      "info",
      "controller",
      `Schedule API called for depot ${depotId}`
    );

    const result =
      await schedulerService.getSchedule(depotId);

    res.status(200).json({
      success: true,
      data: result
    });

  } catch (error) {

    await Log(
      "backend",
      "error",
      "controller",
      error.message
    );

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  getSchedule
};