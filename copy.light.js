//@ts-check
const { copyFileSync } = require('fs');
const { join } = require('path');


const projectOnePath = join(process.cwd(), 'project-one', 'build', 'dev', 'project_one_light.js');
const projectTwoPath = join(process.cwd(), 'project-two', 'build', 'dev', 'project_two_light.js');

const destinationProjectOne = join('bundle', 'project_one_light.js');
const destinationProjectTwo = join('bundle', 'project_two_light.js');

function copyFile(source, destination) {
    copyFileSync(source, destination);
}

copyFileSync(projectOnePath, destinationProjectOne);
copyFileSync(projectTwoPath, destinationProjectTwo);