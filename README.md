# 🎯 Number Guessing Game

A simple and interactive **Number Guessing Game** built using HTML and JavaScript.

The player has to guess a randomly generated number between **1 and 100**. The player gets a maximum of **10 attempts** to guess the correct number, with hints provided after each incorrect guess.

## 📌 About the Project

The **Number Guessing Game** is a beginner-friendly JavaScript project created to practice **DOM manipulation, event handling, form handling, input validation, functions, conditional statements, arrays, and random number generation**.

The game generates a random number between 1 and 100. The user enters a guess, and the game provides feedback indicating whether the guessed number is **too high** or **too low**.

If the player guesses the correct number, the game ends successfully. If all 10 attempts are used, the game ends and reveals the random number.

A **Start New Game** option is provided after the game ends so the player can play again without refreshing the webpage.

## ✨ Features

* 🎲 Generates a random number between 1 and 100
* 🎯 Allows the user to guess the number
* 🔢 Maximum of 10 attempts per game
* ✅ Validates user input
* 🚫 Prevents invalid values
* ⚠️ Displays an alert for invalid input
* 📈 Shows whether the guess is too high or too low
* 📝 Displays previous guesses
* 🔢 Displays remaining attempts
* 🏆 Displays a success message when the correct number is guessed
* 💀 Reveals the random number when the game is over
* 🔄 Includes a **Start New Game** option
* ⚡ Updates the game dynamically without refreshing the page

## 🛠️ Technologies Used

* **HTML5** – For creating the structure of the game and form
* **JavaScript** – For game logic, input validation, random number generation, event handling, and DOM manipulation

## 🚀 How to Run the Project

### 1. Clone the repository

```bash
git clone YOUR-GITHUB-REPOSITORY-LINK
```

### 2. Open the project folder

```bash
cd Number-Guessing-Game
```

### 3. Open the project

Open `index.html` in your web browser.

### 4. Start playing

1. Enter a number between **1 and 100**.
2. Click **Submit Guess**.
3. Check the feedback.
4. Continue guessing until you find the correct number or use all 10 attempts.
5. Click **Start New Game** to play again.

## 📂 Project Structure

```text
Number-Guessing-Game/
│
├── images/
│   ├── Screenshot - 1.png
│   └── Screenshot - 2.png
│
├── guessTheNumber.js
├── index.html
├── style.css
└── README.md
```

## 🎮 How the Game Works

1. JavaScript generates a random number between **1 and 100**.
2. The user enters a guess.
3. JavaScript reads the entered value from the input field.
4. The input is validated to ensure it is a valid number between 1 and 100.
5. The guess is added to the list of previous guesses.
6. The number of remaining attempts is updated.
7. The game checks the guess against the randomly generated number.
8. If the guess is:

   * **Lower** than the random number → a "Too Low" message is displayed.
   * **Higher** than the random number → a "Too High" message is displayed.
   * **Equal** to the random number → the player wins.
9. After 10 unsuccessful attempts, the game ends and reveals the random number.
10. The player can start a new game using **Start New Game**.

## 🧠 JavaScript Concepts Used

This project helped me practice:

* `Math.random()`
* `parseInt()`
* `isNaN()`
* `querySelector()`
* `addEventListener()`
* `preventDefault()`
* DOM manipulation
* `createElement()`
* `setAttribute()`
* `removeAttribute()`
* `appendChild()`
* `removeChild()`
* `innerHTML`
* Arrays
* Variables and reassignment
* Functions
* Function parameters
* Conditional statements
* Template literals
* Form handling
* Input validation
* Event handling

## 🎓 Learning Outcomes

Through this project, I learned how to:

* Generate random numbers using JavaScript
* Handle form submissions using event listeners
* Prevent the default form submission behavior
* Read and validate user input
* Use functions to organize JavaScript code
* Use arrays to store previous guesses
* Dynamically update HTML elements using the DOM
* Create and insert new HTML elements using JavaScript
* Enable and disable input fields
* Track the number of attempts
* Implement game logic using conditional statements
* Reset the game state without refreshing the webpage

## 📸 Screenshots

### Default View

![Number Guessing Game](images/Screenshot%20-%201.png)

### Game Result

![Number Guessing Game Result](images/Screenshot%20-%202.png)

## 🔮 Future Improvements

Some possible improvements for this project are:

* 🏆 Add a score system
* 📊 Track the best score
* ⏱️ Add a timer
* 🎚️ Add different difficulty levels
* 🔊 Add sound effects
* ✨ Add animations
* 💾 Store game history
* 🌓 Add a dark/light mode
* 📱 Further improve mobile experience

## 📌 Project Status

### 🟢 Completed

This project was created as part of my practice with **HTML and JavaScript**.

## 👨‍💻 Author

**Aman Arya**

If you like this project, feel free to ⭐ the repository!
