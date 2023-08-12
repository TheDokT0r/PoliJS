
import chalk from "chalk";
import inquirer from 'inquirer';
import { createSpinner } from 'nanospinner';
import difficulty from "../../gameInfo/difficulty";
import country from "../../gameInfo/county";

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));


export default async () => {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            default: 'James Bond',
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
            choices: difficulty.options,
            default: 'DEFCOM 3'
        }
    ])
    console.log(chalk.bgYellow(chalk.black('Chosen settings:')));

    console.log(`Name: ${chalk.bgGreen(answers.name)}`);
    console.log(`Country: ${chalk.bgGreen(answers.country)}`);
    console.log(`Difficulty: ${chalk.bgGreen(answers.difficulty)}`);

    const isThatCorrect = await inquirer.prompt([
        {
            type: 'confirm',
            name: 'isThatCorrect',
            message: 'Is that correct?',
            default: true
        }
    ]);

    if (!isThatCorrect.isThatCorrect) {
        console.clear();
        await module.exports();
        return;
    }


    const spinner = createSpinner('Settings things up...').start();

    difficulty.level = difficulty.options.indexOf(answers.difficulty);
    country.name = answers.country;
    country.leaderName = answers.name;

    spinner.success();
}