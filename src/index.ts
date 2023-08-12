#!/usr/bin/env node

import opening from "./Scenes/opening";
import mainMenu from "./Scenes/mainMenu";

opening().then(() => {
    mainMenu();
});
