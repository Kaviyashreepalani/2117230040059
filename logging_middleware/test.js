const Log = require("./logger");

const testLog = async () => {

  const result = await Log(
    "backend",
    "info",
    "service",
    "Logger working successfully"
  );

  console.log(result);
};

testLog();