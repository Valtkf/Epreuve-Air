/*Créez un programme qui est capable de reconnaître et de faire une opération (addition ou soustraction) sur chaque entier d’une liste.


Exemples d’utilisation :
$> ruby exo.rb 1 2 3 4 5 “+2”
3 4 5 6 7

$> ruby exo.rb 10 11 12 20 “-5”
5 6 7 15


L’opération à appliquer sera toujours le dernier élément.


Afficher error et quitter le programme en cas de problèmes d’arguments.*/

const recognizeSubstractionAddition = (args, operation) => {
  if (!args) {
    console.error("Erreur : Il n'y a pas de chiffres");
    process.exit(1);
  }
  if (!operation) {
    console.error("Erreur : Il n'y a pas d'opérations");
    process.exit(1);
  }

  const numbers = args.map(Number);
  const operationRegex = /^([-+])(\d+)$/;
  const match = operation.match(operationRegex);

  if (!match) {
    console.error("Erreur : Opération invalide");
    process.exit(1);
  }

  const operator = match[1];
  const number = parseInt(match[2]);

  const result = numbers.map((num) => {
    if (operator === "+") {
      return num + number;
    } else if (operator === "-") {
      return num - number;
    }
  });

  console.log(result.join(" "));
};

const args = process.argv.slice(2, -1);
const operation = process.argv[process.argv.length - 1];

recognizeSubstractionAddition(args, operation);
