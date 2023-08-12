import chalk from "chalk";


/**
 * The difficulty level of the game``
 */
const difficulty = {
    options: ['DEFCOM 5', 'DEFCOM 4', 'DEFCOM 3', 'DEFCOM 2', 'DEFCOM 1'],
    level: 0,
    /**
     * Sets the difficulty level
     * @param {number} newDifficulty 
     */
    setDifficulty: (newDifficulty: number) => { difficulty.level = newDifficulty; },

    getName: () => {
        return difficulty.options[difficulty.level];
    },

    display: () => {
        switch (difficulty.level) {
            case 0:
                console.log(chalk.bgBlue(difficulty.getName()));
                break;

            case 1:
                console.log(chalk.bgGreen(difficulty.getName()));
                break;

            case 2:
                console.log(chalk.bgYellow(difficulty.getName()));
                break;


            case 3:
                console.log(chalk.bgRed(difficulty.getName()));
                break;

            case 4:
                console.log(chalk.bgRedBright(difficulty.getName()));
                break;

            default:
                console.log('Unknown difficulty level');
                break;
        }
    },
}

export default difficulty;