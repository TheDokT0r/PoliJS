import chalk from "chalk";
import inquirer from "inquirer";
import country from "../../gameInfo/county";
import menus from "../menus";


interface Actions {
    [key: string]: Function;
}

const { information, diplomacy, military, economy, science, settings, save, exit } = menus;

const actions: Actions = {
    Information: information,
    Diplomacy: diplomacy,
    Military: military,
    Economy: economy,
    Science: science,
    Settings: settings,
    Save: save,
    Exit: exit,
}


export default async () => {
    console.log(chalk.bgWhite(chalk.black((`Good day, president ${chalk.bgYellow(country.leaderName)}`))));

    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What do you want to do?',
            choices: [
                'Information',
                'Diplomacy',
                'Military',
                'Economy',
                'Science',
                'Settings',
                'Save',
                'Exit'
            ],
            default: 'Information'
        }
    ]);

    actions[answers.action]();
}