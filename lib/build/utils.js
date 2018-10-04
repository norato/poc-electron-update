const pkg = require('../../package.json');

module.exports = {
  pkg: pkg,
  startLog: os => console.log(`Creating ${os} package (this may take a while)`),
  sucessLog: dest => console.log(`Successfully created package at ${dest}`),
  errorLog: (error, stack) => console.error(`No dice: ${error}, ${stack} `),
  product: {
    src: arch => `dist/app-bundle/poc-electron-update-${arch}`,
    dest: arch => `dist/installers/${arch}`
  }
};
