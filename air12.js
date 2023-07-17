/*Créez un programme qui trie une liste de nombres. Votre programme devra implémenter l’algorithme du tri rapide (QuickSort).

Vous utiliserez une fonction de cette forme (selon votre langage) :
my_quick_sort(array) {
	# votre algorithme
	return (new_array)
}


Exemples d’utilisation :
$> python exo.py 6 5 4 3 2 1
1 2 3 4 5 6



Afficher error et quitter le programme en cas de problèmes d’arguments.


Wikipedia vous présentera une belle description de cet algorithme de tri.*/
const quickSort = (array, left = 0, right = array.length - 1) => {
  if (left < right) {
    const pivotIndex = partition(array, left, right);
    quickSort(array, left, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, right);
  }
};

const partition = (array, left, right) => {
  const pivot = array[right];

  let i = left - 1;

  for (let j = left; j < right; j++) {
    if (array[j] <= pivot) {
      i++;
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  [array[i + 1], array[right]] = [array[right], array[i + 1]];
  return i + 1;
};

const arguments = process.argv.slice(2).map(Number);

if (arguments.some(isNaN)) {
  console.error("Erreur : veuillez entrer uniquement des chiffres.");
  process.exit(1);
}
if (arguments.length === 0) {
  console.error("Error : aucun argument détecté");
  process.exit(1);
}

quickSort(arguments);

console.log(arguments.join(" "));
