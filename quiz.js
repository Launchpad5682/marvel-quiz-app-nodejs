// It is like input() in python for taking inputs
let readlineSync = require('readline-sync');

let arr = {
  "What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe? ": "2005",
  "What is the name of Thor's hammer? ": "Mjolnir",
  "What is Captain America's shield made out of? ": "Vibranium",
  "Who is Peter Parker's best friend? ": "Ned Leeds",
  "What country are Scarlet Witch and Quicksilver from? ": "Sokovia",
  "Before becoming Vision, what is the name of Iron Man’s A.I. butler? ": "Jarvis",
  "What’s the name of the helpful AI Tony Stark invented to replace J.A.R.V.I.S.? ": "Friday",
  "Who does the Mad Titan sacrifice to acquire the Soul Stone? ": "Gamora",
};

let score = 0;
let num = 0;

console.log("Welcome to the Marvel's Quiz !!");
console.log("+1 for correct, -1 for wrong and 0 for unattempted");
console.log("press 0 and enter to skip the question");
let name = readlineSync.question("Enter your name: ")

function play(question, answer){

  let ans = readlineSync.question(question);

  if(ans === answer){
    console.log("You're right");
    score+=1;
    num+=1;
  }
  else if(ans === '0'){
    console.log("Question Skipped");
  }
  else{
    console.log("You're wrong");
    score-=1;
    num+=1;
  }

  console.log("Your score: " + score);
}

for(let k in arr){
  play(k,arr[k]);
}

console.log(`${name}, You scored ${score} and attempted ${num} questions.`);

let answers = readlineSync.question("Do you wanna all the right answers? (y/n) ");

if(answers === 'y'){
  for(let k in arr){
    console.log(k,arr[k]);
  }
}

console.log(`Thanks for taking quiz ${name}.`);
