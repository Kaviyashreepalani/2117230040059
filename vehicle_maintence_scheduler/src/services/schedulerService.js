const Log = require("../middlewares/logger");

const apiClient = require("../utils/apiClient");

const getSchedule = async (depotId) => {

  await Log(
    "backend",
    "info",
    "service",
    "Fetching depots"
  );

  const depotResponse =
    await apiClient.get("/depots");

  const depots =
    depotResponse.data.depots;

  const depot = depots.find(
  (d) => d.ID === Number(depotId)
);

  if (!depot) {
    throw new Error("Depot not found");
  }

  const maxHours =
    depot.MechanicHours;

  await Log(
    "backend",
    "info",
    "service",
    "Fetching vehicles"
  );

  const vehicleResponse =
    await apiClient.get("/vehicles");

  const vehicles =
    vehicleResponse.data.vehicles;

  // Sort by impact descending
  vehicles.sort(
    (a, b) => b.Impact - a.Impact
  );

  let usedHours = 0;

  let totalImpact = 0;

  const selectedVehicles = [];

  for (let vehicle of vehicles) {

    if (
      usedHours + vehicle.Duration
      <= maxHours
    ) {

      selectedVehicles.push(vehicle);

      usedHours += vehicle.Duration;

      totalImpact += vehicle.Impact;
    }
  }

  await Log(
    "backend",
    "info",
    "service",
    "Schedule generated successfully"
  );

  return {
    depotId: depot.ID,
    totalHours: maxHours,
    usedHours,
    totalImpact,
    selectedVehicles
  };
};

module.exports = {
  getSchedule
};