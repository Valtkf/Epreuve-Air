/*Créez un programme qui supprime d’un tableau tous les éléments qui ne contiennent pas une autre chaîne de caractères.

Utilisez une fonction de ce genre (selon votre langage) :
ma_fonction(array_de_strings, string) {
	# votre algorithme
	return (nouvel_array_de_strings)
}


Exemples d’utilisation :
$> python exo.py “Michel” “Albert” “Thérèse” “Benoit” “t”
Michel

$> python exo.py “Michel” “Albert” “Thérèse” “Benoit” “a”
Michel, Thérèse, Benoit*/

const findSameCharacter = (arrayOfStrings, character) => {
  const newArray = [];

  if (arrayOfStrings.length === 0 || character.length === 0) {
    console.error("Erreur: veuillez entrer un argument");
    process.exit(1);
  }
  if (!isNaN(arrayOfStrings) || !isNaN(character)) {
    console.log("Erreur: veuillez entrer des lettres");
    process.exit(1);
  }

  for (let i = 0; i < arrayOfStrings.length; i++) {
    if (arrayOfStrings[i].includes(character)) {
      newArray.push(arrayOfStrings[i]);
    }
  }
  return newArray;
};

const arrayOfStrings = process.argv.slice(2);
const character = process.argv[process.argv.length - 1];
const result = findSameCharacter(arrayOfStrings, character);

console.log(result);
