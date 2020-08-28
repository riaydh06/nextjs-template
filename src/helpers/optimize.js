const { lstatSync, readdirSync } = require('fs');
const { resolve, join } = require('path');
const { exec } = require('child_process');

const assetsPath = resolve('src');
const isDirectory = (source) => lstatSync(source).isDirectory();
const getDirectories = (source) =>
  readdirSync(source)
    .map((name) => join(source, name))
    .filter(isDirectory);

getDirectories(assetsPath).map((name) => exec(`svgo -f ${name}`));
