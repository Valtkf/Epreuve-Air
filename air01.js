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

//fonction
const splitedString = (stringToCut, stringToSeparate) => {
  if (stringToSeparate === "") {
    console.log("Erreur : Le séparateur ne peut pas être une chaîne vide.");
    return;
  }

  let currentPart = "";
  const array = [];

  for (let i = 0; i < stringToCut.length; i++) {
    const currentChar = stringToCut[i];

    if (
      stringToSeparate !== stringToCut.slice(i, i + stringToSeparate.length)
    ) {
      currentPart += currentChar;
    } else {
      array.push(currentPart);
      currentPart = "";
      i += stringToSeparate.length - 1;
    }
  }

  array.push(currentPart);

  if (array.length === 1 && array[0] === stringToCut) {
    console.log("Le séparateur n'a pas été trouvé dans la chaîne.");
    return;
  }

  return array;
};

const inputString = process.argv[2];
const separator = process.argv[3];

if (inputString === undefined || separator === undefined) {
  console.log("Erreur : Veuillez fournir deux arguments pour la fonction.");
} else {
  const result = splitedString(inputString, separator);
  if (result !== undefined) {
    for (let i = 0; i < result.length; i++) {
      console.log(result[i]);
    }
  }
}
