/*Créez un programme qui découpe une chaîne de caractères en tableau en fonction du séparateur donné en 2e argument.

Votre programme devra intégrer une fonction prototypée comme ceci :
ma_fonction(string_à_couper, string_séparateur) { // syntaxe selon votre langage
	# votre algorithme
	return (tableau)
}


Exemples d’utilisation :
$> python exo.py “Crevette magique dans la mer des étoiles” “la”
Crevette magique dans 
 mer des étoiles

Afficher error et quitter le programme en cas de problèmes d’arguments.*/

const splitedString = (stringToCut, stringToSeparate) => {
  // Vérification si le séparateur est vide
  if (stringToSeparate === "") {
    console.log("Erreur : Le séparateur ne peut pas être une chaîne vide.");
    return;
  }

  let currentPart = "";
  const array = [];

  for (let i = 0; i < stringToCut.length; i++) {
    const currentChar = stringToCut[i];

    // Vérification si le séparateur est trouvé dans la chaîne
    if (
      stringToSeparate !== stringToCut.slice(i, i + stringToSeparate.length)
    ) {
      currentPart += currentChar;
    } else {
      // Lorsque le séparateur est atteint, ajoutez la partie courante au tableau et réinitialisez currentPart
      array.push(currentPart);
      currentPart = "";
      i += stringToSeparate.length - 1; // Pour sauter le séparateur dans la chaîne
    }
  }

  // Ajoutez la dernière partie de la chaîne au tableau après la boucle
  array.push(currentPart);

  // Vérification si le séparateur n'a pas été trouvé dans la chaîne
  if (array.length === 1 && array[0] === stringToCut) {
    console.log("Le séparateur n'a pas été trouvé dans la chaîne.");
    return;
  }

  return array;
};

const stringToCut = process.argv[2];
const stringToSeparate = process.argv[3];

if (stringToCut === undefined || stringToSeparate === undefined) {
  console.log("Erreur : Veuillez fournir deux arguments pour la fonction.");
} else {
  const result = splitedString(stringToCut, stringToSeparate);
  if (result !== undefined) {
    console.log(result);
  }
}
