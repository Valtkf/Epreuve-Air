/*Créez un programme qui affiche une chaîne de caractères en évitant les caractères identiques adjacents.


Exemples d’utilisation :
$> python exo.py “Hello milady,   bien ou quoi ??”
Helo milady, bien ou quoi ?


Afficher error et quitter le programme en cas de problèmes d’arguments.*/

const sameAdjacentCharacter = (args) => {
  if (!args || args.length === 0) {
    console.log("Il n'y a pas d'arguments");
    process.exit();
  }
  if (!isNaN(args)) {
    console.log("Ne rentrez pas de chiffres");
    process.exit();
  }
  let newString = args[0]; // Ajoute le premier caractère à la nouvelle chaîne

  for (let i = 1; i < args.length; i++) {
    const currentValue = args[i];
    const previousValue = args[i - 1];

    if (currentValue !== previousValue) {
      newString += currentValue;
    }
  }

  return newString;
};

const args = process.argv[2];
const result = sameAdjacentCharacter(args);

console.log(result);
