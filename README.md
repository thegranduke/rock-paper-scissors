# Rock Paper Scissors Game - README

Welcome to **Rock Paper Scissors**, a fun and interactive implementation of the classic hand game we all know and love! This project allows you to play against a computer opponent, with the first to 5 points emerging as the ultimate champion.

---

## Table of Contents

1. [Overview](https://www.notion.so/Job-description-13ffd8aef4bd8099ae7dd34e801f92a1?pvs=21)
2. [How to Play](https://www.notion.so/Job-description-13ffd8aef4bd8099ae7dd34e801f92a1?pvs=21)
3. [Features](https://www.notion.so/Job-description-13ffd8aef4bd8099ae7dd34e801f92a1?pvs=21)
4. [Installation and Setup](https://www.notion.so/Job-description-13ffd8aef4bd8099ae7dd34e801f92a1?pvs=21)
5. [Code Structure](https://www.notion.so/Job-description-13ffd8aef4bd8099ae7dd34e801f92a1?pvs=21)

---

## Overview

This project combines HTML, CSS, and JavaScript to bring the classic game of Rock Paper Scissors to life in your browser. The computer uses a random choice generator to pick its moves, and your task is to outsmart it! The game ends when either you or the computer reaches 5 points, crowning the winner.

---

## How to Play

1. Open the game in a web browser.
2. Click on one of the buttons (**Rock**, **Paper**, or **Scissors**) to make your choice.
3. The computer's choice is revealed alongside yours, and the winner of the round is displayed.
4. Keep playing until either you or the computer reaches 5 points.
5. Celebrate your victory (or plot your revenge if you lose)!

---

## Features

- **Interactive Gameplay**: Make your move and see instant feedback on who won the round.
- **Scorekeeping**: The game keeps track of both player and computer scores.
- **Dynamic Visuals**: Images update to reflect the choices made during each round.
- **Clear Victory Announcement**: The game announces the winner once 5 points are reached.
- **Responsive Design**: Designed to work seamlessly on desktops and mobile devices.

---

## Installation and Setup

### Prerequisites

- A modern web browser (e.g., Chrome, Firefox, Edge).
- Basic understanding of how to run HTML files.

### Steps to Run

1. Clone this repository to your local machine:
    
    ```bash
    git clone https://github.com/thegranduke/rock-paper-scissors.git
    ```
    
2. Open the `index.html` file in your web browser.
3. Enjoy the game!

---

## Code Structure

### JavaScript Logic

- **`possibleChoices`**: Array containing the choices: `"rock"`, `"paper"`, and `"scissors"`.
- **`getComputerChoice()`**: Randomly selects the computer's move.
- **`playRound(getComputerChoice, playerPick)`**: Determines the winner of a round and updates scores.
- **Event Listeners**: Attach click handlers to each button for user interaction.

### Key DOM Elements

- **Buttons**: Represent the player's move options (rock, paper, scissors).
- **Images**: Show both the player's and the computer's choices dynamically.
- **Messages**: Display round results and the overall winner.

### Game Flow

1. User clicks a button.
2. The computer randomly selects its move.
3. Scores are updated based on the outcome.
4. Victory is declared when a score reaches 5.
