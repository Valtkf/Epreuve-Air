/*Créez un programme qui découpe une chaîne de caractères en tableau (séparateurs : espaces, tabulations, retours à la ligne).

Votre programme devra utiliser une fonction prototypée comme ceci :
ma_fonction(string_à_couper, string_séparateur) { // syntaxe selon votre langage
	# votre algorithme
	return (tableau)
}


Exemples d’utilisation :
$> python exo.py “Bonjour les gars”
Bonjour
les
gars

Afficher error et quitter le programme en cas de problèmes d’arguments.*/

// fonction
const splitedString = (stringToCut, stringToSeparate) => {
  let newWordSplit = "";
  const array = [];

  for (let i = 0; i < stringToCut.length; i++) {
    const currentChar = stringToCut[i];

    if (currentChar === stringToSeparate) {
      if (newWordSplit !== "") {
        array.push(newWordSplit);
        newWordSplit = "";
      }
    } else {
      newWordSplit += currentChar;
    }
  }

  if (newWordSplit !== "") {
    array.push(newWordSplit);
  }

  return array;
};

const string = process.argv[2];
const separator = " ";
const result = splitedString(string, separator);

for (let i = 0; i < result.length; i++) {
  console.log(result[i]);
}
