/*Afficher un escalier constitué d’un caractère et d’un nombre d’étages donné en paramètre.


Exemples d’utilisation :
$> ruby exo.rb O 5
    O
   OOO
  OOOOO
 OOOOOOO
OOOOOOOOO


Afficher error et quitter le programme en cas de problèmes d’arguments.*/
const pyramid = (character, floors) => {
  if (!character || !floors) {
    console.error("Erreur : des arguments sont manquants");
    process.exit(1);
  }

  const parsedFloors = parseInt(floors);
  if (isNaN(parsedFloors) || parsedFloors <= 0) {
    console.error("Erreur : veuillez entrer un nombre d'étages valide");
    process.exit(1);
  }

  if (parsedFloors > 40) {
    console.error("Erreur : le nombre d'étages est limité à 40");
    process.exit(1);
  }

  const result = [];

  for (let i = 1; i <= parsedFloors; i++) {
    const spaces = " ".repeat(parsedFloors - i);
    const chars = character.repeat(i * 2 - 1);
    const line = spaces + chars;
    result.push(line);
  }

  return result;
};

const character = process.argv[2];
const floors = process.argv[3];
const result = pyramid(character, floors);

console.log(result.join("\n"));
