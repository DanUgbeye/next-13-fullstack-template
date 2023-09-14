const setupUserCollection = require("./user.setup");

(async function setupDatabase() {
  console.log("setup running");
  await setupUserCollection();
})();
