/*Créez un programme qui fusionne deux listes d’entiers triées en les gardant triées, les deux listes seront séparées par un “fusion”.

Utilisez une fonction de ce genre (selon votre langage) :
sorted_fusion(array1, array2) {
	# your algo
	return (new_array)
}


Exemples d’utilisation :
$> ruby exo.rb 10 20 30 fusion 15 25 35
10 15 20 25 30 35


Afficher error et quitter le programme en cas de problèmes d’arguments.*/

const sortedFusion = (array1, array2) => {
  let newArray = [];
  let i = 0;
  let j = 0;

  while (i < array1.length && j < array2.length) {
    if (array1[i] <= array2[j]) {
      newArray.push(array1[i]);
      i++;
    } else {
      newArray.push(array2[j]);
      j++;
    }
  }

  while (i < array1.length) {
    newArray.push(array1[i]);
    i++;
  }

  while (j < array2.length) {
    newArray.push(array2[j]);
    j++;
  }

  return newArray;
};

const args = process.argv.slice(2);
const fusionIndex = args.indexOf("fusion");

if (fusionIndex === -1) {
  console.log('Erreur : Argument "fusion" manquant');
  process.exit(1);
}

const array1 = args.slice(0, fusionIndex).map(Number);
const array2 = args.slice(fusionIndex + 1).map(Number);

const result = sortedFusion(array1, array2);
console.log(result.join(" "));
