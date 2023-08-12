#!/usr/bin/env node

import opening from "./scenes/opening";
import mainMenu from "./scenes/mainMenu";

opening().then(() => {
    mainMenu();
});