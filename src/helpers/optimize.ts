const { lstatSync, readdirSync } = require('fs');
const { resolve, join } = require('path');
const { exec } = require('child_process');

const assetsPath = resolve('src');
const isDirectory = (source: any) => lstatSync(source).isDirectory();
const getDirectories = (source: any) =>
  readdirSync(source)
    .map((name: any) => join(source, name))
    .filter(isDirectory);

getDirectories(assetsPath).map((name: any) => exec(`svgo -f ${name}`));
