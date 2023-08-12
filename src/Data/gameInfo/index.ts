import chalk from "chalk";

const difficulty = {
    level = 0,
    setDifficulty: (newDifficulty: number) => {
        difficulty.level = newDifficulty;
    },
    name: {
        0: 'DEFCOM 5',
        1: 'DEFCOM 4',
        2: 'DEFCOM 3',
        3: 'DEFCOM 2',
        4: 'DEFCOM 1',
    },

    output: () => {
        switch (difficulty.level) {
            case 0:
                console.log(chalk.bgBlue(difficulty.name[0]));
                break;

            case 1:
                console.log(chalk.bgGreen(difficulty.name[1]));
                break;

            case 2:
                console.log(chalk.bgYellow(difficulty.name[2]));
                break;


            case 3:
                console.log(chalk.bgRed(difficulty.name[3]));
                break;

            case 4:
                console.log(chalk.bgRedBright(difficulty.name[4]));

            default:
                console.log('Unknown difficulty level');

                break;
        }
    }
}

export default difficulty;