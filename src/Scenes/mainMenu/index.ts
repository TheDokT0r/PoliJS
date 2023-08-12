import chalk from "chalk";
import inquirer from "inquirer";
import difficulty from "../../gameInfo/difficulty";
import country from "../../gameInfo/county";
import world from "../../gameInfo/world";

export default async () => {
    console.log(chalk.bgWhite(chalk.black((`Good day, president ${chalk.bgYellow(country.leaderName)}`))));
}