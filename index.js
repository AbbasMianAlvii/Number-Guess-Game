import inquirer from "inquirer";
const systemgeneratedNo = Math.floor(Math.random() * 10);
const answers = await inquirer.prompt([{
        type: "number",
        name: "userGuess",
        message: "Guess a Number between 1 to 10 and write it"
    }]);
// console.log(answers.userGuess)
const { userGuess } = answers;
console.log(`Guessed No: ${userGuess}, Correct Answer is: ${systemgeneratedNo}`);
if (userGuess === systemgeneratedNo) {
    console.log("Correct Answer! Congratulations You Win");
}
else {
    console.log("Wrong Answer! Better luck next time");
}
;
