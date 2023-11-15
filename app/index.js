const { start } = require("./src/api");
const { taskProgrammer } = require("./src/programmer");

(async () => {
  try {
    const client = await start();
    taskProgrammer(client);
  } catch (error) {
    console.log(error);
  }
})();
