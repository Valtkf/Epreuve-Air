// Fonction de test pour la fonction splitedString
const fs = require("fs");
const child_process = require("child_process");

let numberOfSuccess = 0;
let numberOfFailures = 0;

// Fonction pour vérifier si un fichier existe
const fileExists = (fileName) => {
  try {
    fs.accessSync(fileName, fs.constants.F_OK);
    return true;
  } catch (err) {
    console.error(
      `\x1b[31mErreur : le fichier "${fileName}" est introuvable.\x1b[0m`
    );
    process.exit(1);
  }
};

// Fonction pour tester le programme Node.js donné et comparer la sortie avec le résultat attendu
const testNodeProgramJs = (fileName, input, expectedOutput) => {
  const command = `node ${fileName} ${input}`;
  try {
    const output = child_process.execSync(command).toString().trim();
    const trimmedExpectedOutput = expectedOutput.trim(); // Supprimer les espaces inutiles et les sauts de ligne
    if (output === trimmedExpectedOutput) {
      console.log(`\x1b[32mTest: Success\x1b[0m\n${fileName}`);
      numberOfSuccess++;
    } else {
      console.error(`\x1b[31mTest: Failure\x1b[0m\n${fileName}`);
      console.error(`Sortie attendue : ${trimmedExpectedOutput}`);
      console.error(`Sortie réelle : ${output}`);
      numberOfFailures++;
    }
  } catch (err) {
    console.error(
      `Erreur lors de l'exécution du programme ${fileName} : ${err.message}`
    );
    process.exit(1);
  }
};

// Liste des exercices avec leurs détails
const exercises = [
  {
    fileName: "air00.js",
    input: '"Bonjour les gars"',
    expectedOutput: "Bonjour\nles\ngars\n",
  },
  {
    fileName: "air01.js",
    input: '"Crevette magique dans la mer des étoiles" "la"',
    expectedOutput: "Crevette magique dans \n mer des étoiles\n",
  },
  {
    fileName: "air02.js",
    input: '"Je teste des trucs"',
    expectedOutput: "Je\nteste\ndes\ntrucs\n",
  },
  {
    fileName: "air03.js",
    input: '"1" "2" "3" "4" "5" "4" "3" "2" "1"',
    expectedOutput: "5\n",
  },
  {
    fileName: "air04.js",
    input: '"Hello milady,   bien ou quoi ??"',
    expectedOutput: "Helo milady, bien ou quoi ?\n",
  },
  {
    fileName: "air05.js",
    fileContent: "const recognizeSubstractionAddition = ...", // Votre contenu du fichier air05.js ici
    input: '1 2 3 4 5 "+2"',
    expectedOutput: "3 4 5 6 7", // Modifier la sortie attendue pour être sans sauts de ligne
  },
  {
    fileName: "air06.js",
    input: "Michel Albert Therese Benoit t",
    expectedOutput: "Michel\n",
  },
  {
    fileName: "air07.js",
    input: "1 3 4 2",
    expectedOutput: "1 2 3 4",
  },
  {
    fileName: "air08.js",
    input: '"10" "20" "30" "fusion" "15" "25" "35"',
    expectedOutput: "10 15 20 25 30 35",
  },
  {
    fileName: "air09.js",
    input: '"Michel" "Albert" "Thérèse" "Benoit"',
    expectedOutput: "Albert Thérèse Benoit Michel",
  },
  {
    fileName: "air10.js",
    input: '"a.txt"',
    expectedOutput: "Je danse le mia",
  },
  {
    fileName: "air11.js",
    input: '"0" "3"',
    expectedOutput: " 0\n 000\n00000\n",
  },
  {
    fileName: "air12.js",
    input: '"6" "5" "4" "3" "2" "1"',
    expectedOutput: "1 2 3 4 5 6",
  },
];

// Teste tous les exercices
exercises.forEach(({ fileName, input, expectedOutput }) => {
  fileExists(fileName);
  testNodeProgramJs(fileName, input, expectedOutput);
});

console.log(
  `Total success: (${numberOfSuccess}/${numberOfFailures + numberOfSuccess})`
);
