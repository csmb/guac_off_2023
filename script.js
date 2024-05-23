const consoleElement = document.getElementById('console');
const consoleLines = [
    { text: ".", delay: 150 },
    { text: ".. ", delay: 150 },
    { text: "... ", delay: 150 },
    { text: "....", delay: 150 },
    { text: "Welcome to:", delay: 150 },
    { text: "G.U.A.C. O.F.F. 2024", delay: 150 },
    { text: "Booting system...", delay: 150 },
    { text: ".", delay: 150 },
    { text: ".. ", delay: 150 },
    { text: "... ", delay: 150 },
    { text: "....", delay: 150 },
    { text: "...", delay: 150 },
    { text: "..", delay: 150 },
    { text: ".", delay: 150 },
    { text: "Welcome to:", delay: 150 },
    { text: "DEBUG MODE ENABLED...", delay: 150 },
    { text: "CONTENT WILL LOAD FAST FOR TESTING", delay: 150 },
    { text: "....", delay: 150 },
    { text: "...", delay: 150 },
    { text: "..", delay: 150 },
    { text: ".", delay: 150 },
    { text: "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣤⣶⣾⣿⣿⣷⢰⣆⠀⠀", delay: 100 },
    { text: "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣴⣾⣿⣿⣿⣿⣿⣿⣿⡏⠀⢿⡄⠀", delay: 100 },
    { text: "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⠀⢸⡇⠀", delay: 100 },
    { text: "⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⢸⡇⠀", delay: 100 },
    { text: "⠀⠀⠀⠀⠀⠀⢀⣠⣾⣿⣿⡿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⣾⠃⠀", delay: 100 },
    { text: "⠀⠀⠀⠀⢀⣴⣿⣿⠟⠋⠀⠀⠀⠀⠀⠀⠙⣿⣿⣿⣿⣿⠃⠀⠀⠀⢠⡟⠀⠀", delay: 100 },
    { text: "⠀⠀⠀⢠⣿⣿⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⡿⠃⠀⠀⠀⠀⣼⠃⠀⠀", delay: 100 },
    { text: "⠀⠀⢠⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣾⣿⣿⡟⠁⠀⠀⠀⠀⣼⠇⠀⠀⠀", delay: 100 },
    { text: "⠀⠀⣾⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⣠⣶⣿⣿⡿⠋⠀⠀⠀⠀⢀⣼⠏⠀⠀⠀⠀", delay: 100 },
    { text: "⠀⢸⣿⣿⣧⠀⠀⠀⠀⢀⣠⣴⣿⣿⣿⠿⠋⠀⠀⠀⠀⠀⣠⡾⠃⠀⠀⠀⠀⠀", delay: 100 },
    { text: "⠀⢸⣿⣿⣿⣷⣶⣶⣿⣿⣿⡿⠟⠋⠁⠀⠀⠀⠀⠀⣠⡾⠋⠀⠀⠀⠀⠀⠀⠀", delay: 100 },
    { text: "⠀⠀⠙⠿⠿⠿⠿⠟⠛⠉⠁⠀⠀⠀⠀⠀⠀⢀⣤⡾⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀", delay: 100 },
    { text: "⠀⠀⠀⠀⠀⠒⠶⢶⣤⣤⣤⣤⣤⣤⣴⠶⠞⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀", delay: 100 },
    { text: "\u00A0", delay: 50 },
    { text: "\u00A0", delay: 50 },
    { text: "\u00A0", delay: 50 },
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
    { text: "ENTER SECRET INGREDIENT...", delay: 100 },
    { text: "***********", delay: 100 },
    { text: ".", delay: 50 },
    { text: ".", delay: 50 },
    { text: ".", delay: 50 },
    { text: "Testing taste.", delay: 100 },
    { text: "September 14, 2024", delay: 100 },
    { text: "You know the rules.", delay: 100 },
    { text: "\u00A0", delay: 50 },
    { text: "\u00A0", delay: 50 },
    { text: "\u00A0", delay: 50 },
    { text: "\u00A0", delay: 50 },
    { text: "\u00A0", delay: 50 },
    { text: "\u00A0", delay: 50 },
    { text: "\u00A0", delay: 50 },
    { text: "\u00A0", delay: 50 },
    { text: "\u00A0", delay: 50 },
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

var delaydefault = 100 // I want to be able to enable a debug mode so the delays are minimal

displayNextMessage(); // Start displaying messages