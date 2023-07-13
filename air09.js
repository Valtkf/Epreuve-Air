/*Créez un programme qui décale tous les éléments d’un tableau vers la gauche. Le premier élément devient le dernier à chaque rotation.

Utilisez une fonction de ce genre (selon votre langage) :
ma_rotation(array) {
	# votre algorithme
	return (new_array)
}


Exemples d’utilisation :
$> python exo.py “Michel” “Albert” “Thérèse” “Benoit”
Albert, Thérèse, Benoit, Michel*/

const rotation = (array) => {
  const newArray = [];

  if (args.length === 0) {
    console.log("Erreur : Veuillez entrer un argument");
    process.exit(1);
  }

  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      newArray[array.length - 1] = array[0];
    } else {
      newArray[i - 1] = array[i];
    }
  }

  newArray.push(array[0]);

  return newArray;
};

const args = process.argv.slice(2);
const result = rotation(args);

console.log(result.join(" "));
