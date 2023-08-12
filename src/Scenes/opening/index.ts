
import chalk from "chalk";
import inquirer from 'inquirer';
import { indexOf } from 'lodash';
import difficulty from "../../Data/gameInfo";

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
            choices: ['DEFCOM 5', 'DEFCOM 4', 'DEFCOM 3', 'DEFCOM 2', 'DEFCOM 1',],
            default: 'DEFCOM 3'
        }
    ]).then(answers => {
        difficulty.setDifficulty(indexOf(answers.difficulty.choices, answers.difficulty.answers));

        console.log(chalk.green(`Hello ${answers.name}!`));
        console.log(chalk.green(`Welcome to ${answers.country}!`));
        console.log(chalk.green(`You have chosen ${difficulty.output()} difficulty!`));
        console.log(chalk.green(`Let's get started!`));
    });
}