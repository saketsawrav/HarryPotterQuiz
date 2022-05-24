/** Harry Potter Quiz **/
var readLineSync = require('readline-sync')

/** Initialise empty score **/
var score = 0

// Ask User their name
var userName = readLineSync.question("Please enter your name: ")

// Great User and Welcome them
console.log("Hi! " + userName + " Welcome to the Harry Potter Quiz brought to you by Saket, Let's see how well you know about the fourth installment of the Harry Potter Series ")

// Create a DB of questions

var questions = [{question: "What is the name of the Fourth Book?",
                 answer: "Goblet Of Fire"},
                 {question: "What was the name of Barty Crouch's house-elf?",
                 answer: "Winky"},
                 {question: "What creature did Barty Crouch Jr, posing as Professor Moody, turn Draco Malfoy into? ",
                answer: "Ferret"},
                 {question: "What was the name of the Riddle family's gardener who was murdered? ",
                 answer: "Frank Bryce"},
                 {question: "Which of these was not a player on the Bulgarian Quidditch team? ",
                answer: "Borisova"},
                 {question: "What did Hermione discover Rita Skeeter's unregistered Animagus form was? ",
                 answer: "Beetle"},
                 {question: "When did Viktor Krum ask Hermione if she would like to visit him in the summer?",
                 answer: "Second task"},
                 {question: "What Color robes did Ludo Bagman wear to the Yule Ball? ",
                 answer: "Purple"},
                 {question: "What was the answer to the Sphinx's riddle that Harry had to answer in the third task?",
                  answer: "Spider"},
                 {question: "How much were Fred and George selling their Canary Creams for?",
                 answer: "Seven Sickles"}]

// Create function quiz
function quiz(question, answer) {
  var userAnswer = readLineSync.question(question)

  if (userAnswer.toLocaleLowerCase() == answer.toLocaleLowerCase()) {
    score = score + 1
    console.log("Your answer: " + userAnswer + " was Correct, you get a point")
    console.log("Your current score is: " + score)
    console.log("---------------------------------------------------------------")
  } else {
    console.log("Your answer: " + userAnswer + " is wrong, the correct answer was: " + answer)
    console.log("Your current score is: " + score)
    console.log("---------------------------------------------------------------")
  }
}

// Create Main Game function
function game() {
  for(i=0; i<questions.length; i++) {
    currentQuestion = questions[i]
    quiz(currentQuestion.question, currentQuestion.answer)
  }
}

// Create a DB of High Score Holder's
var highScores = [{name: "Saket",
                  score: 6},
                  {name: "Ddraig",
                  score: 5},
                  {name: "Castiel",
                  score: 4}]

// Create a function to show the User Scores at the end of the game and also show current High score board, also ask user to send their score's if they scored higher.
function showUserScore () {
  if (score > 4) {
    console.log("Congratulations!!! You scored: " + score)
    console.log("These are the current High Score LeaderBoard")
    console.log("-------------------------------------------------------")
    highScores.map(score => console.log(score.name, " : ", score.score))
    console.log("Send the screenshot of your score if you scored higher, i'll update it acordingly.")
  } else {
    console.log("You scored a so-so score which is: " + score + "Try harder next time. ")
    console.log("These are the current High Score LeaderBoard")
    console.log("-------------------------------------------------------")
    highScores.map(score => console.log(score.name, " : ", score.score))
  }
}

game()
showUserScore()