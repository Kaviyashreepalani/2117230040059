const axios = require("axios");
require("dotenv").config();

const Log = async (
  stack,
  level,
  packageName,
  message
) => {

  try {

    const response = await axios.post(
      "http://20.207.122.201/evaluation-service/logs",
      {
        stack,
        level,
        package: packageName,
        message
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
          "Content-Type": "application/json"
        }
      }
    );

    return response.data;

  } catch (error) {

    console.error(
      "LOGGER ERROR:",
      error.response?.data || error.message
    );

    return null;
  }
};

module.exports = Log;