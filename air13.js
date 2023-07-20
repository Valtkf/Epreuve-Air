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
};

// Fonction spécifique pour le programme air00
const splitString = (stringToCut) => {
  const array = stringToCut.split(" ");
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

// Fonction pour comparer deux tableaux
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
      result = splitString(input);
    } else if (programName === "air01") {
      result = splitedString(input);
    } else if (programName === "air02") {
      result = concatanateStrings(input);
    }
    // Ajoutez d'autres conditions pour les autres programmes

    if (arraysEqual(result, expectedOutput)) {
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
