#!/usr/bin/env node

import { program } from "commander";
import path, { dirname } from "path";
import fs from "fs";
import { execSync } from "child_process";
import inquirer from "inquirer";
import { fileURLToPath } from "url";
import {
  ESLINT_INSTALL_COMMAND,
  EXPRESS_INSTALL_COMMANDS,
  PRETTIER_INSTALL_COMMAND,
  TYPESCRIPT_INSTALL_COMMANDS,
  TYPES_INSTALL_COMMAND,
  getDefaultProjectJSON,
} from "./consts.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

program.option("--no-ts", "setup typescript");
program.option("--no-eslint", "setup eslint");
program.option("--no-prettier", "setup prettier");
const options = program.opts();

program.parse();

const prompt = inquirer.createPromptModule();
let dirName = process.argv[2];

if (!dirName) {
  prompt([
    {
      name: "project_name",
      type: "input",
      default: "express-ts",
      message: "Enter project name:",
    },
  ]).then((ans) => {
    console.log("Project name:", ans.project_name);
    dirName = ans.project_name;
    askPackageManager();
  });
} else {
  askPackageManager();
}

function askPackageManager() {
  prompt([
    {
      name: "package_manager",
      message: "Select package manager:",
      type: "list",
      choices: ["npm", "pnpm", "yarn"],
    },
  ]).then(({ package_manager }) => {
    console.log("Creating directory:");
    const projectDir = path.basename(__dirname);

    let baseCommand = "";
    if (dirName !== ".") {
      fs.mkdirSync(dirName);

      baseCommand = `cd ${dirName} && `;
    }

    const projectJSON = getDefaultProjectJSON(dirName === "." ? projectDir : dirName);

    console.log("initializing project...");
    fs.cpSync(path.resolve(__dirname, "src/template"), dirName, {
      recursive: true,
    });
    fs.copyFileSync(path.resolve(__dirname, "src/.gitignore"), dirName + "/.gitignore");

    console.log("Generating package.json...");
    fs.writeFileSync(dirName + "/package.json", JSON.stringify(projectJSON, null, 2));

    console.log("Installing expressJS...");
    execSync(baseCommand + EXPRESS_INSTALL_COMMANDS[package_manager]);

    if (!options["no-ts"]) {
      console.log("Installing TypeScript...");
      execSync(baseCommand + TYPESCRIPT_INSTALL_COMMANDS[package_manager]);
      execSync(baseCommand + TYPES_INSTALL_COMMAND[package_manager]);
      fs.copyFileSync(path.resolve(__dirname, "src/tsconfig.json"), dirName + "/tsconfig.json");
    }

    if (!options["no-eslint"]) {
      console.log("Installing ESLint...");
      execSync(baseCommand + ESLINT_INSTALL_COMMAND[package_manager]);
      fs.copyFileSync(path.resolve(__dirname, "src/.eslintrc.cjs"), dirName + "/.eslintrc.cjs");
    }

    if (!options["no-prettier"]) {
      console.log("Installing prettier...");
      execSync(baseCommand + PRETTIER_INSTALL_COMMAND[package_manager]);
      fs.copyFileSync(path.resolve(__dirname, "src/.prettierrc"), dirName + "/.prettierrc");
    }
  });
}
