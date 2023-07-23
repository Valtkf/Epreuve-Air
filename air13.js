/*Créez un programme qui vérifie si les exercices de votre épreuve de l’air sont présents dans le répertoire et qu’ils fonctionnent (sauf celui là). Créez au moins un test pour chaque exercice.


Exemples d’utilisation :
$> python exo.py
air00 (1/3) : success
air00 (2/3) : success
air00 (3/3) : success
air01 (1/2) : success
air01 (2/2) : failure
air02 (1/1) : success
... 
Total success: (56/62)


Bonus : trouvez le moyen d’utiliser du vert et du rouge pour rendre réussites et échecs plus visibles.*/

// Exemple de fonction spécifique à l'exercice "air00"
const fs = require("fs");

const testScenarios = {
  air00: [
    {
      input: "Bonjour les gars",
      expectedOutput: ["Bonjour", "les", "gars"],
    },
    // Ajoutez d'autres scénarios de test pour air00
  ],
  air01: [
    {
      input: "Crevette magique dans la mer des étoiles",
      expectedOutput: [
        "Crevette",
        "magique",
        "dans",
        "la",
        "mer",
        "des",
        "étoiles",
      ],
    },
    // Ajoutez d'autres scénarios de test pour air01
  ],
  air02: [
    {
      input: ["je", "teste", "des", "trucs"],
      expectedOutput: "je teste des trucs",
    },
  ],
  air03: [
    {
      input: ["bonjour", "monsieur", "bonjour"],
      expectedOutput: "monsieur",
    },
    {
      input: ["hello", "world", "hello", "world", "hello", "world"],
      expectedOutput: null,
    },
  ],
  air04: [
    {
      input: ["Hello Milady, bien ou quoi ??"],
      expectedOutput: "Helo Milady, bien ou quoi ?",
    },
    {
      input: ["Hey !!, Gabrielle est vraiment belle ce soir non ??"],
      expectedOutput: "Hey !, Gabriele est vraiment belle ce soir non ?",
    },
  ],
  air05: [
    {
      input: [[1, 2, 3, 4, 5], "+2"],
      expectedOutput: "3 4 5 6 7",
    },
  ],

  air06: [
    {
      input: ["Michel", "Albert", "Thérès", "Benoit", "t"],
      expectedOutput: ["Thérès"],
    },
  ],
  air07: [
    {
      input: [1, 3, 4, 2],
      expectedOutput: "1 2 3 4",
    },
  ],
  air08: [
    {
      input: [10, 20, 30, "fusion", 15, 25, 35],
      expectedOutput: "10 15 20 25 30 35",
    },
  ],
  air09: [
    {
      input: ["Michel", "Albert", "Thérèse", "Benoit"],
      expectedOutput: "Albert, Thérèse, Benoit, Michel",
    },
  ],
  air10: [
    {
      input: ["air00.js"],
      expectedOutput: [
        "const splitString = (stringToCut, stringToSeparate) => {",
        '  let newWordSplit = "";',
        "  const array = [];",
        "  for (let i = 0; i < stringToCut.length; i++) {",
        "    const currentChar = stringToCut[i];",
        "    if (currentChar === stringToSeparate) {",
        '      if (newWordSplit !== "") {',
        "        array.push(newWordSplit);",
        '        newWordSplit = "";',
        "      }",
        "    } else {",
        "      newWordSplit += currentChar;",
        "    }",
        "  }",
        '  if (newWordSplit !== "") {',
        "    array.push(newWordSplit);",
        "  }",
        "  return array;",
        "};",
        "",
        "const string = process.argv[2];",
        'const separator = " ";',
        "const result = splitString(string, separator);",
        "",
        "for (let i = 0; i < result.length; i++) {",
        "  console.log(result[i]);",
        "}",
      ].join("\n"),
    },
  ],
  air11: [
    {
      input: ["O", 5],
      expectedOutput: "O\n" + "OOO\n" + "OOOOO\n" + "OOOOOOO\n" + "OOOOOOOOO",
    },
  ],
};

// Fonction spécifique pour le programme air00
const splitString = (stringToCut, stringToSeparate) => {
  let newWordSplit = "";
  const array = [];

  for (let i = 0; i < stringToCut.length; i++) {
    const currentChar = stringToCut[i];

    if (currentChar === stringToSeparate) {
      if (newWordSplit !== "") {
        array.push(newWordSplit);
        newWordSplit = "";
      }
    } else {
      newWordSplit += currentChar;
    }
  }

  if (newWordSplit !== "") {
    array.push(newWordSplit);
  }

  return array;
};

// Fonction spécifique pour le programme air01
const splitedString = (stringToCut) => {
  const array = stringToCut.split(" ");
  return array;
};

// Fonction spécifique pour le programme air02
const concatanateStrings = (arrayOfStrings) => {
  const array = arrayOfStrings.join(" ");
  return array;
};

// Fonction spécifique pour le programme air03
const findUniqueValue = (args) => {
  const uniqueValues = new Set(args);
  for (const value of uniqueValues) {
    if (args.indexOf(value) === args.lastIndexOf(value)) {
      return value;
    }
  }
  return null; // Retourne null si aucune valeur unique n'est trouvée
};

// Fonction spécifique pour le programme air04
const sameAdjacentCharacter = (args) => {
  const result = args[0].replace(/(.)\1+/g, "$1");
  return result;
};

