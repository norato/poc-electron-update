var createDMG = require('electron-installer-dmg');
const { pkg, startLog, sucessLog, errorLog, product } = require('./utils');

var options = {
  appPath: product.src('darwin-x64'),
  name: pkg.name,
  out: product.dest('darwin-x64'),
  overwrite: true
};

startLog('OS X');

createDMG(options, err => {
  if (err) {
    errorLog(err, err.stack);
    process.exit(1);
  }

  sucessLog(options.out);
});
