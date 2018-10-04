const installer = require('electron-installer-redhat');
const { pkg, startLog, sucessLog, errorLog, product } = require('./utils');

const options = {
  src: product.src('linux-x64'),
  name: pkg.name,
  dest: product.dest('rpm64/'),
  arch: 'amd64',
  license: pkg.license,
  requires: ['lsb', 'libXScrnSaver'],
  productName: pkg.name,
  bin: pkg.name
};

startLog('rmp64');

installer(options, err => {
  if (err) {
    errorLog(err, err.stack);
    process.exit(1);
  }
  sucessLog(options.dest);
});
