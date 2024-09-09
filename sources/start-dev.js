const { exec } = require("child_process");
const path = require("path");

const projectDirectory = path.join(__dirname, `C:\Users\olaf\Documents\entrymanager\client`);

const command = "npm run dev:watch";

exec(command, { cwd: projectDirectory }, (error, stdout, stderr) => {
  if (error) {
    console.error(`Erreur lors de l'exécution de la commande: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Erreur: ${stderr}`);
    return;
  }
  console.log(`Résultat: ${stdout}`);
});
