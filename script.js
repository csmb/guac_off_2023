const consoleElement = document.getElementById('console');
let currentLine = 0;
const consoleLines = [
  "G:\\Welcome to G.U.A.C. O.F.F.",
  "G:\\Type any key to continue...",
  "G:\\...",
  "G:\\...",
  "G:\\This is a simulated console environment.",
  "G:\\You can't taste guacamole yet, but it looks cool, right?",
  "G:\\Press any key to see more text."
];

function displayLine() {
  if (currentLine < consoleLines.length) {
    consoleElement.textContent += consoleLines[currentLine] + "\n";
    currentLine++;
    consoleElement.scrollTop = consoleElement.scrollHeight;
  }
}

document.addEventListener('keydown', () => {
  displayLine();
});

displayLine(); // Display the first line on page load