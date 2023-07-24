/*Créez un programme qui transforme un tableau de chaînes de caractères en une seule chaîne de caractères. Espacés d’un séparateur donné en dernier argument au programme.

Utilisez une fonction de ce genre (selon votre langage) :
ma_fonction(array_de_strings, separateur) {
	# votre algorithme
	return (string)
}


Exemples d’utilisation :
$> python exo.py “je” “teste” “des” “trucs” “ “
Je teste des trucs


Afficher error et quitter le programme en cas de problèmes d’arguments.*/
// Récupérer les arguments de la ligne de commande (chaînes de caractères)

//fonction
const splitString = (stringToCut) => {
  const array = stringToCut.split(" ");
  return array;
};

const inputString = process.argv[2];

if (inputString === undefined) {
  console.log("Erreur : Veuillez fournir une chaîne à découper.");
} else {
  const result = splitString(inputString);
  if (result !== undefined) {
    for (let i = 0; i < result.length; i++) {
      console.log(result[i]);
    }
  }
}
