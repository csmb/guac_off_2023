const consoleElement = document.getElementById('console');
const consoleLines = [
  { text: "Welcome to the G.U.A.C.O.F.F. 2024.", delay: 1500 },
  { text: "Booting system...", delay: 2000 },
  { text: "Grabbing avocados...", delay: 200 },
  { text: "Sharpening knife...", delay: 200 },
  { text: "Dicing onion...", delay: 200 },
  { text: "Finding bandaids...", delay: 200 },
  { text: "Squeezing lime...", delay: 200 },
  { text: "Discovering new cuts...", delay: 200 },
  { text: "Searching for a heavier bowl...", delay: 200 },
  { text: ".", delay: 50 },
  { text: ".", delay: 50 },
  { text: ".", delay: 50 },
  { text: ".", delay: 50 },
  { text: ".", delay: 50 },
  { text: "ENTER SECRET INGREDIENT...", delay: 2000 },
  { text: "***********", delay: 2000 },
  { text: ".", delay: 50 },
  { text: ".", delay: 50 },
  { text: ".", delay: 50 },
  { text: "Testing taste.", delay: 200 },
  { text: "Type any key to continue...", delay: 1000 },
  // ... add more messages with delays
];

let messageIndex = 0;

function displayNextMessage() {
  if (messageIndex < consoleLines.length) {
    const currentMessage = consoleLines[messageIndex];
    consoleElement.textContent += currentMessage.text + "\n";
    messageIndex++;
    consoleElement.scrollTop = consoleElement.scrollHeight;
    setTimeout(displayNextMessage, currentMessage.delay || 1000);
  }
}

displayNextMessage(); // Start displaying messages
