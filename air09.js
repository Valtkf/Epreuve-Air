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

  if (array.length === 0) {
    console.log("Erreur : Veuillez entrer un argument");
    process.exit(1);
  }

  for (let i = 0; i < array.length; i++) {
    if (i === array.length - 1) {
      newArray[i] = array[0];
    } else {
      newArray[i] = array[i + 1];
    }
  }

  return newArray;
};

const args = process.argv.slice(2);
const result = rotation(args);

console.log(result.join(" "));
