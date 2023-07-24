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

const checkSimilarLetter = (args, character) => {
  const argumentsWithNoLetterA = [];
  const lowerCaseCharacter = character.toLowerCase();

  for (const arg of args) {
    const lowerCaseArg = arg.toLowerCase();
    if (!lowerCaseArg.includes(lowerCaseCharacter)) {
      argumentsWithNoLetterA.push(arg);
    }
  }

  if (argumentsWithNoLetterA.length === 0) {
    console.log("Tous les arguments comportent au moins une lettre identique.");
  } else {
    console.log(argumentsWithNoLetterA.join(", "));
  }
};

const args = process.argv.slice(2);
const character = process.argv[process.argv.length - 1];
checkSimilarLetter(args, character);