// Fonction spécifique pour le programme air05
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

  return result.join(" "); // Renvoie la chaîne de caractères résultante
};

// Fonction spécifique pour le programme air06
// Fonction spécifique pour le programme air06
const findSameCharacter = (arrayOfStrings, character) => {
  const newArray = [];

  if (arrayOfStrings.length === 0 || character.length === 0) {
    console.error("Erreur: veuillez entrer un argument");
    process.exit(1);
  }

  if (
    arrayOfStrings.some((value) => typeof value !== "string") ||
    typeof character !== "string"
  ) {
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

// Fonction utilitaire pour vérifier si un tableau est un tableau de chaînes de caractères
const isStringArray = (array) => {
  return (
    Array.isArray(array) && array.every((item) => typeof item === "string")
  );
};

// Fonction spécifique pour le programme air07
const sortedInsert = (array, newElement) => {
  if (!Array.isArray(array) || isNaN(newElement)) {
    console.log("Erreur : Veuillez entrer vos chiffres");
    process.exit(1);
  }

  if (array.some((value) => isNaN(value))) {
    console.log("Erreur : Veuillez entrer uniquement des chiffres");
    process.exit(1);
  }

  const newArray = [...array];
  let inserted = false;

  for (let i = 0; i < newArray.length; i++) {
    if (newElement <= newArray[i]) {
      newArray.splice(i, 0, newElement);
      inserted = true;
      break;
    }
  }

  if (!inserted) {
    newArray.push(newElement);
  }

  return newArray.join(" ");
};

// Fonction spécifique pour le programme air08
const sortedFusion = (array1, array2) => {
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    console.log("Erreur : Veuillez entrer deux tableaux valides");
    process.exit(1);
  }

  const newArray = [...array1, ...array2];
  return newArray.sort((a, b) => a - b).join(" ");
};

// Fonction spécifique pour le programme air09
const rotation = (array) => {
  if (!Array.isArray(array)) {
    console.log("Erreur : Veuillez entrer un tableau valide");
    process.exit(1);
  }

  if (array.length === 0) {
    console.log("Erreur : Le tableau est vide");
    process.exit(1);
  }

  const newArray = [...array];
  const lastElement = newArray.pop();
  newArray.unshift(lastElement);
  return newArray.join(", ");
};

// Fonction spécifique pour le programme air10
const fileContent = (args) => {
  if (args.length === 0) {
    console.log("Erreur : aucun argument détecté");
    process.exit(1);
  }

  const filePath = args[0];

  if (!fs.existsSync(filePath)) {
    console.log("Erreur : le fichier spécifié est introuvable");
    process.exit(1);
  }

  try {
    const content = fs.readFileSync(filePath, "utf-8");
    return content;
  } catch (error) {
    console.log("Erreur lors de la lecture du fichier :", error.message);
    process.exit(1);
  }
};

// Fonction spécifique pour le programme air11
const pyramid = (character, floors) => {
  if (!character || !floors) {
    console.log("Erreur : des arguments sont manquants");
    process.exit(1);
  }

  const parsedFloors = parseInt(floors);
  if (isNaN(parsedFloors) || parsedFloors <= 0) {
    console.log("Erreur : veuillez entrer un nombre d'étages valide");
    process.exit(1);
  }

  if (parsedFloors > 40) {
    console.log("Erreur : le nombre d'étages est limité à 40");
    process.exit(1);
  }

  const result = [];

  for (let i = 1; i <= parsedFloors; i++) {
    const spaces = " ".repeat(parsedFloors - i);
    const chars = character.repeat(i * 2 - 1);
    const line = spaces + chars;
    result.push(line);
  }

  return result.join("\n");
};

const arraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

const runTests = (programName, testScenarios) => {
  const tests = testScenarios[programName];

  console.log(`Running tests for ${programName}:`);

  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    const input = test.input;
    const expectedOutput = test.expectedOutput;

    let result;

    // Appeler la fonction spécifique à chaque programme en utilisant une condition
    if (programName === "air00") {
      result = splitString(input, " ");
    } else if (programName === "air01") {
      result = splitedString(input);
    } else if (programName === "air02") {
      result = concatanateStrings(input);
    } else if (programName === "air03") {
      result = findUniqueValue(input);
    } else if (programName === "air04") {
      result = sameAdjacentCharacter(input);
    } else if (programName === "air05") {
      result = addNumbers(input);
    } else if (programName === "air06") {
      try {
        result = findSameCharacter(input, "t");
      } catch (error) {
        console.error(error.message);
        result = ""; // En cas d'erreur, on retourne une chaîne vide pour le test
      }
    } else if (programName === "air07") {
      result = sortedInsert(input, 2);
    } else if (programName === "air08") {
      result = sortedFusion(input, [15, 25, 35]);
    } else if (programName === "air09") {
      result = rotation(input);
    } else if (programName === "air10") {
      result = fileContent(input);
    } else if (programName === "air11") {
      result = pyramid(...input);
    }

    if (result === expectedOutput) {
      console.log(`${programName} (${i + 1}/${tests.length}): Success`);
    } else {
      console.log(`${programName} (${i + 1}/${tests.length}): Failure`);
    }
  }
};

// Exécutez les tests pour chaque programme
for (const programName in testScenarios) {
  runTests(programName, testScenarios);
}
