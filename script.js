const consoleElement = document.getElementById('console');
const consoleLines = [
    { text: "Welcome to", delay: 150, typewriter: true, typeSpeed: "slow"  },
    { text: "               ", delay: 150, },
    { text: "               ", delay: 150, },
    { text: "               ", delay: 150, },
    { text: "░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░", delay: 250, typewriter: false, },
    { text: "░░      ░░░        ░░░░░░░░░░░░░░░░░░░░░", delay: 250, typewriter: false, },
    { text: "▒  ▒▒▒▒▒▒▒▒  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒", delay: 250, typewriter: false, },
    { text: "▓▓      ▓▓▓      ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓", delay: 250, typewriter: false, },
    { text: "███████  ██  ███████████████████████████", delay: 250, typewriter: false, },
    { text: "██      ███  ███████████████████████████", delay: 250, typewriter: false, },
    { text: "░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░", delay: 250, typewriter: false, },
    { text: "░░      ░░░  ░░░░  ░░░      ░░░░      ░░", delay: 250, typewriter: false, },
    { text: "▒  ▒▒▒▒▒▒▒▒  ▒▒▒▒  ▒▒  ▒▒▒▒  ▒▒  ▒▒▒▒  ▒", delay: 250, typewriter: false, },
    { text: "▓  ▓▓▓   ▓▓  ▓▓▓▓  ▓▓  ▓▓▓▓  ▓▓  ▓▓▓▓▓▓▓", delay: 250, typewriter: false, },
    { text: "█  ████  ██  ████  ██        ██  ████  █", delay: 250, typewriter: false, },
    { text: "██      ████      ███  ████  ███      ██", delay: 250, typewriter: false, },
    { text: "░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░", delay: 250, typewriter: false, },
    { text: "░░      ░░░        ░░        ░░░░░░░░░░░", delay: 250, typewriter: false, },
    { text: "▒  ▒▒▒▒  ▒▒  ▒▒▒▒▒▒▒▒  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒", delay: 250, typewriter: false, },
    { text: "▓  ▓▓▓▓  ▓▓      ▓▓▓▓      ▓▓▓▓▓▓▓▓▓▓▓▓▓", delay: 250, typewriter: false, },
    { text: "█  ████  ██  ████████  █████████████████", delay: 250, typewriter: false, },
    { text: "██      ███  ████████  █████████████████", delay: 250, typewriter: false, },
    { text: "░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░", delay: 250, typewriter: false, },
    { text: "               ", delay: 150, },
    { text: "GUACAMOLE FRIENDS SYSTEMS INCORPORATED 2024", delay: 1000, typewriter: true, typeSpeed: "slow"  },
    { text: "               ", delay: 150, },
    { text: "               ", delay: 150, },
    { text: "Booting system....................", delay: 1000, typewriter: false  },
    { text: "..................................", delay: 100, typewriter: true, typeSpeed: "fast" },
    { text: "Grabbing avocados.................", delay: 200, typewriter: false  },
    { text: "..................................", delay: 100, typewriter: true, typeSpeed: "fast" },
    { text: "Sharpening knife..................", delay: 200, typewriter: false  },
    { text: "..................................", delay: 100, typewriter: true, typeSpeed: "fast" },
    { text: "Dicing onion......................", delay: 200, typewriter: false  },
    { text: "..................................", delay: 100, typewriter: true, typeSpeed: "fast" },
    { text: "Finding bandaids..................", delay: 200, typewriter: false  },
    { text: "..................................", delay: 100, typewriter: true, typeSpeed: "fast" },
    { text: "Squeezing lime....................", delay: 200, typewriter: false  },
    { text: "..................................", delay: 100, typewriter: true, typeSpeed: "fast" },
    { text: "Discovering new cuts..............", delay: 200, typewriter: false  },
    { text: "..................................", delay: 100, typewriter: true, typeSpeed: "fast" },
    { text: "Searching for a heavier bowl......", delay: 200, typewriter: false  },
    { text: "..................................", delay: 100, typewriter: true, typeSpeed: "fast" },
    { text: "..................................", delay: 100, typewriter: true, typeSpeed: "fast" },
    { text: "DOWNLOADING AVOCADOS..............", delay: 100, typewriter: true, typeSpeed: "fast" },
    { text: "..................................", delay: 100, typewriter: true, typeSpeed: "fast" },
    { text: "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣤⣶⣾⣿⣿⣷⢰⣆⠀⠀", delay: 100, typewriter: false  },
    { text: "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣴⣾⣿⣿⣿⣿⣿⣿⣿⡏⠀⢿⡄⠀", delay: 100, typewriter: false  },
    { text: "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⠀⢸⡇⠀", delay: 100, typewriter: false  },
    { text: "⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⢸⡇⠀", delay: 100, typewriter: false  },
    { text: "⠀⠀⠀⠀⠀⠀⢀⣠⣾⣿⣿⡿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⣾⠃⠀", delay: 100, typewriter: false  },
    { text: "⠀⠀⠀⠀⢀⣴⣿⣿⠟⠋⠀⠀⠀⠀⠀⠀⠙⣿⣿⣿⣿⣿⠃⠀⠀⠀⢠⡟⠀⠀", delay: 100, typewriter: false  },
    { text: "⠀⠀⠀⢠⣿⣿⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⡿⠃⠀⠀⠀⠀⣼⠃⠀⠀", delay: 100, typewriter: false  },
    { text: "⠀⠀⢠⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣾⣿⣿⡟⠁⠀⠀⠀⠀⣼⠇⠀⠀⠀", delay: 100, typewriter: false  },
    { text: "⠀⠀⣾⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⣠⣶⣿⣿⡿⠋⠀⠀⠀⠀⢀⣼⠏⠀⠀⠀⠀", delay: 100, typewriter: false  },
    { text: "⠀⢸⣿⣿⣧⠀⠀⠀⠀⢀⣠⣴⣿⣿⣿⠿⠋⠀⠀⠀⠀⠀⣠⡾⠃⠀⠀⠀⠀⠀", delay: 100, typewriter: false  },
    { text: "⠀⢸⣿⣿⣿⣷⣶⣶⣿⣿⣿⡿⠟⠋⠁⠀⠀⠀⠀⠀⣠⡾⠋⠀⠀⠀⠀⠀⠀⠀", delay: 100, typewriter: false  },
    { text: "⠀⠀⠙⠿⠿⠿⠿⠟⠛⠉⠁⠀⠀⠀⠀⠀⠀⢀⣤⡾⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀", delay: 100, typewriter: false  },
    { text: "⠀⠀⠀⠀⠀⠒⠶⢶⣤⣤⣤⣤⣤⣤⣴⠶⠞⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀", delay: 100, typewriter: false  },
    { text: "\u00A0", delay: 50, typewriter: false  },
    { text: "\u00A0", delay: 50, typewriter: false  },
    { text: "\u00A0", delay: 50, typewriter: false  },
    { text: ".", delay: 50, typewriter: false  },
    { text: ".", delay: 50, typewriter: false  },
    { text: ".", delay: 50, typewriter: false  },
    { text: ".", delay: 50, typewriter: false  },
    { text: ".", delay: 50, typewriter: false  },
    { text: "WHAT IS THE SECRET INGREDIENT?", delay: 2000, typewriter: true, typeSpeed: "slow"  },
    { text: "***********", delay: 1000, typewriter: true, typeSpeed: "slow" }, // Custom speed },
    { text: ".", delay: 50, typewriter: false  },
    { text: ".", delay: 50, typewriter: false  },
    { text: ".", delay: 50, typewriter: false  },
    { text: "Testing taste.", delay: 100, typewriter: false  },
    { text: "September 14, 2024", delay: 100, typewriter: false  },
    { text: "You know the rules.", delay: 100, typewriter: false  },
    { text: "\u00A0", delay: 50, typewriter: false  },
    { text: "\u00A0", delay: 50, typewriter: false  },
    { text: "\u00A0", delay: 50, typewriter: false  },
    { text: "\u00A0", delay: 50, typewriter: false  },
    { text: "\u00A0", delay: 50, typewriter: false  },
    { text: "\u00A0", delay: 50, typewriter: false  },
    { text: "\u00A0", delay: 50, typewriter: false  },
    { text: "\u00A0", delay: 50, typewriter: false  },
    { text: "\u00A0", delay: 50, typewriter: false  },
    // ... add more messages with delays


  // ... your console lines with delays
];

