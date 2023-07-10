/*Créez un programme qui ajoute à une liste d’entiers triée un nouvel entier tout en gardant la liste triée dans l’ordre croissant. Le dernier argument est l’élément à ajouter.

Utilisez une fonction de ce genre (selon votre langage) :
sorted_insert(array, new_element) {
	# your algo
	return (new_array)
}


Exemples d’utilisation :
$> ruby exo.rb 1 3 4 2
1 2 3 4

$> ruby exo.rb 10 20 30 40 50 60 70 90 33
10 20 30 33 40 50 60 70 90*/

const sortedInsert = (array, newElement) => {
  if (array.length === 0) {
    console.log("Erreur : Veuillez entrer vos chiffres");
    process.exit(1);
  }

  if (array.some((value) => isNaN(value))) {
    console.log("Erreur : Veuillez entrer uniquement des chiffres");
    process.exit(1);
  }

  if (array.length === 0) {
    array.push(newElement);
    return array;
  }

  for (let i = 0; i < array.length; i++) {
    if (newElement < array[i]) {
      array.splice(i, 0, newElement);
      return array;
    }
  }

  return array;
};

const args = process.argv.slice(2); // Ignorer les deux premiers éléments de process.argv
const array = args.map((arg) => parseInt(arg)); // Convertir les arguments en entiers

const newElement = array.pop(); // Extraire le dernier élément comme newElement

const result = sortedInsert(array, newElement);

const output = result.join(" "); // Convertir le tableau en une chaîne de caractères avec des espaces entre les éléments

console.log(output);
