const fs = require('fs');
const path = './version.json';

const data = JSON.parse(fs.readFileSync(path));
let { patch } = data;

//patch += 1; // Bump patch version
data.patch = patch;

fs.writeFileSync(path, JSON.stringify(data, null, 2));
console.log(`Build version bumped to ${data.build}`);