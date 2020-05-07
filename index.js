#!/usr/bin/env node

//Texte
const data = {
    name: "                                  Bruno Michel",
    handle: "faking-it",
    work: "Junior developer at BeCode.org",
    facebook: "https://www.facebook.com/bruno.michel.10/",
    instagram: "https://www.instagram.com/brugiusan/",
    npm: "https://www.npmjs.com/~faking-it",
    github: "https://github.com/faking-it",
    linkedin: "https://www.linkedin.com/in/bruno-michel/",

    labelWork: "            Work:",
    labelFacebook: "        Facebook:",
    labelInstagram: "       Instagram:",
    labelNpm: "             npm:",
    labelGitHub: "          GitHub:",
    labelLinkedIn: "        LinkedIn:",
};

const newline = "\n";
const emptyline = "";

console.log(

    [
        data.name + " / " + data.handle,
        emptyline,
        data.labelWork + data.work,
        emptyline,
        data.labelFacebook + data.facebook,
        data.labelInstagram + data.instagram,
        data.labelNpm + data.npm,
        data.labelGitHub + data.github,
        data.labelLinkedIn + data.linkedin,
    ].join(newline),

);