/*Créez un programme qui retourne la valeur d’une liste qui n’a pas de paire.


Exemples d’utilisation :
$> python exo.py 1 2 3 4 5 4 3 2 1
5

$> python exo.py bonjour monsieur bonjour
monsieur


Afficher error et quitter le programme en cas de problèmes d’arguments.*/

//fonction
const findUniqueValue = (args) => {
  if (args.length - 2 < 3) {
    return "Erreur : pas assez d'arguments !";
  }

  const list = args.slice(2);

  for (let i = 0; i < list.length; i++) {
    const currentValue = list[i];
    let aPair = false;

    for (let j = 0; j < list.length; j++) {
      if (i !== j && currentValue === list[j]) {
        aPair = true;
        break;
      }
    }
    if (!aPair) {
      return currentValue; // Retourne la valeur unique
    }
  }

  return "Erreur : Aucune valeur unique trouvée";
};

//parsing
const args = process.argv;
const result = findUniqueValue(args);

console.log(result);
