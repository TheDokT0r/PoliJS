import chalk from "chalk";
import inquirer from "inquirer";
import difficulty from "../../Data/gameInfo/difficulty";
import country from "../../Data/gameInfo/county";
import world from "../../Data/gameInfo/world";

export default async () => {
    console.log(chalk.bgWhite(chalk.black((`Good day, president ${chalk.bgYellow(country.leaderName)}`))));
}