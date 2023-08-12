
import chalk from "chalk";
import inquirer from 'inquirer';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));


export default () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            default: 'Mr. President',
        },
        {
            type: 'input',
            name: 'country',
            message: 'What is your country?',
            default: "Narnia"
        },
        {
            type: 'list',
            name: 'difficulty',
            message: 'What is your difficulty?',
            choices: ['Easy', 'Medium', 'Hard'],
            default: 'Medium'
        }
    ]).then(answers => {
        console.log(chalk.green(`Hello ${answers.name}!`));
        console.log(chalk.green(`Welcome to ${answers.country}!`));
        console.log(chalk.green(`You have chosen ${answers.difficulty} difficulty!`));
        console.log(chalk.green(`Let's get started!`));
    });
}