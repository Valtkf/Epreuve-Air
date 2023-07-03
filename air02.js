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
const concatanateStrings = (arrayOfStrings, Separator) => {
  if (!Array.isArray(arrayOfStrings) || typeof Separator !== "string") {
    return "Erreur : les arguments ne sont pas valides";
  }

  let result = "";

  for (let i = 0; i < arrayOfStrings.length; i++) {
    result += arrayOfStrings[i] + Separator;
  }

  result = result.slice(0, -Separator.length);

  return result;
};

//parsing
const args = process.argv.slice(2);
const Separator = args[args.length - 1];

//gestion d'erreurs
if (!Separator || Separator !== " ") {
  console.log("Erreur");
  process.exit(1);
}

// Enlever les guillemets autour des mots
const arrayOfStrings = args.map((arg) => arg.replace(/^"(.*)"$/, "$1"));

const finalResult = concatanateStrings(arrayOfStrings, Separator);

console.log(finalResult);
