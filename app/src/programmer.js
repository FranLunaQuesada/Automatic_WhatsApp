const cron = require("node-cron");
const { sendMessage } = require("./message");

const CONTACTO = "34622316323@c.us";

const MSG_SALUDOS = ["Esto es un mensaje automático"];

function taskProgrammer(client) {
  const time = "0 32 23 * * *";
  if (cron.validate(time)) {
    console.log("Cron incializado");
    cron.schedule(time, async () => {
      try {
        const saludo =
          MSG_SALUDOS[Math.floor(Math.random() * MSG_SALUDOS.length)];
        await sendMessage(client, CONTACTO, saludo);
        console.log("mensaje enviado");
      } catch (error) {
        console.log(error);
      }
    });
  }
}

module.exports = {
  taskProgrammer,
};
