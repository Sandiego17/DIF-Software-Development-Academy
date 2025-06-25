# 🎯Assignment: Build an RGB Color Guessing Game

> Subject: JavaScript DOM Manipulation & Random Number Generation  
> Skill Level: Beginner–Intermediate

### 📝 Objective:
Build a simple web-based game that helps you learn how to:
  - Generate random RGB colors
  - Display them dynamically using HTML/CSS/JavaScript
  - Interact with the DOM using JavaScript
  - Handle events like clicks
  - Implement game logic (correct/incorrect answers)

### 🔨 Requirements:
* Create the RGB Color Display:
The page should show an RGB color value in text format (e.g., `rgb(123, 45, 67)`). That RGB value should correspond to one of several colored squares on the screen.
*	Generate Multiple Color Options:
Display 6 colored boxes (or more if you want a challenge). Randomly assign a different color to each box. One of the boxes should match the displayed RGB value.
*	Game Logic:  
When the user clicks a box:
    - If they clicked the correct color, display a “Correct!” message and change all boxes to that color.
    - If they clicked the wrong color, hide the box or change it to a neutral color (like `#232323`) and display a “Try Again” message.
*	Reset/Play Again Button:
There should be a button that resets the game with new colors.

### 💡 Tips:
*	Use Math.random() to generate RGB values.
*	Use addEventListener() to handle clicks.
*	You can store the colors in an array.
*	Use document.querySelector() or document.getElementById() to manipulate elements.

### 📁 Project Structure:
rgb-color-game/  
│  
├── index.html        → Your main HTML file  
├── styles.css        → Styling for the game  
└── script.js         → All your JavaScript code

### 🧪 Bonus Challenge (Optional):
*	Add “Easy” and “Hard” modes that show 3 or 6 colors.
*	Animate the boxes when guessed correctly.

### 📦 Submission:
Push your complete project to GitHub and share the link to your repository.
Ensure your repository is public or shared properly.
Your repository should be named in the format: RGB-Game-YourName
