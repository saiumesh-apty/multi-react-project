//@ts-check
const { copyFileSync } = require('fs');
const { join } = require('path');


const projectOnePath = join(process.cwd(), 'project-one', 'build', 'dev', 'project_one.js');
const projectTwoPath = join(process.cwd(), 'project-two', 'build', 'dev', 'project_two.js');

const destinationProjectOne = join('bundle', 'project_one.js');
const destinationProjectTwo = join('bundle', 'project_two.js');

function copyFile(source, destination) {
    copyFileSync(source, destination);
}

copyFileSync(projectOnePath, destinationProjectOne);
copyFileSync(projectTwoPath, destinationProjectTwo);