let messageIndex = 0;
let fastMode = false; // Flag for fast mode (optional)

const typingSpeeds = {
  slow: 100,
  fast: 50,
}; // Define speeds as constants

function displayNextMessage() {
  if (messageIndex < consoleLines.length) {
    const currentMessage = consoleLines[messageIndex];
    if (currentMessage.typewriter) {
      const speed = typingSpeeds[currentMessage.typeSpeed] || (fastMode ? typingSpeeds.fast : typingSpeeds.slow);
      typewrite(currentMessage.text.split("\n"), speed, () => {
        messageIndex++;
        consoleElement.scrollTop = consoleElement.scrollHeight;
        setTimeout(displayNextMessage, fastMode ? 50 : (currentMessage.delay || 1000));
      });
    } else {
      consoleElement.textContent += currentMessage.text + "\n";
      messageIndex++;
      consoleElement.scrollTop = consoleElement.scrollHeight;
      setTimeout(displayNextMessage, fastMode ? 50 : (currentMessage.delay || 1000));
    }
  }
}

function typewrite(textLines, typeSpeed, callback) {
  let currentLineIndex = 0;
  let currentCharIndex = 0;

  const typingSpeed = Math.max(typeSpeed, 10); // Ensure minimum speed

  const typeInterval = setInterval(() => {
    if (currentLineIndex >= textLines.length) {
      clearInterval(typeInterval);
      callback();
      return;
    }

    const currentLine = textLines[currentLineIndex];
    consoleElement.textContent += currentLine.charAt(currentCharIndex);
    currentCharIndex++;

    if (currentCharIndex >= currentLine.length) {
      currentLineIndex++;
      currentCharIndex = 0;
      consoleElement.textContent += "\n"; // Add newline after each line
    }
  }, typingSpeed);
}

displayNextMessage(); // Start displaying messages

// Function to toggle fast mode (optional)
function toggleFastMode() {
  fastMode = !fastMode;
  console.log(`Fast mode is now: ${fastMode ? "ON" : "OFF"}`);
}

// Call toggleFastMode() to enable/disable fast mode manually (optional)
// toggleFastMode();