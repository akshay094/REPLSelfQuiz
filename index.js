const readLineSync = require('readline-sync');
const chalk = require('chalk');
let score = 0;
const userName = readLineSync.question(chalk.red("Please enter your name\n"));

console.log(chalk.green(("\nWelcome "+userName).toUpperCase()));

console.log(chalk.red("\nLet's see how well do you know me?"));

const quiz = [
  {
    question:"When's my birthday?",
    answer:"7 Nov",
    options:['36 Mar' , '7 Nov', '8 Nov' , '31 Feb']
  },
  {
    question:"What's my favourite programming langauge?",
    answer:"I don't have a favourite",
    options:['Java' , 'Go', 'Js' , 'I don\'t have a favourite']
  },
  {
    question:"What's my profession?",
    answer:"Web Developer",
    options:['Kaamchor' , 'Web Developer', 'Self-employed' , 'Sarkari']

  },
  {
    question:"Where do I live?",
    answer:"Indore",
    options:['Mars','Moon','Indore','none']
  },
  {
    question:"Which one was my first bike?",
    answer:"Honda Hornet 160R",
    options:['you don\'t care','Honda Hornet 160R','Hero somename','luna']
  },
  {
    question:"What is my mental age?",
    answer:"2 Years",
    options:['2 Years','45 Years','13 Years','late 80\'s']
  },
  {
    question:"Which is my favourite band?",
    answer:"Tool",
    options:['Metallica','Iron Maiden','Tool','Nirvana']
  }
]

quiz.map((ele , index)=>{
  let response = readLineSync.keyInSelect(ele.options,chalk.blue.bold(`${ele.question}`))
  if(ele.options[response] == ele.answer){
    console.log(chalk.magentaBright("Right Answer\n"+"score : " +(++score)))
  }else{
    console.log(chalk.yellowBright("Dude , I thought we were friends.\n"+"score : " +--score))
  }
})

console.log(chalk.bgCyanBright.black("\n Your total score is : "+score));