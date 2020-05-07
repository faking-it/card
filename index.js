#!/usr/bin/env node

const boxen = require("boxen");
const chalk = require("chalk");

//Text data
const data = {
  name: "                              Bruno Michel",
  handle: "faking-it     ",
  work: " Junior developer at " + chalk.bold("BeCode.org"),
  facebook: " https://www.facebook.com/" + chalk.red("bruno.michel.10"),
  instagram: " https://www.instagram.com/" + chalk.red("brugiusan"),
  npm: " https://www.npmjs.com/" + chalk.red("~faking-it"),
  github: " https://github.com/" + chalk.red("faking-it"),
  linkedin: " https://www.linkedin.com/in/" + chalk.red("bruno-michel"),

  labelWork: "      Work:",
  labelFacebook: "  Facebook:",
  labelInstagram: " Instagram:",
  labelNpm: "       npm:",
  labelGitHub: "    GitHub:",
  labelLinkedIn: "  LinkedIn:"
};

const newline = "\n";
const emptyline = "";

//Body
console.log(
  boxen(
    [
      data.name + " / " + chalk.red(data.handle),
      emptyline,
      chalk.bold(data.labelWork) + data.work,
      emptyline,
      chalk.bold(data.labelFacebook) + data.facebook,
      chalk.bold(data.labelInstagram) + data.instagram,
      chalk.bold(data.labelNpm) + data.npm,
      chalk.bold(data.labelGitHub) + data.github,
      chalk.bold(data.labelLinkedIn) + data.linkedin
    ].join(newline),

    {
      borderStyle: "round",
      padding: 1
    }
  )
);
