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

const split = (stringToCut, stringSeparator) => {
  const array = [];
  let currentSubstring = "";
  for (let i = 0; i < stringToCut.length; i++) {
    const char = stringToCut[i];
    if (stringSeparator.includes(char)) {
      array.push(currentSubstring);
      currentSubstring = "";
    } else {
      currentSubstring += char;
    }
  }
  array.push(currentSubstring); // Ajoute la dernière sous-chaîne restante au tableau
  return array;
};

const stringToCut = process.argv[2];
const stringSeparator = [" ", "\t", "\n"]; // Tableau de séparateurs

console.log(split(stringToCut, stringSeparator));
