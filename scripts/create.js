#!/bin/sh

const fs = require('fs').promises;
const path = require('path');

main();

async function main() {
  const recipe = process.argv[2];
  const recipePath = process.argv[3];

  if (recipe === 'component') {
    await createComponent({ recipePath });
  } else {
    throw new Error(`Recipe does not exists: ${recipe}`);
  }
}

/**
 * @param {{ recipePath: string }}
 */
async function createComponent({ recipePath }) {
  const folders = recipePath.split('/');
  const name = folders[folders.length - 1];
  const templateFolderPath = path.resolve(__dirname, 'component');
  const fileNames = await fs.readdir(templateFolderPath);
  const files = fileNames.map(fileName => {
    /** @type {(context: Readonly<any>) => string} */
    const template = require(path.resolve(templateFolderPath, fileName));
    const content = template({ name });
    return {
      name: fileName.replace(/\(name\)/g, name).replace(/\.js$/, ''),
      content,
    };
  });
  const componentFolder = path.resolve(__dirname, '..', 'src', 'components', ...folders);
  await fs.mkdir(componentFolder, { recursive: true });
  await Promise.all(
    files.map(async file => {
      const filePath = path.resolve(componentFolder, file.name);
      await fs.writeFile(filePath, file.content);
    }),
  );
}
