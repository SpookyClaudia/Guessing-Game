// program thats a guessing game , the game will prompt a maximum number that user will input to start off the game, once user guesses the right target num, the game ends , if user submits q on the first try, it will quit the game.
// below i will explain what is happening 

let maximum = parseInt(prompt("Enter the maximum number!")); // i am using a let keyword, to make the variable maximum , not redeclared. I am making the prompt equal to a parseInt (a whole number=Interger), the prompt() method displays a dialog box that "prompts" a user to input something
while (!maximum) { // i am using a while loop here , The NOT operator (!) returns true for false statements and false for true statements: 
    maximum = parseInt(prompt("Please enter a valid number.")); // so if maxiumum result from prompt is NAN, make the prompt say "please enter a valid number" prevetning users from using letters.
}
// there is a bug where if we enter a number that is not whole number, like 4.5 , the code will eventually run 
// The value of a const can't be changed through reassignment and cant be redeclared
// However, if a constant is an object or array its properties or items can be updated or removed using template literals ${}
const targetNum = Math.floor(Math.random() * maximum) + 1; // we are making a new variable, targertNum = math.floor , which removes decimals from stuff, making it a whole number, math.random generates a random number, that we multiply by the maxiumum input from the user, adding 1 

let guess = prompt("Enter your first guess"); // we are making a new variable called guess that prompts a user to try their first guess
let attempts = 1; // were making a variable called attempts as it starts always with 1

while (parseInt(guess) !== targetNum) { // another while loop, this section will be if the user didnt win the first try, whole number of guess not equal to targetnum , then
    if (guess === 'q') break; // if the guess equals to q, it breaks (this returns false and skips thise code)
    attempts++; // The increment operator (++) increments (adds one to) its operand and returns a value, so we add one to the attempt
    if (guess > targetNum) { // if the guess is greater then targetNum
        guess = prompt("Too High! Enter a new guess:"); // a prompt will prompt the user that the input is higher then the target num
    } else if (guess < targetNum) { // we use else if to specify a new condition to test, if the first condition is false, so if the guess is lesser then target num
        guess = prompt("Too low! Enter a new guess:"); // guess will propmt the user that the number is to low
    } else { // We use else to specify a block of code to be executed, if the same condition is false 
        guess = prompt(`Your guess is ${guess}, which is not higher or lower, please guess a number value:`) // we use this to prompt the user not to enter random letters while doing the game, such as akdsfhalkjdhsalkkd, 
    }
}

if (guess === 'q') { // remember that q from earlier? that line of code skipped to here and when the user puts q anytime in the game(remember after the maxiumum attempt pop up) itll prompt OK, YOU QUIT!
    console.log("OK, YOU QUIT!")
} else {
    console.log("CONGRATS! YOU WIN!")
    console.log(`YOU GOT IT! It took you ${attempts} guesses.`)
} // this will prompt when a user finally wins, and will tell you X amount of the attempts you did