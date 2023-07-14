/*Créez un programme qui affiche le contenu d’un fichier donné en argument.


Exemples d’utilisation :
$> cat a.txt
Je danse le mia
$> ruby exo.rb “a.txt”
Je danse le mia


Afficher error et quitter le programme en cas de problèmes d’arguments ou de fichier inaccessible.*/
const fs = require("fs");

const fileContent = (args) => {
  if (args.length === 0) {
    console.log("Erreur : aucun argument détecté");
    process.exit(1);
  }

  const filePath = args[0];

  if (!fs.existsSync(filePath)) {
    console.log("Erreur : le fichier spécifié est introuvable");
    process.exit(1);
  }

  try {
    const content = fs.readFileSync(filePath, "utf-8");
    console.log(content);
  } catch (error) {
    console.log("Erreur lors de la lecture du fichier :", error.message);
    process.exit(1);
  }
};

const args = process.argv.slice(2);
fileContent(args);
